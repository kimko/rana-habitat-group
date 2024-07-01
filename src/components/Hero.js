import React from 'react';

const Hero = ({ title, subtitle, bgColor, textColor }) => {
  return (
    <div className={`min-h-screen flex items-center justify-center ${bgColor} ${textColor}`}>
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold">{title}</h1>
        <p className="mt-4 text-xl md:text-2xl">{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;
