import { title } from "process";

export const PERSONAL_APPS = [
    {
        title: "Academic Plagiarism Checker - For Handwritten Submissions 📝",
        repo: "https://github.com/GunalGupta/Academic-Plagiarism-Checker---For-Handwritten-Submissions",
        external: "https://www.npmjs.com/package/states-nepal",
        description:
          "A tool that aims to tackle the issue of plagiarism in handwritten submissions. The system developed based on Multi-level detection using the combination of digital pattern analysis and text content comparison to detect potential instances of plagiarism.",
        tags: ["Streamlit", "image-processing", "openai", "optical character recognition", "sentence transformers"],
        thumbnail: "/_static/projects/academic-plagiarism-detector-for-handwritten-assignments.webp",
    },
    {
      title: "Bank Hamara - Bank Management System",
      tags: ["Handlebars", "Bootstrap", "JavaScript", "NodeJS", "MySQL","Express"],
      description:
        "A Full-Stack web application developed and designed to manage daily operations happened in bank, providing account creation, user dashboard for customers, and admin ui. The application is built using HTML, CSS, and JavaScript for the front-end and MySQL for the back-end.",
      thumbnail: "/_static/projects/bank-hamara.png",
      repo: "https://github.com/GunalGupta/Bank",
    },
    {
      title: "Virtual Lab",
      repo: "https://github.com/GunalGupta/Virtual-Lab-COA-Project",
      thumbnail: "/_static/projects/virtual-lab-coa.png",
      description:
        "A Virtual Lab simulator for the coursework of Computer Organization & Architecture, includes interactive convertors such as coordinate convertor, a number system convertor, an air conditioning mate, and a Gray modulo-10 convertor with detailed documentation.",
      tags: ["HTML", "CSS", "JavaScript", "PHP", "jQuery"],
    },
  ] as const;

  export const CLIENT_APPS = [
    {
        title: "Seraphic Advisors - Advocates & Solicitors",
        demo: "https://www.taxnfiguru.com/",
        thumbnail: "/_static/projects/seraphic-advisors.png",
        description:
            "Developed the entire Seraphic Advisors website using NextJS, delivering a seamless and responsive user experience. Provided full stack services, including front-end design, back-end integration, API management, deployment and SEO services, ensuring a robust and efficient platform for their legal services.",
        tags: ["NextJS", "TypeScript","Bootstrap", "MongoDB", "AWS S3", "Brevo Mail API", "Google Analytics"],
    },
    {
        title: "TaxNFinGuru - GST & Tax Filing Services",
        demo: "https://www.taxnfiguru.com/",
        thumbnail: "/_static/projects/taxnfinguru.png",
        description:
            "Designed and developed the TaxNFinGuru website using NextJS, focusing on a sleek and responsive user interface. Delivered front-end services with intricate microinteractions to attract and engage customers while ensuring a smooth and efficient platform for their financial and accounting service offerings.",
        tags: ["NextJS", "Typescript", "Tailwind CSS", "framer-motion"],
    },
    {
        title: "Prof. Dr. Deepika Gupta - Academic Portfolio",
        demo: "https://www.deepikagupta.co.in/",
        thumbnail: "/_static/projects/deepika-gupta-portfolio.png",
        description:
            "A personal portfolio website for Prof. Dr. Deepika Gupta. The website showcases her academic and professional accomplishments and provides visitors with information about her research, publications, and projects.",
        tags: ["HTML", "CSS", "JavaScript", "AOS Library"],
    },
  ] as const;
  