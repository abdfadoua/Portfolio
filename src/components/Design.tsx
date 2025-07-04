import React, { useState } from 'react';
import { Eye, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Design = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDesign, setSelectedDesign] = useState(null);

  const eventPosters = [
    {
      title: "Banderole Layali Ramadhan",
      image: "/evenements/1.png",
      description: "Affiche promotionnelle pour l'événement Layali Ramadhan."
    },
    {
      title: "Banderole Layali El Aid",
      image: "/evenements/2.png",
      description: "Design vibrant pour célébrer l'événement Layali El Aid."
    },
    {
      title: "Membres du Bureau Club Microsoft",
      image: "/evenements/team.png",
      description: "Affiche présentant les membres du bureau du Club Microsoft Polytechnique."
    },
    {
      title: "Nuit de l’Info 2023",
      image: "/evenements/La nuit 23.png",
      description: "Affiche pour l'événement Nuit de l’Info 2023 à l’École Polytechnique de Sousse."
    },
    {
      title: "Ouverture Club Microsoft",
      image: "/evenements/microsoft.png",
      description: "Affiche annonçant l’inauguration du Club Microsoft à Polytechnique Sousse."
    },
    {
      title: "Ouverture Labo Informatique",
      image: "/evenements/18052024.png",
      description: "Affiche célébrant l’ouverture du laboratoire informatique au Lycée Bekalta."
    },
    {
      title: "Événement Musical Pastel Café",
      image: "/evenements/music.png",
      description: "Affiche pour un événement musical au café-resto Pastel Café."
    },
    {
      title: "MPC Challenge",
      image: "/evenements/stay tuned.png",
      description: "Affiche promotionnelle pour la compétition MPC Challenge du Club Microsoft."
    },
    {
      title: "Nuit de l’Info 2024",
      image: "/evenements/nuit24.png",
      description: "Affiche pour l’événement Nuit de l’Info 2024 à l’École Polytechnique de Sousse."
    },
    {
      title: "Formation Graphic Design",
      image: "/evenements/Graphic Design.png",
      description: "Affiche annonçant une formation en design graphique."
    },
    {
      title: "Formation Sponsoring",
      image: "/evenements/Formation Sponsoring.png",
      description: "Affiche pour une formation sur le sponsoring et le marketing."
    }
  ];

  const businessCardsLogos = [
    {
      title: "Carte de Visite Chocolat - Face Avant",
      image: "/cartevisite/1.png",
      description: "Design élégant pour promouvoir des chocolats personnalisés."
    },
    {
      title: "Carte de Visite Chocolat - Face Arrière",
      image: "/cartevisite/2.png",
      description: "Verso informatif avec détails de contact pour le projet chocolat."
    },
    {
      title: "Carte de Visite Décoration - Face Avant",
      image: "/cartevisite/carte.png",
      description: "Design créatif pour un mini-projet de décoration intérieure."
    },
    {
      title: "Carte de Visite Décoration - Face Arrière",
      image: "/cartevisite/visite.png",
      description: "Verso avec informations clés pour le projet de décoration."
    },
    {
      title: "Logo Chocolat Personnalisé",
      image: "/cartevisite/logo.png",
      description: "Logo distinctif pour le projet de chocolats personnalisés."
    },
    {
      title: "Invitation de Mariage - Face Avant",
      image: "/cartevisite/invit1.png",
      description: "Design raffiné pour une invitation de mariage élégante."
    },
    {
      title: "Invitation de Mariage - Face Arrière",
      image: "/cartevisite/invit.png",
      description: "Verso détaillant le programme et les informations du mariage."
    }
  ];

  const openModal = (design) => {
    console.log("Opening modal for design:", design.title); // Debug log
    setSelectedDesign(design);
    setShowModal(true);
  };

  const closeModal = () => {
    console.log("Closing modal"); // Debug log
    setShowModal(false);
    setSelectedDesign(null);
  };

  return (
    <section id="design" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Portfolio Design</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mes créations graphiques, interfaces utilisateur et travaux de design
          </p>
        </div>

        {/* Modal */}
        {showModal && selectedDesign && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto border-2 border-gradient-to-r from-blue-400 to-purple-400">
              <h3 className="text-xl font-bold mb-4 text-gray-900">{selectedDesign.title}</h3>
              <img 
                src={selectedDesign.image}
                alt={selectedDesign.title}
                className="w-full max-h-[60vh] object-contain rounded-lg mb-4"
                onError={() => console.error(`Failed to load modal image: ${selectedDesign.image}`)}
              />
              <p className="text-gray-700 mb-6">{selectedDesign.description}</p>
              <Button 
                className="mt-6" 
                onClick={closeModal}
              >
                Fermer
              </Button>
            </div>
          </div>
        )}

        {/* Affiches des Événements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Design Affiches des Événements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {eventPosters.map((design, index) => (
              <div 
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gradient-to-r from-blue-400 to-purple-400"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={design.image} 
                    alt={design.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={() => console.error(`Failed to load image: ${design.image}`)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1">{design.title}</h3>
                      <p className="text-white/80 text-sm">{design.description}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className="opacity-90"
                        onClick={() => openModal(design)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carte Visite et Logo */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Design Carte Visite et Logo</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {businessCardsLogos.map((design, index) => (
              <div 
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gradient-to-r from-blue-400 to-purple-400"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={design.image} 
                    alt={design.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={() => console.error(`Failed to load image: ${design.image}`)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1">{design.title}</h3>
                      <p className="text-white/80 text-sm">{design.description}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className="opacity-90"
                        onClick={() => openModal(design)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Vous souhaitez voir plus de mes créations ou collaborer sur un projet ?
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <ExternalLink className="mr-2 h-5 w-5" />
            Voir Portfolio Complet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Design;