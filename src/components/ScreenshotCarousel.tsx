
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const screenshots = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "Painel de controle da plataforma Você Guru",
    title: "Painel de Controle Intuitivo",
    description: "Gerencie seus cursos e alunos em uma interface simples e poderosa."
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "Player de vídeo responsivo da Você Guru",
    title: "Player de Vídeo Responsivo",
    description: "Seus alunos terão a melhor experiência em qualquer dispositivo."
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "Sistema de gestão de alunos da Você Guru",
    title: "Gestão de Alunos",
    description: "Acompanhe o progresso e engajamento dos seus alunos em tempo real."
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
