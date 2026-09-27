import {
  ArrowRight,
  ArrowUp,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import ExperienceDetail from "./pages/ExperienceDetail";
import AboutDetail from "./pages/AboutDetail";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectsPage from "./pages/ProjectsPage";

const navigation = ["Home", "About", "Skills", "Projects", "Career", "Education", "Contact"];

const skills = [
  { name: "SQL", detail: "MySQL, Redshift, joins, views & procedures", icon: Database },
  { name: "Power BI", detail: "DAX, dashboards & business KPIs", icon: BarChart3 },
  { name: "Python", detail: "NumPy, Pandas, Flask & automation", icon: Code2 },
  { name: "Data Governance", detail: "Quality, validation & compliance", icon: BrainCircuit },
  { name: "Business Intelligence", detail: "Reporting, trends & actionable insights", icon: Sparkles },
];

const careerHighlights = [
  {
    slug: "national-health-authority",
    title: "National Health Authority",
    tags: ["Senior Consultant", "2025–Present"],
    description: "Complex SQL on Amazon Redshift, Power BI dashboards, data validation, reconciliation, and automated reporting.",
    accent: "project-blue",
  },
  {
    slug: "uidai",
    title: "Unique Identification Authority of India",
    tags: ["Senior Analyst", "2023–2025"],
    description: "Large-scale SQL analysis and Power BI reporting for Aadhaar authentication and eKYC delivery metrics.",
    accent: "project-violet",
  },
  {
    slug: "easyrewardz",
    title: "Easyrewardz Software Services",
    tags: ["Data Analyst", "2022–2023"],
    description: "Campaign analytics, customer-loyalty reporting, data cleaning, database queries, and tailored analytical solutions.",
    accent: "project-cyan",
  },
  {
    slug: "ministry-of-corporate-affairs",
    title: "Ministry of Corporate Affairs",
    tags: ["IT Consultant", "2021–2022"],
    description: "Portal and database maintenance, Python-supported migration, documentation, security patching, and data integrity.",
    accent: "project-amber",
  },
  {
    slug: "digismart",
    title: "Digismart Digital Media",
    tags: ["Associate", "2017–2021"],
    description: "Campaign-performance analytics, Excel tracking, optimization, reporting, and data-led strategy development.",
    accent: "project-green",
  },
];

const learningSteps = [
  { number: "01", title: "B.Tech — IT", text: "Lovely Professional University · 2009–2013", items: [] },
  { number: "02", title: "PGDM", text: "IT & Operations · Jaipuria Institute of Management · 2014–2016", items: [] },
  { number: "03", title: "Professional Certifications", text: "", items: ["CCNA (R&S)", "Oracle Java SE 8 Programmer"] },
  { number: "04", title: "Process Excellence", text: "Six Sigma Green Belt", items: [] },
];

export default function App() {
  return (
    <>
      <ScrollToTop />
      <BackToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutDetail />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/experience/:slug" element={<ExperienceDetail />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView());
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 420);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!visible) return null;

  return (
    <button
      className="back-to-top"
      type="button"
      aria-label="Back to top"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp aria-hidden="true" />
      <span>Top</span>
    </button>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Anurag Yadav home">
          <img className="brand-avatar" src="/images/anurag-yadav.jpeg" alt="" />
          <span>
            <strong>Anurag Yadav</strong>
            <small>Senior Data Analyst</small>
          </span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item} href={item === "Projects" ? "/projects" : `#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <a className="button button-small" href="#contact" onClick={closeMenu}>
            Let&apos;s Connect <ArrowRight size={16} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Hello, I&apos;m</p>
            <h1>Anurag <span>Yadav</span></h1>
            <h2>Senior Data Analyst</h2>
            <p className="hero-intro">
              Data analytics and BI professional with 8+ years of experience across healthcare, digital identity,
              e-governance, customer loyalty, and campaign analytics.
            </p>
            <div className="hero-actions">
              <a className="button" href="#career">Explore My Career <ArrowRight size={18} aria-hidden="true" /></a>
              <a className="button button-secondary" href="/documents/Anurag_Yadav_chrono_resume.pdf" download>Download CV</a>
            </div>
            <div className="social-links" aria-label="Social links">
              <a href="https://www.linkedin.com/in/anurag-yadav-a162a9b4/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin aria-hidden="true" /></a>
              <a href="https://github.com/Anuragy08" target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github aria-hidden="true" /></a>
              <a href="mailto:anuragy08@gmail.com" aria-label="Email Anurag Yadav"><Mail aria-hidden="true" /></a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Data analytics focus areas">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="visual-card visual-card-main">
              <BarChart3 size={42} aria-hidden="true" />
              <strong>Better data.</strong>
              <span>Better decisions.</span>
            </div>
            <div className="visual-card visual-card-small card-analyze">Analyze</div>
            <div className="visual-card visual-card-small card-visualize">Visualize</div>
            <div className="visual-card visual-card-small card-predict">Decide</div>
          </div>
        </section>

        <section className="metric-strip" aria-label="Professional highlights">
          <Metric icon={<BriefcaseBusiness />} title="8+ Years" text="Analytics and technology experience" />
          <Metric icon={<Database />} title="Advanced SQL" text="MySQL and Amazon Redshift" />
          <Metric icon={<BarChart3 />} title="Power BI" text="DAX, dashboards and KPIs" />
          <Metric icon={<GraduationCap />} title="Cross-sector" text="Healthcare, identity and e-governance" />
        </section>

        <section className="section" id="skills">
          <SectionHeading title="Core Skills" />
          <div className="skill-grid">
            {skills.map(({ name, detail, icon: Icon }) => (
              <article className="skill-card" key={name}>
                <Icon aria-hidden="true" />
                <h3>{name}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="career">
          <SectionHeading title="Career Highlights" />
          <div className="project-grid">
            {careerHighlights.map((project) => (
              <article className="project-card" key={project.title}>
                <div className={`project-accent ${project.accent}`} aria-hidden="true" />
                <div className="project-content">
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to={`/experience/${project.slug}`}>View experience <ArrowRight size={16} aria-hidden="true" /></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <SectionHeading title="Education & Certifications" text="A technical foundation strengthened by management and professional certifications." />
          <div className="journey-grid">
            {learningSteps.map((step) => (
              <article className="journey-step" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                {step.items.length > 0 ? (
                  <ul>{step.items.map((item) => <li key={item}>{item}</li>)}</ul>
                ) : (
                  <p>{step.text}</p>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="split-section section">
          <article className="about-card" id="about">
            <img className="about-portrait" src="/images/anurag-yadav.jpeg" alt="Portrait of Anurag Yadav" />
            <div>
              <h2>About Me</h2>
              <p>I translate large, multi-source datasets into stakeholder-ready dashboards and evidence-based insights. My work combines SQL, Power BI, Python automation, data governance, and clear communication with technical and non-technical teams.</p>
              <Link to="/about">Learn more <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </article>

        </section>

        <section className="contact-section section" id="contact">
          <div>
            <p className="section-kicker">Start a conversation</p>
            <h2>Let&apos;s Connect</h2>
            <p>I&apos;m open to discussing data, projects, learning, and professional opportunities.</p>
          </div>
          <div className="contact-links">
            <a href="mailto:anuragy08@gmail.com"><Mail aria-hidden="true" /> Send an email</a>
            <a href="https://www.linkedin.com/in/anurag-yadav-a162a9b4/" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn</a>
            <a href="https://github.com/Anuragy08" target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub</a>
          </div>
        </section>
      </main>

    </div>
  );
}

function Metric({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return <div>{icon}<span><strong>{title}</strong><small>{text}</small></span></div>;
}

function SectionHeading({ kicker, title, text }: { kicker?: string; title: string; text?: string }) {
  return <div className="section-heading"><div>{kicker && <p className="section-kicker">{kicker}</p>}<h2>{title}</h2></div>{text && <p>{text}</p>}</div>;
}
