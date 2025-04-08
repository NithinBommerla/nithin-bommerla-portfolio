
import React from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  logo: string;
  category: string;
}

const Skills = () => {
  const skills: Skill[] = [
    // Programming Languages
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Programming Languages" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Programming Languages" },
    { name: "JavaScript", logo: "/lovable-uploads/b7f1f551-160d-4a74-954a-b7afa793e04e.png", category: "Programming Languages" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", category: "Programming Languages" },
    { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg", category: "Programming Languages" },
    { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", category: "Programming Languages" },
    
    // Backend
    { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", category: "Backend" },
    { name: "NodeJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
    { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", category: "Backend" },
    
    // BaaS (Backend as a Service)
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", category: "BaaS" },
    { name: "Supabase", logo: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png", category: "BaaS" },
    
    // Frontend
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Frontend" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "Frontend" },
    { name: "ReactJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
    { name: "ViteJS", logo: "https://vitejs.dev/logo.svg", category: "Frontend" },
    { name: "NextJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "Frontend" },
    
    // Databases
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Databases" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Databases" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Databases" },
    
    // Miscellaneous
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "Miscellaneous" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", category: "Miscellaneous" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Miscellaneous" },
    { name: "Apache Kafka", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg", category: "Miscellaneous" },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", category: "Miscellaneous" },
    
    // Machine Learning
    { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", category: "Machine Learning" },
    { name: "Numpy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", category: "Machine Learning" },
    { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", category: "Machine Learning" },
    
    // Data Engineering
    { name: "Apache Spark", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg", category: "Data Engineering" },
    { name: "Airflow", logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/AirflowLogo.png", category: "Data Engineering" },
    { name: "Hadoop", logo: "https://upload.wikimedia.org/wikipedia/commons/3/38/Hadoop_logo_new.svg", category: "Data Engineering" },
  ];

  // Filter out the categories we want to display
  const categories = [...new Set(skills.map(skill => skill.category))];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  return (
    <section id="skills" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies across the full stack development spectrum.
            Here's an overview of my technical expertise.
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: false, margin: "-100px" }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold mb-6 border-b pb-2 text-center">{category}</h3>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, margin: "-100px" }}
              className="flex flex-wrap justify-center gap-3 mx-auto"
            >
              {skills
                .filter(skill => skill.category === category)
                .map((skill) => (
                  <motion.div 
                    key={skill.name}
                    variants={item}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                    className="flex flex-col items-center justify-center bg-transparent backdrop-blur-sm rounded-lg p-3 border border-neutral-200 dark:border-neutral-800 hover:shadow-md transition-all duration-300 w-[120px]"
                  >
                    <div className="w-10 h-10 mb-2 flex items-center justify-center">
                      <img 
                        src={skill.logo} 
                        alt={skill.name} 
                        className="w-full h-full object-contain"
                        style={{ filter: 'var(--tw-filter)' }}
                      />
                    </div>
                    <h4 className="text-xs font-medium text-center">{skill.name}</h4>
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
