import ProjectCard, { ProjectCardProps } from "./ProjectCard";

interface ProjectListProps {
  projects: ProjectCardProps[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}
