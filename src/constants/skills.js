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
      { name: "Java", icon: javaIcon, link: "#" },
      { name: "Spring Boot", icon: springbootIcon, link: "#" },
      { name: "Spring MVC", icon: springIcon, link: "#" },
      { name: "Spring Security", icon: springIcon, link: "#" },
      { name: "REST APIs", icon: restapiIcon, link: "#" },
    ],
  },
  {
    category: "Frontend",
    color: "var(--green-light)",
    skills: [
      { name: "React", icon: reactIcon, link: "#" },
      { name: "JavaScript", icon: javascriptIcon, link: "#" },
      { name: "TypeScript", icon: typescriptIcon, link: "#" },
    ],
  },
  {
    category: "Databases",
    color: "var(--purple-light)",
    skills: [
      { name: "MySQL", icon: mysqlIcon, link: "#" },
      { name: "MongoDB", icon: mongoIcon, link: "https://drive.google.com/file/d/17rtitKXTwA6jbXkZNq63BUA9wsRVBsgk" },
    ],
  },
  {
    category: "Cloud & Tools",
    color: "var(--orange-light)",
    skills: [
      { name: "Git", icon: gitIcon, link: "#" },
      { name: "GitHub", icon: githubIcon, link: "#" },
      { name: "Docker", icon: dockerIcon, link: "#" },
      { name: "Postman", icon: postmanIcon, link: "#" },
    ],
  },
  {
    category: "AI",
    color: "var(--yellow)",
    skills: [
      { name: "Python", icon: pythonIcon, link: "#" },
      { name: "LangChain", icon: langchainIcon, link: "#" },
      { name: "LLMs", icon: llmIcon, link: "#" },
      { name: "Generative AI", icon: genAiIcon, link: "https://drive.google.com/file/d/1NUOR_atQoNxQKeSG-R7Wgcat1x1OCKRp" },
    ],
  },
];
