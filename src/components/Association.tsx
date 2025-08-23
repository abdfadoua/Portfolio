import React, { useState } from 'react';

const Associations = () => {
  const [selectedJCIExperience, setSelectedJCIExperience] = useState(null);
  const [currentPhotoIndices, setCurrentPhotoIndices] = useState({});

  const jciExperiences = [
    {
      position: 'Trésorière',
      period: '2025',
      description: 'Gestion des finances et du budget de l\'organisation, en veillant à la transparence et à l\'efficacité des opérations financières pour soutenir les initiatives communautaires.',
      photos: [
        './assoc/tres2.jpg',
        './assoc/tre1.jpg',
        './assoc/tres3.jpg',
        './assoc/tres4.jpg',
        './assoc/tres5.jpg',
      ]
    },
    {
      position: 'Secrétaire Générale',
      period: '2024',
      description: 'Coordination des activités administratives, rédaction de rapports et organisation de réunions pour assurer le bon fonctionnement de l\'association et la communication interne.',
      photos: [
        './assoc/sec1.jpg',
        './assoc/sec2.jpg',
        './assoc/sec3.jpg',
        './assoc/sec4.jpg',
      ]
    },
    {
      position: 'Membre Active',
      period: '2022-2023',
      description: 'Participation active à divers projets et événements, contribution à l\'engagement communautaire et au développement personnel au sein de l\'association.',
      photos: [
        './assoc/mem1.jpg',
        './assoc/mem2.jpg',
        './assoc/mem3.jpg',
      ]
    },
  ];

  const microsoftClub = [
    {
      organization: 'Microsoft Polytechnique Club',
      position: 'Responsable Média',
      period: '2024',
      description: 'Gestion des contenus médias, promotion des événements du club via les réseaux sociaux et création de visuels pour renforcer la visibilité et l\'engagement des membres.',
      photos: [
        './assoc/club2.jpg',
        './assoc/club3.jpg',
        './assoc/club4.jpg',
        './assoc/club1.jpg',

      ]
    },
  ];

  const handleJCIExperienceClick = (index) => {
    setSelectedJCIExperience(index);
  };

  const handlePrevPhoto = (expIndex) => {
    setCurrentPhotoIndices((prev) => ({
      ...prev,
      [expIndex]: Math.max((prev[expIndex] || 0) - 1, 0),
    }));
  };

  const handleNextPhoto = (expIndex, maxIndex) => {
    setCurrentPhotoIndices((prev) => ({
      ...prev,
      [expIndex]: Math.min((prev[expIndex] || 0) + 1, maxIndex - 1),
    }));
  };

  return (
    <section id="associations" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vie Associative
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Découvrez mes contributions à la Jeune Chambre Internationale (JCI) et au Microsoft Polytechnique Club, avec des galeries photos navigables pour chaque expérience.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* JCI Section */}
          <div className="flex-1">
            <div className="flex justify-center mb-6">
              <img 
                src="./assoc/jci.jpg" 
                alt="JCI Logo" 
                className="w-40 h-40 object-contain rounded-lg shadow-md"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Jeune Chambre Internationale (JCI)
            </h3>
            <div className="space-y-4 max-w-2xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-md">
                {jciExperiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`p-3 cursor-pointer hover:bg-gray-50 rounded-md transition-colors ${selectedJCIExperience === index ? 'bg-blue-50' : ''}`}
                    onClick={() => handleJCIExperienceClick(index)}
                  >
                    <h4 className="text-lg font-semibold text-gray-900">{exp.position} • {exp.period}</h4>
                  </div>
                ))}
              </div>
              {selectedJCIExperience !== null && (
                <div className="bg-white p-6 rounded-lg shadow-md mt-4">
                  <p className="text-gray-600 mt-3 leading-relaxed">{jciExperiences[selectedJCIExperience].description}</p>
                  <div className="mt-4 relative flex items-center justify-center">
                    <button
                      onClick={() => handlePrevPhoto(`jci-${selectedJCIExperience}`)}
                      className="absolute left-0 p-2 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50"
                      disabled={(currentPhotoIndices[`jci-${selectedJCIExperience}`] || 0) === 0}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <img
                      src={jciExperiences[selectedJCIExperience].photos[currentPhotoIndices[`jci-${selectedJCIExperience}`] || 0]}
                      alt={`${jciExperiences[selectedJCIExperience].position} photo ${currentPhotoIndices[`jci-${selectedJCIExperience}`] + 1 || 1}`}
                      className="w-[500px] h-[300px] object-cover rounded-lg shadow-md"
                    />
                    <button
                      onClick={() => handleNextPhoto(`jci-${selectedJCIExperience}`, jciExperiences[selectedJCIExperience].photos.length)}
                      className="absolute right-0 p-2 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50"
                      disabled={(currentPhotoIndices[`jci-${selectedJCIExperience}`] || 0) === jciExperiences[selectedJCIExperience].photos.length - 1}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Microsoft Club Section */}
          <div className="flex-1">
            <div className="flex justify-center mb-6">
              <img 
                src="./assoc/club.jpg" 
                alt="Microsoft Logo" 
                className="w-40 h-40 object-contain rounded-lg shadow-md"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Microsoft Polytechnique Club
            </h3>
            <div className="space-y-8 max-w-2xl mx-auto">
              {microsoftClub.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{exp.organization}</h4>
                  <p className="text-blue-600 font-medium text-lg">{exp.position} • {exp.period}</p>
                  <p className="text-gray-600 mt-3 leading-relaxed">{exp.description}</p>
                  <div className="mt-4 relative flex items-center justify-center">
                    <button
                      onClick={() => handlePrevPhoto(`ms-${index}`)}
                      className="absolute left-0 p-2 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50"
                      disabled={(currentPhotoIndices[`ms-${index}`] || 0) === 0}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <img
                      src={exp.photos[currentPhotoIndices[`ms-${index}`] || 0]}
                      alt={`${exp.position} photo ${currentPhotoIndices[`ms-${index}`] + 1 || 1}`}
                      className="w-[500px] h-[300px] object-cover rounded-lg shadow-md"
                    />
                    <button
                      onClick={() => handleNextPhoto(`ms-${index}`, exp.photos.length)}
                      className="absolute right-0 p-2 bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50"
                      disabled={(currentPhotoIndices[`ms-${index}`] || 0) === exp.photos.length - 1}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
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

export default Associations;