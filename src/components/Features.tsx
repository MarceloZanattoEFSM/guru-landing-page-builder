
import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-brand-secondary-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-primary blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-brand-secondary blur-[100px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="title-underline">Por Que a Você Guru?</span>
          </h2>
          <div className="divider"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-b from-brand-primary/10 to-transparent p-8 rounded-xl backdrop-blur-sm border border-brand-primary/20 card-hover">
            <div className="mb-6 h-16 w-16 rounded-full bg-brand-primary/20 flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Plataforma Intuitiva</h3>
            <p className="text-brand-secondary-text text-center">Menos complexidade, mais ação. Uma interface que não exige conhecimentos técnicos avançados.</p>
          </div>
          
          <div className="bg-gradient-to-b from-brand-primary/10 to-transparent p-8 rounded-xl backdrop-blur-sm border border-brand-primary/20 card-hover">
            <div className="mb-6 h-16 w-16 rounded-full bg-brand-primary/20 flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-secondary">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Alta Flexibilidade</h3>
            <p className="text-brand-secondary-text text-center">Expansão de funcionalidades conforme você cresce. Cresça e evolua em seu próprio ritmo.</p>
          </div>
          
          <div className="bg-gradient-to-b from-brand-primary/10 to-transparent p-8 rounded-xl backdrop-blur-sm border border-brand-primary/20 card-hover">
            <div className="mb-6 h-16 w-16 rounded-full bg-brand-primary/20 flex items-center justify-center mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-tertiary">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 8v4l3 3"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center">Marketplace Dinâmico</h3>
            <p className="text-brand-secondary-text text-center">Acesso a uma infinidade de cursos gratuitos e acessíveis para se posicionar como um verdadeiro guru.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
