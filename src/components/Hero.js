import React from 'react';

const Hero = ({ id, title, content, logo, children, bgClass = 'bg-base-200' }) => {
  return (
    <header id={id} className={`min-h-screen flex items-center justify-center ${bgClass}`}>
      <div className="hero-content px-4 py-2 mt-12 prose ">
        <div className="max-w-2xl mx-auto">
          {logo && <div className="mb-4 animate-slide-in-left">{logo}</div>}
          {title && <h2 className="font-bold animate-slide-in-left">{title}</h2>}
          {content && <p className="mt-4 text-left animate-slide-in-right">{content}</p>}
          {children}
        </div>
      </div>
    </header>
  );
};

export default Hero;
