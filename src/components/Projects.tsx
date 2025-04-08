
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  category: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Web App"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my projects and skills with smooth animations.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Website"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management app with real-time updates and progress tracking.",
      tags: ["React", "Firebase", "Redux", "Material UI"],
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Productivity"
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that shows current weather conditions with data visualization.",
      tags: ["JavaScript", "Chart.js", "API Integration", "CSS"],
      image: "https://images.unsplash.com/photo-1532978379173-523e16f371f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Data Viz"
    },
    {
      title: "Social Media App",
      description: "A social networking platform with user profiles, posts, and messaging features.",
      tags: ["React Native", "Express", "MongoDB", "Socket.io"],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Mobile App"
    },
    {
      title: "Recipe Finder",
      description: "An app to find recipes based on available ingredients in your kitchen.",
      tags: ["Vue.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Utility"
    }
  ];

  const ProjectContent = ({ project }: { project: Project }) => {
    return (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto mb-6">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            {project.description}
          </span>
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex} 
              className="bg-neutral-200/70 dark:bg-neutral-700/70 px-3 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 transition-colors"
            >
              <span>View Code</span>
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600 transition-colors"
            >
              <span>Live Demo</span>
            </a>
          )}
        </div>
        <img
          src={project.image}
          alt={project.title}
          className="mt-8 rounded-xl w-full max-h-80 object-cover"
        />
      </div>
    );
  };

  const cardProjects = projects.map((project, index) => ({
    title: project.title,
    category: project.category,
    src: project.image,
    content: <ProjectContent project={project} />
  }));

  const projectCards = cardProjects.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section id="projects" className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project reflects my skills and passion for creating
            user-friendly and efficient web applications.
          </p>
        </div>

        <Carousel items={projectCards} />
      </div>
    </section>
  );
};

export default Projects;
