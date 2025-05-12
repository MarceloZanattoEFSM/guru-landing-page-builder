
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: 'creator' | 'student';
}

const Faq: React.FC = () => {
  const [activeItems, setActiveItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<'creator' | 'student'>('creator');
  
  const faqItems: FaqItem[] = [
    {
      id: 1,
      question: "Preciso pagar para começar a usar a Você.Guru?",
      answer: "Não! A plataforma inicia sem custo. Expanda quando necessário.",
      category: "creator"
    },
    {
      id: 2,
      question: "Quantos cursos posso cadastrar?",
      answer: "Ilimitados, mesmo sem assinatura paga.",
      category: "creator"
    },
    {
      id: 3,
      question: "Posso criar turmas privadas?",
      answer: "Sim, convide alunos manualmente, perfeito para empresas.",
      category: "creator"
    },
    {
      id: 4,
      question: "O suporte é acessível?",
      answer: "Oferecemos suporte direto via WhatsApp.",
      category: "creator"
    },
    {
      id: 5,
      question: "Onde hospedar meus vídeos?",
      answer: "Upload direto na plataforma ou use links externos.",
      category: "creator"
    },
    {
      id: 6,
      question: "Há um marketplace disponível?",
      answer: "Sim, seus cursos públicos podem ser encontrados facilmente.",
      category: "creator"
    },
    {
      id: 7,
      question: "Os cursos são pagos ou gratuitos?",
      answer: "Ambos. Opções para todos os perfis e interesses.",
      category: "student"
    },
    {
      id: 8,
      question: "Como acompanho meu progresso?",
      answer: "Através de um painel de progresso integrado.",
      category: "student"
    },
    {
      id: 9,
      question: "Posso assistir aulas pelo celular?",
      answer: "Sim, com nosso player estilo Netflix.",
      category: "student"
    },
    {
      id: 10,
      question: "Há certificados disponíveis?",
      answer: "Depende do curso; muitos pagos oferecem certificação digital.",
      category: "student"
    }
  ];
  
  const toggleItem = (id: number) => {
    if (activeItems.includes(id)) {
      setActiveItems(activeItems.filter(item => item !== id));
    } else {
      setActiveItems([...activeItems, id]);
    }
  };
  
  const filteredItems = faqItems.filter(item => item.category === activeCategory);

  return (
    <section id="faq" className="py-12 bg-brand-secondary-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-tertiary blur-[100px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="title-underline">Perguntas Frequentes</span>
          </h2>
          <div className="divider"></div>
        </div>
        
        <div className="mb-8 flex justify-center">
          <div className="inline-flex p-1 bg-brand-primary/20 rounded-lg">
            <button 
              className={`px-4 py-2 rounded-md transition-all ${activeCategory === 'creator' ? 'bg-brand-primary text-white' : 'text-brand-secondary-text hover:text-white'}`}
              onClick={() => setActiveCategory('creator')}
            >
              Para Criadores de Curso
            </button>
            <button 
              className={`px-4 py-2 rounded-md transition-all ${activeCategory === 'student' ? 'bg-brand-primary text-white' : 'text-brand-secondary-text hover:text-white'}`}
              onClick={() => setActiveCategory('student')}
            >
              Para Alunos
            </button>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="mb-4 border border-brand-primary/20 rounded-lg overflow-hidden"
            >
              <button 
                className="w-full flex items-center justify-between p-5 bg-brand-primary/10 hover:bg-brand-primary/20 transition-colors text-left"
                onClick={() => toggleItem(item.id)}
                aria-expanded={activeItems.includes(item.id)}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="font-semibold">{item.question}</span>
                {activeItems.includes(item.id) ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0" />
                )}
              </button>
              
              {activeItems.includes(item.id) && (
                <div 
                  id={`faq-answer-${item.id}`} 
                  className="p-5 border-t border-brand-primary/20 text-brand-secondary-text animate-accordion-down"
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
