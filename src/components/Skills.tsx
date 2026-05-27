'use client'

import React from 'react';
import { Code, Database, Palette, GitBranch, Brain, Layers } from 'lucide-react';
import { useLanguage } from "../LanguageContext"; // Vérifiez le chemin

const Skills = () => {
  const { lang } = useLanguage();

  const t = {
    fr: {
      title: "Expertise Technique",
      subtitle: "Technologies et outils que je maîtrise pour donner vie à vos projets.",
      categories: [
        "Langages",
        "Frontend",
        "Backend",
        "IA & Data Science",
        "Outils & Méthodes"
      ]
    },
    en: {
      title: "Technical Expertise",
      subtitle: "Technologies and tools I master to bring your projects to life.",
      categories: [
        "Languages",
        "Frontend",
        "Backend",
        "AI & Data Science",
        "Tools & Methods"
      ]
    }
  };

  const content = t[lang];

  const skillCategories = [
    {
      title: content.categories[0],
      icon: <Code size={18} />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "PHP", level: 80 },
        { name: "SQL / SQLite", level: 85 },
        { name: "Java", level: 60 },
        { name: "C", level: 55 }
      ]
    },
    {
      title: content.categories[1],
      icon: <Palette size={18} />,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Bootstrap", level: 85 },
        { name: "React Native", level: 50 }
      ]
    },
    {
      title: content.categories[2],
      icon: <Layers size={18} />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Django", level: 80 },
        { name: "Prisma", level: 90 },
        { name: "PostgreSQL / SQLite", level: 90 },
        { name: "API REST", level: 85 }
      ]
    },
    {
      title: content.categories[3],
      icon: <Brain size={18} />,
      skills: [
        { name: "Pandas/Scikit", level: 85 },
        { name: "ML Models", level: 80 },
        { name: "Data Viz", level: 75 },
        { name: "Classification", level: 80 }
      ]
    },
    {
      title: content.categories[4],
      icon: <GitBranch size={18} />,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Scrum/Agile", level: 90 },
        { name: "MVC Architecture", level: 90 },
        { name: "MVT Architecture", level: 90 }

      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#F8FAFC] dark:bg-[#0B0F19]">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            {content.title}
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm md:text-base">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 p-5 rounded-2xl hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex flex-col w-full"
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[13px] font-semibold text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-bold text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Barre de progression fine */}
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-[3px] overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;