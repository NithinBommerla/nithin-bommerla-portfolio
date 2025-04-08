import React from "react";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { ButtonWithArrow } from "@/components/ui/button-with-arrow";
const Hero = () => {
  const roles = ["A Software Developer", "A Fullstack Developer", "A Backend Developer", "A Frontend Developer", "A UI/UX Designer", "A Data Engineer", "A Finance Enthusiast", "An All Rounder"];
  const words = [{
    text: "I am",
    className: "text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"
  }, {
    text: "Nithin",
    className: "text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"
  }, {
    text: "Bommerla",
    className: "text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"
  }];
  return <section id="home" className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <HeroScrollDemo />
        
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="max-w-4xl mx-auto text-center mt-10 py-[20px]">
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.2,
          duration: 1
        }} className="mb-6">
            <TypewriterEffectSmooth words={words} className="justify-center" />
          </motion.div>
          
          <motion.h2 initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.4,
          duration: 1
        }} className="text-xl md:text-2xl font-medium mb-6 text-neutral-700 dark:text-neutral-300">
            <FlipWords words={roles} className="text-primary font-semibold" duration={2000} />
          </motion.h2>
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.6,
          duration: 1
        }} className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed">
            I'm passionate about creating beautiful, functional, and user-centered digital experiences. 
            With 3+ years of experience in web development, design, and building scalable systems, 
            I help businesses and individuals bring their ideas to life while ensuring growth and flexibility.
          </motion.p>
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.8,
          duration: 1
        }} className="flex flex-col sm:flex-row justify-center gap-4">
            <ButtonWithArrow variant="primary" className="py-3 px-6 text-lg font-semibold shadow-lg" onClick={() => {
            const element = document.getElementById('contact');
            if (element) {
              window.scrollTo({
                top: element.offsetTop - 100,
                behavior: "smooth"
              });
            }
          }}>
              Contact Me
            </ButtonWithArrow>
            <ButtonWithArrow variant="secondary" className="py-3 px-6 text-lg font-semibold shadow-lg" onClick={() => {
            const element = document.getElementById('projects');
            if (element) {
              window.scrollTo({
                top: element.offsetTop - 100,
                behavior: "smooth"
              });
            }
          }}>
              View My Work
            </ButtonWithArrow>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default Hero;