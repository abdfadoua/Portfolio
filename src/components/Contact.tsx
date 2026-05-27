import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        'service_j2f4mbl',   
        'template_vuk4w2s',  
        {
          name: `Portfolio - ${formData.name}`,
          email: formData.email,     
          title: formData.subject,   
          message: formData.message, 
          time: new Date().toLocaleString(), 
        },
        'HB_wB37kpcTHsRqCV'  
      );

      toast({
        title: "Message envoyé avec succès ✨",
        description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Oups, une erreur est survenue",
        description: "Impossible d'envoyer le message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "abdelhakfadwa8@gmail.com",
      link: "mailto:abdelhakfadwa8@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Téléphone",
      value: "+216 22 419 465",
      link: "tel:+21622419465"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Localisation",
      value: "Bekalta, Tunisie",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, name: "GitHub", url: "https://github.com/abdfadoua" },
    { icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn", url: "https://www.linkedin.com/in/fadoua-abdelhak/" },
    { icon: <Instagram className="h-5 w-5" />, name: "Instagram", url: "https://www.instagram.com/abdelhak_fadwa/" },
    { icon: <Facebook className="h-5 w-5" />, name: "Facebook", url: "https://www.facebook.com/fadwa.abdelhak.1" },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Parlons de votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">Projet</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Une question, une opportunité ou simplement envie de dire bonjour ? Je suis à votre écoute.
          </p>
        </div>

        {/* Le Container Principal (Split Design) */}
        <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          
          {/* PANNEAU GAUCHE : Coordonnées (Sombre & Premium) */}
          <div className="lg:w-2/5 bg-slate-900 p-10 lg:p-12 text-white relative overflow-hidden flex flex-col justify-between">
            {/* Effets d'arrière-plan (Cercles floutés) */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-2">Contactez-moi</h3>
              <p className="text-slate-400 mb-10">Remplissez le formulaire et je vous répondrai sous 24 heures.</p>

              {/* Liste des contacts repensée */}
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="flex-shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                      {info.icon}
                    </div>
                    <div className="ml-6">
                      <p className="text-sm text-slate-400 uppercase tracking-wider font-medium mb-1">{info.title}</p>
                      <a href={info.link} className="text-lg font-medium text-white hover:text-indigo-300 transition-colors">
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Réseaux sociaux repensés (Pilules) */}
            <div className="relative z-10 mt-16 pt-10 border-t border-white/10">
              <p className="text-sm text-slate-400 uppercase tracking-wider font-medium mb-6">Retrouvez-moi sur</p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-indigo-400">{social.icon}</span>
                    <span className="font-medium text-sm text-white">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* PANNEAU DROIT : Formulaire (Clair & Minimaliste) */}
          <div className="lg:w-3/5 p-10 lg:p-14">
            <form onSubmit={handleSubmit} className="h-full flex flex-col justify-center">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none text-slate-700 placeholder:text-slate-400"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">Adresse e-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none text-slate-700 placeholder:text-slate-400"
                    placeholder="jean@exemple.com"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="text-sm font-semibold text-slate-700 ml-1">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none text-slate-700 placeholder:text-slate-400"
                  placeholder="Comment puis-je vous aider ?"
                />
              </div>

              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none text-slate-700 placeholder:text-slate-400 resize-none"
                  placeholder="Décrivez votre projet ou votre besoin en détail..."
                ></textarea>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSending}
                className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed text-base font-medium shadow-lg shadow-indigo-200"
              >
                {isSending ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Envoi en cours...
                  </span>
                ) : (
                  <span className="flex items-center group">
                    Envoyer le message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;