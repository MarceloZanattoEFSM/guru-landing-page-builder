
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-brand-secondary-bg/95 backdrop-blur-sm shadow-lg' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">
              <span className="text-brand-primary">Você</span>
              <span className="text-brand-secondary">.</span>
              <span className="text-white">Guru</span>
            </span>
          </a>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-brand-secondary-text hover:text-white transition-colors">
            Benefícios
          </a>
          <a href="#for-creators" className="text-brand-secondary-text hover:text-white transition-colors">
            Para Criadores
          </a>
          <a href="#for-students" className="text-brand-secondary-text hover:text-white transition-colors">
            Para Alunos
          </a>
          <a href="#testimonials" className="text-brand-secondary-text hover:text-white transition-colors">
            Depoimentos
          </a>
          <a href="#faq" className="text-brand-secondary-text hover:text-white transition-colors">
            FAQ
          </a>
          <Button 
            asChild
            className="bg-brand-primary text-white hover:bg-brand-primary/90"
          >
            <a href="https://painel.voce.guru/dashboard" target="_blank" rel="noopener noreferrer">
              Comece Agora
            </a>
          </Button>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-secondary-bg/95 backdrop-blur-sm shadow-lg pb-5 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4 pt-2">
            <a 
              href="#features" 
              className="py-3 px-4 hover:bg-brand-primary/20 rounded-md text-brand-secondary-text hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefícios
            </a>
            <a 
              href="#for-creators" 
              className="py-3 px-4 hover:bg-brand-primary/20 rounded-md text-brand-secondary-text hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Para Criadores
            </a>
            <a 
              href="#for-students" 
              className="py-3 px-4 hover:bg-brand-primary/20 rounded-md text-brand-secondary-text hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Para Alunos
            </a>
            <a 
              href="#testimonials" 
              className="py-3 px-4 hover:bg-brand-primary/20 rounded-md text-brand-secondary-text hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#faq" 
              className="py-3 px-4 hover:bg-brand-primary/20 rounded-md text-brand-secondary-text hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Button 
              asChild
              className="bg-brand-primary text-white hover:bg-brand-primary/90 mx-4"
            >
              <a href="https://painel.voce.guru/dashboard" target="_blank" rel="noopener noreferrer">
                Comece Agora
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
