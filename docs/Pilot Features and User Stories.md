### 🧱 EPIC: Pilot Implementation of Memory Map to Action### 🔧 Feature 5:---

### 🔧 Feature 6: Smart Sequencing ✅ **DONE**

> **As a user**, I want automatic task sequencing, so that I can reduce manual input and maintain clarity in my mind map-based action plan.

#### **User Stories**

1. **Automatic Task Sequence Numbering** ✅ **DONE**

   * The system automatically assigns and updates `sequence` numbers for all nodes using a **clockwise hierarchical convention** starting from the top-right (1 o'clock) position.
   * Sequence numbers follow a dot-separated format reflecting hierarchy (e.g., `1`, `1.2`, `1.2.1`).
   * When a node is **repositioned visually**, its sequence number and its children's sequence numbers are recalculated accordingly.

2. **Toggle Display of Metadata** ✅ **DONE**

   * A **checkbox in the UI** allows users to toggle visibility of metadata fields (sequence, invested time, elapsed time).
   * When enabled, each node displays:t ✅ **DONE**

> As a developer, I want to deploy the app in a simple way so that it's accessible without infrastructure.

#### Tasks

- **5.1** ✅ **DONE** - Host on GitHub Pages for easy access.
- **5.2** ✅ **DONE** - Document how to run locally (open `index.html`).https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki/6/Pilot-Features-and-User-Stories?anchor=%F0%9F%A7%B1-epic%3A-pilot-implementation-of-memory-map-to-action-plan)

> Deliver a functioning prototype that digitizes the PEP Memory Map process and outputs a structured Action Plan to validate the concept with a coach user.

---

### 🔧 Feature 1: MindMap Node Management ✅ **DONE**

> As a coach, I want to visually brainstorm ideas as nodes on a mind map so that I can plan projects during coaching sessions.

#### User Stories:

- **1.1** ✅ **DONE** - As a user, I can create nodes with free text.
- **1.2** ✅ **DONE** - As a user, I can create nested child nodes to represent subtasks with a keystroke TAB
- **1.3** ✅ **DONE** - As a user, I can create sibling nodes to the current selected node with a keystroke
- **1.4** ✅ **DONE** - As a user, I can drag and drop nodes to arrange them visually (this does not affect sequence).

---

### 🔧 Feature 2: Task Metadata Entry ✅ **DONE**

> As a coach, I want to enter sequence, invested time, and elapsed time for each task so that I can structure my plan properly.

#### User Stories

- **2.1** ✅ **DONE** - As a user, I can assign a numeric sequence to each node.
- **2.2** ✅ **DONE** - As a user, I can enter the invested time for each node.
- **2.3** ✅ **DONE** - As a user, I can enter the elapsed time for each node.
- **2.4** ✅ **DONE** - As a user, I can view/edit all metadata in a sidebar or popup.

---


### 🔧 Feature 3: Action Plan Export ✅ **DONE**

> As a coach, I want to export my action plan into a readable document so the client coachee can track execution outside the app.

#### User Stories

- **3.1** ✅ **DONE** - As a user, I can click an "Export Action Plan" button to generate a report.
- **3.2** ✅ **DONE** - As a user, I receive a downloadable CSV or Excel file.
- **3.3** ✅ **DONE** - As a user, the exported plan includes: description, sequence number, invested time, elapsed time.
- **3.4** ✅ **DONE** - As a user, I see a validation warning if invested time > elapsed time for any task.

---

### 🔧 Feature 4: Data Persistence ✅ **DONE**

> As a coach, I want to save and reload maps locally so that I can reuse or continue work later.

#### User Stories

- **4.1** ✅ **DONE** - As a user, I can download the map as a JSON file.
- **4.2** ✅ **DONE** - As a user, I can upload a saved JSON file to restore my session.

---

### 🔧 Feature 5: Deployment for Pilot[](https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki/6/Pilot-Features-and-User-Stories?anchor=%F0%9F%94%A7-feature-5%3A-deployment-for-pilot)

> As a developer, I want to deploy the app in a simple way so that it’s accessible without infrastructure.

#### Tasks:[](https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki/6/Pilot-Features-and-User-Stories?anchor=tasks%3A)

- **5.1** Host on GitHub Pages for easy access.
- **5.2** Document how to run locally (open `index.html`).


---

### 🔧 **Feature 6: Smart Sequencing **

> **As a user**, I want automatic task sequencing, so that I can reduce manual input and maintain clarity in my mind map-based action plan.



#### **User Stories**

1. **Automatic Task Sequence Numbering**

   * The system automatically assigns and updates `sequence` numbers for all nodes using a **clockwise hierarchical convention** starting from the top-right (1 o'clock) position.
   * Sequence numbers follow a dot-separated format reflecting hierarchy (e.g., `1`, `1.2`, `1.2.1`).
   * When a node is **repositioned visually**, its sequence number and its children’s sequence numbers are recalculated accordingly.

2. **Toggle Display of Metadata**

   * A **checkbox in the UI** allows users to toggle visibility of metadata fields (sequence, invested time, elapsed time).
   * When enabled, each node displays:

     ```
     | Task Title         |
     | # 1.2  I: 2h  E: 3d |
     ```

### 🔧 Feature 7: Time Display Enhancements ✅ **DONE**

#### **User Stories**

1. **Smart Time Formatting** ✅ **DONE**

   * When entering time values, the system normalizes and converts units:

     * 1 day = 8 hours
     * 1 month = 22 working days
     * 75 minutes → `1:15h`
     * 12 hours → `1.5d`
   * The system always chooses the **most human-readable unit**, with fractions rounded to one decimal place where needed.

2. **Flexible Input Units** ✅ **DONE**

   * Users can input time using flexible units:

     * Minutes: `m`, `min`
     * Hours: `h`, `hr`
     * Days: `d`, `day`
   * Examples:

     * `0.5d` → displayed as `4h`
     * `90min` → displayed as `1:30h`
     * `2hr` → remains `2h`

---

### 🔧 Feature 8: Visual Action Plan Editing ✅ **DONE**

#### User Stories

1. ✅ **DONE** - As a user I can enter the Start Date for each node
2. ✅ **DONE** - As a user I can see all nodes in a tabular list - Action Plan - on the screen
3. ✅ **DONE** - As a user I can update the metadata of any node the Action Plan
4. ✅ **DONE** - As a user I can select which nodes of the Action Plan I want to export
5. ✅ **DONE** - As a user I want a mirror memory-map file exported when I export the Action Plan

---

#### 💡 Dev Notes (for Copilot context)

* Time should be stored in a **single base unit internally (e.g., minutes or hours)** and formatted for display.
* Sequence ordering may require tracking the visual position of sibling nodes (e.g., `x/y` coordinates relative to parent).
* jsMind node rendering should be updated when toggling metadata display.

---

