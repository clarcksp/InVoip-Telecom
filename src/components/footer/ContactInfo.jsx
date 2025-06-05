import React from 'react';
import { FaPhone, FaGlobe, FaEnvelope } from 'react-icons/fa';

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;