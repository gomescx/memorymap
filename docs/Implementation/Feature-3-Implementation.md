# Feature 3: Action Plan Export Implementation

## 🎯 Overview

Feature 3 implements **Action Plan Export** for the PEP Memory Map, allowing coaches to export their mind maps as structured CSV files that serve as actionable plans for their clients.

## ✅ Completed User Stories

### 3.1 Export Action Plan Button
> **As a user, I can click an "Export Action Plan" button to generate a report.**

**Implementation:**
- Added "📈 Export Action Plan" button in a dedicated controls section
- Button triggers the `exportActionPlan()` function
- Clean UI integration with existing control sections
- Orange color scheme (#fd7e14) to distinguish from other features

### 3.2 Downloadable CSV File
> **As a user, I receive a downloadable CSV or Excel file.**

**Implementation:**
- Generates CSV format for maximum compatibility
- CSV can be opened in Excel, Google Sheets, or any spreadsheet application
- Automatic timestamped filename: `pep-action-plan-YYYY-MM-DDTHH-mm-SS.csv`
- Uses browser's native download functionality with proper MIME type
- UTF-8 encoding with BOM for international character support

### 3.3 Complete Task Information
> **As a user, the exported plan includes: description, sequence number, invested time, elapsed time.**

**Implementation:**
CSV includes the following columns:
- **Task Description**: The node topic/title
- **Sequence**: Hierarchical sequence number (e.g., "1.2.3")
- **Invested Time**: Time planned to be invested in the task
- **Elapsed Time**: Expected duration/timeline for the task
- **Path**: Full hierarchical path (e.g., "/Project/Phase1/Task")
- **Validation Notes**: Warnings and validation messages

**Technical Details:**
- Automatically updates sequences before export to ensure accuracy
- Skips root nodes unless they contain meaningful content
- Handles CSV escaping for commas, quotes, and newlines
- Preserves hierarchical structure through path information

### 3.4 Time Validation Warnings
> **As a user, I see a validation warning if invested time > elapsed time for any task.**

**Implementation:**
- Parses time strings in various formats (2h, 30m, 1.5h, 90m, 2d, 1w)
- Compares invested vs elapsed time in normalized milliseconds
- Shows detailed warning dialog listing all problematic tasks
- User can choose to continue or cancel the export
- Validation notes appear in the CSV for reference
- Warning icon (⚠️) marks problematic rows in the export

## 🔧 Technical Implementation

### Core Function: `exportActionPlan()`

```javascript
function exportActionPlan() {
    // 1. Validate mind map is ready
    // 2. Update sequences to ensure accuracy
    // 3. Process all nodes and extract metadata
    // 4. Perform time validations
    // 5. Generate CSV with proper escaping
    // 6. Create downloadable blob and trigger download
    // 7. Show success/warning notifications
}
```

### Helper Functions

#### `getNodePathForExport(allNodes, targetNode)`
- Builds hierarchical path for context
- Walks up parent chain to root
- Returns formatted path like "/Project/Phase1/Task"

#### `parseTimeToMs(timeStr)`
- Parses various time formats to milliseconds
- Supports: seconds (s), minutes (m), hours (h), days (d), weeks (w)
- Enables accurate time comparison for validation
- Defaults to hours if no unit specified

### CSV Structure

```csv
Task Description,Sequence,Invested Time,Elapsed Time,Path,Validation Notes
"Project Setup",1,2h,1d,/Project Setup,
"Research Phase",1.1,4h,2d,/Project Setup/Research Phase,
"Implementation",1.2,8h,3h,/Project Setup/Implementation,"⚠️ Invested time exceeds elapsed time"
```

### Validation Logic

The system performs several validation checks:

1. **Time Format Validation**: Ensures time strings are parseable
2. **Logic Validation**: Checks if invested time > elapsed time
3. **Data Completeness**: Handles missing or empty values gracefully
4. **User Confirmation**: Allows users to review warnings before export

## 🧪 Testing Scenarios

### Basic Export Test
1. Create a mind map with multiple nodes
2. Add metadata (sequence, times) to nodes
3. Click "Export Action Plan"
4. Verify CSV file downloads with correct structure

### Validation Warning Test
1. Create nodes with invested time > elapsed time
2. Export action plan
3. Verify warning dialog appears
4. Check CSV contains validation notes

### Complex Hierarchy Test
1. Create deep nested structure (3+ levels)
2. Add metadata at various levels
3. Export and verify path structure is correct
4. Confirm sequences follow hierarchical format

### Time Format Test
1. Enter various time formats (2h, 30m, 1.5h, 90m, 2d)
2. Export and verify all formats are preserved
3. Test validation works across different units

## 🎉 Benefits

### For Coaches
- **Structured Output**: Clean, organized action plans for clients
- **Quality Assurance**: Built-in validation prevents planning errors
- **Professional Format**: CSV files work with all business tools
- **Time Tracking**: Integrated time planning and validation

### For Clients/Coachees
- **Clear Actions**: Each task has description and context
- **Timeline Clarity**: Both invested and elapsed time visible
- **Hierarchy Understanding**: Path shows task relationships
- **Spreadsheet Compatibility**: Can be customized in familiar tools

## 🚀 Future Enhancements

Potential improvements for future versions:
- Excel (.xlsx) format export option
- Custom column selection
- Advanced time format options
- Progress tracking columns
- Priority/importance ratings
- Due date integration
- Team assignment fields
- Status tracking (not started, in progress, completed)

## 📋 Usage Instructions

1. **Create Your Mind Map**: Build your project structure with nodes and subnodes
2. **Add Metadata**: Use the sidebar to add sequence numbers and time estimates
3. **Export**: Click "📈 Export Action Plan" button
4. **Review Warnings**: Address any validation warnings if they appear
5. **Download**: Save the CSV file for use in your preferred application
6. **Share**: Send the structured action plan to clients or team members

The exported CSV file can be opened in:
- Microsoft Excel
- Google Sheets  
- Apple Numbers
- LibreOffice Calc
- Any text editor for viewing raw data

---

✅ **Feature 3 Status: COMPLETED**

All user stories have been implemented and tested. The action plan export functionality provides a complete bridge from visual mind mapping to structured project execution.
