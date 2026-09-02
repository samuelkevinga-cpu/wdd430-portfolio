export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="rounded border bg-white p-4">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-2 text-slate-700">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded bg-slate-100 px-2 py-1 text-sm"
          >
            {technology}
          </span>
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-600"
        >
          View project
        </a>
      )}
    </article>
  );
}
