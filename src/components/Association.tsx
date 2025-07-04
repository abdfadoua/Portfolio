import React from 'react';

const Associations = () => {
  const events = [
    {
      name: 'Hackathon Tech Innovate 2023',
      role: 'Participant',
      date: 'Mars 2023',
      description: 'Participation à un hackathon de 48 heures axé sur le développement de solutions numériques pour l’éducation, où j’ai contribué au développement d’une application web collaborative.',
    },
    {
      name: 'Conférence Data Science Summit',
      role: 'Bénévole',
      date: 'Juin 2022',
      description: 'Aide à l’organisation de la conférence, gestion des inscriptions et assistance technique pour les présentations sur l’intelligence artificielle et l’analyse de données.',
    },
    {
      name: 'Atelier de Codage Communautaire',
      role: 'Organisatrice',
      date: 'Novembre 2021',
      description: 'Organisation d’un atelier pour initier les étudiants aux bases de la programmation en Python, avec un accent sur les projets open-source.',
    },
  ];

  const roles = [
    {
      organization: 'Club d’Informatique Universitaire',
      position: 'Présidente',
      period: '2022 - 2023',
      description: 'Leadership dans l’organisation d’événements technologiques, gestion d’une équipe de 15 membres, et promotion de l’inclusion numérique.',
    },
    {
      organization: 'Association pour l’Innovation Numérique',
      position: 'Membre actif',
      period: '2021 - Présent',
      description: 'Participation à des projets de développement durable utilisant des technologies web et des analyses de données pour des ONG locales.',
    },
  ];

  return (
    <section id="associations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vie Associative
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez mon engagement dans des événements et des associations qui reflètent ma passion pour la technologie et la communauté.
          </p>
        </div>

        {/* Events Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Événements</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-xl font-bold text-gray-900">{event.name}</h4>
                <p className="text-blue-600 font-medium">{event.role} • {event.date}</p>
                <p className="text-gray-600 mt-2">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Roles Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Rôles dans les Associations</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {roles.map((role, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-xl font-bold text-gray-900">{role.organization}</h4>
                <p className="text-blue-600 font-medium">{role.position} • {role.period}</p>
                <p className="text-gray-600 mt-2">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Associations;