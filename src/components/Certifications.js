// components/Certifications.js
import React from 'react';
import MarkdownContent from './MarkdownContent';

const Certifications = () => (
  <section id="certifications" className="container mx-auto p-8">
    <h2 className="text-3xl font-bold mb-4">Certifications</h2>
    <MarkdownContent path="content/certifications/index.md" />
  </section>
);

export default Certifications;
