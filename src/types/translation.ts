export interface ExperienceContent {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Translation {
  nav: {
    about: string;
    experience: string;
    projects: string;
    contact: string;
    resume: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    tagline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    skillsTitle: string;
  };
  experience: {
    title: string;
    items: ExperienceContent[];
  };
  projects: {
    title: string;
    subtitle: string;
    featuredTag: string;
    viewRepo: string;
    viewLive: string;
    loading: string;
    error: string;
    empty: string;
  };
  contact: {
    title: string;
    subtitle: string;
    downloadResume: string;
  };
  footer: {
    builtWith: string;
    rights: string;
  };
}
