'use client'

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Trophy, Calendar, MapPin, Building2,
  ChevronLeft, ChevronRight, Sparkles, Zap,
  Microscope, Rocket, Bot, Camera, Globe,
  X, ZoomIn, Filter, Star, Users, Award, ArrowRight,
  HandMetal, Youtube, Instagram, ExternalLink, Heart, Images
} from 'lucide-react';
import { useLanguage } from "../LanguageContext";

// ─── DATA ───────────────────────────────────────────────────────────────────

const jciExperiences = [
  {
    position: { fr: 'Trésorière', en: 'Treasurer' },
    period: '2025',
    award: { fr: 'VP la plus remarquable – Zone Centre-Ouest', en: 'Most Outstanding VP – Centre-West Zone' },
    description: {
      fr: "Gestion des finances et du budget de l'organisation, en veillant à la transparence et à l'efficacité des opérations financières.",
      en: "Managed the organization's finances and budget, ensuring transparency and efficiency."
    },
    photos: ['./assoc/MVP.jpg','./assoc/mvp1.jpg','./assoc/tres2.jpg','./assoc/tre1.jpg','./assoc/tres3.jpg','./assoc/tres4.jpg','./assoc/tres5.jpg'],
  },
  {
    position: { fr: 'Secrétaire Générale', en: 'General Secretary' },
    period: '2024',
    award: null,
    description: {
      fr: "Coordination des activités administratives, rédaction de rapports et organisation de réunions.",
      en: "Coordinated administrative activities, drafted reports, and organized meetings."
    },
    photos: ['./assoc/sec1.jpg','./assoc/sec2.jpg','./assoc/sec3.jpg','./assoc/sec4.jpg'],
  },
  {
    position: { fr: 'Membre Active', en: 'Active Member' },
    period: '2022–2023',
    award: null,
    description: {
      fr: "Participation active à divers projets et événements, contribution à l'engagement communautaire.",
      en: "Active participation in various projects and events."
    },
    photos: ['./assoc/mem1.jpg','./assoc/mem2.jpg','./assoc/mem3.jpg'],
  },
];

const microsoftClub = {
  position: { fr: 'Responsable Média', en: 'Media Manager' },
  period: '2024–2025',
  description: {
    fr: "Gestion des contenus médias, promotion des événements du club via les réseaux sociaux et création de visuels.",
    en: "Managed media content, promoted club events on social media, and created visuals."
  },
  skills: ['Design Graphique', 'Social Media', 'Content Strategy', 'Branding'],
  photos: ['./assoc/club1.jpeg','./assoc/club2.jpg','./assoc/club3.jpg','./assoc/club4.jpg'],
};

const CATEGORY_META = {
  Hackathon:                { bg: 'bg-violet-100',  text: 'text-violet-700',  dot: 'bg-violet-500' },
  Développement:            { bg: 'bg-cyan-100',    text: 'text-cyan-700',    dot: 'bg-cyan-500' },
  Organisation:             { bg: 'bg-emerald-100', text: 'text-emerald-700', dot: 'bg-emerald-500' },
  Communication:            { bg: 'bg-pink-100',    text: 'text-pink-700',    dot: 'bg-pink-500' },
  'Event Management':       { bg: 'bg-amber-100',   text: 'text-amber-700',   dot: 'bg-amber-500' },
  Recherche:                { bg: 'bg-blue-100',    text: 'text-blue-700',    dot: 'bg-blue-500' },
  Challenge:                { bg: 'bg-orange-100',  text: 'text-orange-700',  dot: 'bg-orange-500' },
  Innovation:               { bg: 'bg-purple-100',  text: 'text-purple-700',  dot: 'bg-purple-500' },
  Bootcamp:                 { bg: 'bg-teal-100',    text: 'text-teal-700',    dot: 'bg-teal-500' },
  AI:                       { bg: 'bg-fuchsia-100', text: 'text-fuchsia-700', dot: 'bg-fuchsia-500' },
  'Projet Socioculturel':   { bg: 'bg-rose-100',    text: 'text-rose-700',    dot: 'bg-rose-500' },
  Inclusion:                { bg: 'bg-green-100',   text: 'text-green-700',   dot: 'bg-green-500' },
};

// ─── IDSPEAK PROJECT ACTIONS ─────────────────────────────────────────────────

const idSpeakActions = [
  {
    step: '01',
    title: { fr: 'Formation accélérée en langue des signes', en: 'Accelerated Sign Language Training' },
    description: {
      fr: "Formation intensive animée par un expert international en langue des signes, offrant une immersion complète aux participants.",
      en: "Intensive training led by an international sign language expert, offering full immersion to participants."
    },
    photos: [
      'assoc/event/nofor1.jfif',
      'assoc/event/nofor2.jfif',
    ],
    links: [],
  },
  {
    step: '02',
    title: { fr: '+180 Vidéos éducatives publiées', en: '+180 Educational Videos Published' },
    description: {
      fr: "Production de 180 vidéos sur YouTube et une série de reels Instagram, afin de rendre la langue des signes accessible au plus grand nombre.",
      en: "Production of 180 videos on YouTube and an Instagram reel series, making sign language accessible to everyone."
    },
    photos: [],
    links: [
      { label: 'YouTube', url: 'https://www.youtube.com/@idSpeak_psc', icon: 'youtube' },
      { label: 'Instagram', url: 'https://www.instagram.com/idspeak_psc/', icon: 'instagram' },
    ],
  },
  {
    step: '03',
    title: { fr: 'Formation pour enseignants & étudiants', en: 'Training for Teachers & Students' },
    description: {
      fr: "Formation destinée aux enseignants et aux étudiants (30 personnes) afin de renforcer l'inclusion et faciliter la communication avec les personnes sourdes.",
      en: "Training for teachers and students (30 participants) to strengthen inclusion and facilitate communication with deaf individuals."
    },
    photos: [
      'assoc/event/for1.jfif',
      'assoc/event/for2.jfif',
      'assoc/event/for3.jfif',
    ],
    links: [],
  },
  {
    step: '04',
    title: { fr: 'Plateforme numérique gratuite', en: 'Free Digital Platform' },
    description: {
      fr: "Création d'une plateforme gratuite offrant des leçons accessibles à tous ainsi que des ressources pratiques pour les situations quotidiennes et d'urgence.",
      en: "Creation of a free platform offering accessible lessons and practical resources for everyday and emergency situations."
    },
    photos: [],
    links: [
      { label: 'Visiter la plateforme', url: 'https://idspeak.netlify.app/', icon: 'external' },
    ],
  },
  {
    step: '05',
    title: { fr: 'Jeu de cartes éducatif', en: 'Educational Card Game' },
    description: {
      fr: "Développement d'un outil interactif visant à faciliter l'apprentissage et promouvoir la langue des signes de façon ludique.",
      en: "Development of an interactive tool to facilitate learning and promote sign language in a fun way."
    },
    photos: [
      'assoc/event/carte.jpg',
      'assoc/event/carte2.png',
      'assoc/event/carte3.png',
      'assoc/event/carte4.jfif',
    ],
    links: [],
  },
  {
    step: '06',
    title: { fr: "Journée d'action avec l'ATAS de Sousse", en: 'Action Day with ATAS Sousse' },
    description: {
      fr: "Lancement de l'application avec des ateliers pratiques réunissant Sourds et Entendants. Lancement du jeu de cartes avec des ateliers interactifs favorisant l'apprentissage commun.",
      en: "App launch with practical workshops bringing together Deaf and Hearing participants. Card game launch with interactive workshops promoting shared learning."
    },
    photos: [
      'assoc/event/action.jfif',
      'assoc/event/action2.jfif',
      'assoc/event/action3.jfif',
      'assoc/event/action4.jfif',
      'assoc/event/action6.jfif',
      'assoc/event/action7.jfif',
    ],
    links: [],
  },
  {
    step: '07',
    title: { fr: 'Bal du projet – Stands interactifs', en: 'Project Fair – Interactive Stands' },
    description: {
      fr: "Visibilité maximale au sein de l'école. Stands interactifs, démonstrations finales et partage du succès avec les autres projets PSC.",
      en: "Maximum visibility within the school. Interactive stands, final demonstrations, and sharing the success with other PSC projects."
    },
    photos: [
      'assoc/event/bal1.jfif',
      'assoc/event/bal2.jfif',
      'assoc/event/bal3.jfif',
      'assoc/event/bal4.jpeg',
      'assoc/event/bal5.jpeg',
      'assoc/event/bal6.jpeg',
    ],
    links: [],
  },
  {
    step: '08',
    title: { fr: 'Soutenance finale & validation par les experts', en: 'Final Defense & Expert Validation' },
    description: {
      fr: "Présentation officielle du projet devant un jury d'experts : personnes formées, impact social, retours des partenaires et perspectives d'avenir.",
      en: "Official presentation before an expert jury: people trained, social impact, partner feedback, and future prospects."
    },
    photos: ['assoc/event/sout.jpg'],
    links: [],
  },
];

// ─── SPONSORS ────────────────────────────────────────────────────────────────

const idSpeakSponsors = [
  { name: 'Sponsor 1', logo: 'assoc/event/printlab.png' },
  { name: 'Sponsor 2', logo: 'assoc/event/white.png' },
  { name: 'Sponsor 3', logo: 'assoc/event/updeaf.png' },
  { name: 'Sponsor 4', logo: 'assoc/event/mhenni.png' },
];

const events = [
  {
    title: 'IdSpeak – Projet Socioculturel',
    type: 'Projet Sociauculturel',
    role: { fr: 'Cheffe de Projet', en: 'Project Leader' },
    organization: 'École Poly. Sousse',
    date: '2024–2025',
    location: 'Sousse',
    description: {
      fr: "Ce projet vise à réduire les barrières de communication entre les personnes sourdes ou malentendantes et le reste de la société. À travers IdSpeak, nous proposons une plateforme numérique, des capsules vidéo éducatives et des actions de sensibilisation pour encourager l'apprentissage de la langue des signes.",
      en: "IdSpeak aims to reduce communication barriers between deaf or hard-of-hearing people and the rest of society. Through a digital platform, educational video capsules, and awareness campaigns, we encourage sign language learning for a more inclusive world."
    },
    categories: ['Projet Socioculturel', 'Inclusion'],
    icon: <HandMetal size={18} />,
    gradient: 'from-rose-500 to-pink-400',
    featured: true,
    photos: ['assoc/event/cover.jfif'],
    isPSC: true,
  },
  {
    title: 'AI Night Challenge 2026',
    type: 'participation',
    role: { fr: 'Participante', en: 'Participant' },
    organization: 'ARSII',
    date: '27 Février 2026',
    location: 'En ligne',
    description: {
      fr: "Série de challenges en ligne en collaboration avec des industriels. L'objectif est de répondre à leurs besoins en identifiant et en développant des idées novatrices à fort impact, exploitant la puissance du Big Data et de l'IA.",
      en: "Online challenges in collaboration with industrial stakeholders. The goal is to address real-world partner needs by identifying and developing high-impact, innovative ideas using advanced machine learning techniques."
    },
    categories: ['AI', 'Challenge'],
    icon: <Bot size={18} />,
    gradient: 'from-fuchsia-600 to-purple-500',
    featured: true,
    photos: ['assoc/event/arsii (2).jfif','assoc/event/arsii (2).jpeg','assoc/event/arsii (1).jfif','assoc/event/arsii (1).jpeg','assoc/event/arsii (3).jpeg'],
  },
  {
    title: "La Nuit de l'Info 2025",
    type: 'organisation',
    role: { fr: 'Orga. Team', en: 'Orga Team' },
    organization: 'École Poly. Sousse',
    date: 'Décembre 2025',
    location: 'Sousse',
    description: {
      fr: "Poursuivant la tradition d'excellence, cette édition a réuni la crème des jeunes développeurs pour une nouvelle nuit de défis acharnés. L'accent a été mis sur l'architecture système et l'ergonomie, transformant des idées audacieuses en prototypes fonctionnels avant l'aube.",
      en: "Continuing the tradition of excellence, this edition gathered top young developers for another night of fierce coding challenges. With a strong focus on system architecture and user experience, bold ideas were transformed into functional prototypes before dawn."
    },
    categories: ['Hackathon', 'Développement'],
    icon: <Zap size={18} />,
    gradient: 'from-violet-600 to-cyan-500',
    featured: true,
    photos: ['assoc/event/nuit2025 (1).jpeg','assoc/event/nuit2025 (2).jpeg','assoc/event/nuit2025 (3).jpeg'],
  },
  {
    title: 'Bootcamp "Code to Rise V0.1"',
    type: 'participation',
    role: { fr: 'Participante', en: 'Participant' },
    organization: null,
    date: '21–23 Juillet 2025',
    location: 'École Poly. Sousse',
    description: {
      fr: "Bootcamp intensif de 3 jours axé sur le développement web full-stack avec Spring Boot et Angular. Sa dimension novatrice réside dans l'intégration concrète de l'Intelligence Artificielle au cœur des applications web développées.",
      en: "Intensive 3-day bootcamp focusing on full-stack web development using Spring Boot and Angular, featuring an innovative twist: the practical integration of Artificial Intelligence directly into the developed web applications."
    },
    categories: ['Bootcamp', 'Développement'],
    icon: <Rocket size={18} />,
    gradient: 'from-teal-500 to-emerald-400',
    featured: true,
    photos: ['assoc/event/bootcamp.jfif','assoc/event/boot1 (1).jpeg','assoc/event/boot1 (2).jpeg'],
  },
  {
    title: 'TWISE Night Challenge',
    type: 'organisation',
    role: { fr: 'Orga. Team', en: 'Orga Team' },
    organization: 'ARSII',
    date: '7–8 Février 2025',
    location: 'PolyHub',
    description: {
      fr: "Soutenu par Horizon Europe, ce challenge a mobilisé la jeunesse autour de défis en Intelligence Artificielle ciblant la santé, la technologie, l'environnement et la vie sociale. Une occasion de transformer les talents en projets durables.",
      en: "Supported by Horizon Europe, this challenge mobilized youth around AI topics targeting health, tech, environment, and social life. A unique opportunity to transform young talent into concrete, sustainable projects."
    },
    categories: ['Challenge', 'Innovation'],
    icon: <Globe size={18} />,
    gradient: 'from-orange-500 to-amber-400',
    featured: false,
    photos: ['assoc/event/ainight2025.jfif','assoc/event/ai2025.jfif','assoc/event/ainight2025_2.jfif'],
  },
  {
    title: 'TWISE Night',
    type: 'organisation',
    role: { fr: 'Membre Orga.', en: 'Organizer' },
    organization: 'Institut Français Sousse',
    date: '27 Septembre 2024',
    location: 'Sousse',
    description: {
      fr: "S'inscrivant dans la Nuit Européenne des Chercheur.e.s, cet événement est une grande fête de vulgarisation scientifique. À travers des ateliers ludiques, il met en lumière l'excellence de la recherche et le rôle crucial des femmes dans l'innovation.",
      en: "Part of the European Researchers' Night, this event celebrates scientific popularization. Through interactive workshops, it highlights research excellence and the crucial role of women in innovation, bridging science and civil society."
    },
    categories: ['Recherche', 'Organisation'],
    icon: <Microscope size={18} />,
    gradient: 'from-blue-600 to-cyan-400',
    featured: true,
    photos: ['assoc/event/twise2025.jfif','assoc/event/twise2025_2.jfif','assoc/event/twise2025_3.jfif','assoc/event/twise2025_4.jfif'],
  },
  {
    title: "La Nuit de l'Info 2023",
    type: 'organisation',
    role: { fr: 'Media Manager', en: 'Media Manager' },
    organization: 'Microsoft Club Poly.',
    date: 'Décembre 2023',
    location: 'Sousse',
    description: {
      fr: "Le rendez-vous annuel où étudiants et entreprises collaborent le temps d'une nuit pour concevoir une application Web 2.0. Du coucher au lever du soleil, les équipes repoussent leurs limites pour relever les défis techniques et ergonomiques lancés par les partenaires.",
      en: "The annual event where students and companies collaborate overnight to design a Web 2.0 application. From sunset to sunrise, teams push their limits to solve technical and ergonomic challenges set by partners."
    },
    categories: ['Communication', 'Event Management'],
    icon: <Camera size={18} />,
    gradient: 'from-pink-500 to-rose-400',
    featured: false,
    photos: ['assoc/event/nuit2023 (1).jpeg','assoc/event/nuit2023 (2).jpeg','assoc/event/nuit2023.jfif'],
  },
  {
    title: "La Nuit de l'Info 2022",
    type: 'participation',
    role: { fr: 'Participante', en: 'Participant' },
    organization: 'École Poly. Sousse',
    date: 'Décembre 2022',
    location: 'Sousse',
    description: {
      fr: "Compétition regroupant des passionnés de technologie pour une nuit de codage intensif. Cet événement a mis en lumière la collaboration dynamique, le partage d'idées et la résolution de problèmes complexes, chaque équipe apportant une perspective unique.",
      en: "A competition bringing tech enthusiasts together for an intensive night of coding. This event highlighted dynamic collaboration and complex problem-solving, with each team bringing a unique perspective to tackle the challenges."
    },
    categories: ['Hackathon', 'Développement'],
    icon: <Zap size={18} />,
    gradient: 'from-indigo-600 to-blue-500',
    featured: false,
    photos: ['assoc/event/nuit2022.jfif'],
  },
];

const FILTER_OPTIONS = [
  { id: 'all',                    label: { fr: 'Tous', en: 'All' },                   icon: <Star size={13} /> },
  { id: 'participation',          label: { fr: 'Participation', en: 'Participation' }, icon: <Users size={13} /> },
  { id: 'organisation',           label: { fr: 'Organisation', en: 'Organization' },   icon: <Award size={13} /> },
  { id: 'Projet Sociauculturel',  label: { fr: 'Projet PSC', en: 'PSC Project' },      icon: <Heart size={13} /> },
];

// ─── UTILS ───────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  }),
};

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

function CategoryBadge({ label }) {
  const meta = CATEGORY_META[label] || { bg: 'bg-slate-100', text: 'text-slate-600', dot: 'bg-slate-400' };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${meta.bg} ${meta.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
      {label}
    </span>
  );
}

// ─── PHOTO COUNT BADGE ────────────────────────────────────────────────────────
// Affiché sur les cartes pour signaler la présence de médias sans les montrer

function PhotoCountBadge({ count, gradient }) {
  if (!count || count === 0) return null;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-500 border border-slate-200`}>
      <Camera size={11} />
      {count} photo{count > 1 ? 's' : ''}
    </span>
  );
}

// ─── MODAL PHOTO SLIDER ───────────────────────────────────────────────────────
// Utilisé uniquement dans les modals

function PhotoSlider({ photos, sliderKey, indices, onPrev, onNext, onImageClick }) {
  const idx = indices[sliderKey] || 0;
  return (
    <div
      className="relative rounded-2xl overflow-hidden bg-slate-200 aspect-[16/10] group cursor-zoom-in shadow-sm"
      onClick={() => onImageClick(photos, idx)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={idx} src={photos[idx]} alt=""
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xl border border-slate-200 text-slate-700 text-xs font-bold px-4 py-2 rounded-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300 shadow-sm">
          <ZoomIn size={14} /> Agrandir
        </div>
      </div>
      {photos.length > 1 && (
        <>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 pointer-events-none">
            {photos.map((_, i) => (
              <span key={i} className={`block rounded-full transition-all duration-300 ${i === idx ? 'w-5 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/60'}`} />
            ))}
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(sliderKey); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xl border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-white transition-all opacity-0 group-hover:opacity-100 z-20 shadow-sm"
          >
            <ChevronLeft size={15} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(sliderKey, photos.length); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xl border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-white transition-all opacity-0 group-hover:opacity-100 z-20 shadow-sm"
          >
            <ChevronRight size={15} />
          </button>
        </>
      )}
    </div>
  );
}

// ─── LINK ICON HELPER ─────────────────────────────────────────────────────────

function LinkIcon({ type }) {
  if (type === 'youtube')   return <Youtube size={14} />;
  if (type === 'instagram') return <Instagram size={14} />;
  return <ExternalLink size={14} />;
}

// ─── IDSPEAK MODAL CONTENT ────────────────────────────────────────────────────

function IdSpeakModalContent({ lang, onImageClick }) {
  return (
    <div className="space-y-10">
      <div className="bg-rose-50 border border-rose-100 rounded-2xl p-5">
        <p className="text-slate-600 leading-relaxed text-sm">
          {lang === 'fr'
            ? "Ce projet vise à réduire les barrières de communication entre les personnes sourdes ou malentendantes et le reste de la société. Le manque de connaissance de la langue des signes limite souvent leur inclusion sociale et l'accès à l'information. À travers IdSpeak, nous proposons une plateforme numérique, des capsules vidéo éducatives et des actions de sensibilisation pour encourager l'apprentissage de la langue des signes — contribuant ainsi à promouvoir une société plus inclusive, accessible et solidaire pour tous."
            : "This project aims to reduce communication barriers between deaf or hard-of-hearing people and the rest of society. The lack of sign language knowledge often limits their social inclusion and access to information. Through IdSpeak, we offer a digital platform, educational video capsules and awareness campaigns to encourage sign language learning — promoting a more inclusive, accessible and caring society for all."
          }
        </p>
      </div>

      <div>
        <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
          <HandMetal size={15} className="text-rose-500" />
          {lang === 'fr' ? 'Actions du projet' : 'Project Actions'}
        </h4>

        <div className="space-y-8">
          {idSpeakActions.map((action, i) => (
            <div key={i} className="flex gap-4">
              <div className="shrink-0 flex flex-col items-center">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-pink-400 flex items-center justify-center text-white text-[11px] font-black shadow-md">
                  {action.step}
                </div>
                {i < idSpeakActions.length - 1 && (
                  <div className="w-px flex-1 mt-2 bg-gradient-to-b from-rose-200 to-transparent min-h-[24px]" />
                )}
              </div>

              <div className="flex-1 pb-2">
                <h5 className="text-sm font-black text-slate-800 mb-1">{action.title[lang]}</h5>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">{action.description[lang]}</p>

                {action.links.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {action.links.map((link, j) => (
                      <a
                        key={j}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:border-rose-300 hover:text-rose-600 hover:bg-rose-50 text-xs font-bold transition-all duration-200 shadow-sm"
                      >
                        <LinkIcon type={link.icon} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}

                {action.photos.length > 0 && (
                  <div className={`grid gap-2 ${action.photos.length === 1 ? 'grid-cols-1' : action.photos.length === 2 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'}`}>
                    {action.photos.map((photo, j) => (
                      <div
                        key={j}
                        className="relative rounded-xl overflow-hidden bg-slate-100 aspect-video group cursor-zoom-in"
                        onClick={() => onImageClick(action.photos, j)}
                      >
                        <img
                          src={photo}
                          alt={`${action.title[lang]} ${j + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => { e.target.src = 'https://placehold.co/600x400/fff1f2/fda4af?text=Photo+%C3%A0+venir' }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                          <ZoomIn size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-100 pt-8">
        <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-2 flex items-center gap-2">
          <Award size={15} className="text-rose-500" />
          {lang === 'fr' ? 'Nos Sponsors' : 'Our Sponsors'}
        </h4>
        <p className="text-xs text-slate-400 mb-5">
          {lang === 'fr'
            ? "Avec un budget important, nous ne l'avons pas porté seuls. 4 sponsors nous ont accordé leur confiance."
            : "With a significant budget, we didn't carry it alone. 4 sponsors trusted us."
          }
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {idSpeakSponsors.map((sponsor, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-center aspect-[3/2] hover:border-rose-200 hover:shadow-md transition-all duration-200"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.target.parentNode.innerHTML = `<span class="text-xs font-bold text-slate-400 text-center">${sponsor.name}</span>`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── JCI MODAL CONTENT ────────────────────────────────────────────────────────

function JCIModalContent({ lang, photoIndices, onPrev, onNext, onImageClick }) {
  const [selected, setSelected] = useState(0);
  const exp = jciExperiences[selected];

  return (
    <div className="space-y-6">
      {/* Timeline selector */}
      <div className="relative flex flex-col gap-0 pl-4 border-l-2 border-slate-100">
        {jciExperiences.map((e, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="group/tl flex items-start gap-4 py-3 text-left transition-all duration-200"
          >
            <div
              className={`absolute -left-[6px] w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
                selected === i
                  ? 'border-blue-500 bg-blue-500 scale-125'
                  : 'border-slate-300 bg-white group-hover/tl:border-slate-400'
              }`}
              style={{ top: `${i * 60 + 26}px`, position: 'absolute' }}
            />
            <div className={`flex-1 rounded-xl px-4 py-3 transition-all duration-300 ${
              selected === i
                ? 'bg-blue-50 border border-blue-100'
                : 'hover:bg-slate-50 border border-transparent'
            }`}>
              <div className="flex items-center justify-between">
                <span className={`text-sm font-bold transition-colors ${
                  selected === i ? 'text-slate-900' : 'text-slate-400 group-hover/tl:text-slate-600'
                }`}>
                  {e.position[lang]}
                </span>
                <span className={`text-[10px] font-mono transition-colors ${
                  selected === i ? 'text-blue-500' : 'text-slate-300'
                }`}>
                  {e.period}
                </span>
              </div>
              {selected === i && e.award && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="flex items-center gap-2 mt-2"
                >
                  <Trophy size={11} className="text-amber-500 shrink-0" />
                  <span className="text-[10px] text-amber-600 font-semibold leading-tight">{e.award[lang]}</span>
                </motion.div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Selected experience content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-5"
        >
          <p className="text-sm text-slate-500 leading-relaxed">{exp.description[lang]}</p>

          {/* Photos — affichées uniquement dans la modal */}
          {exp.photos && exp.photos.length > 0 && (
            <div>
              <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Camera size={12} /> Galerie
              </h5>
              <PhotoSlider
                photos={exp.photos}
                sliderKey={`jci-modal-${selected}`}
                indices={photoIndices}
                onPrev={onPrev}
                onNext={onNext}
                onImageClick={onImageClick}
              />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── MICROSOFT MODAL CONTENT ──────────────────────────────────────────────────

function MicrosoftModalContent({ lang, photoIndices, onPrev, onNext, onImageClick }) {
  return (
    <div className="space-y-6">
      <p className="text-slate-600 leading-relaxed text-base">{microsoftClub.description[lang]}</p>

      <div className="flex flex-wrap gap-2">
        {microsoftClub.skills.map((s) => (
          <span
            key={s}
            className="px-3 py-1.5 rounded-lg text-[11px] font-bold bg-slate-50 text-slate-500 border border-slate-200"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Photos — affichées uniquement dans la modal */}
      {microsoftClub.photos && microsoftClub.photos.length > 0 && (
        <div>
          <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
            <Camera size={12} /> Galerie
          </h5>
          <PhotoSlider
            photos={microsoftClub.photos}
            sliderKey="ms-modal-0"
            indices={photoIndices}
            onPrev={onPrev}
            onNext={onNext}
            onImageClick={onImageClick}
          />
        </div>
      )}
    </div>
  );
}

// ─── JCI CARD (sans photos) ───────────────────────────────────────────────────

function JCICard({ lang, onOpen }) {
  const [selected, setSelected] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const exp = jciExperiences[selected];
  const totalPhotos = jciExperiences.reduce((acc, e) => acc + (e.photos?.length || 0), 0);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
      className="relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg shadow-slate-100 cursor-pointer group"
      onClick={() => onOpen({ type: 'jci' })}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/40 transition-colors duration-300 pointer-events-none rounded-3xl" />

      <div className="p-6 lg:p-8 relative">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center">
              <img
                src="./assoc/jci.jpg" alt="JCI"
                className="w-full h-full object-contain"
                onError={(e) => { e.target.parentNode.innerHTML = '<span class="text-xl font-black text-slate-400">JCI</span>'; }}
              />
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white" />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">JCI Bekalta</h3>
            <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mt-0.5">Jeune Chambre Internationale</p>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">2022 → 2025</span>
          </div>
        </div>

        {/* Timeline — lecture seule, pas de sélection interactive sur la carte */}
        <div className="relative flex flex-col gap-0 mb-6 pl-4 border-l-2 border-slate-100">
          {jciExperiences.map((e, i) => (
            <div key={i} className="flex items-start gap-4 py-3">
              <div
                className={`absolute -left-[6px] w-2.5 h-2.5 rounded-full border-2 ${
                  i === 0 ? 'border-blue-500 bg-blue-500' : 'border-slate-300 bg-white'
                }`}
                style={{ top: `${i * 60 + 26}px`, position: 'absolute' }}
              />
              <div className="flex-1 px-4 py-2">
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-bold ${i === 0 ? 'text-slate-900' : 'text-slate-400'}`}>
                    {e.position[lang]}
                  </span>
                  <span className={`text-[10px] font-mono ${i === 0 ? 'text-blue-500' : 'text-slate-300'}`}>
                    {e.period}
                  </span>
                </div>
                {i === 0 && e.award && (
                  <div className="flex items-center gap-2 mt-1.5">
                    <Trophy size={11} className="text-amber-500 shrink-0" />
                    <span className="text-[10px] text-amber-600 font-semibold leading-tight">{e.award[lang]}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer avec compteur de photos + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <PhotoCountBadge count={totalPhotos} />
          <button className="flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
            {lang === 'fr' ? 'Voir les détails' : 'See details'}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── MICROSOFT CLUB CARD (sans photos) ───────────────────────────────────────

function MicrosoftCard({ lang, onOpen }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={1}
      className="relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg shadow-slate-100 flex flex-col cursor-pointer group"
      onClick={() => onOpen({ type: 'microsoft' })}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      <div className="absolute inset-0 bg-indigo-50/0 group-hover:bg-indigo-50/40 transition-colors duration-300 pointer-events-none rounded-3xl" />

      <div className="p-6 lg:p-8 flex flex-col flex-1 relative">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center">
              <img
                src="./assoc/club.jpg" alt="Microsoft Club"
                className="w-full h-full object-contain"
                onError={(e) => { e.target.parentNode.innerHTML = '<span class="text-lg font-black text-slate-400">MS</span>'; }}
              />
            </div>
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-indigo-500 rounded-full border-2 border-white" />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight">Microsoft Club</h3>
            <p className="text-indigo-600 text-xs font-semibold tracking-widest uppercase mt-0.5">École Poly. Sousse</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <span className="px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold tracking-wide border border-indigo-200">
            {microsoftClub.position[lang]}
          </span>
          <span className="text-slate-400 text-xs font-mono">{microsoftClub.period}</span>
        </div>

        <p className="text-sm text-slate-500 leading-relaxed mb-6">{microsoftClub.description[lang]}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {microsoftClub.skills.map((s) => (
            <span
              key={s}
              className="px-3 py-1.5 rounded-lg text-[11px] font-bold bg-slate-50 text-slate-500 border border-slate-200"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Footer avec compteur de photos + CTA */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-100">
          <PhotoCountBadge count={microsoftClub.photos?.length} />
          <button className="flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:text-indigo-600 transition-colors">
            {lang === 'fr' ? 'Voir les détails' : 'See details'}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── EVENT CARD (sans photos) ─────────────────────────────────────────────────

function EventCard({ event, lang, index, onOpen }) {
  const shortDescription = event.description[lang].length > 100
    ? event.description[lang].substring(0, 97) + '...'
    : event.description[lang];

  return (
    <motion.div
      layout
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
      custom={index}
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-100 transition-all duration-400 hover:-translate-y-1 cursor-pointer"
      onClick={() => onOpen(event)}
    >
      <div className={`h-[3px] w-full bg-gradient-to-r ${event.gradient}`} />

      {event.featured && (
        <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />
      )}

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${event.gradient} flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
            {event.icon}
          </div>
          {event.featured && (
            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-400 text-[9px] font-bold uppercase tracking-widest border border-slate-200 shrink-0">
              Highlight
            </span>
          )}
        </div>

        <h4 className="text-base font-black text-slate-900 leading-snug mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-500 transition-all duration-300">
          {event.title}
        </h4>
        <p className={`text-xs font-bold tracking-wide mb-4 bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent`}>
          {event.role[lang]}
        </p>

        {(event.organization || event.date || event.location) && (
          <div className="flex flex-col gap-1.5 mb-4">
            {event.organization && (
              <span className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                <Building2 size={11} className="shrink-0 text-slate-300" /> {event.organization}
              </span>
            )}
            {event.date && (
              <span className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                <Calendar size={11} className="shrink-0 text-slate-300" /> {event.date}
              </span>
            )}
            {event.location && (
              <span className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                <MapPin size={11} className="shrink-0 text-slate-300" /> {event.location}
              </span>
            )}
          </div>
        )}

        <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-4">{shortDescription}</p>

        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 mb-3">
          {event.categories.map((cat) => <CategoryBadge key={cat} label={cat} />)}
        </div>

        {/* Footer : compteur de photos + CTA */}
        <div className="flex items-center justify-between mt-auto pt-2">
          {event.photos && event.photos.length > 0 && (
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
              <Camera size={11} />
              {event.photos.length} photo{event.photos.length > 1 ? 's' : ''}
            </span>
          )}
          <button className="ml-auto flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:text-slate-700 transition-colors">
            {lang === 'fr' ? 'Voir plus' : 'See more'}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── ASSOCIATION MODAL (JCI / Microsoft) ─────────────────────────────────────

function AssociationModal({ assocData, lang, photoIndices, onPrev, onNext, onClose, onImageClick }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  if (!assocData) return null;
  const isJCI = assocData.type === 'jci';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto overflow-x-hidden`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`absolute top-0 left-0 right-0 h-[4px] ${isJCI ? 'bg-gradient-to-r from-blue-500 to-indigo-500' : 'bg-gradient-to-r from-indigo-500 to-purple-500'}`} />

          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors z-10"
          >
            <X size={18} />
          </button>

          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center shrink-0">
                <img
                  src={isJCI ? './assoc/jci.jpg' : './assoc/club.jpg'}
                  alt={isJCI ? 'JCI' : 'Microsoft Club'}
                  className="w-full h-full object-contain"
                  onError={(e) => { e.target.parentNode.innerHTML = `<span class="text-lg font-black text-slate-400">${isJCI ? 'JCI' : 'MS'}</span>`; }}
                />
              </div>
              <div className="pr-10">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-1">
                  {isJCI ? 'JCI Bekalta' : 'Microsoft Club'}
                </h3>
                <p className={`text-sm font-bold tracking-wide ${isJCI ? 'text-blue-600' : 'text-indigo-600'}`}>
                  {isJCI ? 'Jeune Chambre Internationale · 2022–2025' : `${microsoftClub.position[lang]} · ${microsoftClub.period}`}
                </p>
              </div>
            </div>

            {/* Content */}
            {isJCI
              ? <JCIModalContent lang={lang} photoIndices={photoIndices} onPrev={onPrev} onNext={onNext} onImageClick={onImageClick} />
              : <MicrosoftModalContent lang={lang} photoIndices={photoIndices} onPrev={onPrev} onNext={onNext} onImageClick={onImageClick} />
            }
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── EVENT MODAL ──────────────────────────────────────────────────────────────

function EventModal({ event, lang, onClose, onImageClick }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <AnimatePresence>
      {event && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto overflow-x-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r ${event.gradient}`} />

            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 transition-colors z-10"
            >
              <X size={18} />
            </button>

            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${event.gradient} flex items-center justify-center text-white shrink-0 shadow-md`}>
                  {React.cloneElement(event.icon, { size: 24 })}
                </div>
                <div className="pr-10">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-1">
                    {event.title}
                  </h3>
                  <p className={`text-sm font-bold tracking-wide bg-gradient-to-r ${event.gradient} bg-clip-text text-transparent`}>
                    {event.role[lang]}
                  </p>
                </div>
              </div>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-slate-100">
                {event.organization && (
                  <span className="flex items-center gap-2 text-sm text-slate-600 font-medium bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                    <Building2 size={14} className="text-slate-400" /> {event.organization}
                  </span>
                )}
                {event.date && (
                  <span className="flex items-center gap-2 text-sm text-slate-600 font-medium bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                    <Calendar size={14} className="text-slate-400" /> {event.date}
                  </span>
                )}
                {event.location && (
                  <span className="flex items-center gap-2 text-sm text-slate-600 font-medium bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                    <MapPin size={14} className="text-slate-400" /> {event.location}
                  </span>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {event.categories.map((cat) => <CategoryBadge key={cat} label={cat} />)}
              </div>

              {/* PSC enriched content OR standard content */}
              {event.isPSC ? (
                <IdSpeakModalContent lang={lang} onImageClick={onImageClick} />
              ) : (
                <>
                  <div className="mb-8">
                    <p className="text-slate-600 leading-relaxed text-base">{event.description[lang]}</p>
                  </div>

                  {/* Photos — affichées uniquement ici dans la modal */}
                  {event.photos && event.photos.length > 0 && (
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-4 tracking-wide uppercase flex items-center gap-2">
                        <Camera size={16} className="text-slate-400" /> Media & Galerie
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {event.photos.map((photo, i) => (
                          <div
                            key={i}
                            className={`relative rounded-xl overflow-hidden bg-slate-100 group cursor-zoom-in ${
                              i === 0 && event.photos.length % 2 !== 0
                                ? 'col-span-2 sm:col-span-2 row-span-2 aspect-[4/3] sm:aspect-auto'
                                : 'aspect-square sm:aspect-video'
                            }`}
                            onClick={() => onImageClick(event.photos, i)}
                          >
                            <img
                              src={photo}
                              alt={`Gallery ${i}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              onError={(e) => { e.target.src = 'https://placehold.co/600x400/f1f5f9/94a3b8?text=Image+Indisponible' }}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                              <ZoomIn size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────

function Lightbox({ lightbox, onClose, onPrev, onNext }) {
  return (
    <AnimatePresence>
      {lightbox.isOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-2xl p-4 md:p-12 cursor-zoom-out"
          onClick={onClose}
        >
          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
            className="absolute top-5 right-5 text-white/60 hover:text-white p-2.5 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors z-50 border border-white/20"
            onClick={onClose}
          >
            <X size={22} />
          </motion.button>

          {lightbox.photos.length > 1 && (
            <>
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={onPrev}
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 text-white/60 hover:text-white transition-colors z-50"
              >
                <ChevronLeft size={28} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={onNext}
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 text-white/60 hover:text-white transition-colors z-50"
              >
                <ChevronRight size={28} />
              </motion.button>
            </>
          )}

          <motion.img
            key={lightbox.index}
            src={lightbox.photos[lightbox.index]}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="max-w-full max-h-[88vh] object-contain rounded-2xl cursor-default shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            onError={(e) => { e.target.src = 'https://placehold.co/800x600/1e293b/94a3b8?text=Image+Indisponible' }}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {lightbox.photos.map((_, i) => (
              <span
                key={i}
                className={`block rounded-full transition-all duration-300 ${
                  i === lightbox.index ? 'w-6 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/40'
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

const Associations = () => {
  const { lang } = useLanguage();
  const [photoIndices, setPhotoIndices] = useState({});
  const [lightbox, setLightbox] = useState({ isOpen: false, photos: [], index: 0 });
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedAssoc, setSelectedAssoc] = useState(null);

  const handlePrev = (key) => setPhotoIndices((p) => ({ ...p, [key]: Math.max((p[key] || 0) - 1, 0) }));
  const handleNext = (key, max) => setPhotoIndices((p) => ({ ...p, [key]: Math.min((p[key] || 0) + 1, max - 1) }));

  const openLightbox = (photos, index) => setLightbox({ isOpen: true, photos, index });
  const closeLightbox = () => setLightbox((p) => ({ ...p, isOpen: false }));
  const prevLightbox = (e) => { e.stopPropagation(); setLightbox((p) => ({ ...p, index: p.index === 0 ? p.photos.length - 1 : p.index - 1 })); };
  const nextLightbox = (e) => { e.stopPropagation(); setLightbox((p) => ({ ...p, index: (p.index + 1) % p.photos.length })); };

  const filteredEvents = events.filter(e => activeFilter === 'all' || e.type === activeFilter);

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section id="associations" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-blue-100/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-violet-100/50 rounded-full blur-[120px] pointer-events-none" />

      <Lightbox lightbox={lightbox} onClose={closeLightbox} onPrev={prevLightbox} onNext={nextLightbox} />

      {selectedAssoc && (
        <AssociationModal
          assocData={selectedAssoc}
          lang={lang}
          photoIndices={photoIndices}
          onPrev={handlePrev}
          onNext={handleNext}
          onClose={() => setSelectedAssoc(null)}
          onImageClick={openLightbox}
        />
      )}

      {selectedEvent && !selectedAssoc && (
        <EventModal
          event={selectedEvent}
          lang={lang}
          onClose={() => setSelectedEvent(null)}
          onImageClick={openLightbox}
        />
      )}

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* ── HEADER ──────────────────────────────────────────────── */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            variants={fadeUp} custom={0}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm"
          >
            <Sparkles size={13} className="text-blue-500" /> Engagement & Leadership
          </motion.div>

          <motion.h2
            variants={fadeUp} custom={1}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-5 tracking-tighter leading-none"
          >
            Vie{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              Associative
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp} custom={2}
            className="text-slate-500 text-base md:text-lg leading-relaxed font-light"
          >
            Leadership, innovation et engagement communautaire dans l'écosystème tech.
          </motion.p>
        </motion.div>

        {/* ── ASSOCIATIONS GRID ───────────────────────────────────── */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-28">
          <JCICard
            lang={lang}
            onOpen={setSelectedAssoc}
          />
          <MicrosoftCard
            lang={lang}
            onOpen={setSelectedAssoc}
          />
        </div>

        {/* ── EVENTS SECTION ──────────────────────────────────────── */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Événements
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                {filteredEvents.length} événement{filteredEvents.length > 1 ? 's' : ''}
              </p>
            </div>

            <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm self-start sm:self-auto overflow-x-auto">
              <Filter size={13} className="text-slate-300 ml-2 shrink-0" />
              {FILTER_OPTIONS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap ${
                    activeFilter === f.id ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {activeFilter === f.id && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-slate-100 rounded-xl border border-slate-200"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">{f.icon}{f.label[lang]}</span>
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event, i) => (
                <EventCard
                  key={event.title + i}
                  event={event}
                  lang={lang}
                  index={i}
                  onOpen={setSelectedEvent}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-center py-16 text-slate-400 text-sm"
            >
              Aucun événement pour ce filtre.
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Associations;