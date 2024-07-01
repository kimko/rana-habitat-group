import React from 'react';
import MarkdownContent from './MarkdownContent';
import Timeline from './Timeline';

const Section = ({ title, path, className, useTimeline }) => {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-hero';

  return (
    <section id={id} className={`min-h-screen flex items-center justify-center bg-base-100 ${className}`}>
      <div className="container px-2 md:px-4 prose-sm md:prose lg:prose-xl">
        <h3>{title}</h3>
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
