import React from 'react';
import Hero from './Hero';
import Logo from './Logo';
import ContactForm from './ContactForm';

const ContactHero = () => {
  const content = `

  `;

  return (
    <Hero
      id="contact-hero"
      title="Rana Habitat Group, LLC"
      content={content}
      logo={<Logo width="100" height="100" alt="Logo frog" className="mx-auto mb-4 animate-slide-in-left" />}
      link={{ href: '#more-hero', text: 'learn more' }}
    >
      <h3>Contact Us</h3>
      <ContactForm />
    </Hero>
  );
};

export default ContactHero;
