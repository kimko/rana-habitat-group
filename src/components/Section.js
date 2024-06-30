import React from 'react';
import MarkdownContent from './MarkdownContent';
import Timeline from './Timeline';

const Section = ({ title, path, className, useTimeline }) => {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <section id={id} className={`container mx-auto py-16 ${className}`}>
      <h2 className="prose prose-lg prose-headings:text-left text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
        {title}
      </h2>
      {useTimeline ? (
        <Timeline csvPath={path} />
      ) : (
        <div className="flex justify-center">
          <MarkdownContent path={path} />
        </div>
      )}
    </section>
  );
};

export default Section;
