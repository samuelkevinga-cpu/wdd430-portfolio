import ProjectList from '@/components/ProjectList';
import { getProjects } from '@/lib/projects-db';

export default async function SchoolProjectsPage() {
  const projects = await getProjects('school');

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold">School Projects</h1>
      <p className="mt-2 text-slate-700">
        Projects completed for school coursework.
      </p>
      <div className="mt-8">
        <ProjectList projects={projects} />
      </div>
    </section>
  );
}
