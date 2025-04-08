
import React from "react";
import { Timeline } from "@/components/ui/timeline";

const ExperienceTimeline = () => {
  const timelineData = [
    {
      title: "August 2023 - Present",
      content: (
        <div>
          <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
          <p className="text-neutral-700 dark:text-neutral-300 mb-2">Tutorsquest Consultancy Pvt Ltd.</p>
          <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 space-y-2">
            <li>Spearheaded the development of critical internal software solutions, including a Task Tracker (ERP) and CRM system, optimizing company operations and workflows.</li>
            <li>Delivered high-impact software tools that significantly improved internal processes, resulting in a 2x growth in company efficiency and productivity.</li>
            <li>Collaborated closely with cross-functional teams to identify and address business needs, ensuring the software aligned with strategic goals.</li>
            <li>Focused on ensuring the confidentiality and security of proprietary systems while enhancing functionality and user experience.</li>
            <li>Led ongoing maintenance, feature enhancements, and performance optimizations to keep internal tools aligned with evolving business requirements.</li>
            <li>Provided guidance and training to new team members, fostering a productive work environment and ensuring high standards of service delivery.</li>
          </ul>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">
              React
            </span>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-green-900 dark:text-green-300">
              Java
            </span>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-purple-900 dark:text-purple-300">
              Spring Boot
            </span>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
              PostgreSQL
            </span>
            <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-red-900 dark:text-red-300">
              AWS
            </span>
            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
              JavaScript
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "April 2022 - August 2023",
      content: (
        <div>
          <h3 className="text-xl font-bold mb-2">Full Stack Developer</h3>
          <p className="text-neutral-700 dark:text-neutral-300 mb-2">Freelancer</p>
          <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 space-y-2">
            <li>Designed, developed, and maintained the official website for TutorsQuest Consultancy, ensuring a user-friendly interface and seamless functionality.</li>
            <li>Implemented SEO strategies and optimized web content, significantly increasing the website's visibility and traffic by 40%.</li>
            <li>Collaborated with the founding team to devise and execute strategies for business growth, enhancing service offerings and client acquisition.</li>
          </ul>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
              JavaScript
            </span>
            <span className="bg-pink-100 text-pink-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-pink-900 dark:text-pink-300">
              HTML/CSS
            </span>
            <span className="bg-purple-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
              TypeScript
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">
              React
            </span>
            <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-red-900 dark:text-red-300">
              SupaBase
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "October 2021 - April 2022",
      content: (
        <div>
          <h3 className="text-xl font-bold mb-2">Trainee Software Engineer</h3>
          <p className="text-neutral-700 dark:text-neutral-300 mb-2">Replicon INC.</p>
          <ul className="list-disc pl-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 space-y-2">
            <li>Developed the Long Service Leave (LSL) service for DXC Technologies, benefiting over 100,000 employees and boosting company performance.</li>
            <li>Maintained software applications, ensuring robustness and high-quality performance through rigorous testing, benefiting system stability.</li>
            <li>Analyzed systems, promptly resolving technical issues, enhancing system efficiency and user experience.</li>
          </ul>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
              Python
            </span>
            <span className="bg-pink-100 text-pink-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-pink-900 dark:text-pink-300">
              Data Structures
            </span>
            <span className="bg-yellow-100 text-indigo-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
              Algorithms
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-300">
              Scripting
            </span>
            <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full dark:bg-red-900 dark:text-red-300">
              SaaS
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="experience" className="w-full">
      <Timeline data={timelineData} />
    </div>
  );
};

export default ExperienceTimeline;
