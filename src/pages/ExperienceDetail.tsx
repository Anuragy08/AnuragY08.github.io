import { ArrowLeft, BriefcaseBusiness, CalendarDays, MapPin, Target } from "lucide-react";
import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { experiences } from "../data/experiences";

export default function ExperienceDetail() {
  const { slug } = useParams();
  const experience = experiences.find((item) => item.slug === slug);

  useEffect(() => {
    if (!experience) return;

    document.title = `${experience.organization} | Anurag Yadav`;
    window.scrollTo({ top: 0, behavior: "auto" });

    return () => {
      document.title = "Anurag Yadav | Senior Data Analyst";
    };
  }, [experience]);

  if (!experience) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className={`experience-page experience-page-${experience.accent}`}>
      <nav className="detail-nav" aria-label="Experience page navigation">
        <Link to="/#career"><ArrowLeft size={18} aria-hidden="true" /> Back to portfolio</Link>
      </nav>

      <header className="experience-hero">
        <h1>{experience.organization}</h1>
        <h2>{experience.project}</h2>
        <div className="experience-meta">
          <span><BriefcaseBusiness aria-hidden="true" />{experience.position}</span>
          <span><CalendarDays aria-hidden="true" />{experience.period}</span>
          <span><MapPin aria-hidden="true" />{experience.location}</span>
        </div>
      </header>

      <section className="experience-layout">
        <article className="experience-main-card">
          <p className="detail-label">Business challenge</p>
          <h2>Context and requirement</h2>
          <p>{experience.challenge}</p>

          <p className="detail-label">Project contribution</p>
          <h2>Tasks handled</h2>
          <ul>
            {experience.tasks.map((task) => <li key={task}>{task}</li>)}
          </ul>
        </article>

        <aside className="experience-side-column">
          <section className="detail-card">
            <Target aria-hidden="true" />
            <p className="detail-label">Value delivered</p>
            <p>{experience.value}</p>
          </section>

          <section className="detail-card">
            <p className="detail-label">Assignment details</p>
            <dl>
              <div><dt>Position / Designation</dt><dd>{experience.position}</dd></div>
              <div><dt>Role played</dt><dd>{experience.role}</dd></div>
              <div><dt>Work area</dt><dd>{experience.workArea}</dd></div>
              <div><dt>Organization</dt><dd>{experience.organization}</dd></div>
              <div><dt>Client reference</dt><dd>On request</dd></div>
            </dl>
          </section>
        </aside>
      </section>

      <section className="experience-switcher" aria-label="Other organizational experiences">
        <h2>Other experience</h2>
        <div>
          {experiences.filter((item) => item.slug !== experience.slug).map((item) => (
            <Link key={item.slug} to={`/experience/${item.slug}`}>{item.organization}</Link>
          ))}
        </div>
      </section>
    </main>
  );
}
