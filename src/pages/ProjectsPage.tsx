import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioProjects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <nav className="detail-nav" aria-label="Projects navigation">
        <Link to="/"><ArrowLeft size={18} aria-hidden="true" /> Back to home</Link>
      </nav>

      <header className="projects-page-hero">
        <h1>Real-World Projects</h1>
        <span>Practical analytics, business intelligence, SQL, and machine learning work built around real business questions.</span>
      </header>

      <section className="projects-page-grid" aria-label="Project collection">
        {portfolioProjects.map((project) => (
          <article className={`work-project-card work-project-card-${project.accent}`} key={project.slug}>
            <p className="work-project-category">{project.category}</p>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
            <div className="work-project-tags">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
            <div className="projects-page-actions">
              <Link to={`/projects/${project.slug}`}>View project <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
