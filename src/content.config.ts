import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { iconNames } from './lib/icons';

/**
 * Content schemas. Every Markdown file in src/content/ is validated against
 * these at build time: a missing field, a typo in a category or a bad URL
 * fails the build with the file name, instead of silently rendering blank.
 */

const url = z.url();

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(320),
    category: z.enum(['ml', 'analytics', 'bi']),
    icon: z.enum(iconNames),
    status: z.enum(['complete', 'in-progress']).default('complete'),
    /** Lower numbers appear first. */
    order: z.number().int(),
    featured: z.boolean().default(false),
    showOnHome: z.boolean().default(false),
    /** Primary evaluation metric shown on the card. */
    metric: z
      .object({
        name: z.string(),
        value: z.string(),
        note: z.string().optional(),
      })
      .optional(),
    tags: z.array(z.string()).min(1),
    repo: url.optional(),
    demo: url.optional(),
    /** Short "approach" and "why it matters" shown on the card. */
    approach: z.string(),
    impact: z.string(),
    /** Whether the Markdown body is a full case study with its own page. */
    caseStudy: z
      .object({
        headline: z.string(),
        facts: z.array(z.object({ label: z.string(), value: z.string() })),
        results: z.array(z.object({ value: z.string(), label: z.string() })),
      })
      .optional(),
    publishedAt: z.coerce.date().optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    org: z.string(),
    location: z.string(),
    start: z.coerce.date(),
    end: z.coerce.date().optional(),
    link: url.optional(),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/education' }),
  schema: z.object({
    degree: z.string(),
    org: z.string(),
    year: z.string(),
    courses: z.array(z.string()).default([]),
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/certifications' }),
  schema: z.object({
    org: z.string(),
    title: z.string(),
    year: z.string(),
    order: z.number().int(),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    /** Drafts are never built in production. */
    draft: z.boolean().default(true),
    relatedProject: reference('projects').optional(),
  }),
});

export const collections = { projects, experience, education, certifications, writing };
