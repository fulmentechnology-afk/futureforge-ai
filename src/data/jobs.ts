export interface Job {
    id: string;
    title: string;
  
    category: string;
    department: string;
  
    location: string;
    type: string;
    experience: string;
    salary: string;
  
    description: string;
  
    skills: string[];
  
    featured: boolean;
    posted: string;
  }
  
  export const jobs: Job[] = [
    {
      id: "ai-automation-engineer",
  
      title: "AI Automation Engineer",
  
      category: "AI",
      department: "Engineering",
  
      location: "Remote",
  
      type: "Full Time",
  
      experience: "2+ Years",
  
      salary: "₹8–15 LPA",
  
      description:
        "Build enterprise AI solutions, automation workflows, intelligent business software, AI agents, and automation pipelines for global clients.",
  
      skills: [
        "React",
        "Node.js",
        "Python",
        "Gemini AI",
        "Automation",
        "REST APIs",
      ],
  
      featured: true,
  
      posted: "2 days ago",
    },
  
    {
      id: "react-frontend-developer",
  
      title: "React Frontend Developer",
  
      category: "Frontend",
      department: "Engineering",
  
      location: "Kerala / Remote",
  
      type: "Full Time",
  
      experience: "1+ Years",
  
      salary: "₹6–12 LPA",
  
      description:
        "Develop premium user interfaces for FutureForge AI, Lucy AI, GrowFast, Automentor, and enterprise SaaS products.",
  
      skills: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Vite",
        "CSS",
      ],
  
      featured: true,
  
      posted: "5 days ago",
    },
  
    {
      id: "business-development-executive",
  
      title: "Business Development Executive",
  
      category: "Business",
  
      department: "Sales",
  
      location: "Kerala",
  
      type: "Full Time",
  
      experience: "1+ Years",
  
      salary: "₹4–8 LPA",
  
      description:
        "Drive business growth by helping companies adopt AI, automation, and enterprise software solutions from Fulmen Technology.",
  
      skills: [
        "Sales",
        "CRM",
        "Lead Generation",
        "Communication",
        "Negotiation",
      ],
  
      featured: false,
  
      posted: "1 week ago",
    },
  
    {
      id: "ui-ux-designer",
  
      title: "UI / UX Designer",
  
      category: "Design",
  
      department: "Engineering",
  
      location: "Remote",
  
      type: "Full Time",
  
      experience: "2+ Years",
  
      salary: "₹6–10 LPA",
  
      description:
        "Design intuitive and premium user experiences for AI products, enterprise applications, and customer-facing platforms.",
  
      skills: [
        "Figma",
        "Adobe XD",
        "UI Design",
        "UX Research",
        "Prototyping",
      ],
  
      featured: false,
  
      posted: "3 days ago",
    },
  
    {
      id: "ai-research-intern",
  
      title: "AI Research Intern",
  
      category: "AI",
  
      department: "Engineering",
  
      location: "Remote",
  
      type: "Internship",
  
      experience: "Freshers",
  
      salary: "₹20,000 / month",
  
      description:
        "Work alongside our AI team on LLMs, AI agents, automation, prompt engineering, and experimental AI products.",
  
      skills: [
        "Python",
        "AI",
        "Machine Learning",
        "Prompt Engineering",
        "Git",
      ],
  
      featured: true,
  
      posted: "Today",
    },
  ];