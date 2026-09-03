import { content, type Locale } from "@/components/landing/data";

export function Demos({ locale }: { locale: Locale }) {
  const copy = content[locale];

  return (
    <section className="section demos-section" id="proyectos" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-intro section-intro-wide">
          <h2 id="projects-title">{copy.projectsTitle}</h2>
          <p>{copy.projectsIntro}</p>
        </div>
        <div className="projects-list">
          {copy.projects.map((project, index) => {
            const titleId = `project-${index}-title`;
            return (
              <article className="freight-pilot" aria-labelledby={titleId} key={project.name}>
                <div className="freight-pilot-heading">
                  <p className="evidence-label">{project.statusLabel}</p>
                  <p className="evidence-status">{project.status}</p>
                </div>
                <div className="freight-pilot-copy">
                  <h3 id={titleId}>{project.name}</h3>
                  <p>{project.summary}</p>
                </div>
                <div className="project-problem">
                  <p className="flow-label">{project.problemLabel}</p>
                  <p>{project.problem}</p>
                </div>
                <div className="freight-pilot-details">
                  <div>
                    <p className="flow-label">{project.decisionsLabel}</p>
                    <ul>{project.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ul>
                  </div>
                  <div>
                    <p className="flow-label">{project.technologyLabel}</p>
                    <p>{project.technology}</p>
                  </div>
                </div>
                {project.link && (
                  <a className="button freight-pilot-link" href={project.link.href} target="_blank" rel="noreferrer">
                    {project.link.label} <span aria-hidden="true">↗</span><span className="sr-only"> ({copy.hero.newTab})</span>
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
