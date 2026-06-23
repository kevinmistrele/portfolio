import type { Project } from "@/types/project";

export const featuredProjectNames: string[] = [
  "finora-financeiro",
  "game-wingman-buddy",
  "My-Focus",
  "secure-auth-system",
  "standard-web-seed",
  "secure-auth-system-backend",
];

export const fallbackProjects: Project[] = [
  {
    id: 1,
    name: "finora-financeiro",
    description:
      "Personal finance platform with salary planning, expense tracking, shopping list with best-price comparison, and installment simulator. Built with React, Firebase, and NestJS.",
    language: "TypeScript",
    topics: ["react", "typescript", "firebase", "nestjs"],
    stars: 0,
    repositoryUrl: "https://github.com/kevinmistrele/finora-financeiro",
    homepageUrl: null,
    updatedAt: new Date().toISOString(),
    featured: true,
  },
  {
    id: 2,
    name: "game-wingman-buddy",
    description:
      "Social matchmaking platform for League of Legends players. Find a compatible duo by rank, join the queue, accept the match, and play together with real-time chat via Supabase.",
    language: "TypeScript",
    topics: ["react", "supabase", "matchmaking", "realtime"],
    stars: 0,
    repositoryUrl: "https://github.com/kevinmistrele/game-wingman-buddy",
    homepageUrl: null,
    updatedAt: new Date().toISOString(),
    featured: true,
  },
  {
    id: 3,
    name: "My-Focus",
    description:
      "Fullstack productivity app with Pomodoro, task lists, habit tracker, goals, mood log, and notes. Built as an npm monorepo with React frontend and Express + Prisma + PostgreSQL backend.",
    language: "TypeScript",
    topics: ["react", "express", "prisma", "monorepo"],
    stars: 0,
    repositoryUrl: "https://github.com/kevinmistrele/My-Focus",
    homepageUrl: null,
    updatedAt: new Date().toISOString(),
    featured: true,
  },
  {
    id: 4,
    name: "secure-auth-system",
    description:
      "Full authentication system with JWT sessions, email verification, and password recovery. React 19 frontend with shadcn/ui, Zod validation, and a dedicated Express + MongoDB backend.",
    language: "TypeScript",
    topics: ["react", "authentication", "jwt", "zod"],
    stars: 0,
    repositoryUrl: "https://github.com/kevinmistrele/secure-auth-system",
    homepageUrl: null,
    updatedAt: new Date().toISOString(),
    featured: true,
  },
  {
    id: 5,
    name: "standard-web-seed",
    description:
      "Production-ready React + TypeScript boilerplate with 3-layer architecture, automated quality gates (Husky, lint-staged), and a complete testing pyramid (Vitest + Playwright).",
    language: "TypeScript",
    topics: ["react", "typescript", "boilerplate", "playwright"],
    stars: 0,
    repositoryUrl: "https://github.com/kevinmistrele/standard-web-seed",
    homepageUrl: null,
    updatedAt: new Date().toISOString(),
    featured: true,
  },
  {
    id: 6,
    name: "secure-auth-system-backend",
    description:
      "REST API for full authentication lifecycle — registration, login, JWT sessions, email verification, and password recovery. Built with Express, MongoDB, bcrypt, and Nodemailer.",
    language: "TypeScript",
    topics: ["nodejs", "express", "mongodb", "jwt"],
    stars: 0,
    repositoryUrl: "https://github.com/kevinmistrele/secure-auth-system-backend",
    homepageUrl: null,
    updatedAt: new Date().toISOString(),
    featured: true,
  },
];
