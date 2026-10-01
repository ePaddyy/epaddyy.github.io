import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

export const categoryLabels: Record<Project['data']['category'], string> = {
  ml: 'Machine learning',
  analytics: 'Analysis',
  bi: 'Dashboards & BI',
};

export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export async function getHomeProjects(): Promise<Project[]> {
  return (await getProjects()).filter((p) => p.data.showOnHome);
}

export const projectUrl = (p: Project) => `/projects/${p.id}/`;

/** Published posts only in production; drafts are visible in `npm run dev`. */
export async function getPosts(): Promise<CollectionEntry<'writing'>[]> {
  const posts = await getCollection('writing', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

export async function getExperience(): Promise<CollectionEntry<'experience'>[]> {
  const items = await getCollection('experience');
  return items.sort((a, b) => b.data.start.valueOf() - a.data.start.valueOf());
}

export async function getEducation(): Promise<CollectionEntry<'education'>[]> {
  return getCollection('education');
}

export async function getCertifications(): Promise<CollectionEntry<'certifications'>[]> {
  const items = await getCollection('certifications');
  return items.sort((a, b) => a.data.order - b.data.order);
}

const monthYear = new Intl.DateTimeFormat('en-GB', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

/** "Nov 2025 – Dec 2025", "Mar 2026" (same month), or "Jan 2026 – Present". */
export function formatDateRange(start: Date, end?: Date): string {
  const s = monthYear.format(start);
  if (!end) return `${s} – Present`;
  const e = monthYear.format(end);
  return s === e ? s : `${s} – ${e}`;
}

export const formatDate = (d: Date) =>
  new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(d);
