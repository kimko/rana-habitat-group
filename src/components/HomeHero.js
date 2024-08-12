import React from 'react';
import { FaLeaf, FaRecycle, FaCity, FaFrog } from 'react-icons/fa';
import Logo from './Logo';
import Hero from './Hero';

const HomeHero = () => {
  const content = `
    Rana Habitat Group is an environmental consultancy using wildlife surveys and ecological knowledge to guide land management, wildlife connectivity planning, and habitat design projects.
  `;

  return (
    <Hero id="home-hero" bgClass="bg-base-100" content={content}>
      <Logo width="100" height="100" alt="Logo frog" className="mx-auto  animate-slide-in-left" />
      <p className="pt-2 text-left">
        Our studies inform project design and implementation for sustainable and ecologically-centered land management
        and wildlife conservation projects that are intentional, resilient, and inspired. We work with landowners, land
        managers, and project designers to craft ecologically sound projects.
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
    </Hero>
  );
};

export default HomeHero;
