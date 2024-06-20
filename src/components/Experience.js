// components/Experience.js
import React from 'react';
import MarkdownContent from './MarkdownContent';

const Experience = () => (
  <section id="experience" className="container mx-auto p-8">
    <h2 className="text-3xl font-bold mb-4">Experience</h2>
    <MarkdownContent path="content/experience/index.md" />
  </section>
);

export default Experience;
