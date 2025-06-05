import React from 'react';
import Slider from 'react-slick';
import { features } from '../constants/features';
import FeatureCard from './ui/cards/FeatureCard';

const Features = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section id="recursos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Principais Recursos</h2>
        <Slider {...settings}>
          {features.map((feature, index) => (
            <div key={index} className="px-4">
              <FeatureCard {...feature} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Features;