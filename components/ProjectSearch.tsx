'use client';

import { useDebouncedCallback } from 'use-debounce';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function ProjectSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    // Copy the current URL so future filters can coexist with search.
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', '1');

    if (term.trim()) {
      params.set('query', term.trim());
    } else {
      params.delete('query');
    }

    // replace updates the page without adding one browser-history entry per
    // typed character
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <label className="mt-6 block max-w-xl">
      <span className="sr-only">Search projects</span>
      <input
        type="search"
        placeholder="Search projects..."
        defaultValue={searchParams.get('query') ?? ''}
        onChange={(event) => handleSearch(event.target.value)}
        className="w-full rounded border border-slate-300 bg-white px-4 py-2"
      />
    </label>
  );
}