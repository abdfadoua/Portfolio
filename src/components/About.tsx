'use client'

import React from 'react';
import { Brain, Code2, Database, ChevronRight } from 'lucide-react';
import { useLanguage } from "../LanguageContext"; // Vérifiez que le chemin est correct

const About = () => {
  // On récupère la langue globale
  const { lang } = useLanguage();

  const t = {
    fr: {
      badge: "Mon Parcours",
      title: "L'ingénierie logicielle au service de la",
      titleAccent: "Data Science",
      desc1: "Diplômée en Génie Logiciel de l'École Polytechnique de Sousse (2022-2025), j'ai développé une vision où la technologie devient un levier stratégique.",
      desc2: "Mon expertise se situe à l'intersection de l'ingénierie Fullstack et de l'intelligence artificielle. Je transforme des données complexes en interfaces intuitives et performantes.",
      cta: "Consulter mes travaux",
      skills: [
        { 
          icon: <Code2 size={20} />, 
          title: "Développement Fullstack", 
          desc: "Expertise en React.js, Node.js et architectures API REST." 
        },
        { 
          icon: <Brain size={20} />, 
          title: "Intelligence Artificielle", 
          desc: "Maîtrise de Python, du Machine Learning et du Deep Learning." 
        },
        { 
          icon: <Database size={20} />, 
          title: "Analyse de Données", 
          desc: "Traitement de données avec Pandas et visualisation stratégique." 
        }
      ],
    },
    en: {
      badge: "My Journey",
      title: "Software Engineering meets",
      titleAccent: "Data Science",
      desc1: "Graduate in Software Engineering from Polytechnique Sousse (2022-2025), I have developed a vision where technology becomes a strategic lever.",
      desc2: "My expertise lies at the intersection of Fullstack engineering and artificial intelligence. I transform complex data into intuitive and high-performance interfaces.",
      cta: "View my work",
      skills: [
        { 
          icon: <Code2 size={20} />, 
          title: "Fullstack Development", 
          desc: "Expertise in React.js, Node.js, and REST API architectures." 
        },
        { 
          icon: <Brain size={20} />, 
          title: "Artificial Intelligence", 
          desc: "Proficient in Python, Machine Learning, and Deep Learning." 
        },
        { 
          icon: <Database size={20} />, 
          title: "Data Analysis", 
          desc: "Data processing with Pandas and strategic visualization." 
        }
      ],
    }
  };

  // Sélection des traductions selon la langue active
  const content = t[lang];

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-white dark:bg-[#0B0F19]">
      
      {/* Éléments de fond décoratifs */}
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 -left-20 w-72 h-72 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* GAUCHE - Grille de compétences */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.skills.map((item, i) => (
                <div 
                  key={i} 
                  className={`p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg transition-all hover:shadow-blue-500/10 hover:-translate-y-1 ${i === 0 ? 'md:col-span-2' : ''}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* DROITE - Texte et Vision */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-[10px] font-black tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {content.badge}
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                {content.title} <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {content.titleAccent}
                </span>
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium border-l-4 border-blue-600 pl-6">
                  {content.desc1}
                </p>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-base">
                  {content.desc2}
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-[0.15em] transition-all"
              >
                {content.cta}
                <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;