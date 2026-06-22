export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a className="project-cover" href={project.liveUrl || "#"} target="_blank" rel="noreferrer noopener">
        <img src={project.coverImage || "/projects/fortaleza.svg"} alt={`Portada de ${project.title}`} />
        <span>Ver proyecto</span>
      </a>
      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="badges">
          {(project.technologies || []).map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <a className="github-button" href={project.githubUrl || "#"} target="_blank" rel="noreferrer noopener">
          Ver en GitHub
        </a>
      </div>
    </article>
  );
}
