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

const program = z.object({
  code: z.string(),
  name: z.string(),
  degree: z.string(),
  homepage: z.string(),
});

const education = z.object({
  title: z.string(),
  workTitle: z.string().optional(),
  school: z.string().optional(),
  url: z.string().optional(),
  description: z.string().optional(),
  startDate: z.number(),
  endDate: z.number().optional(),
  program: program.optional(),
});

const experience = z.object({
  title: z.string(),
  company: z.string(),
  homepage: z.string(),
  description: z.string(),
  startDate: z.number(),
  endDate: z.number().optional(),
});

const project = z.object({
  title: z.string(),
  codeName: z.string(),
  origin: z.string(),
  description: z.string(),
  homepage: z.string().optional(),
  researchGroup: z.string().optional(),
  type: z.string().optional(),
  fundingCall: z.string().optional(),
  startDate: z.number(),
  endDate: z.number().optional(),
});

const code = z.object({
  title: z.string(),
  description: z.string().optional(),
  homepage: z.string().optional(),
});

const patent = z.object({
  title: z.string(),
  number: z.string(),
  nationality: z.string(),
  type: z.string(),
  origin: z.string(),
  year: z.number(),
  url: z.string().optional(),
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

const codeCollection = defineCollection({
  type: 'data',
  schema: code,
});

const patentCollection = defineCollection({
  type: 'data',
  schema: patent,
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
  codes: codeCollection,
  patents: patentCollection,
  publications: publicationCollection,
};
