import type { Language } from "@/types/language";
import type { Translation } from "@/types/translation";

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Kevin Mistrele",
      role: "Front-End Software Engineer",
      tagline:
        "I build scalable, high-performance web applications with React, Angular and TypeScript, focused on clean code, accessibility and great user experiences.",
      primaryCta: "View projects",
      secondaryCta: "Get in touch",
    },
    about: {
      title: "About me",
      paragraphs: [
        "Front-End Software Engineer with over 4 years of experience building scalable, high-performance web applications. Specialized in React, Angular and TypeScript, with a proven track record of delivering complex architectural solutions and driving business growth through technology.",
        "With recent expertise in the healthcare sector, I focus on building resilient, user-centered interfaces while maintaining high standards of Clean Code, accessibility and performance in Agile environments.",
        "I actively leverage AI-powered tools and agents (Claude Code, OpenAI Codex), including a custom multi-agent orchestration system that investigates problems, implements quality code, performs automated reviews and opens pull requests following project-specific standards.",
      ],
      skillsTitle: "Core skills",
    },
    experience: {
      title: "Experience",
      items: [
        {
          company: "Portal Telemedicina",
          role: "Front-End Engineer · Remote",
          period: "Jan 2024 — Present",
          highlights: [
            "Developed and maintained large-scale healthcare interfaces with Angular and React for thousands of daily medical exams.",
            "Engineered a configuration-based multi-tenant architecture, reducing client onboarding from 1 month to 1 day (97%).",
            "Designed a serverless WebRTC file transfer via QR Code, eliminating insecure third-party app usage.",
            "Integrated React micro-frontends into a legacy Angular codebase, reducing patient drop-off by ~20%.",
            "Refactored the proprietary Design System with TailwindCSS and TypeScript, cutting UI bugs by 30%.",
          ],
        },
        {
          company: "Freelance",
          role: "Full-Stack Developer",
          period: "Mar 2022 — Jan 2024",
          highlights: [
            "Built end-to-end web applications with React, Node.js and TypeScript for diverse clients.",
            "Applied SOLID and Clean Code to refactor legacy projects, reducing technical debt.",
            "Added Jest unit tests to validate core business logic and improve reliability.",
            "Used Docker and CI/CD to automate deployments and PostgreSQL for data integrity.",
          ],
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "A live preview of my latest work, pulled directly from GitHub.",
      featuredTag: "Featured",
      viewRepo: "Repository",
      viewLive: "Live demo",
      loading: "Loading projects from GitHub...",
      error: "Could not load live projects. Showing featured selection.",
      empty: "No public projects found.",
    },
    contact: {
      title: "Let's work together",
      subtitle:
        "I'm open to new opportunities and collaborations. Reach out through any channel below.",
      downloadResume: "Download resume",
    },
    footer: {
      builtWith: "Built with React, Three.js and TypeScript",
      rights: "All rights reserved.",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      contact: "Contato",
      resume: "Currículo",
    },
    hero: {
      greeting: "Olá, eu sou",
      name: "Kevin Mistrele",
      role: "Engenheiro de Software Front-End",
      tagline:
        "Construo aplicações web escaláveis e de alta performance com React, Angular e TypeScript, focado em clean code, acessibilidade e ótimas experiências de uso.",
      primaryCta: "Ver projetos",
      secondaryCta: "Entrar em contato",
    },
    about: {
      title: "Sobre mim",
      paragraphs: [
        "Engenheiro de Software Front-End com mais de 4 anos de experiência construindo aplicações web escaláveis e de alta performance. Especializado em React, Angular e TypeScript, com histórico comprovado de entregar soluções arquiteturais complexas e impulsionar o crescimento de negócios através da tecnologia.",
        "Com experiência recente no setor de saúde, foco em construir interfaces resilientes e centradas no usuário, mantendo altos padrões de Clean Code, acessibilidade e performance em ambientes Ágeis.",
        "Utilizo ativamente ferramentas e agentes de IA (Claude Code, OpenAI Codex), incluindo um sistema próprio de orquestração multi-agente que investiga problemas, implementa código de qualidade, realiza revisões automatizadas e abre pull requests seguindo os padrões de cada projeto.",
      ],
      skillsTitle: "Principais habilidades",
    },
    experience: {
      title: "Experiência",
      items: [
        {
          company: "Portal Telemedicina",
          role: "Engenheiro Front-End · Remoto",
          period: "Jan 2024 — Presente",
          highlights: [
            "Desenvolvi e mantive interfaces de saúde em larga escala com Angular e React para milhares de exames médicos diários.",
            "Projetei uma arquitetura multi-tenant baseada em configuração, reduzindo o onboarding de clientes de 1 mês para 1 dia (97%).",
            "Criei uma transferência de arquivos serverless via WebRTC e QR Code, eliminando o uso inseguro de apps de terceiros.",
            "Integrei micro-frontends React em uma base legada Angular, reduzindo a evasão de pacientes em ~20%.",
            "Refatorei o Design System proprietário com TailwindCSS e TypeScript, reduzindo bugs de UI em 30%.",
          ],
        },
        {
          company: "Freelance",
          role: "Desenvolvedor Full-Stack",
          period: "Mar 2022 — Jan 2024",
          highlights: [
            "Construí aplicações web ponta a ponta com React, Node.js e TypeScript para diversos clientes.",
            "Apliquei SOLID e Clean Code para refatorar projetos legados, reduzindo a dívida técnica.",
            "Adicionei testes unitários com Jest para validar regras de negócio e aumentar a confiabilidade.",
            "Usei Docker e CI/CD para automatizar deploys e PostgreSQL para integridade dos dados.",
          ],
        },
      ],
    },
    projects: {
      title: "Projetos",
      subtitle: "Uma prévia ao vivo dos meus trabalhos recentes, direto do GitHub.",
      featuredTag: "Destaque",
      viewRepo: "Repositório",
      viewLive: "Ver online",
      loading: "Carregando projetos do GitHub...",
      error: "Não foi possível carregar os projetos ao vivo. Exibindo seleção em destaque.",
      empty: "Nenhum projeto público encontrado.",
    },
    contact: {
      title: "Vamos trabalhar juntos",
      subtitle:
        "Estou aberto a novas oportunidades e colaborações. Fale comigo por qualquer canal abaixo.",
      downloadResume: "Baixar currículo",
    },
    footer: {
      builtWith: "Construído com React, Three.js e TypeScript",
      rights: "Todos os direitos reservados.",
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      resume: "Currículum",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Kevin Mistrele",
      role: "Ingeniero de Software Front-End",
      tagline:
        "Construyo aplicaciones web escalables y de alto rendimiento con React, Angular y TypeScript, enfocado en clean code, accesibilidad y excelentes experiencias de usuario.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Contactar",
    },
    about: {
      title: "Sobre mí",
      paragraphs: [
        "Ingeniero de Software Front-End con más de 4 años de experiencia construyendo aplicaciones web escalables y de alto rendimiento. Especializado en React, Angular y TypeScript, con un historial comprobado de entregar soluciones arquitectónicas complejas e impulsar el crecimiento del negocio a través de la tecnología.",
        "Con experiencia reciente en el sector salud, me enfoco en construir interfaces resilientes y centradas en el usuario, manteniendo altos estándares de Clean Code, accesibilidad y rendimiento en entornos Ágiles.",
        "Utilizo activamente herramientas y agentes de IA (Claude Code, OpenAI Codex), incluyendo un sistema propio de orquestación multi-agente que investiga problemas, implementa código de calidad, realiza revisiones automatizadas y abre pull requests siguiendo los estándares de cada proyecto.",
      ],
      skillsTitle: "Habilidades principales",
    },
    experience: {
      title: "Experiencia",
      items: [
        {
          company: "Portal Telemedicina",
          role: "Ingeniero Front-End · Remoto",
          period: "Ene 2024 — Presente",
          highlights: [
            "Desarrollé y mantuve interfaces de salud a gran escala con Angular y React para miles de exámenes médicos diarios.",
            "Diseñé una arquitectura multi-tenant basada en configuración, reduciendo el onboarding de clientes de 1 mes a 1 día (97%).",
            "Creé una transferencia de archivos serverless vía WebRTC y código QR, eliminando el uso inseguro de apps de terceros.",
            "Integré micro-frontends de React en una base heredada de Angular, reduciendo el abandono de pacientes en ~20%.",
            "Refactoricé el Design System propio con TailwindCSS y TypeScript, reduciendo errores de UI en un 30%.",
          ],
        },
        {
          company: "Freelance",
          role: "Desarrollador Full-Stack",
          period: "Mar 2022 — Ene 2024",
          highlights: [
            "Construí aplicaciones web de extremo a extremo con React, Node.js y TypeScript para diversos clientes.",
            "Apliqué SOLID y Clean Code para refactorizar proyectos heredados, reduciendo la deuda técnica.",
            "Añadí pruebas unitarias con Jest para validar la lógica de negocio y mejorar la fiabilidad.",
            "Usé Docker y CI/CD para automatizar despliegues y PostgreSQL para la integridad de los datos.",
          ],
        },
      ],
    },
    projects: {
      title: "Proyectos",
      subtitle: "Una vista en vivo de mi trabajo reciente, directo desde GitHub.",
      featuredTag: "Destacado",
      viewRepo: "Repositorio",
      viewLive: "Ver en vivo",
      loading: "Cargando proyectos desde GitHub...",
      error: "No se pudieron cargar los proyectos en vivo. Mostrando selección destacada.",
      empty: "No se encontraron proyectos públicos.",
    },
    contact: {
      title: "Trabajemos juntos",
      subtitle:
        "Estoy abierto a nuevas oportunidades y colaboraciones. Contáctame por cualquier canal a continuación.",
      downloadResume: "Descargar currículum",
    },
    footer: {
      builtWith: "Construido con React, Three.js y TypeScript",
      rights: "Todos los derechos reservados.",
    },
  },
};
