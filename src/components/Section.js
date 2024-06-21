// components/Section.js
import React from 'react';
import MarkdownContent from './MarkdownContent';

const Section = ({ title, path }) => {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <section id={id} className="container mx-auto p-8 my-12 bg-base-100 rounded-lg shadow-lg">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-left text-primary">{title}</h2>
      <div className="prose sm:prose lg:prose-xl text-left">
        <MarkdownContent path={path} />
      </div>
    </section>
  );
};

export default Section;
