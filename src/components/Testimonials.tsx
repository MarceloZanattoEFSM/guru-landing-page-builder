import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  type: 'creator' | 'student';
}
const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials: Testimonial[] = [{
    id: 1,
    name: "Camila Torres",
    role: "Especialista em Branding Pessoal",
    content: "Comecei com a versão gratuita e em menos de uma semana já tinha meu primeiro curso no ar. A plataforma é tão intuitiva que nem precisei de ajuda técnica.",
    type: "creator"
  }, {
    id: 2,
    name: "Roberto Lima",
    role: "Mentor de Vendas para Pequenos Negócios",
    content: "Já testei outras plataformas, mas sempre me senti travado. Na Você.Guru, finalmente consegui lançar minha mentoria sem depender de agência ou desenvolvedor.",
    type: "creator"
  }, {
    id: 3,
    name: "Bianca Almeida",
    role: "Estudante de Administração",
    content: "Encontrei um curso gratuito sobre finanças pessoais que mudou minha forma de lidar com dinheiro. Simples, direto e sem enrolação.",
    type: "student"
  }, {
    id: 4,
    name: "Letícia Franco",
    role: "Empreendedora",
    content: "Gosto do estilo prático da plataforma. Em vez de ficar perdida entre mil funções, vou direto ao que interessa: aprender.",
    type: "student"
  }];
  const visibleTestimonials = [testimonials[activeIndex % testimonials.length], testimonials[(activeIndex + 1) % testimonials.length], testimonials[(activeIndex + 2) % testimonials.length]];
  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  };
  const renderStars = () => {
    return <div className="flex mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-brand-warning fill-brand-warning" />)}
      </div>;
  };
  return <section id="testimonials" className="py-5 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="title-underline">O Que Dizem Nossos Usuários</span>
          </h2>
          <div className="divider"></div>
        </div>

        <div className="mb-10">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-semibold">
              <span className="text-brand-primary">★</span> Depoimentos
            </h3>
            <div className="flex gap-2">
              <button onClick={handlePrev} className="p-2 rounded-full bg-brand-primary/10 hover:bg-brand-primary/20 transition-colors" aria-label="Depoimento anterior">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={handleNext} className="p-2 rounded-full bg-brand-primary/10 hover:bg-brand-primary/20 transition-colors" aria-label="Próximo depoimento">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map(testimonial => <div key={testimonial.id} className="bg-gradient-to-b from-brand-primary/10 to-transparent p-6 rounded-xl backdrop-blur-sm border border-brand-primary/20 card-hover">
                {renderStars()}
                <p className="text-brand-secondary-text mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/20 flex items-center justify-center mr-3">
                    <span className="text-lg font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-brand-secondary-text">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-brand-primary/20 text-brand-secondary-text">
                    {testimonial.type === 'creator' ? 'Criador de Conteúdo' : 'Aluno'}
                  </span>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Testimonials;