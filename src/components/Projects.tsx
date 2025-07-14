import React, { useState } from 'react';
import { ExternalLink, Github, Eye, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [showMobileGallery, setShowMobileGallery] = useState(false);
  const [showWebGallery, setShowWebGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);

  const projects = [
    {
      title: "Mymario - Application de Livraison",
      description: "Application mobile de livraison permettant la commande et le suivi en temps réel.",
      image: "/Home 1.png",
      technologies: ["Flutter", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/abdfadoua/MyMario",
      featured: true
    },
    {
      title: "WEFFARM Business Suite",
      description: "Application web pour la gestion d'entreprise, avec interfaces modernes et backend robuste. Regardez la démo vidéo pour une présentation des fonctionnalités.",
      image: "/weefarm.png",
      technologies: ["React.js", "Node.js", "PostgreSQL"],
      liveUrl: "https://youtu.be/MtrSgZb9Z08", // 👈 YouTube
      githubUrl: "https://github.com/abdfadoua/Weefarm",
      featured: true
    },
    {
      title: "UNOW - Plateforme d'Hypermarché",
      description: "Plateforme web pour un hypermarché avec évaluation complémentaire, intégrant des bases de données variées. Consultez le rapport pour plus de détails.",
      image: "/authcap.png",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "PostgreSQL", "MongoDB"],
      liveUrl: "https://youtu.be/86mpmQxCYik", // 👈 YouTube
      githubUrl: "https://github.com/abdfadoua/UNOW-Emargement",
      featured: true
    },
    {
      title: "Prédiction Médicale avec Machine Learning",
      description: "Projet de prédiction médicale utilisant des algorithmes de machine learning. Consultez le rapport détaillé pour la méthodologie, les résultats et les visualisations.",
      image: "/prediction.jpg",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      liveUrl: "#",
      githubUrl: "#",
      reportUrl: "/public/miniprojet.pdf",
      featured: false
    },
    {
      title: "ETL avec Talend",
      description: "Mini-projet de traitement, nettoyage, jointures et agrégations de données de ventes avec Talend.",
      image: "/ETL.png",
      technologies: ["Talend", "SQL"],
      liveUrl: "#",
      githubUrl: "#",
      reportUrl: "/public/ETLRapport.pdf",
      featured: false
    },
    {
      title: "Interfaces Figma pour Mariodelivry",
      description: "Conception d'interfaces utilisateur modernes et responsives pour l'application Mymario, avec designs pour web et mobile. Cliquez sur Démo Mobile ou Démo Web pour voir les interfaces.",
      image: "/figmaweb/Home 1-1.png",
      technologies: ["Figma"],
      liveUrl: "#",
      githubUrl: "#",
      mobileGalleryImages: [
        "/figmaMobile/Welcome page.png",
        "/figmaMobile/sign up.png",
        "/figmaMobile/home.png",
        "/figmaMobile/All pizza.png",
        "/figmaMobile/iPhone 14 ilforno pizza Step1-1.png",
        "/figmaMobile/iPhone 14 ilforno pizza Step1.png",
        "/figmaMobile/iPhone 14 ilforno pizza Step2.png",
        "/figmaMobile/Mission Accomplished.png"
      ],
      webGalleryImages: [
        "/figmaweb/Home 1-1.png",
        "/figmaweb/Home 2.png",
        "/figmaweb/Login.png",
        "/figmaweb/resto.png",
        "/figmaweb/Pizza.png",
        "/figmaweb/Salad.png",
        "/figmaweb/Home 3.png"
      ],
      featured: false
    },
    {
      title: "Dashboard BI",
      description: "Tableau de bord de business intelligence pour la visualisation de données d'entreprise. Regardez la démo vidéo pour une présentation.",
      image: "/BI.png",
      technologies: ["PowerBI", "SQL"],
      liveUrl: "https://youtu.be/uJWguA8RpEc", // 👈 YouTube
      githubUrl: "#",
      featured: false
    },
    {
      title: "Site de vente - Résine Art",
      description: "Premier projet académique : un site vitrine simple pour la vente d’articles en résine artisanale, développé en HTML, CSS et JavaScript pur.",
      image: "/resine.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://youtu.be/Y5PN6mESFmI", // 👈 YouTube
      githubUrl: "https://github.com/abdfadoua/resine-site",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const openMobileGallery = (images) => {
    console.log("Opening mobile gallery with images:", images); // Debug log
    if (images && images.length > 0) {
      setGalleryImages(images);
      setShowMobileGallery(true);
    } else {
      console.error("No mobile images provided for gallery");
    }
  };

  const openWebGallery = (images) => {
    console.log("Opening web gallery with images:", images); // Debug log
    if (images && images.length > 0) {
      setGalleryImages(images);
      setShowWebGallery(true);
    } else {
      console.error("No web images provided for gallery");
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Projets Réalisés</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Une sélection de mes projets académiques, professionnels et de conception d'interfaces
          </p>
        </div>

        {/* Mobile Gallery Modal */}
        {showMobileGallery && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto border-2 border-gradient-to-r from-blue-400 to-purple-400">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Interfaces Mobiles Mariodelivry</h3>
              {galleryImages.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryImages.map((img, idx) => (
                    <img 
                      key={idx}
                      src={img}
                      alt={`Interface mobile ${idx + 1}`}
                      className="w-full h-auto object-contain rounded-lg"
                      onError={() => console.error(`Failed to load image: ${img}`)}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-gray-700">Aucune image mobile disponible.</p>
              )}
              <Button 
                className="mt-6" 
                onClick={() => {
                  console.log("Closing mobile gallery");
                  setShowMobileGallery(false);
                }}
              >
                Fermer
              </Button>
            </div>
          </div>
        )}

        {/* Web Gallery Modal */}
        {showWebGallery && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto border-2 border-gradient-to-r from-blue-400 to-purple-400">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Interfaces Web Mariodelivry</h3>
              {galleryImages.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryImages.map((img, idx) => (
                    <img 
                      key={idx}
                      src={img}
                      alt={`Interface web ${idx + 1}`}
                      className="w-full h-auto object-contain rounded-lg"
                      onError={() => console.error(`Failed to load image: ${img}`)}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-gray-700">Aucune image web disponible.</p>
              )}
              <Button 
                className="mt-6" 
                onClick={() => {
                  console.log("Closing web gallery");
                  setShowWebGallery(false);
                }}
              >
                Fermer
              </Button>
            </div>
          </div>
        )}

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Projets Phares</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg border-2 border-gradient-to-r from-blue-400 to-purple-400 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 flex gap-2">
                      <Button size="sm" variant="secondary">
                        <Eye className="h-4 w-4 mr-1" />
                        Voir
                      </Button>
                      {project.githubUrl !== "#" && (
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h4>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-white text-gray-800 rounded-full text-sm border border-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.liveUrl !== "#" && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Démo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl !== "#" && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.reportUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.reportUrl} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-4 w-4 mr-1" />
                          Rapport
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Autres Projets</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 border-2 border-gradient-to-r from-blue-400 to-purple-400 hover:shadow-lg transition-shadow duration-300"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-bold mb-2 text-gray-900">{project.title}</h4>
                <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-white text-gray-800 rounded text-xs border border-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.mobileGalleryImages ? (
                    <>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-xs"
                        onClick={() => openMobileGallery(project.mobileGalleryImages)}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Démo Mobile
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-xs"
                        onClick={() => openWebGallery(project.webGalleryImages)}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Démo Web
                      </Button>
                    </>
                  ) : project.liveUrl !== "#" && (
                    <Button variant="outline" size="sm" className="text-xs" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Démo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl !== "#" && project.title !== "ETL avec Talend" && (
                    <Button variant="outline" size="sm" className="text-xs" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.reportUrl && (
                    <Button variant="outline" size="sm" className="text-xs" asChild>
                      <a href={project.reportUrl} target="_blank" rel="noopener noreferrer">
                        <FileText className="h-3 w-3 mr-1" />
                        Rapport
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;