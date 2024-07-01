import React from 'react';
import MarkdownContent from './MarkdownContent';
import Timeline from './Timeline';

const Section = ({ title, path, className, useTimeline }) => {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-hero';

  return (
    <section id={id} className={`hero min-h-screen bg-base-100 pt-10 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="prose prose-lg prose-headings:text-center text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
          {title}
        </h2>
        {useTimeline ? (
          <div className="mt-8">
            <Timeline csvPath={path} />
          </div>
        ) : (
          <div className="flex justify-center mt-8">
            <MarkdownContent path={path} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Section;
