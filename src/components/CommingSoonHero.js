import React from 'react';
import Logo from './Logo';

const CommingSoonHero = () => {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center bg-base-200">
      <div className="text-center px-4 py-2 md:p-6">
        <Logo width="100" height="100" alt="Logo frog" className="mx-auto mb-4 animate-slide-in-left" />
        <h2 className="text-3xl md:text-4xl font-bold animate-slide-in-right">Rana Habitat Group, LLC</h2>
        <p className="mt-4 text-xl md:text-2xl text-secondary animate-fade-in">Coming Soon</p>
      </div>
    </header>
  );
};

export default CommingSoonHero;
