# GitHub Copilot Instructions

## Project Overview
This is a PEP (Personal Enhancement Program) Memory Map tool - a specialized mind mapping application built on jsMind that transforms visual brainstorming into structured action plans. The core file is `pilot-mindmap.html` - a single-page application with embedded CSS/JS.

## Architecture & Data Flow

### Core Components
- **jsMind Library**: Vendored locally in `jsmind/` directory (NOT npm package)
- **Extended Data Model**: Each node has `sequence`, `invested_time`, `elapsed_time`, `start_date`, `selected` properties
- **Sequence System**: Automatic hierarchical numbering (1, 1.1, 1.2.1) based on child array order
- **Action Plan Export**: Table view with CSV export capability for task management

### Key Technical Patterns
- **Global jm variable**: Main jsMind instance reference throughout the codebase
- **Function naming**: Use descriptive names like `updateAllSequenceNumbers()`, `updateChildrenSequences()`
- **Sequence updates**: Always call `updateAllSequenceNumbers()` after structural changes
- **Data persistence**: JSON export/import with metadata and timestamps

## Development Workflows

### Local Development
```bash
cd jsmind-poc
python3 -m http.server 8000
# Access: http://localhost:8000/pilot-mindmap.html
```

### Key Files to Understand
- `pilot-mindmap.html` - Main application (3700+ lines, single file architecture)
- `docs/🧭 Product Vision Statement.md` - Product context and goals
- `docs/Pilot Features and User Stories.md` - Feature specifications and status
- `jsmind/` - Local jsMind library (DO NOT update without testing)

## Project-Specific Conventions

### Node Data Structure
```javascript
node.data = {
    sequence: '1.2.1',        // Hierarchical numbering
    invested_time: 30,        // Minutes planned
    elapsed_time: 45,         // Minutes actually spent  
    start_date: '2025-01-15', // ISO date string
    selected: true            // For CSV export selection
}
```

### Keyboard Shortcuts (FreeMind-style)
- `Enter`: Create sibling node (only when NOT editing)
- `Tab`: Create child node
- `F2`: Edit node text
- `Delete`: Remove node
- `Esc`: Cancel editing

### Sequence Number System
- Root node: empty sequence
- First level: 1, 2, 3...
- Nested: 1.1, 1.2, 2.1, 2.1.1...
- Updates automatically on structure changes using `updateAllSequenceNumbers()`

## Security & Deployment
- **CSP Policy**: Strict Content Security Policy in meta tag
- **Local Dependencies**: All assets served from same origin (no CDNs)
- **GitHub Pages Ready**: Static files only, deploys directly from repository
- **File Upload Limits**: 5MB max, JSON validation, 1s cooldown

## Critical Integration Points
- **jsMind API**: Use `jm.get_data('node_array')` for export, `jm.show(mind)` for import
- **Event Handlers**: Node selection triggers metadata panel updates
- **Action Plan Sync**: Table updates automatically when sequences change
- **Data Validation**: Always validate JSON structure before importing

## Testing & Debugging
- Browser console shows detailed sequence update logs
- Use `getCurrentMapState()` to inspect mind map data
- Sequence system has error handling with user alerts
- File operations include validation and user feedback

## Documentation Patterns
- Feature docs in `docs/Implementation/` with user stories and technical details
- Status tracking with ✅ **DONE** markers in markdown files
- Vision documents explain the "why" behind technical decisions