
import { Home, User, Briefcase, FileText, Phone } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";
import Hero from '@/components/Hero';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { DotBackground } from '@/components/ui/dot-background';
import { ThemeProvider } from 'next-themes';

const Index = () => {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Experience', url: '#experience', icon: Briefcase },
    { name: 'Skills', url: '#skills', icon: User },
    { name: 'Projects', url: '#projects', icon: FileText },
    { name: 'Contact', url: '#contact', icon: Phone }
  ];

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <DotBackground className="min-h-screen overflow-x-hidden">
        {/* Navigation */}
        <NavBar items={navItems} />
        
        {/* Main Content */}
        <main className="relative z-10 max-w-full overflow-x-hidden">
          {/* Hero Section */}
          <Hero />
          
          {/* Experience Timeline */}
          <ExperienceTimeline />
          
          {/* Skills Section */}
          <Skills />
          
          {/* Projects Section */}
          <Projects />
          
          {/* Contact/Social Section */}
          <Contact />
          
          {/* Footer */}
          <footer className="py-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
            <p>© {new Date().getFullYear()} Nithin Bommerla. All rights reserved.</p>
          </footer>
        </main>
      </DotBackground>
    </ThemeProvider>
  );
};

export default Index;
