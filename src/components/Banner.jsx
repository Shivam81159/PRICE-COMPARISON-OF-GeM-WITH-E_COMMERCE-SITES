import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...sliderSettings} className="your-slider-class">
      <div>
        <img src="public/Images/flipbanner.png" alt="Image 1"  />
      </div>
      <div>
        <img src="public/Images/gembanner.png" alt="Image 2" />
      </div>
      <div>
        <img src="public/Images/amazonbanner.png" alt="Image 3" />
      </div>
      {/* Add more images as needed */}
    </Slider>
  );
};

export default Banner;
