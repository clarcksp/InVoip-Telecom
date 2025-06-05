import React from 'react';
import HeroContent from './hero/HeroContent';
import AppPreview from './hero/AppPreview';

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-20 bg-gradient-to-br from-[#0066cc] via-[#0080ff] to-[#33a1ff] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0066cc]/0 via-[#0080ff]/50 to-[#33a1ff]" />
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <HeroContent />
          <AppPreview />
        </div>
      </div>
    </section>
  );
};

export default Hero;