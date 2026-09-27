============================================================
ABOUT / RESUME PAGE — ENGLISH GUIDE
============================================================

PAGE ADDRESS

/about


PURPOSE

The “Learn more” link in the homepage About Me card opens a
separate resume-style professional profile page.


MAIN FILE

src/pages/AboutDetail.tsx

This file creates:

• Back to home navigation
• CV download link
• Profile photograph and professional introduction
• Email, LinkedIn, and GitHub links
• Core expertise list
• Education and certification lists
• Professional experience timeline
• Links to individual assignment-detail pages


STYLING

src/styles/index.css

Rules beginning with “resume-” control the page layout, colors,
typography, timeline, profile photograph, and mobile behavior.


ROUTING

src/App.tsx

The /about route displays AboutDetail. The homepage “Learn more”
link uses React Router so the page opens without a full reload.
ScrollToTop resets the window position whenever the route changes,
so the About page always opens from the top.


============================================================
ABOUT / RESUME PAGE — हिंदी गाइड
============================================================

पेज का पता

/about


उद्देश्य

Homepage के About Me card में दिया गया “Learn more” link एक अलग
resume-style professional profile page खोलता है।


मुख्य फाइल

src/pages/AboutDetail.tsx

यह फाइल निम्न भाग बनाती है:

• Home page पर वापस जाने का navigation
• CV download link
• Profile photo और professional introduction
• Email, LinkedIn और GitHub links
• Core expertise list
• Education और certification lists
• Professional experience timeline
• प्रत्येक assignment detail page का link


स्टाइलिंग

src/styles/index.css

“resume-” से शुरू होने वाले CSS rules इस page का layout, colors,
typography, timeline, profile photo और mobile behavior नियंत्रित करते हैं।


रूटिंग

src/App.tsx

/about route AboutDetail component दिखाता है। Homepage का “Learn more”
link React Router का उपयोग करता है, इसलिए page बिना full reload के खुलता है।
ScrollToTop route बदलते समय window position को reset करता है, इसलिए
About page हमेशा ऊपर से खुलता है।
