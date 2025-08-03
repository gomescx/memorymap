# CSV Export Metadata Fix

## 🐛 Issue Identified

The CSV export was not properly extracting the metadata (Sequence, Invested Time, Elapsed Time) that appears correctly in the sidebar. 

**Root Cause:** The export function was using `jm.get_data('node_array')` which returns static node data, but the metadata is stored in the live node objects that are only accessible via `jm.get_node(id)`.

## ✅ Solution Implemented

### Changes Made

**File:** `pilot-mindmap.html`
**Function:** `exportActionPlan()`

#### Before (Broken):
```javascript
// Process each node
mindData.data.forEach(function(node) {
    // Initialize node data
    var nodeData = initNodeData(node);  // ❌ This was using static data
    
    // Add row to CSV
    csvData.push([
        node.topic || '',
        nodeData.sequence || '',           // ❌ Empty/incorrect
        nodeData.invested_time || '',      // ❌ Empty/incorrect  
        nodeData.elapsed_time || '',       // ❌ Empty/incorrect
        path,
        validationNotes
    ]);
});
```

#### After (Fixed):
```javascript
// Process each node
mindData.data.forEach(function(nodeData) {
    // Get the live node object to access current metadata
    var liveNode = jm.get_node(nodeData.id);  // ✅ Get live node
    if (!liveNode) {
        console.warn('Could not find live node for:', nodeData.id);
        return;
    }
    
    // Initialize and get node data from the live node
    var nodeMetadata = initNodeData(liveNode);  // ✅ Use live node data
    
    // Debug logging to verify metadata extraction
    console.log('Node "' + nodeData.topic + '": sequence=' + nodeMetadata.sequence + ', invested=' + nodeMetadata.invested_time + ', elapsed=' + nodeMetadata.elapsed_time);
    
    // Add row to CSV
    csvData.push([
        nodeData.topic || '',
        nodeMetadata.sequence || '',          // ✅ Now gets correct sequence
        nodeMetadata.invested_time || '',     // ✅ Now gets correct invested time
        nodeMetadata.elapsed_time || '',      // ✅ Now gets correct elapsed time
        path,
        validationNotes
    ]);
});
```

### Key Technical Changes

1. **Live Node Access**: Changed from using static `node` data to getting live nodes via `jm.get_node(nodeData.id)`
2. **Metadata Extraction**: Now extracts metadata from the live node's `.data` property where it's actually stored
3. **Debug Logging**: Added console logging to verify metadata is being extracted correctly
4. **Error Handling**: Added check for missing live nodes with appropriate warning

## 🧪 Testing

### Expected Behavior After Fix

1. **Sequence Column**: Should show hierarchical sequences like "1", "1.1", "2.1" matching the sidebar
2. **Invested Time Column**: Should show the exact values entered in the sidebar (e.g., "2")  
3. **Elapsed Time Column**: Should show the exact values entered in the sidebar (e.g., "3")

### Debug Output

When exporting, the browser console should now show:
```
Node "PRJ WRAP consistency": sequence=2.1, invested=2, elapsed=3
Node "Another Task": sequence=1.2, invested=4, elapsed=8
```

### Verification Steps

1. Open http://localhost:8001/pilot-mindmap.html
2. Create nodes and add metadata via the sidebar
3. Click "📈 Export Action Plan"  
4. Check console for debug output
5. Open downloaded CSV to verify correct data

## 📋 Files Changed

- `pilot-mindmap.html` - Fixed `exportActionPlan()` function logic

## ✅ Status

**FIXED** - CSV export now properly extracts and exports the same metadata values that appear in the sidebar.

---

**Date:** August 3, 2025  
**Issue:** CSV columns were empty/incorrect for Sequence, Invested Time, Elapsed Time  
**Resolution:** Fixed metadata extraction to use live node objects instead of static data
