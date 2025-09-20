# PEP Memory Map - Proof of Concept

A customizable mind mapping tool based on jsMind with FreeMind-like keyboard shortcuts, designed for the PEP (Personal Enhancement Program) Memory Map project.

## 🚀 Features

- **FreeMind-like keyboard shortcuts** for familiar navigation
- **Clean, focused interface** stripped of unnecessary features
- **Extended data model** to support custom attributes (sequence, invested_time, elapsed_time)
- **Real-time editing** with proper Enter key handling
- **Drag and drop** node repositioning
- **Data persistence** (save/load mind maps as JSON files)
- **Export capabilities** (ready for CSV implementation)

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Enter` | Create sibling node (only when not editing) |
| `Tab` | Create child node |
| `F2` | Edit selected node |
| `Delete` | Remove selected node |
| `Esc` | Cancel editing |

## 🎯 Getting Started

1. **Start local server:**

   ```bash
   cd jsmind-poc
   python3 -m http.server 8000
   ```

2. **Access the applications:**
   - **Pilot Version**: <http://localhost:8000/pilot-mindmap.html>

## 📁 Project Structure

```
jsmind-poc/
├── pilot-mindmap.html      # Main app
├── jsmind/                 # jsMind library (vendored locally)
├── docs/                   # Project documentation
└── README.md
```

## ✅ Completed Tasks

- **Task 1.1**: ✅ Fork jsMind repo and set up local dev environment
- **Task 1.2**: ✅ Clean UI for pilot - preserve only core mind mapping
- **Bug Fix**: ✅ Fixed Enter key creating nodes while editing text
- **Feature 4**: ✅ Data Persistence - Save/load mind maps as JSON files
- **Security**: ✅ Added CSP header and secured file loading

## 🎨 Extended Data Model

Each node supports the following custom attributes:

- `sequence`: Ordering/priority number
- `invested_time`: Time spent on this topic
- `elapsed_time`: Total time elapsed
- `start_date`: ISO date string
- `selected`: Selection state for exports

## 🔒 Security Hardening for Public Hosting

- Content Security Policy (CSP) via meta tag restricts resources to `self`, blocks object embedding, and disallows external connections.
- File upload hardened with:
  - 5MB size limit
  - 1s cooldown between loads
  - File type validation for `.json`
- All dependencies are served locally (no external CDNs).

These make the app safe to host on a public site or GitHub Pages.

## 🌐 Deploying to GitHub Pages

Project uses only static files, so Pages can serve directly from the repo:

1. Push this repository to GitHub.
2. In GitHub: Settings → Pages → Build and deployment
   - Source: Deploy from a branch
   - Branch: `jsmind-poc` (or your default) / folder: `/ (root)`
3. Open: `https://<your-username>.github.io/<repo-name>/pilot-mindmap.html`

Optional: create an `index.html` that redirects to `pilot-mindmap.html` for a cleaner URL.

## 🏗️ Based On

This project is built on [jsMind](https://github.com/hizzgdev/jsmind) - a pure JavaScript mind mapping library.

## 📄 License

This project maintains the BSD-3-Clause license from the original jsMind library.
