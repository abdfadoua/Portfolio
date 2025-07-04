import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Licence en Génie Logiciel de Systèmes et d'Information",
      school: "École Polytechnique de Sousse",
      location: "Sousse, Tunisie",
      period: "2022 - 2025",
      description: "Formation spécialisée en développement logiciel et systèmes d'information",
      grade: "Diplomée",
      courses: ["Programmation Orientée Objet", "Bases de Données", "Développement Web", "Intelligence Artificielle", "Services des Réseaux", "Big Data" ,  "Conception" ,"Développement Mobile" ]
    },
    {
      degree: "Baccalauréat en Sciences Expérimentales",
      school: "Lycée de Bekalta",
      location: "Bekalta, Tunisie",
      period: "2022",
       grade:"Admise",
      courses: ["Sciences" ,"Mathématiques", "Physique", "Informatique"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Formation & Éducation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mon parcours académique et les connaissances théoriques acquises
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 border-2 border-gradient-to-r from-blue-400 to-purple-400 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex items-start">
                    <div className="p-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg mr-4">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                      <p className="text-blue-600 font-medium">{edu.school}</p>
                      <p className="text-gray-700 mt-2">{edu.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-col lg:items-end text-sm text-gray-600 mt-4 lg:mt-0">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </div>
                    <div className="flex items-center mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {edu.location}
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      {edu.grade}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Matières principales :</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-white text-gray-800 rounded-full text-sm border border-gray-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;