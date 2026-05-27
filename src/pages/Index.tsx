'use client'

import React from 'react';
// Import du hook pour accéder à la langue globale
// @ts-ignore
import { useLanguage } from "../LanguageContext"; 

// Import de vos composants
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Design from '@/components/Design';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Associations from '@/components/Association';

const Index = () => {
  // On récupère 'lang' depuis le contexte global
  // Assurez-vous que le nom est bien 'lang' (ou 'language') selon votre LanguageContext
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Le Header n'a plus besoin de props language={lang} 
          car il va chercher la langue tout seul via useLanguage() à l'intérieur de son propre code
      */}
      <Header /> 
      
      <main>
        {/* Les composants internes utilisent eux aussi useLanguage() en interne. */}
        <Hero />
        
        <div className="space-y-0"> 
          <About language={'en'} />
          
          {/* Cette section contient maintenant Expérience + Éducation fusionnés */}
          <Experience />
          
          <Skills />
          <Certificates />
          <Projects />
          <Associations />
          <Design />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;