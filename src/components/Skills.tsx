import React from 'react';
import { Code, Database, Palette, GitBranch, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Langages de Programmation",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "C", level: 75 },
        { name: "C++", level: 70 },
        { name: "PHP", level: 80 },
        { name: "Java", level: 80}
      ]
    },
    {
      title: "Frontend",
      icon: <Palette className="h-6 w-6" />,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "React.js", level: 90 },
        { name: "Flutter", level: 50},
        { name: "React-Native ", level: 60}
      ]
    },
    {
      title: "Backend",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "SQL", level: 90 },
        { name: "Python", level: 85 },
        { name: "Prisma", level: 90 }

      ]
    },
    {
      title: "IA & Data Science",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "Pandas", level: 85 },
        { name: "Scikit-learn", level: 80 },
        { name: "Matplotlib", level: 75 },
        { name: "KMeans", level: 80 },
        { name: "DBSCAN", level: 75 },
        { name: "Classification", level: 80 },
        { name: "Régression", level: 80 }
      ]
    },
    {
      title: "Conduite de Version & Méthodologies",
      icon: <GitBranch className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "Scrum", level: 90 },
        {name: "MVC", level: 90}
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Compétences Techniques</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un aperçu de mes compétences techniques et de mon expertise dans différents domaines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 border-2 border-gradient-to-r from-blue-400 to-purple-400 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg text-white mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;