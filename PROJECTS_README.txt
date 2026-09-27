============================================================
REAL-WORLD PROJECTS — ENGLISH GUIDE
============================================================

SOURCE MATERIAL

The project content was prepared from the text summaries inside:

• Real life projects
• Real life projects/Machine Learning


PROJECT DATA

src/data/projects.ts

Stores each project’s title, category, summary, tools, objectives,
color accent, URL slug, and available GitHub repository link in one
reusable data structure.


PROJECTS NAVIGATION

src/App.tsx

The Real-World Projects section maps the project data into responsive
cards. Each card shows the project category, title, summary, selected
tools, and a “View project” link.

The Projects item in the main navigation opens the dedicated /projects page.
The homepage does not duplicate the project collection.


PROJECT DETAIL PAGES

src/pages/ProjectDetail.tsx

The route /projects/:slug creates one reusable detail layout for all
projects. It displays the business context, tools, objectives, and
analytical approach for the selected project.

Each project with supplied source material also includes a Project Evidence
section. It shows responsive screenshot galleries and opens the supplied PDF
or README documentation in a new tab. These assets are stored under:

public/project-assets/<project-slug>/


DEDICATED PROJECT PAGE

src/pages/ProjectsPage.tsx

The /projects route presents the complete project collection in one
dedicated page. The main navigation Projects item opens this page.
Projects with repository links show a GitHub link on their detail page.
Projects without a supplied link do not show one.


STYLING

src/styles/index.css

Rules beginning with “work-project-” control project cards, category
colors, detail-page layouts, responsive behavior, and link hover effects.


============================================================
REAL-WORLD PROJECTS — हिंदी गाइड
============================================================

स्रोत सामग्री

Project content इन folders की text summaries से तैयार किया गया है:

• Real life projects
• Real life projects/Machine Learning


PROJECT DATA

src/data/projects.ts

इस file में प्रत्येक project का title, category, summary, tools,
objectives, color accent और URL slug reusable data structure में रखा है।


PROJECTS NAVIGATION

src/App.tsx

Real-World Projects section project data को responsive cards में दिखाता
है। प्रत्येक card में category, title, summary, selected tools और
“View project” link दिखाई देता है।

Main navigation का Projects item सीधे dedicated /projects page पर ले जाता है।
Homepage पर project collection को दोहराया नहीं गया है।


PROJECT DETAIL PAGES

src/pages/ProjectDetail.tsx

/projects/:slug route सभी projects के लिए एक reusable detail layout बनाता
है। इसमें selected project का business context, tools, objectives और
analytical approach दिखाया जाता है।


DEDICATED PROJECT PAGE

src/pages/ProjectsPage.tsx

/projects route पूरी project collection को एक dedicated page पर दिखाता है।
Main navigation का Projects item इसी page को खोलता है।


STYLING

src/styles/index.css

“work-project-” से शुरू होने वाले CSS rules project cards, category colors,
detail-page layouts, responsive behavior और link hover effects नियंत्रित करते हैं।
