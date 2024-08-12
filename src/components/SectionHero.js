import React from 'react';
import MarkdownContent from './MarkdownContent';
import Hero from './Hero';
import Timeline from './Timeline';

const SectionHero = ({ title, path, className, useTimeline }) => {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-hero';

  return (
    <Hero id={id} title={title} bgClass="bg-base-200">
      <section>
        <div className="container px-4 md:px-4 prose-sm md:prose lg:prose-xl">
          {useTimeline ? (
            <div className="mt-2">
              <Timeline csvPath={path} />
            </div>
          ) : (
            <div className="flex justify-center mt-8">
              <MarkdownContent path={path} />
            </div>
          )}
        </div>
      </section>
    </Hero>
  );
};

export default SectionHero;
