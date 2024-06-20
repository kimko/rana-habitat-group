// components/NavigationBar.js
import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="navbar bg-base-100 shadow-md">
      <div className="container mx-auto flex justify-between">
        <div className="text-xl font-bold">Rana Habitat LLC</div>
        <div className="flex space-x-4">
          <a href="#education" className="link link-hover">
            Education
          </a>
          <a href="#experience" className="link link-hover">
            Experience
          </a>
          <a href="#leadership" className="link link-hover">
            Leadership
          </a>
          <a href="#publications" className="link link-hover">
            Publications
          </a>
          <a href="#certifications" className="link link-hover">
            Certifications
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
