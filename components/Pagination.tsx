'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function createPageURL(pageNumber: number): string {
    // Preserve the active search term while changing only the page number.
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  }

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className="mt-8 flex items-center justify-center gap-4" aria-label="Project pages">
      {currentPage > 1 ? (
        <Link
          href={createPageURL(currentPage - 1)}
          className="rounded border px-4 py-2 text-blue-600"
        >
          Previous
        </Link>
      ) : (
        <span className="rounded border px-4 py-2 text-slate-400">Previous</span>
      )}

      <span className="text-sm text-slate-700">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Link
          href={createPageURL(currentPage + 1)}
          className="rounded border px-4 py-2 text-blue-600"
        >
          Next
        </Link>
      ) : (
        <span className="rounded border px-4 py-2 text-slate-400">Next</span>
      )}
    </nav>
  );
}