// EGovSection.jsx
import React from 'react';

function EGovSection() {
  return (
    <div className="sm:w-1/3 mb-10 px-4">
      <div className="rounded-lg h-64 overflow-hidden">
        <img src="public/Images/GeM.png" alt="E-Gov Logo" />
      </div>
      <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">GeM</h2>
      <p className="leading-relaxed text-base">
      Government e-Marketplace, an online platform launched by the Government of India to facilitate procurement of goods and services by various government departments, organizations, and public sector undertakings. GeM serves as a central marketplace to streamline the procurement process, enhance transparency, and promote efficiency in government procurement.
      </p>
      <a href="https://gem.gov.in" target="_blank" rel="noopener noreferrer">
        <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
          Explore GeM
        </button>
      </a>
    </div>
  );
}

export default EGovSection;
