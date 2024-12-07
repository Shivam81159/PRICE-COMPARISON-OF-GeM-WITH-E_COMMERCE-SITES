// AmazonSection.jsx
import React from 'react';

function AmazonSection() {
  return (
    <div className="sm:w-1/3 mb-10 px-4">
      <div className="rounded-lg h-64 overflow-hidden">
        <img src="public/Images/Amazon.png" alt="Amazon Logo" />
      </div>
      <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Amazon</h2>
      <p className="leading-relaxed text-base">
        Amazon is the world's largest online retailer, providing a diverse range of products from books and electronics to fashion and home goods.
        Explore a vast marketplace and enjoy convenient shopping with fast delivery options.
      </p>
      <a href="https://www.amazon.in" target="_blank" rel="noopener noreferrer">
        <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
          Explore Amazon
        </button>
      </a>
    </div>
  );
}

export default AmazonSection;
