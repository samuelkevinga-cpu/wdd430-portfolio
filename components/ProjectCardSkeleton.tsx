export default function ProjectCardSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded border bg-white p-4"
        >
          {/* These blocks mirror the title, description, technologies, and link. */}
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
  );
}