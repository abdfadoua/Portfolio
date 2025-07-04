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
      image: "excel.jpg",
      credentialUrl: "/Frame 2392.pdf",
      skills: ["Excel", "Google Sheets", "Analyse de données"]
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Certificats & Langues</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mes certifications professionnelles et compétences linguistiques
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certificates */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="h-6 w-6 mr-3 text-blue-600" />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certificates.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 border-2 border-gradient-to-r from-blue-400 to-purple-400"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start">
                      <img 
                        src={cert.image} 
                        alt={cert.issuer}
                        className="w-16 h-16 rounded-lg object-cover mr-4"
                        onError={() => console.error(`Failed to load image: ${cert.image}`)}
                      />
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-blue-600 font-medium mb-2">{cert.issuer}</p>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="h-4 w-4 mr-1" />
                          {cert.date}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className="px-2 py-1 bg-white text-gray-700 rounded text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <a 
                      href={cert.credentialUrl}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Globe className="h-6 w-6 mr-3 text-blue-600" />
              Langues
            </h3>
            
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div 
                  key={index}
                  className="bg-white border-2 border-gradient-to-r from-blue-400 to-purple-400 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">{lang.flag}</span>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">
                          {lang.language}
                        </h4>
                        <p className="text-gray-600">{lang.level}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        {lang.proficiency}%
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
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