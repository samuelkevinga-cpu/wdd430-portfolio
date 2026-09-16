import { Suspense } from 'react';
import ProjectCardSkeleton from '@/components/ProjectCardSkeleton';
import SchoolProjectList from '@/components/SchoolProjectList';

export const dynamic = 'force-dynamic';

export default function SchoolProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold">School Projects</h1>
      <p className="mt-2 text-slate-700">
        Projects completed for school coursework.
      </p>
      <div className="mt-8">
        {/* The page shell renders first*/}
        <Suspense fallback={<ProjectCardSkeleton />}>
          <SchoolProjectList />
        </Suspense>
      </div>
    </section>
  );
}
