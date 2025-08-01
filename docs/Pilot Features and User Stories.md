### 🧱 EPIC: Pilot Implementation of Memory Map to Action Plan[](https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki/6/Pilot-Features-and-User-Stories?anchor=%F0%9F%A7%B1-epic%3A-pilot-implementation-of-memory-map-to-action-plan)

> Deliver a functioning prototype that digitizes the PEP Memory Map process and outputs a structured Action Plan to validate the concept with a coach user.

---

### 🔧 Feature 1: MindMap Node Management[](https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki/6/Pilot-Features-and-User-Stories?anchor=%F0%9F%94%A7-feature-1%3A-mindmap-node-management)

> As a coach, I want to visually brainstorm ideas as nodes on a mind map so that I can plan projects during coaching sessions.

#### User Stories:[](https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki/6/Pilot-Features-and-User-Stories?anchor=user-stories%3A)

- **1.1** As a user, I can create nodes with free text.
- **1.2** As a user, I can create nested child nodes to represent subtasks with a keystroke TAB
- 1.3 As a user, I can create sibling nodes to the current selected node with a keystroke
- **1.4** As a user, I can drag and drop nodes to arrange them visually (this does not affect sequence).

---

### 🔧 Feature 2: Task Metadata Entry[](https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki/6/Pilot-Features-and-User-Stories?anchor=%F0%9F%94%A7-feature-2%3A-task-metadata-entry)

> As a coach, I want to enter sequence, invested time, and elapsed time for each task so that I can structure my plan properly.

#### User Stories:[](https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki/6/Pilot-Features-and-User-Stories?anchor=user-stories%3A)

- **2.1** As a user, I can assign a numeric sequence to each node.
- **2.2** As a user, I can enter the invested time for each node.
- **2.3** As a user, I can enter the elapsed time for each node.
- **2.4** As a user, I can view/edit all metadata in a sidebar or popup.

---

### 🔧 Feature 3: Action Plan Export[](https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki/6/Pilot-Features-and-User-Stories?anchor=%F0%9F%94%A7-feature-3%3A-action-plan-export)

> As a coach, I want to export my action plan into a readable document so the client coachee can track execution outside the app.

#### User Stories:[](https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki/6/Pilot-Features-and-User-Stories?anchor=user-stories%3A)

- **3.1** As a user, I can click an "Export Action Plan" button to generate a report.
- **3.2** As a user, I receive a downloadable CSV or Excel file.
- **3.3** As a user, the exported plan includes: description, sequence number, invested time, elapsed time.
- **3.4** As a user, I see a validation warning if invested time > elapsed time for any task.

---

### 🔧 Feature 4: Data Persistence (Optional but useful)[](https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki/6/Pilot-Features-and-User-Stories?anchor=%F0%9F%94%A7-feature-4%3A-data-persistence-\(optional-but-useful\))

> As a coach, I want to save and reload maps locally so that I can reuse or continue work later.

#### User Stories:[](https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki/6/Pilot-Features-and-User-Stories?anchor=user-stories%3A)

- **4.1** As a user, I can download the map as a JSON file.
- **4.2** As a user, I can upload a saved JSON file to restore my session.

---

### 🔧 Feature 5: Deployment for Pilot[](https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki/6/Pilot-Features-and-User-Stories?anchor=%F0%9F%94%A7-feature-5%3A-deployment-for-pilot)

> As a developer, I want to deploy the app in a simple way so that it’s accessible without infrastructure.

#### Tasks:[](https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki/6/Pilot-Features-and-User-Stories?anchor=tasks%3A)

- **5.1** Host on GitHub Pages for easy access.
- **5.2** Document how to run locally (open `index.html`).