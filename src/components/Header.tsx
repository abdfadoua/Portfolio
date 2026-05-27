import React, { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../LanguageContext'; 

const Header = () => {
  const { lang, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Traductions pour le Header avec la nouvelle section "Design"
  const t = {
    fr: {
      accueil: 'Accueil',
      propos: 'À propos',
      experience: 'Expérience',
      competences: 'Compétences',
      projets: 'Projets',
      design: 'Portfolio Design',
      associative: 'Vie Associative',
      contact: 'Contact',
    },
    en: {
      accueil: 'Home',
      propos: 'About',
      experience: 'Experience',
      competences: 'Skills',
      projets: 'Projects',
      design: 'Design Portfolio',
      associative: 'Community Life',
      contact: 'Contact',
    }
  };

  const currentT = t[lang];

  // Ajout de la section design
  const navItems = [
    { name: currentT.accueil, href: '#hero' },
    { name: currentT.propos, href: '#about' },
    { name: currentT.experience, href: '#experience' },
    { name: currentT.competences, href: '#skills' },
    { name: currentT.projets, href: '#projects' },
    { name: currentT.design, href: '#design' },
    { name: currentT.associative, href: '#associations' },
    { name: currentT.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <nav className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Logo - Mon Portfolio */}
          <div className="text-2xl font-black tracking-tight cursor-pointer" onClick={() => scrollToSection('#hero')}>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Mon Portfolio
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center">
            {/* J'ai réduit légèrement l'espacement (space-x-5 au lieu de 8) pour que les 8 liens rentrent bien */}
            <div className="flex items-center space-x-5 xl:space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium text-sm whitespace-nowrap"
                >
                  {item.name}
                </button>
              ))}
            </div>
            
            {/* Séparateur et bouton de langue (Design Pilule) */}
            <div className="flex items-center ml-6 pl-6 border-l border-slate-200">
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-blue-600 transition-all duration-300 shadow-sm"
                aria-label="Changer de langue"
              >
                <Languages size={18} />
                <span className="text-sm font-bold">{lang.toUpperCase()}</span>
              </button>
            </div>
          </div>

          {/* Boutons Mobile */}
          <div className="flex items-center space-x-3 lg:hidden">
            {/* Langue en version mobile */}
            <button 
              onClick={toggleLanguage} 
              className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-100 text-slate-700 hover:text-blue-600 font-bold text-sm"
            >
              <Languages size={16} />
              {lang.toUpperCase()}
            </button>
            
            {/* Menu Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile (Design Tiroir Fondu) */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col py-3 bg-white rounded-2xl shadow-xl border border-slate-100">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-6 py-3 text-left text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;