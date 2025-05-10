
import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-brand-secondary-bg/90 backdrop-blur-md">
      {/* Main Footer */}
      <div className="container-custom pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-6">
              <h3 className="text-2xl font-bold">
                <span className="text-brand-primary">Você</span>
                <span className="text-brand-secondary">.</span>
                <span className="text-white">Guru</span>
              </h3>
            </a>
            <p className="text-brand-secondary-text mb-6">
              Para alcançar o sucesso em seus estudos ou empreendimentos educacionais, a <strong>Você Guru</strong> é a sua aliada perfeita. Descubra a simplicidade que revoluciona.
            </p>
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
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-brand-primary flex-shrink-0 mt-0.5" />
                <a 
                  href="https://wa.me/5511999504573" 
                  className="text-brand-secondary-text hover:text-white transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  (11) 99950-4573
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-brand-primary flex-shrink-0 mt-0.5" />
                <a 
                  href="mailto:contato@voce.guru" 
                  className="text-brand-secondary-text hover:text-white transition-colors"
                >
                  contato@voce.guru
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-brand-primary flex-shrink-0 mt-0.5" />
                <div className="text-brand-secondary-text">
                  <p className="mb-2">Localização:</p>
                  <div className="mt-2 h-32 bg-brand-primary/10 rounded-md overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58513.66887654919!2d-46.68786264550065!3d-23.56025236211411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59541c6c7dbf%3A0x36b90a85f0f8cb33!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1652375691480!5m2!1spt-BR!2sbr" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização do Você Guru"
                    ></iframe>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Social Icons */}
        <div className="flex justify-center mt-12 space-x-6">
          <a 
            href="#" 
            className="bg-brand-primary/20 hover:bg-brand-primary/30 p-2 rounded-full transition-colors"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a 
            href="#" 
            className="bg-brand-primary/20 hover:bg-brand-primary/30 p-2 rounded-full transition-colors"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </a>
          <a 
            href="#" 
            className="bg-brand-primary/20 hover:bg-brand-primary/30 p-2 rounded-full transition-colors"
            aria-label="Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a 
            href="#" 
            className="bg-brand-primary/20 hover:bg-brand-primary/30 p-2 rounded-full transition-colors"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a 
            href="#" 
            className="bg-brand-primary/20 hover:bg-brand-primary/30 p-2 rounded-full transition-colors"
            aria-label="YouTube"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-primary">
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
              <path d="m10 15 5-3-5-3z"></path>
            </svg>
          </a>
        </div>
        
        {/* CNPJ */}
        <div className="mt-10 text-center text-brand-secondary-text">
          <p>CNPJ: 00.000.000/0001-00</p>
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
