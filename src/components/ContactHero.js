// ContactHero.jsx
import React from 'react';
import Logo from './Logo';
import ContactForm from './ContactForm';

const ContactHero = () => {
  return (
    <header id="contact-hero" className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="hero-content text-center px-4 py-2 md:p-6 prose-sm md:prose lg:prose-xl">
        <div className="max-w-md mx-auto">
          <Logo width="100" height="100" alt="Logo frog" className="mx-auto mb- animate-slide-in-left" />
          <h2>Rana Habitat Group, LLC</h2>
          <p className="py-2 md:py-6 text-wrap animate-slide-in-right">
            <span className="text-secondary">Rana Habitat Group</span> is an environmental consultancy using wildlife
            surveys and ecological knowledge to guide land management, wildlife connectivity planning, and habitat
            design projects.
          </p>
          <h3>Contact Us</h3>
          <ContactForm />
          <div className="mt-2 md:mt-10 text-center">
            <div className="md:mb-2">
              Scroll down or click to&nbsp;
              <a href="#more-hero" className="link link-secondary link-hover">
                learn more
              </a>
            </div>
            <a href="#more-hero">
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
      </div>
    </header>
  );
};

export default ContactHero;
