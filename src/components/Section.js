// components/Section.js
import React from 'react';
import MarkdownContent from './MarkdownContent';
import Timeline from './Timeline';

const Section = ({ title, path, className }) => {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  console.log('path :', path);
  return (
    <section id={id} className={`container mx-auto p-10 flex flex-col justify-center `}>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-left">{title}</h2>
      {title === 'Education' ? (
        <Timeline csvPath={path} />
      ) : (
        <div className="prose prose-sm sm:prose lg:prose-xl text-left">
          <MarkdownContent path={path} />
        </div>
      )}
    </section>
  );
};

export default Section;
