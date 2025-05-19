
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#18252e] text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>(61) 98120-0911</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>ih-melo@ih-melo.adv.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>QNG 34 - Edifício Azul - sala 102 - Taguatinga - Distrito Federal</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300 inline-block">Início</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300 transition-colors duration-300 inline-block">Sobre Nós</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition-colors duration-300 inline-block">Serviços</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300 transition-colors duration-300 inline-block">Contato</a>
              </li>
            </ul>
          </div>
          
          {/* Company Description */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6">EAP CONSULTORIA</h3>
            <p className="mb-4 text-gray-300">
              Escritório virtual de pronta solução, oferecendo serviços advocatícios rápidos e eficientes para atender suas necessidades jurídicas.
            </p>
            <div className="mt-4">
              <img src="/lovable-uploads/73e29f59-80f5-410b-b5ed-431a609a609c.png" alt="EAP CONSULTORIA" className="h-12 object-contain" />
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} EAP CONSULTORIA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
