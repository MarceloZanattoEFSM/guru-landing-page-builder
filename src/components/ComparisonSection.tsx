
import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-secondary-bg/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/2 w-96 h-96 rounded-full bg-brand-primary blur-[100px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="title-underline">Você Guru vs. Outras Plataformas</span>
          </h2>
          <div className="divider"></div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="py-4 px-6 text-left text-xl"></th>
                <th className="py-4 px-6 text-center text-xl">
                  <span className="text-brand-primary">Você</span>
                  <span className="text-brand-secondary">.</span>
                  <span className="text-white">Guru</span>
                </th>
                <th className="py-4 px-6 text-center text-xl text-brand-secondary-text">Outras Plataformas</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-primary/20">
                <td className="py-6 px-6 text-left font-semibold">Custo</td>
                <td className="py-6 px-6 text-center">
                  <div className="flex flex-col items-center">
                    <Check className="h-6 w-6 text-brand-success mb-2" />
                    <span className="text-sm text-brand-secondary-text">Início sem taxas ou mensalidades não esperadas</span>
                  </div>
                </td>
                <td className="py-6 px-6 text-center">
                  <div className="flex flex-col items-center">
                    <X className="h-6 w-6 text-brand-error mb-2" />
                    <span className="text-sm text-brand-secondary-text">Altas taxas ou cobrança mensal obrigatória</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-brand-primary/20">
                <td className="py-6 px-6 text-left font-semibold">Complexidade</td>
                <td className="py-6 px-6 text-center">
                  <div className="flex flex-col items-center">
                    <Check className="h-6 w-6 text-brand-success mb-2" />
                    <span className="text-sm text-brand-secondary-text">Funcionalidades essenciais, sem complicações</span>
                  </div>
                </td>
                <td className="py-6 px-6 text-center">
                  <div className="flex flex-col items-center">
                    <X className="h-6 w-6 text-brand-error mb-2" />
                    <span className="text-sm text-brand-secondary-text">Curva de aprendizado acentuada</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-6 px-6 text-left font-semibold">Suporte</td>
                <td className="py-6 px-6 text-center">
                  <div className="flex flex-col items-center">
                    <Check className="h-6 w-6 text-brand-success mb-2" />
                    <span className="text-sm text-brand-secondary-text">Contato direto via WhatsApp, sem burocracias</span>
                  </div>
                </td>
                <td className="py-6 px-6 text-center">
                  <div className="flex flex-col items-center">
                    <X className="h-6 w-6 text-brand-error mb-2" />
                    <span className="text-sm text-brand-secondary-text">Tickets, filas de espera e processos lentos</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
