import ProjectList from '@/components/ProjectList';
import { getProjects } from '@/lib/projects-db';

export const dynamic = 'force-dynamic';

export default async function OpenSourceProjectsPage() {
  const projects = await getProjects('opensource');

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold">Open Source Projects</h1>
      <p className="mt-2 text-slate-700">
        Open source contributions and related work.
      </p>
      <div className="mt-8">
        <ProjectList projects={projects} />
      </div>
    </section>
  );
}