'use client'

import React from 'react';
import { Award, Globe, Calendar, ExternalLink, ShieldCheck } from 'lucide-react';
import { useLanguage } from "../LanguageContext";

const Certificates = () => {
  const { lang } = useLanguage();

  const t = {
    fr: {
      title: "Certifications & Langues",
      subtitle: "Validation de mes expertises techniques et capacités de communication.",
      certTitle: "Certifications Professionnelles",
      langTitle: "Compétences Linguistiques",
      viewCert: "Vérifier le diplôme",
      levels: { native: "Langue maternelle", advanced: "Avancé" }
    },
    en: {
      title: "Certifications & Languages",
      subtitle: "Official validation of my technical expertise and communication skills.",
      certTitle: "Professional Certifications",
      langTitle: "Language Proficiency",
      viewCert: "Verify credential",
      levels: { native: "Native speaker", advanced: "Advanced" }
    }
  };

  const content = t[lang];

  const certificates = [
    {
      title: "Python - Certport Certification",
      issuer: "Certport / Pearson VUE",
      date: "05/2024",
      image: "/python.png",
      credentialUrl: "https://www.credly.com/badges/defe8c19-76bb-453f-8065-5c8210553d6c",
      skills: ["Python", "Data Structures"]
    },
    {
      title: "Excel - Google Sheets Master",
      issuer: "Google / Learning",
      date: "09/2024",
      image: "/excel.jpg",
      credentialUrl: "/Frame 2392.pdf",
      skills: ["Analytics", "Automation"]
    },
    {
      title: "Generative AI Fundamentals",
      issuer: "UDACITY",
      date: "2026",
      image: "/Udacity.png",
      credentialUrl: "https://www.udacity.com/certificate/e/1503eca2-1807-11f1-aa46-cf14d86ea625",
      skills: ["LLMs", "NLP"]
    },
    {
      title: "AI Fundamentals",
      issuer: "IBM SKILLSBUILD",
      date: "2025",
      image: "/IBM_AI.png",
      credentialUrl: "https://www.credly.com/badges/e9d1e088",
      skills: ["Machine Learning", "Neural Networks"]
    },
    {
      title: "AWS Cloud Foundations",
      issuer: "AWS Academy",
      date: "2024",
      image: "/AWS.png",
      credentialUrl: "https://www.credly.com/badges/c1e2446f",
      skills: ["Cloud", "Infrastructure"]
    }
  ];

  const languages = [
    { name: "Arabe", level: content.levels.native, flag: "🇹🇳", proficiency: 100 },
    { name: "Français", level: content.levels.advanced, flag: "🇫🇷", proficiency: 90 },
    { name: "Anglais", level: content.levels.advanced, flag: "🇬🇧", proficiency: 90 }
  ];

  return (
    <section id="certificates" className="py-24 bg-slate-50 dark:bg-[#080B14] transition-colors">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">
            {content.title}
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Section Certificats (Prend 2 colonnes sur 3) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center space-x-3 mb-2">
              <Award className="text-blue-600 h-6 w-6" />
              <h3 className="text-xl font-bold dark:text-white">{content.certTitle}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certificates.map((cert, index) => (
                <div 
                  key={index}
                  className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative h-14 w-14 flex-shrink-0">
                      <img 
                        src={cert.image} 
                        className="h-full w-full object-contain rounded-xl bg-slate-50 dark:bg-slate-800 p-2"
                        alt={cert.issuer}
                      />
                      <div className="absolute -top-2 -right-2 bg-blue-600 text-white p-1 rounded-full border-2 border-white dark:border-slate-900">
                        <ShieldCheck size={10} />
                      </div>
                    </div>
                    
                    <div className="flex-grow min-w-0">
                      <h4 className="font-bold text-slate-900 dark:text-white truncate text-sm">
                        {cert.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
                        {cert.issuer}
                      </p>
                    </div>

                    <a 
                      href={cert.credentialUrl}
                      target="_blank"
                      className="opacity-0 group-hover:opacity-100 p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-all"
                      title={content.viewCert}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center text-slate-400 text-xs">
                      <Calendar size={12} className="mr-1.5" />
                      {cert.date}
                    </div>
                    <div className="flex gap-1.5">
                      {cert.skills.slice(0, 2).map((skill, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section Langues (Prend 1 colonne sur 3) */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-2">
              <Globe className="text-blue-600 h-6 w-6" />
              <h3 className="text-xl font-bold dark:text-white">{content.langTitle}</h3>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 space-y-8 shadow-sm">
              {languages.map((lang, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-end mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl grayscale group-hover:grayscale-0 transition-all duration-500">
                        {lang.flag}
                      </span>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white leading-none mb-1">
                          {lang.name}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {lang.level}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-black text-blue-600 dark:text-blue-400">
                      {lang.proficiency}%
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000 ease-out delay-300"
                      style={{ width: `${lang.proficiency}%` }}
                    />
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center space-x-2 text-xs text-slate-400 italic">
                  <div className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Prêt à travailler dans des environnements internationaux.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certificates;