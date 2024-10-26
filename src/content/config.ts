import { loadPublications } from '@/lib/publication';
import { z, defineCollection } from 'astro:content';

export type Publication = z.infer<typeof publication>;
export type ProfileItem = z.infer<typeof profileItem>;

export const profileItem = z.object({
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
  schema: profileItem,
});

const experienceCollection = defineCollection({
  type: 'data',
  schema: profileItem,
});

const educationCollection = defineCollection({
  type: 'data',
  schema: profileItem,
});

const projectCollection = defineCollection({
  type: 'data',
  schema: profileItem,
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
