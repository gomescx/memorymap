# PEP Memory Map - Refactoring Plan v1

**Current Status**: 3737 lines in single HTML file  
**Target**: Modular, maintainable codebase with 60-70% size reduction  
**Date Created**: 7 September 2025

## 🎯 Refactoring Goals

1. **Reduce code complexity** - Break monolithic file into focused modules
2. **Improve maintainability** - Clear separation of concerns
3. **Enable better testing** - Unit testable components
4. **Enhance debugging** - Isolated functionality
5. **Better performance** - Potential for lazy loading and caching

## 📋 Refactoring Roadmap

### Phase 1: File Structure & Organization (High Priority)
- [ ] **1.1** Extract CSS to separate files (~800 lines → 4-5 CSS files)
- [ ] **1.2** Create modular directory structure
- [ ] **1.3** Split JavaScript into focused modules
- [ ] **1.4** Create minimal HTML structure

**Target Structure:**
```
/src
  ├── index.html (minimal structure)
  ├── css/
  │   ├── main.css
  │   ├── topbar.css
  │   ├── sidebar.css
  │   ├── action-plan.css
  │   └── responsive.css
  ├── js/
  │   ├── main.js
  │   ├── modules/
  │   │   ├── mindMapManager.js
  │   │   ├── actionPlanManager.js
  │   │   ├── sequenceManager.js
  │   │   ├── dataManager.js
  │   │   ├── uiManager.js
  │   └── utils/
  │       ├── timeUtils.js
  │       ├── dragDropUtils.js
  │       └── validationUtils.js
```

### Phase 2: Core Architecture (High Priority)
- [ ] **2.1** Implement MindMapManager class
- [ ] **2.2** Create ActionPlanManager class
- [ ] **2.3** Build EventManager for centralized event handling
- [ ] **2.4** Implement StateManager for application state

### Phase 3: Utilities & Configuration (Medium Priority)
- [ ] **3.1** Extract configuration constants
- [ ] **3.2** Create TimeUtils utility class
- [ ] **3.3** Build ValidationUtils module
- [ ] **3.4** Implement DragDropUtils helper

### Phase 4: Template System (Low Priority)
- [ ] **4.1** Replace string concatenation with template functions
- [ ] **4.2** Create reusable UI component templates
- [ ] **4.3** Implement template caching system

---

## 🔧 Detailed Implementation Plans

### 1. File Structure Separation

#### 1.1 CSS Extraction Plan
**Current**: ~800 lines embedded CSS  
**Target**: 5 focused CSS files

**CSS Files to Create:**
- `main.css` - Base styles, typography, layout
- `topbar.css` - Top navigation bar styles
- `sidebar.css` - Metadata sidebar and collapsible functionality
- `action-plan.css` - Action plan table and form styles
- `responsive.css` - Media queries and responsive design

**Implementation Steps:**
1. Extract and organize CSS by component
2. Remove redundant styles
3. Consolidate similar selectors
4. Add CSS imports to main HTML

#### 1.2 JavaScript Module Structure

**Core Modules:**

```javascript
// main.js - Application entry point and initialization
class App {
    constructor() {
        this.mindMapManager = null;
        this.actionPlanManager = null;
        this.eventManager = null;
        this.stateManager = null;
    }
    
    async initialize() {
        // Initialize all managers
        // Setup global event listeners
        // Load initial state
    }
}

// modules/mindMapManager.js
class MindMapManager {
    constructor(containerId, options = {}) {}
    initialize() {}
    createDefaultMind() {}
    setupEventListeners() {}
    handleMindMapEvent(type, data) {}
}

// modules/actionPlanManager.js
class ActionPlanManager {
    constructor(tableContainer) {}
    renderTable(nodes) {}
    updateNodeMetadata(nodeId, field, value) {}
    exportSelectedNodes() {}
}

// modules/sequenceManager.js
class SequenceManager {
    static updateSequenceNumbers(mindMap) {}
    static calculateClockwiseSequence(nodes) {}
    static formatSequenceDisplay(sequence) {}
}
```

### 2. Configuration Management

#### 2.1 Configuration Constants

```javascript
// config/constants.js
export const CONFIG = {
    FILES: {
        LOAD_COOLDOWN: 1000,
        MAX_UPLOAD_SIZE: 5 * 1024 * 1024,
        SUPPORTED_FORMATS: ['node_array', 'node_tree']
    },
    TIME: {
        HOURS_PER_DAY: 8,
        DAYS_PER_MONTH: 22,
        UPDATE_DEBOUNCE: 300
    },
    UI: {
        NOTIFICATION_DURATION: 3000,
        TABLE_UPDATE_DELAY: 200,
        SIDEBAR_ANIMATION_DURATION: 300
    },
    MINDMAP: {
        DEFAULT_OPTIONS: {
            container: 'jsmind_container',
            editable: true,
            theme: 'primary'
        }
    }
};

export const KEYBOARD_SHORTCUTS = {
    ENTER: 13,
    TAB: 9,
    DELETE: 46,
    F2: 113,
    ESCAPE: 27
};

export const SAMPLE_DATA = {
    // Move sample mind map data here
};
```

### 3. Utility Classes Implementation

#### 3.1 TimeUtils Class

```javascript
// utils/timeUtils.js
export class TimeUtils {
    static formatTime(value, unit = 'h') {
        if (!value) return '';
        const num = parseFloat(value);
        if (isNaN(num)) return '';
        
        switch (unit) {
            case 'h': return num + 'h';
            case 'd': return num + 'd';
            case 'm': return Math.round(num) + 'min';
            default: return value.toString();
        }
    }
    
    static parseTimeToMs(timeStr) {
        // Implementation for time parsing
    }
    
    static formatDateForDisplay(dateString, prefix = '') {
        // Implementation for date formatting
    }
    
    static detectAustralianFormat(locale) {
        return locale.includes('AU') || locale.includes('en-GB') || 
               (!locale.includes('US') && !locale.includes('CA'));
    }
    
    static addWorkingDays(startDate, days) {
        // Implementation for working days calculation
    }
}
```

#### 3.2 ValidationUtils Class

```javascript
// utils/validationUtils.js
export class ValidationUtils {
    static validateTimeInput(value) {
        // Validate time format inputs
    }
    
    static validateSequenceNumber(sequence) {
        // Validate sequence format (e.g., "1.2.3")
    }
    
    static validateMindMapData(data) {
        // Validate mind map JSON structure
    }
    
    static showValidationError(field, message) {
        // Display validation errors to user
    }
}
```

### 4. Event Management System

#### 4.1 EventManager Class

```javascript
// modules/eventManager.js
export class EventManager {
    constructor() {
        this.listeners = new Map();
        this.shortcuts = new Map();
        this.debounceTimers = new Map();
    }
    
    on(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event).push(callback);
    }
    
    emit(event, data) {
        if (this.listeners.has(event)) {
            this.listeners.get(event).forEach(callback => callback(data));
        }
    }
    
    registerShortcut(keyCode, handler, conditions = {}) {
        this.shortcuts.set(keyCode, { handler, conditions });
    }
    
    handleKeyDown(e) {
        const shortcut = this.shortcuts.get(e.keyCode);
        if (shortcut && this.checkConditions(shortcut.conditions, e)) {
            e.preventDefault();
            shortcut.handler(e);
        }
    }
    
    debounce(key, callback, delay = 300) {
        clearTimeout(this.debounceTimers.get(key));
        this.debounceTimers.set(key, setTimeout(callback, delay));
    }
}
```

### 5. State Management

#### 5.1 StateManager Class

```javascript
// modules/stateManager.js
export class StateManager {
    constructor() {
        this.state = {
            mindMap: null,
            selectedNode: null,
            showSequences: false,
            showMetadata: false,
            sidebarExpanded: false,
            sidebarPinned: false,
            initialMapState: null,
            exportSettings: {
                includeMetadata: true,
                selectedOnly: false
            }
        };
        this.subscribers = [];
    }
    
    subscribe(callback) {
        this.subscribers.push(callback);
    }
    
    setState(updates) {
        const prevState = { ...this.state };
        this.state = { ...this.state, ...updates };
        this.notifySubscribers(prevState);
    }
    
    getState() {
        return { ...this.state };
    }
    
    notifySubscribers(prevState) {
        this.subscribers.forEach(callback => callback(this.state, prevState));
    }
}
```

---

## 📊 Progress Tracking

### Completed Items
- [ ] Initial analysis and planning
- [ ] Documentation created

### In Progress
- [ ] 

### Next Up
- [ ] CSS extraction (Phase 1.1)
- [ ] Directory structure setup (Phase 1.2)

---

## 🎯 Success Metrics

### Code Quality Metrics
- **File Count**: 1 → ~15-20 focused files
- **Lines per File**: <200 lines average
- **Cyclomatic Complexity**: Reduced by 60%+
- **Test Coverage**: Enable unit testing for all modules

### Performance Metrics
- **Initial Load Time**: Maintain or improve
- **Memory Usage**: Reduce by isolating unused features
- **Development Experience**: Faster debugging and feature addition

### Maintainability Metrics
- **Time to Add Feature**: Reduce by 50%
- **Bug Fix Time**: Faster isolation and resolution
- **Code Reusability**: Enable component sharing

---

## 🚨 Risk Mitigation

### Potential Risks
1. **Breaking Changes**: Thorough testing after each phase
2. **Performance Regression**: Benchmark before/after each major change
3. **Feature Loss**: Maintain feature parity checklist
4. **Integration Issues**: Gradual migration with rollback plan

### Mitigation Strategies
1. **Backup Strategy**: Git branching for each refactoring phase
2. **Testing Strategy**: Maintain existing functionality tests
3. **Rollback Plan**: Each phase should be independently reversible
4. **Documentation**: Update docs as we refactor

---

## 📝 Notes and Decisions

### Architecture Decisions
- **Module System**: ES6 modules for better tree-shaking
- **Class vs Functions**: Classes for stateful components, functions for utilities
- **Event System**: Centralized event management for better control
- **State Management**: Simple observer pattern vs complex state libraries

### Implementation Notes
- Maintain backward compatibility where possible
- Prioritize readability over micro-optimizations
- Focus on developer experience improvements
- Keep existing keyboard shortcuts and UI behavior

---

## 🔄 Future Considerations

### Post-Refactoring Opportunities
1. **TypeScript Migration**: Add type safety after stabilization
2. **Build System**: Webpack/Vite for optimization
3. **Testing Framework**: Jest for comprehensive unit testing
4. **Performance Monitoring**: Add metrics collection
5. **PWA Features**: Service worker for offline capability

### Extension Points
- Plugin system for additional mind map features
- Theme system for customizable UI
- Export format extensibility
- Integration APIs for external tools

---

*Last Updated: 7 September 2025*
*Next Review: After Phase 1 completion*
