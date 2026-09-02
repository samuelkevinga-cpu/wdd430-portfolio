interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <section className="rounded border bg-white p-4">
      <h3 className="text-lg font-semibold">{category}</h3>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded bg-slate-100 px-2 py-1 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
