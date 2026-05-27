'use client'

import React from 'react';
import { 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  Sparkles, 
  Instagram, 
  Facebook 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from "../LanguageContext"; // Vérifiez bien ce chemin

const Hero = () => {
  const { lang } = useLanguage();

  // Traductions du contenu
  const t = {
    fr: {
      badge: "Disponible pour de nouveaux projets",
      titlePart1: "Fadoua",
      titlePart2: "Abdelhak",
      job1: "Développeuse Fullstack",
      job2: "Data Scientist",
      description: "Spécialisée dans l'ingénierie des données et le développement d'applications intelligentes. Je conçois des solutions numériques où la performance rencontre l'innovation technologique.",
      btnContact: "Me Contacter",
      btnCV: "Mon CV",
      floatingBadge: "Spécialiste AI & Fullstack"
    },
    en: {
      badge: "Available for new projects",
      titlePart1: "Fadoua",
      titlePart2: "Abdelhak",
      job1: "Fullstack Developer",
      job2: "Data Scientist",
      description: "Specialized in data engineering and intelligent application development. I design digital solutions where performance meets technological innovation.",
      btnContact: "Contact Me",
      btnCV: "My CV",
      floatingBadge: "AI & Fullstack Specialist"
    }
  };

  const content = t[lang];

  // Configuration des réseaux sociaux
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/abdfadoua", 
      label: "GitHub" 
    },
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/in/fadoua-abdelhak", 
      label: "LinkedIn" 
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/abdelhak_fadwa/", 
      label: "Instagram" 
    },
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/fadwa.abdelhak.1", 
      label: "Facebook" 
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-[#0B0F19]">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* CÔTÉ GAUCHE : TEXTE */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase">
              <Sparkles size={14} />
              {content.badge}
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-8xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                {content.titlePart1} <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                  {content.titlePart2}
                </span>
              </h1>
              
              <h2 className="text-xl lg:text-2xl font-medium text-slate-600 dark:text-slate-400">
                {content.job1} <span className="text-blue-600 mx-2">&</span> {content.job2}
              </h2>
              
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed mx-auto lg:mx-0">
                {content.description}
              </p>
            </div>

            {/* BOUTONS D'ACTION */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="rounded-full px-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:scale-105 transition-transform duration-300 shadow-lg"
                asChild
              >
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  {content.btnContact}
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full px-8 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all shadow-sm"
                asChild
              >
                <a href="/Cv_AbdelhakFadoua.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  {content.btnCV}
                </a>
              </Button>
            </div>

            {/* RÉSEAUX SOCIAUX */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all flex items-center gap-2 text-sm font-medium group"
                >
                  <social.icon size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
                  <span className="hidden sm:inline">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CÔTÉ DROIT : IMAGE DE PROFIL */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              
              <div className="relative w-72 h-72 lg:w-[400px] lg:h-[400px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <img
                  src="/profilee.jpeg"
                  alt="Fadoua Abdelhak"
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
              </div>

              {/* Floating Tech Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    {content.floatingBadge}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;