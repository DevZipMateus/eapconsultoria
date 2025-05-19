
import React from 'react';
import { Scale, BookOpen, FileCheck, Shield, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Consultoria Jurídica',
    description: 'Aconselhamento especializado para pessoas físicas e jurídicas em diferentes áreas do direito.',
    icon: Scale,
    delay: '0s'
  },
  {
    id: 2,
    title: 'Elaboração de Contratos',
    description: 'Desenvolvimento e revisão de contratos e documentos legais para proteção dos seus interesses.',
    icon: FileCheck,
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Defesa Legal',
    description: 'Representação e defesa de seus interesses em processos judiciais e extrajudiciais.',
    icon: Shield,
    delay: '0.2s'
  },
  {
    id: 4,
    title: 'Orientação Preventiva',
    description: 'Orientações para evitar problemas legais futuros e garantir conformidade com a legislação vigente.',
    icon: BookOpen,
    delay: '0.3s'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#18252e]/10 text-[#18252e] font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Serviços advocatícios rápidos
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos serviços especializados para atender às suas necessidades jurídicas
            com agilidade e eficiência.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="bg-[#18252e]/10 p-4 rounded-lg inline-block mb-5">
                <service.icon className="text-[#18252e]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="bg-[#18252e] hover:bg-[#263a47] text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex"
          >
            <span>Fale com um especialista</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
