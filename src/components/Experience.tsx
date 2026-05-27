'use client'

import React, { useState } from 'react';
import { Calendar, MapPin, Building, GraduationCap, Award, Briefcase } from 'lucide-react';
import { useLanguage } from "../LanguageContext"; // Vérifiez que le chemin est correct

const ExperienceEducation = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const { lang } = useLanguage();

  const content = {
    fr: {
      title: "Mon Parcours",
      subtitle: "Découvrez mon expérience professionnelle et ma formation académique",
      tabExp: "Expérience",
      tabEdu: "Éducation",
      experiences: [
        {
          title: "Stage de Fin d'Etudes",
          company: "CustoNova Solutions",
          location: "Sousse, Tunisie",
          period: "Février 2025 - Juin 2025",
          description: ["Conception et développement d'une plateforme d'emargement", "Développement fullstack moderne", "Intégration SQL et NoSQL"],
          technologies: ["React.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma"]
        },
        {
          title: "Stage d'été",
          company: "Verdanova",
          location: "Monastir, Tunisie",
          period: "Juillet 2024 - Août 2024",
          description: ["Application Web WEFFARM Business Suite", "Développement frontend React", "Solutions backend Node.js"],
          technologies: ["React.js", "Node.js"]
        },
        {
          title: "Stage d'été",
          company: "NKTYA",
          location: "Monastir, Tunisie",
          period: "Juillet 2023",
          description: ["Gestion des tâches scolaires", "Analyse des besoins utilisateurs", "Conformité éducative"],
          technologies: ["React.js", "Node.js"]
        }
      ],
      education: [
        {
          degree: "1ère année du cycle d'ingénieur",
          school: "École Polytechnique de Sousse",
          period: "2025 - Présent",
          grade: "En cours",
          courses: ["POO", "Java", "Python", "Systèmes d'exploitation"]
        },
        {
          degree: "Licence Génie Logiciel",
          school: "École Polytechnique de Sousse",
          period: "2022 - 2025",
          grade: "Diplômée",
          courses: ["IA", "Big Data", "Mobile", "Réseaux"]
        },
        {
          degree: "Baccalauréat Scientifique",
          school: "Lycée de Bekalta",
          period: "2022",
          grade: "Admise",
          courses: ["Maths", "Physique", "Sciences"]
        }
      ]
    },
    en: {
      title: "My Journey",
      subtitle: "Discover my professional experience and academic background",
      tabExp: "Experience",
      tabEdu: "Education",
      experiences: [
        {
          title: "Final Year Internship",
          company: "CustoNova Solutions",
          location: "Sousse, Tunisia",
          period: "February 2025 - June 2025",
          description: ["Design and development of an attendance platform", "Modern fullstack development", "SQL and NoSQL integration"],
          technologies: ["React.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma"]
        },
        {
          title: "Summer Internship",
          company: "Verdanova",
          location: "Monastir, Tunisia",
          period: "July 2024 - August 2024",
          description: ["WEFFARM Business Suite Web App", "React frontend development", "Node.js backend solutions"],
          technologies: ["React.js", "Node.js"]
        },
        {
          title: "Summer Internship",
          company: "NKTYA",
          location: "Monastir, Tunisia",
          period: "July 2023",
          description: ["School task management", "User needs analysis", "Educational compliance"],
          technologies: ["React.js", "Node.js"]
        }
      ],
      education: [
        {
          degree: "1st Year Engineering Cycle",
          school: "Polytechnic School of Sousse",
          period: "2025 - Present",
          grade: "In Progress",
          courses: ["OOP", "Java", "Python", "Operating Systems"]
        },
        {
          degree: "Bachelor in Software Engineering",
          school: "Polytechnic School of Sousse",
          period: "2022 - 2025",
          grade: "Graduated",
          courses: ["AI", "Big Data", "Mobile", "Networks"]
        },
        {
          degree: "Scientific Baccalaureate",
          school: "Bekalta High School",
          period: "2022",
          grade: "Admitted",
          courses: ["Maths", "Physics", "Sciences"]
        }
      ]
    }
  };

  const currentContent = content[lang];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {currentContent.title}
          </h2>
          <p className="text-gray-600">{currentContent.subtitle}</p>
        </div>

        {/* Navigation des Onglets (Tabs) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 rounded-xl">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg transition-all duration-300 ${
                activeTab === 'experience' ? 'bg-white shadow-md text-blue-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Briefcase size={18} />
              <span className="font-semibold">{currentContent.tabExp}</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg transition-all duration-300 ${
                activeTab === 'education' ? 'bg-white shadow-md text-purple-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <GraduationCap size={20} />
              <span className="font-semibold">{currentContent.tabEdu}</span>
            </button>
          </div>
        </div>

        {/* Contenu Affiché */}
        <div className="max-w-4xl mx-auto transition-all duration-500">
          {activeTab === 'experience' ? (
            <div className="space-y-8">
              {currentContent.experiences.map((exp, index) => (
                <div key={index} className="group relative pl-8 border-l-2 border-blue-200 hover:border-blue-500 transition-colors">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-blue-500 rounded-full group-hover:scale-125 transition-transform" />
                  <div className="bg-gray-50 p-6 rounded-2xl group-hover:shadow-lg transition-shadow">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                        <div className="flex items-center text-blue-600 font-medium">
                          <Building className="h-4 w-4 mr-2" /> {exp.company}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 flex flex-col items-end">
                        <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {exp.period}</span>
                        <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" /> {exp.location}</span>
                      </div>
                    </div>
                    <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                      {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {currentContent.education.map((edu, index) => (
                <div key={index} className="border border-gray-100 p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <GraduationCap size={64} />
                  </div>
                  <div className="flex items-center gap-2 text-purple-600 text-sm font-bold mb-2">
                    <Calendar size={14} /> {edu.period}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">{edu.degree}</h3>
                  <p className="text-gray-600 text-sm mb-4">{edu.school}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-md font-bold uppercase tracking-wider flex items-center">
                      <Award size={12} className="mr-1" /> {edu.grade}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((course, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded uppercase font-bold tracking-tighter">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;