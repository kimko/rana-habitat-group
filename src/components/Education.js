// components/Education.js
import React from 'react';
import MarkdownContent from './MarkdownContent';

const Education = () => (
  <section id="education" className="container mx-auto p-8">
    <h2 className="text-3xl font-bold mb-4">Education</h2>
    <MarkdownContent path="content/education/index.md" />
  </section>
);

export default Education;
