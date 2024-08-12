import React from 'react';

const AboutHero = () => {
  return (
    <header id="laura-hero" className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="hero-content text-center px-4 py-2 md:p-6 prose-sm md:prose lg:prose-xl">
        <div className="max-w-md lg:max-w-xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 animate-slide-in-left">Director Laura Guderyahn</h2>
          <p className="py-2 md:py-6 text-wrap animate-slide-in-right">
            Laura is a wildlife ecologist who has been actively monitoring and researching the impacts of the built
            environment on habitat connectivity, native wildlife populations, and urban restoration projects for over 18
            years. She recognizes that environmental issues are complex and require an adaptive mindset. Laura is
            currently working to complete her PhD in Environmental Science from Portland State University, focusing on
            native turtle conservation issues and filling high-priority research gaps.
          </p>
        </div>
      </div>
    </header>
  );
};

export default AboutHero;
