const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  try {
    // Launch headless browser with retry/fallbacks for environments where the new headless
    // or chromium binary may be unstable. We try a few strategies and bail with clear logs.
    let browser = null;
    const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
    const launchAttempts = [];
    if (fs.existsSync(chromePath)) {
      launchAttempts.push({ headless: false, executablePath: chromePath, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    }
    // Fallbacks
    launchAttempts.push(
      { headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] },
      { headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] },
      { headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'] }
    );

    for (let i = 0; i < launchAttempts.length; i++) {
      const opts = launchAttempts[i];
      try {
        console.log('Attempting puppeteer.launch with options:', opts);
        browser = await puppeteer.launch(opts);
        break;
      } catch (err) {
        console.warn('puppeteer.launch attempt', i, 'failed:', err.message || err);
      }
    }

    if (!browser) {
      throw new Error('Unable to launch Puppeteer with any fallback options');
    }

    const page = await browser.newPage();
    page.setDefaultTimeout(45000);

    // Capture console messages and page errors for diagnosis
    const logs = [];
    page.on('console', msg => {
      try {
        const text = msg.text();
        logs.push({ type: 'console', text });
        console.log('[PAGE console]', text);
      } catch (e) {
        console.log('[PAGE console] (error reading message)');
      }
    });
    page.on('pageerror', err => {
      logs.push({ type: 'pageerror', text: err.message });
      console.error('[PAGE error]', err.message);
    });
    page.on('error', err => {
      logs.push({ type: 'error', text: err.message });
      console.error('[PAGE error (fatal)]', err.message);
    });
    page.on('crash', () => {
      logs.push({ type: 'crash', text: 'Page crashed' });
      console.error('[PAGE crash]');
    });

    // Use the local static server to avoid file:// restrictions. Ensure you've started:
    // python3 -m http.server 8000 (from project root)
    const url = 'http://localhost:8000/pilot-mindmap.html';
    console.log('Loading', url);

    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    } catch (err) {
      console.warn('page.goto failed first attempt, retrying after 1s:', err.message || err);
      await page.waitForTimeout(1000);
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    }

    // Save raw page content and a screenshot immediately after navigation for diagnosis
    try {
      const rawHtml = await page.content();
      fs.writeFileSync(path.resolve(__dirname, 'page-content.html'), rawHtml);
      await page.screenshot({ path: path.resolve(__dirname, 'page-screenshot.png'), fullPage: true });
      fs.writeFileSync(path.resolve(__dirname, 'page-console-debug.json'), JSON.stringify(logs, null, 2));
      console.log('Saved page-content.html, page-screenshot.png and page-console-debug.json for inspection');
    } catch (e) {
      console.warn('Could not save page content/screenshot:', e.message || e);
    }

    // Wait for jsMind container and table to be ready
    await page.waitForSelector('#jsmind_container');
    await page.waitForSelector('#action-plan-table');

    // Helper to count table rows (excluding header/footer)
    const countRows = async () => {
      return await page.evaluate(() => {
        const tbody = document.getElementById('action-plan-tbody');
        if (!tbody) return 0;
        return tbody.querySelectorAll('tr').length;
      });
    };

    // Wait for table to be ready
    await page.waitForTimeout(500);
    let rowsBefore = await countRows();
    console.log('Rows before any creation:', rowsBefore);

    // Focus the description input for the Main Node (root)
    await page.evaluate(() => {
      const row = document.querySelector('tr[data-node-id="root"]');
      if (row) {
        const input = row.querySelector('input[data-field="description"]');
        if (input) input.focus();
      }
    });
    await page.waitForTimeout(200);

    // Type 'Project X' into the description input
    await page.keyboard.type('Project X', { delay: 100 });
    await page.waitForTimeout(500);

    // Check if the input still has focus and value is correct
    const inputState = await page.evaluate(() => {
      const row = document.querySelector('tr[data-node-id="root"]');
      if (row) {
        const input = row.querySelector('input[data-field="description"]');
        return {
          value: input ? input.value : null,
          hasFocus: input === document.activeElement
        };
      }
      return { value: null, hasFocus: false };
    });
    console.log('Description input state after typing:', inputState);

    // Save table HTML for diagnosis
    const tableHtml = await page.evaluate(() => document.getElementById('action-plan-tbody').innerHTML);
    fs.writeFileSync(path.resolve(__dirname, 'table-debug.html'), tableHtml);
    console.log('Wrote table-debug.html for inspection');

    await browser.close();
    process.exit(0);
  } catch (err) {
    console.error('Test failed:', err);
    process.exit(2);
  }
})();
