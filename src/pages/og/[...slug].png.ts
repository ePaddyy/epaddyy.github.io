import type { APIRoute, GetStaticPaths } from 'astro';
import { site } from '../../config/site';
import { getProjects } from '../../lib/content';
import { renderOgImage } from '../../lib/og-image';

// /og/default.png, /og/projects.png and /og/projects/<id>.png for each case study
export const getStaticPaths = (async () => {
  const caseStudies = (await getProjects()).filter((p) => p.data.caseStudy);
  return [
    { params: { slug: 'default' }, props: { title: site.name, eyebrow: site.role } },
    {
      params: { slug: 'projects' },
      props: { title: 'Projects', eyebrow: 'Machine learning, analytics & BI' },
    },
    ...caseStudies.map((p) => ({
      params: { slug: `projects/${p.id}` },
      props: { title: p.data.caseStudy!.headline, eyebrow: 'Case study' },
    })),
  ];
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOgImage(props as { title: string; eyebrow: string });
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
