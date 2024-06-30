import React from 'react';
import LoadingBar from './LoadingBar';
import logo from '../logo.svg';

const HeroSection = () => {
  return (
    <div id="hero" className="hero min-h-screen flex items-center justify-center pt-16">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img
            src={logo}
            className="w-60 h-60 mx-auto"
            alt="An illustration of a green frog's foot with four smooth, rounded toes on a transparent background."
            title="Rana Habitat Group logo"
          />
          <h1 className="text-5xl font-bold mt-4">Rana Habitat Group</h1>
          <p className="py-6 text-xl">Coming Soon</p>
          <LoadingBar />
          <a href="#main-content" className="mt-8 block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
