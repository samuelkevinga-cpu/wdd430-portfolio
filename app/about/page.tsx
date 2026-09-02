import SkillCard from "@/components/SkillCard";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "API Routes", "Databases", "Authentication"],
  },
  {
    category: "Workflow",
    skills: ["Git", "Responsive Design", "Accessibility", "Problem Solving"],
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold">
          About Me
        </h1>

        <p className="mt-6 text-lg text-slate-700">
          I am a developer who enjoys building practical, well-organized web
          applications that feel good to use. I like learning how each part of a
          project fits together, whether I am shaping the user interface,
          planning the data flow, or improving the small details that make an
          experience feel more complete.
        </p>

        <p className="mt-4 text-lg text-slate-700">
          My goal is to keep growing as a full-stack developer while creating
          work that is clear, dependable, and helpful for real people.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <SkillCard
            key={group.category}
            category={group.category}
            skills={group.skills}
          />
        ))}
      </div>
    </section>
  );
}
