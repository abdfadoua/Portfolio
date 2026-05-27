'use client'

import React, { useState } from 'react';
import { Github, FileText, PlayCircle, Smartphone, Globe, X, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from "../LanguageContext";

const Projects = () => {
  const { lang } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [galleryTab, setGalleryTab] = useState('mobile');

  const t = {
    fr: {
      title: "Projets Réalisés",
      subtitle: "Une exploration de mes travaux en développement, data science et design d'interface.",
      categories: { all: "Tous", web: "Web & Mobile", data: "Data & IA", design: "UI/UX Design" },
      code: "Code",
      demo: "Démo",
      report: "Rapport",
      close: "Fermer",
      featured: "Phare",
      screen: "Écran"
    },
    en: {
      title: "Featured Projects",
      subtitle: "An exploration of my work in development, data science, and interface design.",
      categories: { all: "All", web: "Web & Mobile", data: "Data & AI", design: "UI/UX Design" },
      code: "Code",
      demo: "Demo",
      report: "Report",
      close: "Close",
      featured: "Featured",
      screen: "Screen"
    }
  };

  const content = t[lang];

  const projects = [
    {
      title: "PolySwap",
      category: "web",
      description: {
        fr: "Plateforme d'échange d'annonces (aide aux projets, colocation, services). Système de gestion d'annonces dynamique avec Django.",
        en: "Classifieds exchange platform (project help, flatsharing, services). Dynamic ad management system built with Django."
      },
      image: "/polyswap.png",
      tech: ["Django", "Python", "SQLite", "Bootstrap"],
      github: "https://github.com/abdfadoua/PolySwap.git",
      featured: true
    },
    {
      title: "Portfolio Quest",
      category: "web",
      description: {
        fr: "Jeu d'aventure Pygame (1-2 joueurs). Collectez des skills et certificats pour bâtir un portfolio solide et décrocher une offre d'emploi excellente.",
        en: "Pygame adventure game (1-2 players). Collect skills and certificates to build a strong portfolio and land an excellent job offer."
      },
      image: "/pygame.png",
      tech: ["Python", "Pygame", "OOP"],
      live: "https://youtu.be/VOTRE_LIEN_YOUTUBE",
      github: "https://github.com/abdfadoua/PortfolioGuest.git",
      featured: true,
      isGame: true
    },
    {
      title: "Mymario",
      category: "web",
      description: {
        fr: "Application mobile de livraison avec suivi temps réel.",
        en: "Mobile delivery app with real-time tracking."
      },
      image: "/Home 1.png",
      tech: ["Flutter", "Node.js", "MongoDB"],
      github: "https://github.com/abdfadoua/MyMario",
      featured: true
    },
    {
      title: "WEFFARM Suite",
      category: "web",
      description: {
        fr: "Solution de gestion d'entreprise ERP moderne.",
        en: "Modern ERP business management solution."
      },
      image: "/weefarm.png",
      tech: ["React.js", "Node.js", "PostgreSQL"],
      live: "https://youtu.be/MtrSgZb9Z08",
      github: "https://github.com/abdfadoua/Weefarm",
      featured: true
    },
    {
      title: "UNOW Platform",
      category: "web",
      description: {
        fr: "Système d'émargement et gestion d'hypermarché.",
        en: "Attendance and hypermarket management system."
      },
      image: "/authcap.png",
      tech: ["React.js", "Tailwind", "MongoDB"],
      live: "https://youtu.be/86mpmQxCYik",
      github: "https://github.com/abdfadoua/UNOW-Emargement",
      featured: true
    },
    {
      title: "Machine Learning Medical",
      category: "data",
      description: {
        fr: "Algorithmes de prédiction pour le secteur médical.",
        en: "Prediction algorithms for the medical sector."
      },
      image: "/prediction.jpg",
      tech: ["Python", "Scikit-learn", "Pandas"],
      report: "/miniprojet.pdf",
      featured: false
    },
    {
      title: "Mariodelivry UI",
      category: "design",
      description: {
        fr: "Conception UI/UX complète pour une application de livraison — déclinaison Web et Mobile.",
        en: "Full UI/UX design for a delivery app — Web and Mobile versions."
      },
      image: "/figmaweb/Home 1-1.png",
      tech: ["Figma"],
      gallery: {
        mobile: [
          "/figmaMobile/Welcome page.png",
          "/figmaMobile/sign up.png",
          "/figmaMobile/home.png",
          "/figmaMobile/All pizza.png",
          "/figmaMobile/iPhone 14 ilforno pizza Step1-1.png",
          "/figmaMobile/iPhone 14 ilforno pizza Step1.png",
          "/figmaMobile/iPhone 14 ilforno pizza Step2.png",
          "/figmaMobile/Mission Accomplished.png"
        ],
        web: [
          "/figmaweb/Home 1-1.png",
          "/figmaweb/Home 2.png",
          "/figmaweb/Login.png",
          "/figmaweb/resto.png",
          "/figmaweb/Pizza.png",
          "/figmaweb/Salad.png",
          "/figmaweb/Home 3.png"
        ]
      },
      featured: false
    },
    {
      title: "Dashboard BI",
      category: "data",
      description: {
        fr: "Visualisation de données décisionnelles avec PowerBI.",
        en: "Business intelligence data visualization with PowerBI."
      },
      image: "/BI.png",
      tech: ["PowerBI", "SQL"],
      live: "https://youtu.be/uJWguA8RpEc",
      featured: false
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  const openGallery = (gallery, defaultTab) => {
    setSelectedGallery(gallery);
    setGalleryTab(defaultTab);
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-[#0B0F19] transition-colors">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
            {content.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {content.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {Object.entries(content.categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  filter === key
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>

                {project.isGame && (
                  <div className="absolute top-4 right-4 p-2 bg-orange-500 rounded-full text-white shadow-lg animate-pulse">
                    <Gamepad2 size={20} />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="text-[10px] bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-md font-black uppercase shrink-0 ml-2">
                      {content.featured}
                    </span>
                  )}
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description[lang]}
                </p>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.github && (
                    <Button variant="outline" size="sm" className="rounded-xl h-10 dark:border-slate-700" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" /> {content.code}
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button size="sm" className="rounded-xl h-10 bg-slate-900 dark:bg-white dark:text-slate-900" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <PlayCircle className="w-4 h-4 mr-2" /> {content.demo}
                      </a>
                    </Button>
                  )}
                  {project.report && (
                    <Button variant="outline" size="sm" className="rounded-xl h-10" asChild>
                      <a href={project.report} target="_blank">
                        <FileText className="w-4 h-4 mr-2" /> {content.report}
                      </a>
                    </Button>
                  )}

                  {/* Gallery buttons for design projects */}
                  {project.gallery && (
                    <div className="flex gap-2 w-full mt-1">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="flex-1 rounded-xl h-10"
                        onClick={() => openGallery(project.gallery, 'mobile')}
                      >
                        <Smartphone className="w-4 h-4 mr-2" /> Mobile
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="flex-1 rounded-xl h-10"
                        onClick={() => openGallery(project.gallery, 'web')}
                      >
                        <Globe className="w-4 h-4 mr-2" /> Web
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Modal */}
        {selectedGallery && (
          <div
            className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4 md:p-10"
            onClick={(e) => { if (e.target === e.currentTarget) setSelectedGallery(null); }}
          >
            <div className="bg-white dark:bg-slate-900 w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800">

              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center shrink-0">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Mariodelivry UI
                </h3>
                <button
                  onClick={() => setSelectedGallery(null)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5 text-slate-600 dark:text-white" />
                </button>
              </div>

              {/* Tabs */}
              <div className="px-6 py-3 border-b border-slate-200 dark:border-slate-800 flex gap-2 shrink-0">
                <button
                  onClick={() => setGalleryTab('mobile')}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    galleryTab === 'mobile'
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  Mobile
                  <span className={`text-xs px-1.5 py-0.5 rounded-md font-bold ${
                    galleryTab === 'mobile'
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                  }`}>
                    {selectedGallery.mobile?.length}
                  </span>
                </button>
                <button
                  onClick={() => setGalleryTab('web')}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    galleryTab === 'web'
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  Web
                  <span className={`text-xs px-1.5 py-0.5 rounded-md font-bold ${
                    galleryTab === 'web'
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                  }`}>
                    {selectedGallery.web?.length}
                  </span>
                </button>
              </div>

              {/* Image Grid */}
              <div
                className={`p-5 overflow-y-auto grid gap-4 ${
                  galleryTab === 'mobile'
                    ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
                    : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
                }`}
              >
                {selectedGallery[galleryTab]?.map((img, i) => (
                  <div
                    key={i}
                    className={`group/img relative rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                      galleryTab === 'mobile' ? 'aspect-[9/19]' : 'aspect-video'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${content.screen} ${i + 1}`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                      loading="lazy"
                    />
                    {/* Hover overlay with screen number */}
                    <div className="absolute inset-0 bg-slate-900/0 group-hover/img:bg-slate-900/20 transition-all duration-300 flex items-end justify-start p-3">
                      <span className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 text-xs font-bold text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded-lg">
                        {i + 1} / {selectedGallery[galleryTab].length}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center shrink-0 border-t border-slate-200 dark:border-slate-800">
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {selectedGallery[galleryTab]?.length} {galleryTab === 'mobile' ? 'écrans mobile' : 'pages web'}
                </span>
                <Button
                  onClick={() => setSelectedGallery(null)}
                  className="rounded-xl"
                >
                  {content.close}
                </Button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;