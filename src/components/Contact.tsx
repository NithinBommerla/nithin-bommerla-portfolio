
import React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Facebook,
  Instagram,
  MessageCircle
} from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  label: string;
}

const Contact = () => {
  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/NithinBommerla",
      icon: <Github size={12} />,
      label: "GitHub"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nithin-bommerla",
      icon: <Linkedin size={12} />,
      label: "LinkedIn"
    },
    {
      name: "X.com",
      url: "https://x.com/nithin_bommerla",
      icon: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="12" 
          height="12" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      ),
      label: "X.com"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/nithin.bommerla",
      icon: <Facebook size={12} />,
      label: "Facebook"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/i.m._.nithin",
      icon: <Instagram size={12} />,
      label: "Instagram"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/+919603614458",
      icon: <MessageCircle size={12} />,
      label: "WhatsApp"
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-20 mt-24 pt-36">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Feel free to reach out to me for any questions, collaboration opportunities, or just to say hello!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-transparent backdrop-blur-sm p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:nithinbommerla99@gmail.com" className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors">
                    nithinbommerla99@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-transparent backdrop-blur-sm p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a href="tel:+919603614458" className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors">
                    +91 9603614458
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-transparent backdrop-blur-sm p-6 rounded-xl shadow-sm border border-neutral-200 dark:border-neutral-800 md:col-span-2"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-center">Connect With Me</h3>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  variants={item}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent backdrop-blur-sm p-3 rounded-full shadow-sm hover:bg-primary hover:text-white dark:hover:text-white transition-colors border border-neutral-200 dark:border-neutral-800 flex items-center justify-center group"
                  aria-label={link.label}
                >
                  <div className="transition-transform group-hover:scale-125 duration-200">
                    {link.icon}
                  </div>
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
