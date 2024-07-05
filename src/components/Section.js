import React from 'react';
import MarkdownContent from './MarkdownContent';
import Timeline from './Timeline';

const Section = ({ title, path, className, useTimeline }) => {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-hero';

  return (
    <section id={id} className={`min-h-screen flex items-center justify-center bg-base-200 ${className}`}>
      <div className="container pt-2 px-4 md:px-4 prose-sm md:prose lg:prose-xl">
        <h2>{title}</h2>
        {useTimeline ? (
          <div className="mt-4 md:mt-8">
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
