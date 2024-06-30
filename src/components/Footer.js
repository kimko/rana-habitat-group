// components/Footer.js
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content flex flex-col md:flex-row md:justify-between">
      <aside className="flex items-center">
        {/* <img src={logo} width="36" height="36" alt="Logo frog" className="fill-current" /> */}
        <Logo width="36" height="36" alt="Logo frog" className="fill-current" />
        <div className="ml-2 flex flex-col items-start leading-tight">
          <p className="m-0">Laura Guderyahn</p>
          <p className="m-0">Rana Habitat Group</p>
        </div>
      </aside>
      <nav className="flex items-center gap-4 mt-4 md:mt-0">
        <a href="mailto:lguderyahn@gmail.com" aria-label="Email" className="animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 5.01-8-5.01V6h16zM4 18V8.489l8 5.011 8-5.011V18H4z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/lauraguderyahn" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.2c-0.96 0-1.5-0.64-1.5-1.44 0-0.8 0.54-1.44 1.5-1.44 0.96 0 1.5 0.64 1.5 1.44 0 0.8-0.54 1.44-1.5 1.44zm13.5 11.2h-3v-5.6c0-1.36-0.48-2.28-1.68-2.28-0.92 0-1.48 0.64-1.72 1.28-0.08 0.2-0.12 0.48-0.12 0.76v5.84h-3s0.04-9.68 0-10.68h3v1.52c0.4-0.6 1.12-1.44 2.72-1.44 1.96 0 3.44 1.28 3.44 4.04v6.56z" />
          </svg>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
