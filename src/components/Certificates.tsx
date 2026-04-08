import React from 'react';
import { Award, Globe, Calendar, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Python - Certport Certification",
      issuer: "Certport",
      date: "05/2024",
      image: "/python.png",
      credentialUrl: "https://www.credly.com/badges/defe8c19-76bb-453f-8065-5c8210553d6c/linked_in?t=se7kwh",
      skills: ["Python", "Programmation"]
    },
    {
      title: "Excel - Matrice Google Sheets",
      issuer: "Learning",
      date: "09/2024",
      image: "/excel.jpg",
      credentialUrl: "/Frame 2392.pdf",
      skills: ["Excel", "Google Sheets", "Analyse de données"]
    },
    {
      title: "INTRO TO AI AND GENERATIVE AI",
      issuer: "UDACITY",
      date: "2026",
      image: "/Udacity.png",
      credentialUrl: "www.udacity.com/certificate/e/1503eca2-1807-11f1-aa46-cf14d86ea625",
      skills: ["IA Générative", "Machine Learning", "NLP"]
    },
    {
      title: "ARTIFICIAL INTELLIGENCE FUNDAMENTALS",
      issuer: "IBM SKILLSBUILD",
      date: "2025",
      image: "/IBM_AI.png",
      credentialUrl: "https://www.credly.com/badges/e9d1e088-6bca-4782-92f8-33dc721d7c4e/linked_in_profile",
      skills: ["IA", "Machine Learning"]
    },
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "AWS Academy",
      date: "2024",
      image: "/AWS.png",
      credentialUrl: "https://www.credly.com/badges/c1e2446f-988b-4a0b-a390-c816d08e14c2/linked_in?t=sp0t44",
      skills: ["AWS", "Cloud Computing"]
    }
  ];

  const languages = [
    {
      language: "Arabe",
      level: "Langue maternelle",
      flag: "🇹🇳",
      proficiency: 100
    },
    {
      language: "Français",
      level: "Avancé",
      flag: "🇫🇷",
      proficiency: 90
    },
    {
      language: "Anglais",
      level: "Avancé",
      flag: "🇬🇧",
      proficiency: 90
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* En-tête de la section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Certificats & Langues</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mes certifications professionnelles et compétences linguistiques
          </p>
        </div>

        <div className="space-y-16">
          {/* Section Certificats (Grille responsive) */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center justify-center lg:justify-start">
              <Award className="h-6 w-6 mr-3 text-blue-600" />
              Certifications
            </h3>
            
            {/* Grille : 1 colonne sur mobile, 2 sur tablette, 2 ou 3 sur grand écran */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border-2 border-gradient-to-r from-blue-400 to-purple-400 flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start">
                      <img 
                        src={cert.image} 
                        alt={cert.issuer}
                        className="w-14 h-14 rounded-lg object-cover mr-4"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/150'; // Image de secours au cas où
                        }}
                      />
                      <div>
                        <h4 className="text-md font-bold text-gray-900 mb-1 leading-tight">
                          {cert.title}
                        </h4>
                        <p className="text-blue-600 text-sm font-medium mb-1">{cert.issuer}</p>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          {cert.date}
                        </div>
                      </div>
                    </div>
                    <a 
                      href={cert.credentialUrl}
                      className="text-blue-600 hover:text-blue-800 transition-colors flex-shrink-0 ml-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Voir le certificat"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  
                  {/* Badges de compétences en bas de la carte */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-gray-200">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-2 py-1 bg-white text-gray-700 rounded text-xs font-medium shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section Langues (Grille responsive) */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center justify-center lg:justify-start">
              <Globe className="h-6 w-6 mr-3 text-blue-600" />
              Langues
            </h3>
            
            {/* Grille : 1 colonne sur mobile, 3 sur grand écran */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {languages.map((lang, index) => (
                <div 
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 hover:border-blue-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">{lang.flag}</span>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">
                          {lang.language}
                        </h4>
                        <p className="text-sm text-gray-600">{lang.level}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-blue-600">
                        {lang.proficiency}%
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${lang.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;