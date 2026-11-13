import { ArrowUpRight, Github } from "lucide-react";

const badgeTones = ["badge-yellow", "badge-blue", "badge-pink"];

export default function ProjectCard({ project }) {
  const projectUrl = project.liveUrl || project.githubUrl;
  const projectAction = project.liveUrl ? "Open live project" : "View on GitHub";
  const preview = <img src={project.image} alt={project.imageAlt} />;

  return (
    <article className="project-card">
      <div className="project-preview">
        {projectUrl ? (
          <a
            className="project-preview-link"
            href={projectUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${projectAction}: ${project.title}`}
          >
            {preview}
            <span className="project-sticker" aria-hidden="true">
              {projectAction}
              <ArrowUpRight size={16} strokeWidth={2.2} />
            </span>
          </a>
        ) : (
          preview
        )}
        {project.technologies.length > 0 && (
          <div className="badge-stack">
            {project.technologies.map((tech, index) => (
              <span key={tech} className={`tech-badge ${badgeTones[index % badgeTones.length]}`}>
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="project-copy">
        {!project.placeholder && project.category ? (
          <span className="project-category">{project.category}</span>
        ) : null}
        <div className="project-title-row">
          <h3>{project.title}</h3>
        </div>
        {project.note ? <p>{project.note}</p> : null}
        <div className="project-actions">
          {project.liveUrl && (
            <a
              className="project-action project-action-live"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Live preview
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
          {project.githubUrl && (
            <a
              className="project-action project-action-code"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github size={15} aria-hidden="true" />
              GitHub repository
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
