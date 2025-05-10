
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const screenshots = [
  {
    id: 1,
    src: "/lovable-uploads/dac1e479-ea7d-4d24-999f-35b43db144a3.png",
    alt: "Gerenciamento de turmas na plataforma Você Guru",
    title: "Gestão Completa de Turmas",
    description: "Controle o acesso aos módulos e garanta que cada aluno visualize apenas os conteúdos autorizados."
  },
  {
    id: 2,
    src: "/lovable-uploads/de445f14-3fb6-476f-9c46-8c3a2f63c408.png",
    alt: "Página de curso na plataforma Você Guru",
    title: "Player de Vídeo Profissional",
    description: "Interface moderna e intuitiva para consumir conteúdo educacional de qualidade."
  },
  {
    id: 3,
    src: "/lovable-uploads/bf035ccb-dc2a-46ce-84a4-cab0613b50dc.png",
    alt: "Dashboard de aluno na Você Guru",
    title: "Dashboard Completo",
    description: "Acompanhe seu progresso e tenha acesso a todos os seus cursos em um só lugar."
  },
  {
    id: 4,
    src: "/lovable-uploads/d0f61d84-2647-43b0-b5b5-c884f23e1f4c.png",
    alt: "Lista de cursos disponíveis na Você Guru",
    title: "Acesso aos Seus Cursos",
    description: "Visualize todos os seus cursos e continue de onde parou com apenas um clique."
  },
  {
    id: 5,
    src: "/lovable-uploads/3da79c27-e4d8-4fb8-811f-914ec949b753.png",
    alt: "Marketplace de cursos na Você Guru",
    title: "Marketplace Integrado",
    description: "Descubra novos cursos ou venda seus conhecimentos na nossa plataforma integrada."
  },
  {
    id: 6,
    src: "/lovable-uploads/834776bc-bd3f-4675-af16-3b18f15b0597.png",
    alt: "Painel de gestão de curso na Você Guru",
    title: "Gestão Completa de Cursos",
    description: "Crie e gerencie módulos, acompanhe alunos e visualize estatísticas de desempenho."
  }
];

const ScreenshotCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? screenshots.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === screenshots.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-secondary blur-[100px]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-primary blur-[100px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="title-underline">Conheça Nossa Plataforma</span>
          </h2>
          <div className="divider"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-brand-primary/20 border-brand-primary/50 text-white hover:bg-brand-primary/40"
              onClick={goToPrevious}
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-brand-primary/20 border-brand-primary/50 text-white hover:bg-brand-primary/40"
              onClick={goToNext}
              aria-label="Próxima imagem"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Screenshot Display */}
          <div className="relative p-3 bg-gradient-to-r from-brand-primary/30 to-brand-secondary/30 rounded-2xl shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-black/30 rounded-2xl backdrop-blur-sm"></div>
            <div className="relative">
              <img 
                src={screenshots[currentIndex].src}
                alt={screenshots[currentIndex].alt}
                className="w-full h-[400px] md:h-[500px] object-cover rounded-xl"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {screenshots[currentIndex].title}
                </h3>
                <p className="text-brand-secondary-text">
                  {screenshots[currentIndex].description}
                </p>
              </div>
            </div>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex
                    ? 'bg-brand-primary'
                    : 'bg-brand-primary/30 hover:bg-brand-primary/50'
                } transition-all duration-300`}
                aria-label={`Ver imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotCarousel;
