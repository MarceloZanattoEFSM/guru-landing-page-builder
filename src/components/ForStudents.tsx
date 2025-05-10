
import React from 'react';
import { Check } from 'lucide-react';

const ForStudents: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Conteúdos para Todos",
      description: "Cursos gratuitos e acessíveis em diversas áreas."
    },
    {
      id: 2,
      title: "Evolução Acompanhada",
      description: "Painel de progresso integrado."
    },
    {
      id: 3,
      title: "Aulas Responsivas",
      description: "Aprenda no seu ritmo, em qualquer dispositivo."
    },
    {
      id: 4,
      title: "Certificados Valiosos",
      description: "Valide seus conhecimentos com certificações digitais."
    }
  ];

  return (
    <section id="for-students" className="py-20 relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 relative">
            <div className="relative p-2 bg-gradient-to-r from-brand-secondary/30 to-brand-primary/30 rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-black/30 rounded-2xl backdrop-blur-sm"></div>
              <div className="relative rounded-xl overflow-hidden border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                  alt="Estudantes aprendendo online" 
                  className="w-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 h-20 w-20 bg-brand-secondary/30 blur-2xl rounded-full"></div>
              <div className="absolute -top-4 -left-4 h-20 w-20 bg-brand-primary/30 blur-2xl rounded-full"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="title-underline">Para Alunos (Futuros Gurus)</span>
            </h2>
            <div className="divider mx-0 my-6"></div>
            
            <div className="space-y-6">
              {features.map(feature => (
                <div key={feature.id} className="flex items-start">
                  <div className="mr-4 mt-1 bg-brand-secondary/20 p-1 rounded-full">
                    <Check className="h-5 w-5 text-brand-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                    <p className="text-brand-secondary-text">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForStudents;
