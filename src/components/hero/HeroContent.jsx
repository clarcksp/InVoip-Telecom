import React from 'react';
import ContactButton from '../ui/buttons/ContactButton';

const HeroContent = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6">
      <div className="space-y-2">
        <h2 className="text-blue-200 font-medium text-lg">Telefonia em Nuvem</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Transforme sua comunicação empresarial
        </h1>
      </div>
      
      <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
        Soluções inteligentes de PABX em nuvem para impulsionar a produtividade e reduzir custos da sua empresa
      </p>

      <div className="flex items-center gap-4 pt-4">
        <ContactButton 
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
        />
        <a 
          href="#planos" 
          className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
        >
          Ver planos →
        </a>
      </div>

      <div className="grid grid-cols-3 gap-8 pt-8 border-t border-blue-500/30 mt-8">
        <div>
          <p className="text-3xl font-bold text-white">99.8%</p>
          <p className="text-blue-200">Uptime garantido</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-white">+1000</p>
          <p className="text-blue-200">Usuários Ativos</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-white">★★★★★</p>
          <p className="text-blue-200">Suporte Técnico</p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;