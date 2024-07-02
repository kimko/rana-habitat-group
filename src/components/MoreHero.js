import React from 'react';
import { FaLeaf, FaRecycle, FaCity, FaFrog } from 'react-icons/fa';

const MoreHero = () => {
  return (
    <section id="more-hero" className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="hero-content text-center md:p-6 flex flex-col items-center">
        <div className="max-w-2xl mx-auto prose-sm md:prose lg:prose-xl animate-slide-in-left">
          <p className="md:mb-4 text-left">
            Our studies inform project design and implementation for sustainable and ecologically-centered land
            management and wildlife conservation projects that are intentional, resilient, and inspired.
          </p>
          <p className="md:py-4 lg:py-6 text-left md:mb-4">
            We work with landowners, land managers, and project designers to craft ecologically sound projects.
          </p>
          <div className="md:mt-2">
            <h4>We promote:</h4>
            <ul className="list-none space-y-2 md:space-y-4 text-left">
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
          <p className="py-2 md:py-4 lg:py-6 text-left mt-4">
            <span className="text-secondary">Rana Habitat Group</span> is a woman-owned business in Oregon State.
          </p>
        </div>
        <div className="mt-4 md:mt-10 text-center">
          <div className="mb-2">
            Scroll down or click to view&nbsp;
            <a href="#projects-hero" className="link link-secondary link-hover">
              projects
            </a>
          </div>
          <a href="#projects-hero">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 mx-auto animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-label="Down arrow"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MoreHero;
