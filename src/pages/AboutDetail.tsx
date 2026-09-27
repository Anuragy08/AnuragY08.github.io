import { ArrowLeft, Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { experiences } from "../data/experiences";

const expertise = [
  "Advanced SQL and data analysis",
  "Power BI dashboards and DAX",
  "Python automation and data validation",
  "Data governance and reconciliation",
  "Stakeholder reporting and communication",
];

const education = [
  "PGDM — IT & Operations, Jaipuria Institute of Management (2014–2016)",
  "B.Tech — Information Technology, Lovely Professional University (2009–2013)",
];

const certifications = ["CCNA (R&S)", "Oracle Java SE 8 Programmer", "Six Sigma Green Belt"];

export default function AboutDetail() {
  return (
    <main className="resume-page">
      <nav className="resume-nav" aria-label="About page navigation">
        <Link to="/"><ArrowLeft size={18} aria-hidden="true" /> Back to home</Link>
        <a href="/documents/Anurag_Yadav_chrono_resume.pdf" download><Download size={18} aria-hidden="true" /> Download CV</a>
      </nav>

      <article className="resume-sheet">
        <header className="resume-header">
          <img src="/images/anurag-yadav.jpeg" alt="Portrait of Anurag Yadav" />
          <div>
            <p className="resume-label">Professional Profile</p>
            <h1>Anurag Yadav</h1>
            <h2>Senior Data Analyst</h2>
            <p>Data analytics and BI professional with 8+ years of experience across healthcare, digital identity, e-governance, customer loyalty, and campaign analytics.</p>
            <div className="resume-contact">
              <a href="mailto:anuragy08@gmail.com"><Mail size={17} aria-hidden="true" /> anuragy08@gmail.com</a>
              <a href="https://www.linkedin.com/in/anurag-yadav-a162a9b4/" target="_blank" rel="noreferrer"><Linkedin size={17} aria-hidden="true" /> LinkedIn</a>
              <a href="https://github.com/Anuragy08" target="_blank" rel="noreferrer"><Github size={17} aria-hidden="true" /> GitHub</a>
            </div>
          </div>
        </header>

        <div className="resume-layout">
          <aside className="resume-sidebar">
            <section>
              <h2>Core Expertise</h2>
              <ul>{expertise.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
            <section>
              <h2>Education</h2>
              <ul>{education.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
            <section>
              <h2>Certifications</h2>
              <ul>{certifications.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>
          </aside>

          <div className="resume-main">
            <section>
              <h2>About Me</h2>
              <p>I translate large, multi-source datasets into stakeholder-ready dashboards and evidence-based insights. My work combines SQL, Power BI, Python automation, data governance, and clear communication with technical and non-technical teams.</p>
            </section>
            <section>
              <h2>Professional Experience</h2>
              <div className="resume-timeline">
                {experiences.map((experience) => (
                  <article key={experience.slug}>
                    <div className="resume-role-heading">
                      <div>
                        <h3>{experience.position}</h3>
                        <strong>{experience.organization}</strong>
                      </div>
                      <span>{experience.period}</span>
                    </div>
                    <p>{experience.workArea}</p>
                    <Link to={`/experience/${experience.slug}`}>View assignment details</Link>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
