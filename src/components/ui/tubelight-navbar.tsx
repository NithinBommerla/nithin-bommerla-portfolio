"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}
interface NavBarProps {
  items: NavItem[];
  className?: string;
}
export function NavBar({
  items,
  className
}: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add scroll position tracking
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY + 100; // Add offset for better UX
      const sections = items.map(item => {
        const element = document.getElementById(item.url.substring(1));
        if (!element) return {
          name: item.name,
          top: 0,
          bottom: 0
        };
        const rect = element.getBoundingClientRect();
        return {
          name: item.name,
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY
        };
      });

      // Find the current section
      for (const section of sections) {
        if (currentScrollPos >= section.top && currentScrollPos < section.bottom) {
          if (activeTab !== section.name) {
            setActiveTab(section.name);
          }
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items, activeTab]);
  return <div className={cn("fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-xl sm:pt-6", className)}>
      <div className="flex items-center justify-between gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-4 rounded-full shadow-lg my-4 sm:my-0 mx-0">
        <div className="flex items-center gap-2 flex-1">
          {items.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;
          return <a key={item.name} href={item.url} onClick={e => {
            e.preventDefault();
            setActiveTab(item.name);
            const element = document.getElementById(item.url.substring(1));
            if (element) {
              window.scrollTo({
                top: element.offsetTop - 100,
                behavior: "smooth"
              });
            }
          }} className={cn("relative cursor-pointer text-sm font-semibold px-3 sm:px-5 py-2 rounded-full transition-colors flex-1 text-center", "text-foreground/80 hover:text-primary", isActive && "bg-muted text-primary")}>
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && <motion.div layoutId="lamp" className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10" initial={false} transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}>
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>}
              </a>;
        })}
        </div>
        <div className="pl-2 pr-1">
          <ThemeToggle />
        </div>
      </div>
    </div>;
}