import { loadPublications } from '@/lib/publication';
import { z, defineCollection } from 'astro:content';

const course = z.object({
  code: z.string(),
  title: z.string(),
  course: z.string(),
  campus: z.string(),
  description: z.string(),
  homepage: z.string(),
});

const education = z.object({
  title: z.string(),
  school: z.string(),
  homepage: z.string().optional(),
  description: z.string(),
  startDate: z.number(),
  endDate: z.union([z.number(), z.literal('-')]),
});

const experience = z.object({
  title: z.string(),
  company: z.string(),
  homepage: z.string(),
  description: z.string(),
  startDate: z.number(),
  endDate: z.union([z.number(), z.literal('-')]),
});

const project = z.object({
  title: z.string(),
  description: z.string().optional(),
  homepage: z.string().optional(),
});

const publication = z.object({
  title: z.string(),
  author: z.string(),
  year: z.number(),
  local: z.string().optional(),
  url: z.string().optional(),
});

const courseCollection = defineCollection({
  type: 'data',
  schema: course,
});

const experienceCollection = defineCollection({
  type: 'data',
  schema: experience,
});

const educationCollection = defineCollection({
  type: 'data',
  schema: education,
});

const projectCollection = defineCollection({
  type: 'data',
  schema: project,
});

const publicationCollection = defineCollection({
  schema: publication,
  loader: () => loadPublications('src/content/_publications'),
});

export const collections = {
  courses: courseCollection,
  educations: educationCollection,
  experiences: experienceCollection,
  projects: projectCollection,
  publications: publicationCollection,
};
