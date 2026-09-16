import ProjectList from '@/components/ProjectList';
import Pagination from '@/components/Pagination';
import ProjectSearch from '@/components/ProjectSearch';
import {
  fetchFilteredProjects,
  fetchProjectsPages,
} from '@/lib/projects-db';

export const dynamic = 'force-dynamic';

export default async function ProjectsPage(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query ?? '';
  const requestedPage = Number(searchParams?.page ?? '1');
  const currentPage = Number.isInteger(requestedPage) && requestedPage > 0
    ? requestedPage
    : 1;

  // Run the page query and count query together so neither request delays the
  // other before the server can render.
  const [projects, totalPages] = await Promise.all([
    fetchFilteredProjects(query, currentPage),
    fetchProjectsPages(query),
  ]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="mt-2 text-slate-700">
        All projects from the portfolio database.
      </p>
      <ProjectSearch />
      <div className="mt-8">
        <ProjectList projects={projects} />
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </section>
  );
}
