import React from 'react';
import { FaPhone, FaGlobe, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">InVoip</h3>
            <p className="text-gray-400">Comunicação inteligente para seu negócio crescer</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center mb-2">
              <FaPhone className="mr-2" />
              <a href="https://wa.me/551129376455" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                (11) 2937-6455
              </a>
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelope className="mr-2" />
              <a href="mailto:atendimento@invoip.com.br" className="hover:text-blue-400">
                atendimento@invoip.com.br
              </a>
            </div>
            <div className="flex items-center">
              <FaGlobe className="mr-2" />
              <a href="https://www.invoip.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                www.invoip.com.br
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} InVoip. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;