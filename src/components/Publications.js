// components/Publications.js
import React from 'react';
import MarkdownContent from './MarkdownContent';

const Publications = () => (
  <section id="publications" className="container mx-auto p-8">
    <h2 className="text-3xl font-bold mb-4">Publications</h2>
    <MarkdownContent path="content/publications/index.md" />
  </section>
);

export default Publications;
