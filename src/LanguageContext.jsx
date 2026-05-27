import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('fr');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// C'est cette ligne qui posait problème car elle dépend du contexte défini au-dessus
export const useLanguage = () => useContext(LanguageContext);