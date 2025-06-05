import React from 'react';
import ContactInfo from './ContactInfo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">InVoip</h3>
            <p className="text-gray-400">Comunicação Inteligente para o crescimento do seu Negócio</p>
          </div>
          <ContactInfo />
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} InVoip. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;