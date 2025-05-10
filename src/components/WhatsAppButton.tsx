
import React from 'react';
import { Phone } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511999504573"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-brand-primary hover:bg-brand-primary/90 text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
      aria-label="Entre em contato via WhatsApp"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
