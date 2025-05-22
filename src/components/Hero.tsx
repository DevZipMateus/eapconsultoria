
import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-20 pb-12 md:pt-36 md:pb-20 bg-gradient-to-br from-[#18252e] to-[#101c24] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505664063603-28e48ca8eb59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#18252e]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#18252e]/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-24 h-24 sm:w-36 sm:h-36 mx-auto mb-6 sm:mb-8 animate-fade-in">
            <img src="/lovable-uploads/73e29f59-80f5-410b-b5ed-431a609a609c.png" alt="EAP CONSULTORIA" className="w-full h-full object-contain" />
          </div>
          
          <h1 className={`${isMobile ? 'text-2xl sm:text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-white leading-tight mb-4 sm:mb-6 animate-fade-in`} style={{
            animationDelay: '0.1s'
          }}>
            Escritório virtual de pronta solução
          </h1>
          
          <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-10 px-2 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
            Serviços advocatícios rápidos e eficientes para atender suas necessidades
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
            <a href="https://wa.me/61981200911" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-[#18252e] px-4 sm:px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
              <span>Entrar em contato</span>
            </a>
            <a href="#services" className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-4 sm:px-6 py-3 rounded-md transition-all text-sm sm:text-base">
              Nossos serviços
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
