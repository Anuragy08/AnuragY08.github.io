===============================================================================
             ORGANIZATIONAL EXPERIENCE PAGES — CODE GUIDE
             संगठनात्मक अनुभव पेज — कोड मार्गदर्शिका
===============================================================================


1. PURPOSE
   उद्देश्य
-------------------------------------------------------------------------------

English:
These pages present the project experience recorded in Anurag Yadav's World
Bank-format CV. Each organization has a separate URL and a consistent page
layout.

हिंदी:
ये pages Anurag Yadav के World Bank-format CV में दर्ज project experience को
दिखाते हैं। हर organization का अलग URL और consistent page layout है।


2. EXPERIENCE PAGE URLS
   EXPERIENCE PAGE URLs
-------------------------------------------------------------------------------

National Health Authority
/experience/national-health-authority

Unique Identification Authority of India
/experience/uidai

Easyrewardz Software Services Pvt. Ltd.
/experience/easyrewardz

Ministry of Corporate Affairs
/experience/ministry-of-corporate-affairs

Digismart Digital Media Pvt. Ltd.
/experience/digismart


3. IMPORTANT FILES
   महत्वपूर्ण FILES
-------------------------------------------------------------------------------

FILE: src\data\experiences.ts

English purpose:
Stores the structured World Bank CV information for all five organizational
assignments.

हिंदी उद्देश्य:
सभी पाँच organizational assignments की structured World Bank CV information
रखता है।


FILE: src\pages\ExperienceDetail.tsx

English purpose:
Reads the URL slug, selects the matching experience record, and renders its
project details.

हिंदी उद्देश्य:
URL slug पढ़ता है, matching experience record चुनता है और project details
render करता है।


FILE: src\App.tsx

English purpose:
Defines the Home route and the /experience/:slug route. Career cards use React
Router links to open their matching detail pages.

हिंदी उद्देश्य:
Home route और /experience/:slug route define करता है। Career cards React Router
links से matching detail pages खोलते हैं।


FILE: src\styles\index.css

English purpose:
Styles the experience hero, metadata, project tasks, value-delivered card,
assignment details, responsive layout, and links to other experiences.

हिंदी उद्देश्य:
Experience hero, metadata, project tasks, value-delivered card, assignment
details, responsive layout और other-experience links को style करता है।


4. experiences.ts — DATA FIELDS
   experiences.ts — DATA FIELDS का उद्देश्य
-------------------------------------------------------------------------------

FIELD: slug
EN: Creates the unique page URL.
HI: Unique page URL बनाता है।

FIELD: organization
EN: Stores the employer or client organization name.
HI: Employer या client organization का नाम रखता है।

FIELD: project
EN: Stores the assignment or project title from the CV.
HI: CV का assignment या project title रखता है।

FIELD: period
EN: Stores the start and end years.
HI: Start और end years रखता है।

FIELD: position
EN: Stores the official position held.
HI: Official position रखता है।

FIELD: role
EN: Describes the role played in the project.
HI: Project में निभाई गई role बताता है।

FIELD: workArea
EN: Describes the professional work area.
HI: Professional work area बताता है।

FIELD: location
EN: Stores the assignment location.
HI: Assignment location रखता है।

FIELD: challenge
EN: Explains the client or business requirement.
HI: Client या business requirement समझाता है।

FIELD: tasks
EN: Stores the list of tasks handled during the assignment.
HI: Assignment में handle किए गए tasks की list रखता है।

FIELD: value
EN: Explains the value delivered to the client.
HI: Client को deliver की गई value बताता है।

FIELD: accent
EN: Selects the page's hero color treatment.
HI: Page का hero color treatment चुनता है।


5. ExperienceDetail.tsx — COMPONENT FLOW
   ExperienceDetail.tsx — COMPONENT FLOW
-------------------------------------------------------------------------------

STEP: useParams()
EN: Reads the organization slug from the browser URL.
HI: Browser URL से organization slug पढ़ता है।

STEP: experiences.find()
EN: Finds the matching experience data object.
HI: Matching experience data object ढूँढता है।

STEP: useEffect()
EN: Updates the browser-tab title and scrolls each opened page to the top.
HI: Browser-tab title update करता है और opened page को top पर scroll करता है।

STEP: Navigate
EN: Returns unknown experience URLs safely to the Home page.
HI: Unknown experience URLs को safely Home page पर लौटाता है।

SECTION: detail-nav
EN: Provides the Back to portfolio action.
HI: Back to portfolio action देता है।

SECTION: experience-hero
EN: Shows the organization, project, position, period, and location without an extra category label.
HI: Extra category label के बिना organization, project, position, period और location दिखाता है।

SECTION: experience-main-card
EN: Shows the business challenge and tasks handled.
HI: Business challenge और tasks handled दिखाता है।

SECTION: experience-side-column
EN: Shows value delivered and assignment details, including the position or designation.
HI: Position या designation सहित value delivered और assignment details दिखाता है।

SECTION: experience-switcher
EN: Links to the other four organizational experience pages.
HI: बाकी चार organizational experience pages के links दिखाता है।


6. RESPONSIVE BEHAVIOR
   RESPONSIVE BEHAVIOR
-------------------------------------------------------------------------------

English:
Desktop uses a two-column project-detail layout. Tablet and mobile screens use
a single column. Navigation buttons, metadata, and organization links wrap or
stack when space is limited.

हिंदी:
Desktop पर two-column project-detail layout है। Tablet और mobile पर single
column layout होता है। कम space में navigation buttons, metadata और organization
links wrap या stack होते हैं।


7. CONTENT SOURCE
   CONTENT SOURCE
-------------------------------------------------------------------------------

English:
The organization names, project names, roles, work areas, challenges, tasks,
periods, and value-delivered statements come from Anurag Yadav.pdf.

हिंदी:
Organization names, project names, roles, work areas, challenges, tasks,
periods और value-delivered statements Anurag Yadav.pdf से लिए गए हैं।


8. HOW TO RUN
   कैसे चलाएँ
-------------------------------------------------------------------------------

Open PowerShell in D:\Portfolio and run:

npm run dev

Then open the local address displayed by Vite.

Vite द्वारा दिखाया गया local address browser में खोलें।


===============================================================================
                              END OF GUIDE
                              गाइड समाप्त
===============================================================================
