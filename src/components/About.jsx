import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Flipkart from './flipcart';
import Amazon from './amzon';
import Gem from './Gem';

function About() {
    const sliderSettings = {
      autoplay: true,
      autoplaySpeed: 3000, // Adjust the speed as needed
      dots: true,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            About Us
          </h1>
          <p className="mb-8 leading-relaxed">
            <b>Welcome to Bargain Bharat – Your Ultimate Shopping Companion!</b>
            <br />
            At Bargain Bharat, we understand the thrill of finding the best
            deals on your favorite products. In the vast ocean of online
            shopping, we navigate through the virtual aisles of India's leading
            e-commerce giants – Flipkart, Amazon, and Gem (Government e-
            Marketplace). Our mission is simple yet powerful: to empower you
            with the knowledge of the best prices available, ensuring that every
            rupee you spend is a rupee well invested.
          </p>
          <p>
            <h6 className="title-font sm:text-2xl text-1xl mb-4 font-medium text-gray-900">
              <i>Our Vision:</i>
            </h6>
            We envision a smarter and savvier India, where every shopper is
            armed with the information needed to make informed decisions.
            Bargain Bharat is here to transform your shopping experience,
            providing a one-stop platform to compare prices effortlessly.
            <br />
            <br />
            <h6 className="title-font sm:text-2xl text-1xl mb-4 font-medium text-gray-900">
              <i>What Sets Us Apart:</i>
            </h6>
            <h6 className="title-font sm:text-1xl text-1xl mb-4 font-medium text-gray-900">
              <i>Trusted Comparison:</i>
            </h6>
            Our cutting-edge technology scours the internet to gather real-time
            prices from Flipkart, Amazon, and Gem. With Bargain Bharat, you can
            trust that you're getting the most accurate and up-to-date
            information.
            <br />
            <br />
            <br />
            <h6 className="title-font sm:text-1xl text-1xl mb-4 font-medium text-gray-900">
              <i>Comprehensive Product Catalog:</i>
            </h6>
            Whether you're in search of the latest gadgets, trendy fashion, home
            essentials, or more, Bargain Bharat's extensive product catalog has
            you covered. We bring together a diverse range of products, ensuring
            that you find exactly what you need at the best possible price.
            <br />
            <br />
            <br />
            <h6 className="title-font sm:text-1xl text-1xl mb-4 font-medium text-gray-900">
              <i>User-Friendly Interface:</i>
            </h6>
            Navigating Bargain Bharat is a breeze. Our user-friendly interface
            allows you to effortlessly compare prices across platforms, helping
            you save time and money with just a few clicks.
            <br />
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Slider {...sliderSettings}>
            <div>
              <img src="public/Images/Flp vs Amg vs gem.png" alt="Image 1" />
            </div>
            <div>
              <img src="public/Images/Flp vs Amg vs gem 3.png" alt="Image 2" />
            </div>
            <div>
              <img src="public/Images/Flp vs Amg vs gem 2.png" alt="Image 3" />
            </div>
            {/* Add more images as needed */}
          </Slider>
        </div>
      </div>
      <div>
        <h1 className="title-font text-4xl text-center mb-4 font-medium text-gray-900">
          <i>
            You can explore the E-commerce site we used for price comparison.
          </i>
        </h1>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <Flipkart />
            <Amazon />
            <Gem />  
          </div>
        </div>
      </section>
    </section>
    
  );
};
export default About;
