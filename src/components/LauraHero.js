import React from 'react';

const CarouselItem = ({ src, alt, title, description, prevSlide, nextSlide }) => {
  return (
    <div className="carousel-item relative w-full">
      <div className="card bg-base-100 image-full w-full shadow-xl">
        <figure>
          <img src={src} alt={alt} className="w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href={`#${prevSlide}`} className="btn btn-circle">
            ❮
          </a>
          <a href={`#${nextSlide}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

const LauraHero = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Director Laura Guderyahn</h1>
      </header>

      {/* Profile Section */}
      <section className="text-center mb-8">
        <p>
          Laura is a wildlife ecologist who has been actively monitoring and researching the impacts of the built
          environment on habitat connectivity, native wildlife populations, and urban restoration projects for over 18
          years. She recognizes that environmental issues are complex and require an adaptive mindset. Laura is
          currently working to complete her PhD in Environmental Science from Portland State University, focusing on
          native turtle conservation issues and filling high-priority research gaps.
        </p>
      </section>

      {/* Carousel Section */}
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <CarouselItem
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            title="Shoes!"
            description="If a dog chews shoes whose shoes does he choose?"
            prevSlide="slide4"
            nextSlide="slide2"
          />
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <CarouselItem
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            alt="Pizza"
            title=""
            description=""
            prevSlide="slide1"
            nextSlide="slide3"
          />
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <CarouselItem
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            alt="Pizza"
            title=""
            description=""
            prevSlide="slide2"
            nextSlide="slide4"
          />
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <CarouselItem
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            alt="Pizza"
            title=""
            description=""
            prevSlide="slide3"
            nextSlide="slide1"
          />
        </div>
      </div>
    </div>
  );
};

export default LauraHero;
