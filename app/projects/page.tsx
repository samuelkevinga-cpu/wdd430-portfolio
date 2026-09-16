import ProjectList from '@/components/ProjectList';
import { getProjects } from '@/lib/projects-db';

export const dynamic = 'force-dynamic';

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="mt-2 text-slate-700">
        All projects from the portfolio database.
      </p>
      <div className="mt-8">
        <ProjectList projects={projects} />
      </div>
    </section>
  );
}
