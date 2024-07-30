export interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
    side: 'left' | 'right';
  }
  
  export const experiences: ExperienceItem[] = [
    {
      title: "Full Stack Developer Intern",
      company: "Seraphic Advisors",
      period: "May 2024 - July 2024",
      description: "Developed and maintained multiple client websites. Improved site performance by 40% through optimization techniques.",
      skills: ["Next.js", "Bootstrap", "AWS S3", "MongoDB","API integration", "SEO optimization", "Brevo Mail API", "js-cookie"],
      side: 'right'
    },
    {
      title: "BigShot Intern",
      company: "StockGro",
      period: "2020 - 2022",
      description: "Implemented social investing concepts to real-world scenarios, attaining proficiency in portfolio management and risk-reward balancing",
      skills: ["Portfolio Management", "Leadership","Social Media Marketing"],
      side: 'left'
    },
  ];
  