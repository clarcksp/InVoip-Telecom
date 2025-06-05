import React from 'react';
import PartnerLogo from './partners/PartnerLogo';

const Partners = () => {
  return (
    <section id="parceiros" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Parceiros Oficiais</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <PartnerLogo
            src="https://www.inside.gru.br/images/Yeastar_logo.png"
            alt="Yeastar"
            className="h-12"
          />
          <PartnerLogo
            src="https://www.inside.gru.br/images/3CX_logo.png"
            alt="3CX"
            className="h-12"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;