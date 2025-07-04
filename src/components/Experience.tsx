import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Stage de Fin d'Etudes",
      company: "CustoNova Solutions",
      location: "Sousse, Tunisie",
      period: "Février 2025 - Juin 2025",
      description: [
        "Conception et développement d'une plateforme d'emargement et d'évaluation complémentaire à UNOW",
        "Utilisation de technologies modernes pour le développement fullstack",
        "Intégration de bases de données relationnelles et non relationnelles"
      ],
      technologies: ["React.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma"]
    },
    {
      title: "Stage d'été",
      company: "Verdanova",
      location: "Monastir, Tunisie",
      period: "Juillet 2024 - Août 2024",
      description: [
        "Conception et développement d'une application Web pour WEFFARM Business Suite",
        "Développement frontend avec React.js",
        "Mise en œuvre de solutions backend avec Node.js"
      ],
      technologies: ["React.js", "Node.js"]
    },
    {
      title: "Stage d'été",
      company: "NKTYA",
      location: "Monastir, Tunisie",
      period: "Juillet 2023",
      description: [
        "Mise en œuvre d'une application complète de gestion des tâches scolaires",
        "Assurance de la conformité des fonctionnalités aux besoins des utilisateurs",
        "Respect des exigences éducatives"
      ],
      technologies: ["React.js", "Node.js"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Expérience Professionnelle</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mon parcours professionnel et les compétences acquises à travers mes stages
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content */}
                <div className="ml-20 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <div className="flex items-center text-blue-600 font-medium">
                        <Building className="h-4 w-4 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end text-sm text-gray-500 mt-2 lg:mt-0">
                      <div className="flex items-center mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Experience;