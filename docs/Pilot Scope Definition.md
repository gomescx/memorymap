The **Pilot** is about proving value with minimal complexity. Based on our [Vision Board](https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki?wikiVersion=GBwikiMaster&pagePath=/Vision%20Board)

---

# ✅ **Pilot Goal**[](https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki/4/Pilot-Scope-Definition?anchor=%E2%9C%85-**pilot-goal**)

> Validate the usefulness of digitizing the Memory Map to Action Plan workflow by enabling a coach to use the software in real sessions, producing exportable action plans.

---

## 🧩 **Pilot Core Features**[](https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki/4/Pilot-Scope-Definition?anchor=%F0%9F%A7%A9-**pilot-core-features**)

|**Category**|**Feature**|
|---|---|
|**Mind Mapping**|* Create a node-based diagram (free text)  <br>* Support nested subtasks  <br>* Allow manual sequencing via numbers in node labels|
|**Task Attributes**|* Capture:  <br>    → Description (node text)  <br>    → Sequencing number  <br>    → Invested time  <br>    → Elapsed time|
|**Export**|* Generate an Action Plan as a list  <br>* Output to PDF and Excel  <br>* Include validation warning if Invested > Elapsed|
|**Usage**|* Single-user (coach only)  <br>* Local or browser-based app with no login|
|**UI Simplicity**|* Emphasis on fast data entry and layout clarity  <br>* Drag and drop for visual organization only (does not affect sequence)|

---

### ⛔ **Excluded for Pilot**[](https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki/4/Pilot-Scope-Definition?anchor=%E2%9B%94-**excluded-for-pilot**)

- No login/account system
    
- No mobile support
    
- No calendar integration or ICS exports
    
- No team collaboration or coach dashboard
    
- No import from action plan back to map
    
- No real-time feedback (warnings on export only)
    

---

## Open Source Technology Assessment[](https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki/4/Pilot-Scope-Definition?anchor=open-source-technology-assessment)

3 options:

---

### 1. **[MindMup](https://github.com/mindmup/mindmup)**[](https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki/4/Pilot-Scope-Definition?anchor=1.-**%5Bmindmup%5D\(https%3A//github.com/mindmup/mindmup\)**)

✅ PROS:

- Web-based, visually appealing, modern interface
    
- Open source (MIT license)
    
- Supports export and custom extensions via JSON
    

🔧 CONSIDERATIONS:

- Sequencing and time fields would need customization
    
- Export format may require adjustment for your action plan structure
    
- Primarily JavaScript-based (good long-term flexibility)
    

---

### 2. **[Draw.io / Diagrams.net](https://github.com/jgraph/drawio)**[](https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki/4/Pilot-Scope-Definition?anchor=2.-**%5Bdraw.io-/-diagrams.net%5D\(https%3A//github.com/jgraph/drawio\)**)

✅ PROS:

- Mature and stable with desktop and web versions
    
- Rich diagramming, node attributes, export to multiple formats
    
- Extensible with plugins or forked repo
    

🔧 CONSIDERATIONS:

- Slightly heavy UI for fast ideation
    
- Requires more dev work to constrain UI to your simplified workflow
    
- Java backend, HTML5 frontend (not as friendly as full JS stack)
    

---

### 3. **[Freeplane](https://github.com/freeplane/freeplane)**[](https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki/4/Pilot-Scope-Definition?anchor=3.-**%5Bfreeplane%5D\(https%3A//github.com/freeplane/freeplane\)**)

✅ PROS:

- Java-based successor of FreeMind
    
- Very powerful scripting options with Groovy
    
- Easy to install/test locally
    

🔧 CONSIDERATIONS:

- No native web version (requires effort to embed in browser)
    
- Less visually attractive
    
- Suitable for a proof-of-concept, but not ideal for SaaS
    

---

### 🏁 **Recommendation for Pilot**[](https://dev.azure.com/Claudio-Coaching/PEP%20Memory%20Map%20\(basic%20DevOps%20process\)/_wiki/wikis/PEP-Memory-Map.wiki/4/Pilot-Scope-Definition?anchor=%F0%9F%8F%81-**recommendation-for-pilot**)

- **Use MindMup** as the base.
    
- It’s **web-based**, **maintained**, and **has the right visual style**.
    
- Fork it, add:
    
    - Numeric sequencing
        
    - Invested & elapsed time in node metadata
        
    - Export button for generating a structured action plan (e.g., CSV/PDF)
        

---