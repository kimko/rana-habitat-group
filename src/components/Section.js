// components/Section.js
import React from 'react';
import MarkdownContent from './MarkdownContent';

const Section = ({ title, path }) => (
  <section className="container mx-auto p-8">
    <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-left">{title}</h2>
    <div className="prose sm:prose lg:prose-xl text-left">
      <MarkdownContent path={path} />
    </div>
  </section>
);

export default Section;
