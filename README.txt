===============================================================================
                 ACADEMIC PORTFOLIO — HOME PAGE CODE GUIDE
                 अकादमिक पोर्टफोलियो — होम पेज कोड गाइड
===============================================================================


1. WHERE IS THE HTML FILE?
   HTML FILE कहाँ है?
-------------------------------------------------------------------------------

HTML entry file:
D:\Portfolio\index.html

English:
This is a React project. The index.html file contains the basic browser document
and a <div id="root"></div>. React places the complete Home page inside that div.

हिंदी:
यह एक React project है। index.html में basic browser document और
<div id="root"></div> मौजूद है। React पूरा Home page इसी div के अंदर दिखाता है।

Home page HTML-like markup (JSX):
D:\Portfolio\src\App.tsx

English:
React uses JSX instead of placing all page markup directly in index.html. JSX
looks like HTML, but it also supports reusable components and JavaScript data.

हिंदी:
React में पूरा markup index.html में लिखने के बजाय JSX इस्तेमाल होता है। JSX
HTML जैसा दिखता है, लेकिन reusable components और JavaScript data भी support करता है।


2. IMPORTANT PROJECT FILES
   महत्वपूर्ण PROJECT FILES
-------------------------------------------------------------------------------

FILE: index.html

English purpose:
Creates the browser document, page metadata, page title, and React root element.

हिंदी उद्देश्य:
Browser document, page metadata, page title और React root element बनाता है।


FILE: src\main.tsx

English purpose:
Starts React, enables BrowserRouter, loads the stylesheet, and renders App.tsx.

हिंदी उद्देश्य:
React शुरू करता है, BrowserRouter चालू करता है, stylesheet लोड करता है और
App.tsx को render करता है।


FILE: src\App.tsx

English purpose:
Contains the complete résumé-based Home page structure, text, icons, data, and
mobile-menu interaction.

हिंदी उद्देश्य:
पूरा Home page structure, text, icons, data और mobile-menu interaction रखता है।


FILE: src\styles\index.css

English purpose:
Controls colors, typography, spacing, cards, grids, responsive layouts, hover
states, and reduced-motion accessibility.

हिंदी उद्देश्य:
Colors, typography, spacing, cards, grids, responsive layout, hover states और
reduced-motion accessibility को नियंत्रित करता है।


FILE: public\documents\Anurag_Yadav_chrono_resume.pdf

English purpose:
Provides the CV when a visitor selects Download CV.

हिंदी उद्देश्य:
Visitor के Download CV चुनने पर PDF उपलब्ध कराता है।


FILE: public\images\anurag-yadav.jpeg

English purpose:
Provides the profile photograph used in the header and About section.

हिंदी उद्देश्य:
Header और About section में इस्तेमाल होने वाली profile photograph देता है।


FILE: package.json

English purpose:
Lists React, Vite, TypeScript, Tailwind CSS, React Router, and Lucide icons. It
also defines the development and build commands.

हिंदी उद्देश्य:
React, Vite, TypeScript, Tailwind CSS, React Router और Lucide icons की सूची रखता
है। Development और build commands भी यहीं define होते हैं।


3. index.html — LINE-BY-LINE EXPLANATION
   index.html — हर LINE का उद्देश्य
-------------------------------------------------------------------------------

LINE: <!doctype html>
EN: Tells the browser to use modern HTML5.
HI: Browser को modern HTML5 इस्तेमाल करने के लिए बताता है।

LINE: <html lang="en">
EN: Opens the HTML document and declares English as the main language.
HI: HTML document शुरू करता है और English को मुख्य भाषा बताता है।

LINE: <head>
EN: Opens the document metadata section.
HI: Document का metadata section शुरू करता है।

LINE: <meta charset="UTF-8" />
EN: Allows Unicode text and special characters.
HI: Unicode text और special characters को support करता है।

LINE: <meta name="viewport" ... />
EN: Makes the page scale correctly on mobile devices.
HI: Mobile devices पर page को सही scale देता है।

LINE: <meta name="description" ... />
EN: Provides a short search-engine description.
HI: Search engine के लिए छोटा page description देता है।

LINE: <title>...</title>
EN: Sets the text shown in the browser tab.
HI: Browser tab में दिखाई देने वाला text तय करता है।

LINE: <body>
EN: Opens the visible document body.
HI: दिखाई देने वाला document body शुरू करता है।

LINE: <div id="root"></div>
EN: Creates the exact element where React displays the portfolio.
HI: वह element बनाता है जहाँ React portfolio दिखाता है।

LINE: <script type="module" src="/src/main.tsx"></script>
EN: Loads the React application entry file.
HI: React application की entry file लोड करता है।

LINE: </body> and </html>
EN: Close the body and HTML document.
HI: Body और HTML document को बंद करते हैं।


4. src\main.tsx — LINE-BY-LINE EXPLANATION
   src\main.tsx — हर LINE का उद्देश्य
-------------------------------------------------------------------------------

LINE: import { StrictMode } from "react";
EN: Imports React's development safety checker.
HI: React का development safety checker import करता है।

LINE: import { createRoot } from "react-dom/client";
EN: Imports the function that displays React in the browser.
HI: Browser में React दिखाने वाला function import करता है।

LINE: import { BrowserRouter } from "react-router-dom";
EN: Prepares the portfolio for multiple routes and pages.
HI: Portfolio को multiple routes और pages के लिए तैयार करता है।

LINE: import App from "./App";
EN: Imports the complete Home page component.
HI: पूरा Home page component import करता है।

LINE: import "./styles/index.css";
EN: Loads the global visual styles.
HI: Global visual styles लोड करता है।

LINE: createRoot(document.getElementById("root")!).render(
EN: Finds the root div in index.html and starts rendering React there.
HI: index.html का root div ढूँढकर वहाँ React render करना शुरू करता है।

LINE: <StrictMode>
EN: Enables extra development checks.
HI: अतिरिक्त development checks चालू करता है।

LINE: <BrowserRouter>
EN: Gives routing support to the application.
HI: Application को routing support देता है।

LINE: <App />
EN: Displays the Home page.
HI: Home page दिखाता है।

LINE: Closing tags and );
EN: Close the React component tree and render command.
HI: React component tree और render command बंद करते हैं।


5. src\App.tsx — CODE SECTIONS AND PURPOSE
   src\App.tsx — CODE SECTIONS और उनका उद्देश्य
-------------------------------------------------------------------------------

SECTION: Lucide icon imports

EN:
Imports clean icons for the menu, skills, metrics, project cards, experience,
and contact links.

HI:
Menu, skills, metrics, project cards, experience और contact links के लिए साफ
icons import करता है।


SECTION: ReactNode and useState imports

EN:
ReactNode provides a safe TypeScript type for icons. useState stores whether the
mobile menu is open or closed.

HI:
ReactNode icons के लिए safe TypeScript type देता है। useState mobile menu के
open या closed होने की स्थिति रखता है।


SECTION: navigation array

EN:
Stores every navigation label in one place. map() creates the links from it.

HI:
सभी navigation labels एक जगह रखता है। map() इनसे links बनाता है।


SECTION: skills array

EN:
Stores each skill name, short description, and matching icon.

HI:
हर skill का नाम, छोटा description और matching icon रखता है।


SECTION: careerHighlights array

EN:
Stores each recent employer, role, period, résumé-based summary, and color theme.

HI:
हर recent employer, role, period, résumé-based summary और color theme रखता है।


SECTION: learningSteps array

EN:
Stores degree, diploma, and professional certification information.

HI:
Degree, diploma और professional certification की जानकारी रखता है।


LINE: export default function App()

EN:
Creates and exports the main Home page component.

HI:
Main Home page component बनाता और export करता है।


LINE: const [menuOpen, setMenuOpen] = useState(false);

EN:
Keeps the mobile menu closed when the page first loads.

HI:
Page load होने पर mobile menu को बंद रखता है।


LINE: const closeMenu = () => setMenuOpen(false);

EN:
Creates a reusable function for closing the mobile menu.

HI:
Mobile menu बंद करने के लिए reusable function बनाता है।


SECTION: <header>

EN:
Contains the AY identity, name, discipline, navigation, mobile-menu button, and
Let's Connect button.

HI:
AY identity, नाम, discipline, navigation, mobile-menu button और Let's Connect
button रखता है।


SECTION: Menu button

EN:
Toggles menuOpen. aria-label and aria-expanded communicate its state to screen
readers. The icon changes between Menu and X.

HI:
menuOpen को toggle करता है। aria-label और aria-expanded screen readers को state
बताते हैं। Icon Menu और X के बीच बदलता है।


SECTION: navigation.map()

EN:
Creates one navigation link for each label. The href points to the matching
section id.

HI:
हर label के लिए navigation link बनाता है। href matching section id पर जाता है।


SECTION: Hero

EN:
Introduces the name, specialization, short value statement, project action,
experience action, and social links.

HI:
नाम, specialization, short introduction, project action, experience action और
social links दिखाता है।


SECTION: Hero visual

EN:
Creates an abstract analytics visual with a statement card and action labels.
The profile photograph remains in the About section instead of the hero.

HI:
Statement card और action labels के साथ abstract analytics visual बनाता है।
Profile photograph hero के बजाय About section में रहती है।


SECTION: Metric strip

EN:
Shows four quick professional highlights using the reusable Metric component.

HI:
Reusable Metric component से चार professional highlights दिखाता है।


SECTION: Skills

EN:
Uses skills.map() to create one consistent card for every skill object.

HI:
skills.map() से हर skill object के लिए consistent card बनाता है।


SECTION: Career Highlights

EN:
Uses careerHighlights.map() to create three recent-experience cards. The nested
tags map creates role and period pills. Decorative spans create a chart cover.

HI:
careerHighlights.map() से तीन recent-experience cards बनाता है। Nested tags map
role और period pills बनाता है। Decorative spans chart cover बनाते हैं।


SECTION: Education and Certifications

EN:
Uses learningSteps.map() to display qualifications and bulleted professional certifications.

HI:
learningSteps.map() से qualifications और bulleted professional certifications दिखाता है।


SECTION: About and Experience

EN:
Displays a short personal introduction and professional experience summary.

HI:
Short personal introduction और professional experience summary दिखाता है।


SECTION: Contact

EN:
Displays email, LinkedIn, and GitHub actions. Placeholder values must be replaced
with real profile information.

HI:
Email, LinkedIn और GitHub actions दिखाता है। Placeholder values को real profile
information से बदलना होगा।


FUNCTION: Metric()

EN:
Creates one reusable highlight containing an icon, title, and supporting text.

HI:
Icon, title और supporting text वाला reusable highlight बनाता है।


FUNCTION: SectionHeading()

EN:
Creates a consistent title with optional label and description text.

HI:
Optional label और description text के साथ consistent title बनाता है।


6. src\styles\index.css — STYLE PURPOSE
   src\styles\index.css — STYLES का उद्देश्य
-------------------------------------------------------------------------------

RULE: @import "tailwindcss";
EN: Loads Tailwind CSS utilities for current and future pages.
HI: Current और future pages के लिए Tailwind CSS utilities लोड करता है।

RULE: :root
EN: Defines the default font, text color, background, and text rendering.
HI: Default font, text color, background और text rendering तय करता है।

RULES: *, html, body, button, a, svg
EN: Normalize sizing, scrolling, margins, controls, links, and icons.
HI: Sizing, scrolling, margins, controls, links और icons को normalize करते हैं।

RULES: .site-header, .brand, .site-nav, .menu-button
EN: Build the desktop header and mobile navigation control.
HI: Desktop header और mobile navigation control बनाते हैं।

RULES: .hero and .hero-copy
EN: Create the two-column introduction and responsive typography.
HI: Two-column introduction और responsive typography बनाते हैं।

RULE: .hero h2
EN: Uses the same blue-grey color as the hero description for visual consistency.
HI: Visual consistency के लिए hero description वाला same blue-grey color इस्तेमाल करता है।

RULE: .hero h1 responsive font size
EN: Uses a compact 2.75rem-to-4.8rem desktop range, a 2.6rem-to-3.8rem mobile range, and right padding to prevent the name from clipping.
HI: Name को clip होने से बचाने के लिए compact desktop और mobile ranges के साथ right padding इस्तेमाल करता है।

RULE: .hero h1 color
EN: Matches “Anurag” to the blue-grey subtitle while preserving the gradient on “Yadav.”
HI: “Anurag” को blue-grey subtitle से match करता है और “Yadav” का gradient बनाए रखता है।

RULES: .hero h1 and .hero h2 font family
EN: Use Nunito Bold for the hero name and Nunito ExtraBold for the designation.
HI: Hero name के लिए Nunito Bold और designation के लिए Nunito ExtraBold इस्तेमाल करते हैं।

RULES: .button and state variants
EN: Style primary, secondary, hover, and focus states.
HI: Primary, secondary, hover और focus states style करते हैं।

RULES: .hero-visual, .orbit, .visual-card
EN: Build the original abstract data illustration.
HI: Original abstract data illustration बनाते हैं।

RULES: .metric-strip
EN: Create the four-column summary panel.
HI: Four-column summary panel बनाता है।

RULES: .skill-grid and .skill-card
EN: Create responsive, static skill cards without lift-on-hover movement.
HI: Responsive skill cards और hover feedback बनाते हैं।

RULES: .project-grid, .project-card, .project-accent, .tag-list
EN: Create equal-height organization cards with bold names, dark readable descriptions, matching color bands, and bottom-aligned links.
HI: Bold names, dark readable descriptions, matching color bands और bottom-aligned links के साथ equal-height cards बनाते हैं।

RULE: .project-card h3 font family
EN: Uses the bundled Nunito ExtraBold font for consistently rounded, professional organization names.
HI: Consistently rounded और professional organization names के लिए bundled Nunito ExtraBold font इस्तेमाल करता है।

RULES: .journey-grid and .journey-step
EN: Create the numbered four-stage learning journey.
HI: Numbered four-stage learning journey बनाते हैं।

RULES: .split-section, .about-card
EN: Create the full-width About Me panel.
HI: Full-width About Me panel बनाते हैं।

RULES: .contact-section
EN: Creates the closing contact panel.
HI: Closing contact panel बनाता है।

RULES: Shared hover and focus selectors
EN: Lift clickable links and buttons slightly toward the foreground and fill
text-link backgrounds from left to right while cards and sections remain static.

RULE: .back-to-top and BackToTop()
EN: Show a floating button after the visitor scrolls down and smoothly return
the page to the top when selected.
HI: नीचे scroll करने पर floating button दिखाता है और select करने पर page को
smoothly ऊपर ले जाता है।
HI: Interactive cards और links को small scale increase और soft shadow के साथ
हल्का foreground में उठाते हैं। Professional-highlight metrics static रहते हैं।

BLOCK: Vibrant portfolio theme
EN: Adds an energetic electric-blue, cyan, violet, amber, and green palette,
stronger gradients, brighter cards, richer shadows, and colorful skill states.
HI: Electric-blue, cyan, violet, amber और green palette, stronger gradients,
brighter cards, richer shadows और colorful skill states जोड़ता है।

BLOCK: Dark contrast canvas
EN: Uses a serious midnight-navy page background with light hero text and
bright foreground cards for strong visual contrast.
HI: Serious midnight-navy page background, light hero text और bright foreground
cards से strong visual contrast बनाता है।

BLOCK: @media (max-width: 980px)
EN: Adapts the page for tablets and activates mobile navigation.
HI: Page को tablets के लिए adapt करता है और mobile navigation चालू करता है।

BLOCK: @media (max-width: 620px)
EN: Converts the page into a single-column phone layout.
HI: Page को single-column phone layout में बदलता है।

BLOCK: @media (prefers-reduced-motion: reduce)
EN: Reduces animation for accessibility.
HI: Accessibility के लिए animation कम करता है।


7. INFORMATION TO REPLACE
   बदलने वाली जानकारी
-------------------------------------------------------------------------------

1. Email actions use the verified address: anuragy08@gmail.com.
   Email actions verified address anuragy08@gmail.com इस्तेमाल करते हैं।

2. LinkedIn and GitHub use the verified profile URLs supplied for this portfolio.
   LinkedIn और GitHub इस portfolio के लिए दिए गए verified profile URLs इस्तेमाल करते हैं।

3. WhatsApp is intentionally omitted until username links are active for the account or a dedicated business number is supplied.
   Username link active होने या dedicated business number मिलने तक WhatsApp को intentionally omit किया गया है।

4. The profile photograph comes from image4.jpeg.
   Profile photograph image4.jpeg से आती है।


8. HOW TO RUN THE PROJECT
   PROJECT कैसे चलाएँ
-------------------------------------------------------------------------------

Step 1: Install Node.js.
चरण 1: Node.js install करें।

Step 2: Open a terminal in D:\Portfolio.
चरण 2: D:\Portfolio में terminal खोलें।

Step 3: Run the following commands separately.
चरण 3: नीचे दिए commands अलग-अलग चलाएँ।

npm install

npm run dev


===============================================================================
                              END OF GUIDE
                              गाइड समाप्त
===============================================================================
