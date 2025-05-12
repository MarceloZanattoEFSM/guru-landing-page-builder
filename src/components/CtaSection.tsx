
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden" style={{ 
      backgroundImage: 'linear-gradient(135deg, rgba(53,18,87,0.95) 0%, rgba(21,10,47,0.98) 100%)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-brand-primary/20 blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 rounded-full bg-brand-secondary/20 blur-[100px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-white to-brand-secondary-text bg-clip-text text-transparent">
            Pronto para Transformar seu Conhecimento em Impacto?
          </h2>
          
          <p className="text-lg md:text-xl text-brand-secondary-text max-w-2xl">
            Comece hoje mesmo a criar e compartilhar cursos incríveis na plataforma que está revolucionando o mercado de educação online.
          </p>
          
          <div className="mt-8">
            <Button 
              asChild
              size="lg" 
              className="bg-brand-primary hover:bg-brand-primary/90 text-white text-lg px-10 py-6 group"
            >
              <a href="https://painel.voce.guru/dashboard">
                Começar Agora 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          <p className="text-brand-secondary-text mt-2">
            Sem compromisso. Comece gratuitamente e expanda quando precisar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
