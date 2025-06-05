import React from 'react';

const AppPreview = () => {
  return (
    <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end items-center">
      <div className="relative">
        {/* App screenshot */}
        <div className="rounded-lg overflow-hidden shadow-2xl">
          <img
            src="/src/assets/image.png"
            alt="Yeastar Linkus Interface"
            className="w-full h-auto max-w-[800px]"
          />
        </div>

        {/* Subtle glow effect */}
        <div className="absolute -inset-4 bg-blue-400/20 blur-3xl -z-10" />
      </div>
    </div>
  );
};

export default AppPreview;