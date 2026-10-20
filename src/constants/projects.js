export const projectsTitle = "Projects";

export const projects = [
  {
    title: "JobJournal — Career Journaling & Document Management Platform",
    desc: "Full-stack platform for managing career journals, profile information, and important documents through a centralized Document Vault.",
    points: [
      "Developed RESTful APIs using Node.js and Express.js for user and document management",
      "Integrated Cloudinary for secure document and profile image storage",
      "Implemented document upload, preview, download, search, and category-based filtering",
      "Built user-specific resource access and account deletion with associated data cleanup",
      "Deployed the React frontend on Vercel and backend on Render",
    ],
    tech: "React, Node.js, Express, MongoDB, Mongoose, Tailwind CSS, Cloudinary, JWT",
    link: "https://job-journal-dusky.vercel.app",
    github: "https://github.com/22-vaibhav/Job-Journal",
  },
  {
    title: "Prepify AI — Interview Preparation Platform",
    desc: "AI-powered platform that analyzes resumes against job descriptions and generates personalized interview questions.",
    points: [
      "Generated technical & behavioral questions using LLM APIs",
      "Used Google Gemini API for intelligent question generation",
      "Implemented resume parsing and skill-gap analysis",
      "Built secure REST APIs with JWT authentication",
      "Enabled resume scoring and PDF generation",
    ],
    tech: "React, Node.js, Express, MongoDB, Gemini APIs",
    link: "https://prepify-ai-zeta.vercel.app",
    github: "https://github.com/22-vaibhav/Prepify-AI",
  },
  {
    title: "InsightForge — Multi-Agent AI Research System",
    desc: "Multi-agent system that automates research using search, scraping, and report generation.",
    points: [
      "Built LangChain-based multi-agent workflow",
      "Integrated Tavily API & BeautifulSoup for real-time data",
      "Designed LLM-driven research & critique pipeline",
      "Developed Streamlit UI with downloadable reports",
    ],
    tech: "Python, LangChain, Mistral AI, Streamlit",
    link: "https://multi-agent-research-system-69gtkgbo2bihaj4use9cwr.streamlit.app/",
    github: "https://github.com/22-vaibhav/Multi-Agent-Research-System",
  },
];
