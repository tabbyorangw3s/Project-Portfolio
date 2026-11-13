import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionBlock from "./SectionBlock";
import { ScissorsDoodle } from "./Doodles";

export default function FeaturedProjects() {
  return (
    <SectionBlock
      id="projects"
      labelledBy="projects-title"
      title="Featured Projects"
      text="Academic and personal projects I've developed through my journey in Information Technology."
      doodle={<ScissorsDoodle className="intro-doodle" />}
    >
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionBlock>
  );
}
