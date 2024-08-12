import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import Logo from './Logo';

const NavigationBar = ({ navLinks, selectedSection, onSectionChange }) => {
  // const isDev = process.env.NODE_ENV === 'development';

  const params = new URLSearchParams(window.location.search);
  const themeSelector = params.get('showThemeSelector');

  return (
    <nav className="navbar bg-base-100 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Logo
            className="h-8 w-8"
            alt="An illustration of a green frog's foot with four smooth, rounded toes on a transparent background."
            title="Rana Habitat Group logo"
          />
          <div className="text-md lg:text-2xl font-bold">
            <a href="#hero">Rana Habitat Group</a>
          </div>
        </div>
        <div className="dropdown dropdown-end lg:hidden">
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
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => onSectionChange(link.href)}
                  className={link.href === selectedSection ? 'btn btn-sm btn-active' : 'btn btn-sm'}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex space-x-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => onSectionChange(link.href)}
              className={link.href === selectedSection ? 'btn btn-sm btn-active' : 'btn btn-sm'}
            >
              {link.label}
            </a>
          ))}
          {themeSelector === 'true' && <ThemeSwitcher />}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
