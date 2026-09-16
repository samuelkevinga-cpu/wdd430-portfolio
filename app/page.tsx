import ProjectList from "@/components/ProjectList";
import { getProjects } from "@/lib/projects-db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <p className="font-semibold text-blue-600">
          Full-stack Developer
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          Building thoughtful web experiences from front to back.
        </h1>

        <p className="mt-6 text-lg text-slate-700">
          Hi, I am a full-stack developer who enjoys turning ideas into useful,
          polished web applications. I like working across the whole stack, from
          designing clean interfaces to building reliable server-side features
          that keep everything running smoothly.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">
          Featured Projects
        </h2>

        <ProjectList projects={projects} />
      </div>
    </section>
  );
}
