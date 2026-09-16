export default function OpenSourceProjectsLoading() {
  return (
    <section className="mx-auto max-w-6xl animate-pulse px-6 py-16">
      {/* Keep the fallback's heading */}
      <div className="h-9 w-72 rounded bg-slate-200" />
      <div className="mt-3 h-5 w-96 max-w-full rounded bg-slate-200" />

      {/* Each card reserves the same space as a loaded */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="rounded border bg-white p-4">
            <div className="h-7 w-2/3 rounded bg-slate-200" />
            <div className="mt-4 space-y-3">
              <div className="h-4 rounded bg-slate-200" />
              <div className="h-4 w-5/6 rounded bg-slate-200" />
            </div>
            <div className="mt-4 flex gap-2">
              <div className="h-6 w-20 rounded bg-slate-200" />
              <div className="h-6 w-24 rounded bg-slate-200" />
            </div>
            <div className="mt-4 h-5 w-28 rounded bg-slate-200" />
          </div>
        ))}
      </div>
    </section>
  );
}