export type AddressKeys =
  | 'github'
  | 'linkedin'
  | 'lattes'
  | 'researchgate'
  | 'googleScholar'
  | 'orcid'
  | 'webOfScience'
  | 'instagram'
  | 'threads'
  | 'bluesky'
  | 'twitter'
  | 'email';

export type Profile = {
  name: string;
  description: string;
  homepage: string;
  addresses: Record<AddressKeys, string>;
};

export const PROFILE: Profile = {
  name: 'Luiz Carlos Chaves',
  description: 'Professor do IFPB especializado na construção de sistemas Web.',
  homepage: '',
  addresses: {
    github: 'https://github.com/luizchaves',
    linkedin: 'https://www.linkedin.com/in/luizcarloschaves/',
    lattes: 'http://lattes.cnpq.br/7165875430419020',
    researchgate: 'https://www.researchgate.net/profile/Luiz_Rodrigues_Chaves',
    googleScholar: 'https://scholar.google.com/citations?user=SVAj31MAAAAJ',
    orcid: 'https://orcid.org/0000-0002-4918-714X',
    webOfScience:
      'https://www.webofscience.com/wos/author/record/LOQ-9457-2024',
    instagram: 'https://www.instagram.com/luizcrchaves/',
    threads: 'https://www.threads.net/@luizcrchves',
    bluesky: 'https://bsky.app/profile/luizcarloschaves.bsky.social',
    twitter: 'http://twitter.com/luizchavesjp',
    email: 'mailto:luiz.chaves@ifpb.edu.br',
  },
};
