// components/NavigationBar.js
import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="navbar bg-base-100 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="#hero">Rana Habitat LLC</a>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#scientific-research-and-restoration-experience">Experience</a>
            </li>
            <li>
              <a href="#leadership-experience">Leadership</a>
            </li>
            <li>
              <a href="#publications">Publications</a>
            </li>
            <li>
              <a href="#trainings-certifications">Certifications</a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex space-x-4">
          <a href="#education" className="btn btn-sm rounded-btn">
            Education
          </a>
          <a href="#scientific-research-and-restoration-experience" className="btn btn-accent btn-sm rounded-btn">
            Experience
          </a>
          <a href="#leadership-experience" className="btn btn-sm rounded-btn">
            Leadership
          </a>
          <a href="#publications" className="btn btn-sm rounded-btn">
            Publications
          </a>
          <a href="#trainings-certifications" className="btn btn-sm rounded-btn">
            Certifications
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
