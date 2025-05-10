
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
      style={{ 
        backgroundImage: 'linear-gradient(135deg, rgba(53,18,87,0.95) 0%, rgba(21,10,47,0.98) 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-brand-primary/20 blur-[100px]"></div>
        <div className="absolute bottom-[15%] right-[10%] w-72 h-72 rounded-full bg-brand-secondary/20 blur-[120px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="hero-item text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-white to-brand-secondary-text bg-clip-text text-transparent">
            Seja o Guru do Seu Futuro com a <span className="text-brand-primary">Você</span><span className="text-brand-secondary">.</span><span className="text-white">Guru</span>
          </h1>
          
          <h2 className="hero-item text-xl md:text-2xl lg:text-3xl font-semibold text-brand-secondary-text">
            Transforme Conhecimento em Impacto
          </h2>
          
          <p className="hero-item text-lg md:text-xl text-brand-secondary-text max-w-2xl">
            Descubra a plataforma que está revolucionando a forma de criar e consumir cursos. Simplifique sua jornada de aprendizado ou sua atuação como criador de conteúdos.
          </p>
          
          <div className="hero-item flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              asChild
              size="lg" 
              className="bg-brand-primary text-white hover:bg-brand-primary/90 text-lg px-8 py-6"
            >
              <a href="https://painel.voce.guru/dashboard" target="_blank" rel="noopener noreferrer">
                Comece Gratuitamente
              </a>
            </Button>
          </div>
          
          <p className="hero-item text-brand-secondary-text mt-4">
            Comece gratuitamente. Expanda conforme suas necessidades.
          </p>
        </div>
      </div>
      
      <button 
        onClick={scrollToFeatures}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white bg-transparent rounded-full p-3 animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={28} />
      </button>
    </section>
  );
};

export default Hero;
