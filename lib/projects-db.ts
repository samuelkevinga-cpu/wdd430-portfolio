// lib/projects-db.ts
import { sql } from '@vercel/postgres';
export const ITEMS_PER_PAGE = 6;

export interface Project {
    id: number;
    title: string;
    description: string;
    type: 'opensource' | 'school';
    technologies: string[];
    link?: string;
}

export async function getProjects(type?: string | null): Promise<Project[]> {
    if (type) {
        const { rows } = await sql<Project>`
      SELECT * FROM projects WHERE type = ${type} ORDER BY id
    `;
        return rows;
    }
    const { rows } = await sql<Project>`SELECT * FROM projects ORDER BY id`;
    return rows;
}

export async function getProjectById(id: number): Promise<Project | null> {
    const { rows } = await sql<Project>`
    SELECT * FROM projects WHERE id = ${id}
  `;
    return rows[0] ?? null;
}

function normalizeSearchQuery(query: string): string {
    // Limit the length and remove LIKE wildcards so URL input cannot broaden
    return query.trim().slice(0, 100).replace(/[\\%_]/g, '');
}

export async function fetchFilteredProjects(
    query: string,
    currentPage: number
): Promise<Project[]> {
    const safeQuery = normalizeSearchQuery(query);
    const offset = (Math.max(1, currentPage) - 1) * ITEMS_PER_PAGE;
    const searchPattern = `%${safeQuery}%`;

    const { rows } = await sql<Project>`
        SELECT * FROM projects
        WHERE title ILIKE ${searchPattern}
            OR description ILIKE ${searchPattern}
            OR technologies::text ILIKE ${searchPattern}
        ORDER BY id
        LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return rows;
}

export async function fetchProjectsPages(query: string): Promise<number> {
    const safeQuery = normalizeSearchQuery(query);
    const searchPattern = `%${safeQuery}%`;

    const { rows } = await sql<{ count: string }>`
        SELECT COUNT(*)::text AS count FROM projects
        WHERE title ILIKE ${searchPattern}
            OR description ILIKE ${searchPattern}
            OR technologies::text ILIKE ${searchPattern}
    `;

    return Math.ceil(Number(rows[0]?.count ?? 0) / ITEMS_PER_PAGE);
}