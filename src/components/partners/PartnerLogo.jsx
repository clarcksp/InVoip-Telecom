import React from 'react';

const PartnerLogo = ({ src, alt, className }) => {
  return (
    <div className="h-16 bg-white rounded px-8 py-4 flex items-center justify-center">
      <img 
        src={src} 
        alt={alt}
        className={`h-12 object-contain ${className}`}
      />
    </div>
  );
};

export default PartnerLogo;