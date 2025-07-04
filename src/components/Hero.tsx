import React from 'react';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-gray-900">Bonjour, je suis</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Fadoua Abdelhak
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-4">
                Développeuse Fullstack & Data Scientist
              </p>
              <p className="text-lg text-gray-500 mb-8 max-w-2xl">
                Passionnée par la création de solutions numériques innovantes, je transforme 
                les idées en applications web performantes et en analyses de données pertinentes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                asChild
              >
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Me Contacter
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                asChild
              >
                <a 
                  href="/AbdelhakFadoua.pdf" 
                  download="AbdelhakFadoua.pdf"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Télécharger CV
                </a>
              </Button>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <a href="https://github.com/abdfadoua" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/fadoua-abdelhak" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-2">
                <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src="/profilee.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;