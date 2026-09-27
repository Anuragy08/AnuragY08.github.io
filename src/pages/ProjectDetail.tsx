import { ArrowLeft, CheckCircle2, FileText, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { portfolioProjects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="work-project-page">
        <div className="work-project-not-found">
          <h1>Project not found</h1>
          <Link to="/">Return to portfolio</Link>
        </div>
      </main>
    );
  }

  return (
    <main className={`work-project-page work-project-page-${project.accent}`}>
      <nav className="detail-nav" aria-label="Project navigation">
        <Link to="/projects"><ArrowLeft size={18} aria-hidden="true" /> Back to projects</Link>
      </nav>

      <header className="work-project-hero">
        <p>{project.category}</p>
        <h1>{project.title}</h1>
        <div className="work-project-tools">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
        {project.github && <a className="work-project-github" href={project.github} target="_blank" rel="noreferrer"><Github size={18} aria-hidden="true" /> View GitHub repository</a>}
      </header>

      <div className="work-project-detail-grid">
        <section>
          <p className="section-kicker">Project overview</p>
          <h2>Business Context</h2>
          <p>{project.summary}</p>
        </section>
        <section>
          <p className="section-kicker">Analytical focus</p>
          <h2>Objectives & Approach</h2>
          <ul>
            {project.objectives.map((objective) => <li key={objective}><CheckCircle2 aria-hidden="true" /> <span>{objective}</span></li>)}
          </ul>
        </section>
      </div>

      {(project.screenshots?.length || project.documentation?.length) ? (
        <section className="work-project-evidence" aria-label="Project screenshots and documentation">
          <div className="work-project-evidence-heading">
            <div>
              <p className="section-kicker">Project evidence</p>
              <h2>Dashboards & Documentation</h2>
            </div>
            {project.documentation?.length ? (
              <div className="work-project-documents">
                {project.documentation.map((document) => (
                  <a key={document.href} href={document.href} target="_blank" rel="noreferrer">
                    <FileText size={17} aria-hidden="true" />
                    <span>{document.label}</span>
                    <small>{document.type}</small>
                  </a>
                ))}
              </div>
            ) : null}
          </div>
          {project.screenshots?.length ? (
            <div className="work-project-gallery">
              {project.screenshots.map((screenshot) => (
                <a key={screenshot.src} href={screenshot.src} target="_blank" rel="noreferrer" className="work-project-gallery-item">
                  <img src={screenshot.src} alt={screenshot.alt} loading="lazy" />
                </a>
              ))}
            </div>
          ) : null}
        </section>
      ) : null}
    </main>
  );
}
