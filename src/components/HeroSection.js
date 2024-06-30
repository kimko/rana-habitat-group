import React from 'react';
import Logo from './Logo';
import { FaLeaf, FaRecycle, FaPaw, FaCity, FaFrog } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div id="hero" className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row text-center lg:text-left w-full prose prose-lg prose-headings:text-center lg:prose-headings:text-left">
        <div className="lg:w-1/3 flex flex-col items-center">
          <Logo
            className="w-full lg:w-auto max-w-xs"
            alt="An illustration of a green frog's foot with four smooth, rounded toes on a transparent background."
            title="Rana Habitat Group logo"
          />
          <h1 className="text-2xl font-bold mt-2 text-center">Rana Habitat Group, LLC</h1>
        </div>
        <div className="lg:w-2/3 max-w-lg lg:ml-10">
          <p className="py-6 text-lg">
            <span className="text-secondary">Rana Habitat Group</span> is an environmental consultancy using wildlife
            surveys and ecological knowledge to guide land management, wildlife connectivity planning, and habitat
            design projects.
          </p>
          <p className="py-6 text-lg">
            Our studies inform project design and implementation for sustainable and ecologically-centered land
            management and wildlife conservation projects that are intentional, resilient, and inspired.
          </p>
          <p className="py-6 text-lg">
            We work with landowners, land managers, and project designers to craft ecologically sound projects.
          </p>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">We promote:</h2>
            <ul className="list-none mt-2 text-lg space-y-2">
              <li className="flex items-center">
                <FaLeaf className="text-secondary mr-2" />
                Conservation of wild land and habitat connectivity
              </li>
              <li className="flex items-center">
                <FaRecycle className="text-secondary mr-2" />
                Restoration of degraded lands
              </li>
              <li className="flex items-center">
                <FaFrog className="text-secondary mr-2" />
                Sustainability of critical wildlife species presence
              </li>
              <li className="flex items-center">
                <FaCity className="text-secondary mr-2" />
                Increasing native biodiversity within cities
              </li>
            </ul>
          </div>
          <p className="py-6 text-lg">
            <span className="text-secondary">Rana Habitat Group</span> is a woman-owned business in Oregon State.
          </p>
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
