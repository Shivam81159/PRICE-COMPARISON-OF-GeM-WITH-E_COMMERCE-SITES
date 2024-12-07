// FlipkartSection.jsx
import React from 'react';


function FlipkartSection() {
  return (
    <div className="sm:w-1/3 mb-10 px-4">
      <div className="rounded-lg h-64 overflow-hidden">
        <img src="public/Images/Flipkart.png" alt="Flipkart Logo" />
      </div>
      <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Flipkart</h2>
      <p className="leading-relaxed text-base">
        Flipkart is a leading online shopping platform, offering a wide range of products at competitive prices.
        Browse through a vast selection of electronics, fashion, home essentials, and more.
      </p>
      <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer">
        <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
          Explore Flipkart
        </button>
      </a>
    </div>
  );
}

export default FlipkartSection;
