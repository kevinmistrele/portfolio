import type { ContactLink, ResumeFile } from "@/types/profile";

export const githubUsername = "kevinmistrele";

export const skills: string[] = [
  "React",
  "Angular",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "RxJS",
  "TailwindCSS",
  "Node.js",
  "NestJS",
  "WebRTC",
  "Jest",
  "React Testing Library",
  "WCAG / Accessibility",
  "CI/CD",
  "Docker",
  "PostgreSQL",
  "Clean Code",
  "Agile / Scrum",
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "kevintavaresmistrele@gmail.com",
    href: "mailto:kevintavaresmistrele@gmail.com",
    icon: "mail",
  },
  {
    label: "Phone",
    value: "+55 11 94217-3058",
    href: "tel:+5511942173058",
    icon: "phone",
  },
  {
    label: "LinkedIn",
    value: "in/kevinmistrele",
    href: "https://www.linkedin.com/in/kevinmistrele/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "@kevinmistrele",
    href: "https://github.com/kevinmistrele",
    icon: "github",
  },
];

export const resumeFiles: ResumeFile = {
  pt: "./resume/Kevin-Mistrele-Curriculo-PT.pdf",
  en: "./resume/Kevin-Mistrele-Resume-EN.pdf",
  es: "./resume/Kevin-Mistrele-CV-ES.pdf",
};
