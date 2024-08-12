import React from 'react';
import Hero from './Hero';

const AboutHero = () => {
  const content = `
    Laura is a wildlife ecologist who has been actively monitoring and researching the impacts of the built environment on habitat connectivity, native wildlife populations, and urban restoration projects for over 18 years. She recognizes that environmental issues are complex and require an adaptive mindset. Laura is currently working to complete her PhD in Environmental Science from Portland State University, focusing on native turtle conservation issues and filling high-priority research gaps. `;

  return <Hero id="laura-hero" title="Director - Laura Guderyahn" content={content} />;
};

export default AboutHero;
