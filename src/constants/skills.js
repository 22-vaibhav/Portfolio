import javaIcon from "../assets/icons/java.png";
import springbootIcon from "../assets/icons/springboot.png";
import springIcon from "../assets/icons/Spring.svg";
import restapiIcon from "../assets/icons/restapi.png";
import reactIcon from "../assets/icons/react.png";
import javascriptIcon from "../assets/icons/javascript.png";
import typescriptIcon from "../assets/icons/typescript.png";
import mysqlIcon from "../assets/icons/mysql.png";
import mongoIcon from "../assets/icons/mongo.png";
import githubIcon from "../assets/icons/github.png";
import gitIcon from "../assets/icons/git.png";
import postmanIcon from "../assets/icons/postman.png";
import pythonIcon from "../assets/icons/python.png";
import langchainIcon from "../assets/icons/langchain.svg";
import dockerIcon from "../assets/icons/docker.png";
import llmIcon from "../assets/icons/llm.png";
import genAiIcon from "../assets/icons/generative-ai.png";

export const skillsTitle = "Skills & Technologies";

export const skillCategories = [
  {
    category: "Backend",
    color: "var(--blue-light)",
    skills: [
      { name: "Java", icon: javaIcon },
      { name: "Spring Boot", icon: springbootIcon },
      { name: "Spring MVC", icon: springIcon },
      { name: "Spring Security", icon: springIcon },
      { name: "REST APIs", icon: restapiIcon },
    ],
  },
  {
    category: "Frontend",
    color: "var(--green-light)",
    skills: [
      { name: "React", icon: reactIcon },
      { name: "JavaScript", icon: javascriptIcon },
      { name: "TypeScript", icon: typescriptIcon },
    ],
  },
  {
    category: "Databases",
    color: "var(--purple-light)",
    skills: [
      { name: "MySQL", icon: mysqlIcon },
      { name: "MongoDB", icon: mongoIcon },
    ],
  },
  {
    category: "Cloud & Tools",
    color: "var(--orange-light)",
    skills: [
      { name: "Git", icon: gitIcon },
      { name: "GitHub", icon: githubIcon },
      { name: "Docker", icon: dockerIcon },
      { name: "Postman", icon: postmanIcon },
    ],
  },
  {
    category: "AI",
    color: "var(--yellow)",
    skills: [
      { name: "Python", icon: pythonIcon },
      { name: "LangChain", icon: langchainIcon },
      { name: "LLMs", icon: llmIcon },
      { name: "Generative AI", icon: genAiIcon },
    ],
  },
];
