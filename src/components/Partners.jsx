import React from 'react';
import PartnerLogo from './partners/PartnerLogo';

const Partners = () => {
  return (
    <section id="parceiros" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Parceiros Oficiais</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <PartnerLogo
            src="https://www.yeastar.com/wp-content/uploads/2022/10/yeastar-logo.png"
            alt="Yeastar"
          />
          <PartnerLogo
            src="https://www.3cx.com/wp-content/themes/3cx/img/3cx-logo.png"
            alt="3CX"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;