import React from 'react';
import { Code, Database, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Développement Fullstack",
      description: "Création d'applications web avec React.js, Node.js et bases de données"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Science",
      description: "Analyse et modélisation de données avec Python et Machine Learning"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "Conception de solutions créatives pour des projets à fort impact"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Engagement",
      description: "Passion pour le développement et l'apprentissage continu"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">À Propos de Moi</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez mon parcours, mes compétences et ma passion pour le développement et la data science
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Mon Parcours</h3>
            <p className="text-gray-600 mb-6">
              Diplômée en Génie Logiciel de l'École Polytechnique de Sousse (2022-2025), 
              je me spécialise dans le développement fullstack et la data science.
            </p>
            <p className="text-gray-600 mb-6">
              À travers des stages et projets académiques, j'ai acquis une expertise 
              en React.js, Node.js, Python, et des outils de data science comme Pandas et Scikit-learn.
            </p>
            <p className="text-gray-600">
              Curieuse et proactive, je m'engage dans des projets innovants et contribue 
              activement à des initiatives associatives comme JCI et Microsoft Polytechnique Club.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;