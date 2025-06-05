import React from 'react';

const ContactButton = ({ className }) => {
  return (
    <a
      href="https://wa.me/551129376455"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      Contratar
    </a>
  );
};

export default ContactButton;