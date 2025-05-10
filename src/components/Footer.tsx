
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-brand-secondary-bg/90 backdrop-blur-md">
      {/* Main Footer */}
      <div className="container-custom pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <div className="md:pr-8">
            <a href="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/821b2734-d6a3-430e-91db-acab5c6fd1eb.png" 
                alt="Você Guru Logo" 
                className="h-10" 
              />
            </a>
            <p className="text-brand-secondary-text mb-6">
              Para alcançar o sucesso em seus estudos ou empreendimentos educacionais, a <strong>Você Guru</strong> é a sua aliada perfeita. Descubra a simplicidade que revoluciona.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-3">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-brand-primary flex-shrink-0" />
                  <a 
                    href="https://wa.me/5511999504573" 
                    className="text-brand-secondary-text hover:text-white transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    (11) 99950-4573
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-brand-primary flex-shrink-0" />
                  <a 
                    href="mailto:contato@voce.guru" 
                    className="text-brand-secondary-text hover:text-white transition-colors"
                  >
                    contato@voce.guru
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-brand-secondary-text hover:text-white transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#for-creators" className="text-brand-secondary-text hover:text-white transition-colors">
                  Para Criadores
                </a>
              </li>
              <li>
                <a href="#for-students" className="text-brand-secondary-text hover:text-white transition-colors">
                  Para Alunos
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-brand-secondary-text hover:text-white transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#faq" className="text-brand-secondary-text hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="bg-brand-primary/20 py-4">
        <div className="container-custom text-center text-sm text-brand-secondary-text">
          <p>
            Todos os direitos reservados - Você Guru - Desenvolvido por{' '}
            <a 
              href="https://eufacoseu.site/?utm_source=cliente&utm_medium=landing_page&utm_campaign=Você Guru&utm_id=referencia" 
              className="text-brand-secondary hover:text-white transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Eu Faço Seu Site
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
