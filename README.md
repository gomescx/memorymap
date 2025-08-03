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
   - **Pilot Version**: http://localhost:8000/pilot-mindmap.html
   - **Test Version**: http://localhost:8000/test-mindmap.html

## 📁 Project Structure

```
jsmind-poc/
├── pilot-mindmap.html      # Clean production interface
├── test-mindmap.html       # Debug version with status info
├── jsmind/                 # jsMind library (forked from hizzgdev/jsmind)
├── docs/                   # Project documentation
└── tasks.md               # Development tasks and progress
```

## ✅ Completed Tasks

- **Task 1.1**: ✅ Fork jsMind repo and set up local dev environment
- **Task 1.2**: ✅ Clean UI for pilot - preserve only core mind mapping
- **Bug Fix**: ✅ Fixed Enter key creating nodes while editing text
- **Feature 4**: ✅ Data Persistence - Save/load mind maps as JSON files

## 🎨 Extended Data Model

Each node supports the following custom attributes:
- `sequence`: Ordering/priority number
- `invested_time`: Time spent on this topic
- `elapsed_time`: Total time elapsed

## 🔧 Development

The project uses the jsMind library with custom enhancements:

### Building ES6 Files
```bash
cd jsmind
npm install
npm run build
```

### Testing
Open the test version to see debug information and verify functionality.

## 📋 Next Steps

- Implement CSV export with custom format
- Add UI for editing custom node attributes
- Enhanced node styling and themes
- Data persistence and loading

## 🏗️ Based On

This project is built on [jsMind](https://github.com/hizzgdev/jsmind) - a pure JavaScript mind mapping library.

## 📄 License

This project maintains the BSD-3-Clause license from the original jsMind library.
