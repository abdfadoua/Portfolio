'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, ExternalLink, X, ZoomIn, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

// ─── DATA ─────────────────────────────────────────────────────────

const categories = [
  {
    id: 'affiches',
    label: 'Affiches d\'événement',
    emoji: '🎨',
    description: 'Affiches promotionnelles pour événements, formations et projets.',
    items: [
      { title: "Affiche du projet PSC idSpeak", image: "/evenements/idspeak.png",            description: "Affiche officielle pour le projet PSC idSpeak." },
      { title: "Formation Graphic Design",    image: "/evenements/Graphic Design.png",       description: "Affiche annonçant une formation en design graphique." },
      { title: "Formation Sponsoring",        image: "/evenements/Formation Sponsoring.png", description: "Affiche pour une formation sur le sponsoring et le marketing." },
      { title: "Formation Langue des signes", image: "/evenements/afficheformation.png",     description: "Affiche pour une formation de la langue des signes sous le cadre du projet PSC idSpeak." },

      { title: "Nuit de l'Info 2023",         image: "/evenements/La nuit 23.png",           description: "Affiche pour l'événement Nuit de l'Info 2023 à l'EPS." },
      { title: "Nuit de l'Info 2024",         image: "/evenements/nuit24.png",               description: "Affiche pour l'événement Nuit de l'Info 2024 à l'EPS." },
      { title: "Ouverture Club Microsoft",    image: "/evenements/microsoft.png",            description: "Affiche annonçant l'inauguration du Club Microsoft." },
      { title: "Ouverture Labo Informatique", image: "/evenements/18052024.png",             description: "Affiche célébrant l'ouverture du laboratoire informatique." },
      { title: "Événement Musical Pastel",    image: "/evenements/music.png",               description: "Affiche pour un événement musical au café-resto Pastel Café." },
      { title: "MPC Challenge",               image: "/evenements/stay tuned.png",           description: "Affiche promotionnelle pour la compétition MPC Challenge." },
    ],
  },
  {
    id: 'banderoles',
    label: 'Banderoles',
    emoji: '🎏',
    description: 'Banderoles grand format pour événements et projets.',
    items: [
      { title: "Banderole Projet PSC idSpeak",  image: "/evenements/bandroleidspeak.png",  description: "Banderole grand format pour le projet PSC idSpeak." },
      { title: "Banderole Layali Ramadhan",     image: "/evenements/1.png",                description: "Banderole promotionnelle pour l'événement Layali Ramadhan." },
      { title: "Banderole Layali El Aid",       image: "/evenements/2.png",                description: "Design vibrant pour célébrer l'événement Layali El Aid." },
    ],
  },
  {
    id: 'branding',
    label: 'Cartes de visite & Logos',
    emoji: '✦',
    description: 'Identités visuelles, cartes de visite, logos et invitations.',
    items: [
      { title: "Logo Radio Istidamah",          image: "/evenements/logoradio.png",       description: "Logo innovant du radio de l'association Estidamah." },
      { title: "Carte Chocolat - Avant",        image: "/cartevisite/1.png",              description: "Design élégant pour promouvoir des chocolats personnalisés." },
      { title: "Carte Chocolat - Arrière",      image: "/cartevisite/2.png",              description: "Verso informatif avec détails de contact pour le projet chocolat." },
      { title: "Carte Décoration - Avant",      image: "/cartevisite/carte.png",          description: "Design créatif pour un mini-projet de décoration intérieure." },
      { title: "Carte Décoration - Arrière",    image: "/cartevisite/visite.png",         description: "Verso avec informations clés pour le projet de décoration." },
      { title: "Invitation Mariage - Avant",    image: "/cartevisite/invit1.png",         description: "Design raffiné pour une invitation de mariage élégante." },
      { title: "Invitation Mariage - Arrière",  image: "/cartevisite/invit.png",          description: "Verso détaillant le programme et les informations du mariage." },
    ],
  },
];

// ─── LIGHTBOX ─────────────────────────────────────────────────────

function Lightbox({ design, onClose }) {
  if (!design) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 cursor-zoom-out"
        onClick={onClose}
      >
        <button
          className="absolute top-6 right-6 text-white/50 hover:text-white p-3 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-md transition-all z-50"
          onClick={onClose}
        >
          <X size={28} />
        </button>

        <motion.div
          initial={{ scale: 0.95, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative max-w-5xl w-full flex flex-col items-center cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={design.image}
            alt={design.title}
            className="max-h-[78vh] w-auto object-contain rounded-xl shadow-2xl mb-6"
            onError={(e) => { e.target.src = 'https://placehold.co/800x600/1e293b/94a3b8?text=Image+Non+Trouvée'; }}
          />
          <div className="text-center max-w-2xl bg-black/50 px-8 py-5 rounded-2xl border border-white/10 backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-1">{design.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{design.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── DESIGN CARD ──────────────────────────────────────────────────

function DesignCard({ design, onClick, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group relative rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800/50 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-400 aspect-[3/4] border border-slate-200 dark:border-white/10"
      onClick={() => onClick(design)}
    >
      <img
        src={design.image}
        alt={design.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
        onError={(e) => { e.target.src = 'https://placehold.co/300x400/f1f5f9/94a3b8?text=Image'; }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-40 group-hover:opacity-85 transition-opacity duration-300" />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        <div className="bg-white/15 backdrop-blur-md p-3 rounded-full border border-white/25 text-white shadow-lg">
          <ZoomIn size={18} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-3.5 translate-y-0.5 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white font-semibold text-[13px] leading-tight mb-0.5 line-clamp-1">{design.title}</h3>
        <p className="text-slate-300 text-[11px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 line-clamp-2 leading-snug">
          {design.description}
        </p>
      </div>
    </motion.div>
  );
}

// ─── CATEGORY SECTION ─────────────────────────────────────────────

function CategorySection({ category, onOpen }) {
  const [expanded, setExpanded] = useState(true);
  const PREVIEW_COUNT = 4;
  const showToggle = category.items.length > PREVIEW_COUNT;
  const visibleItems = expanded ? category.items : category.items.slice(0, PREVIEW_COUNT);

  return (
    <div className="mb-20">
      {/* Section header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 shadow-sm text-xl">
            {category.emoji}
          </div>
          <div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {category.label}
            </h3>
            <p className="text-slate-400 text-sm mt-0.5">{category.items.length} création{category.items.length > 1 ? 's' : ''}</p>
          </div>
        </div>

        {showToggle && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs font-bold transition-all duration-200 shadow-sm hover:shadow-md"
          >
            {expanded ? (
              <><ChevronUp size={14} /> Réduire</>
            ) : (
              <><ChevronDown size={14} /> Voir tout ({category.items.length})</>
            )}
          </button>
        )}
      </div>

      {/* Divider line */}
      <div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-transparent dark:from-white/10 dark:via-white/5 mb-8" />

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
      >
        <AnimatePresence mode="popLayout">
          {visibleItems.map((design, i) => (
            <DesignCard
              key={design.title + i}
              design={design}
              onClick={onOpen}
              index={i}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Show-more inline hint when collapsed */}
      {!expanded && showToggle && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setExpanded(true)}
          className="mt-6 w-full py-4 rounded-2xl border border-dashed border-slate-300 dark:border-white/10 text-slate-400 dark:text-slate-500 text-sm font-bold hover:border-slate-400 dark:hover:border-white/20 hover:text-slate-600 dark:hover:text-slate-300 transition-all duration-200"
        >
          + {category.items.length - PREVIEW_COUNT} création{category.items.length - PREVIEW_COUNT > 1 ? 's' : ''} de plus
        </motion.button>
      )}
    </div>
  );
}

// ─── COMPOSANT PRINCIPAL ──────────────────────────────────────────

const Design = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);

  const totalCount = categories.reduce((acc, c) => acc + c.items.length, 0);

  return (
    <section id="design" className="py-24 bg-slate-50 dark:bg-[#030712] relative overflow-hidden">

      <Lightbox design={selectedDesign} onClose={() => setSelectedDesign(null)} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* ── HEADER ─────────────────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-bold tracking-widest uppercase mb-6">
            <Palette size={16} /> Direction Artistique
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-5 tracking-tight">
            Portfolio Design
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-light mb-4">
            Une sélection de mes créations graphiques, affiches événementielles et travaux de branding.
          </p>
          {/* Category pills summary */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#section-${cat.id}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-xs font-bold hover:border-purple-300 dark:hover:border-purple-500/40 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 shadow-sm"
              >
                <span>{cat.emoji}</span> {cat.label}
                <span className="ml-1 px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 text-[10px] font-mono">
                  {cat.items.length}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* ── SECTIONS PAR CATÉGORIE ─────────────────────────────── */}
        {categories.map((cat) => (
          <div key={cat.id} id={`section-${cat.id}`}>
            <CategorySection category={cat} onOpen={setSelectedDesign} />
          </div>
        ))}

        {/* ── CALL TO ACTION ─────────────────────────────────────── */}


      </div>
    </section>
  );
};

export default Design;