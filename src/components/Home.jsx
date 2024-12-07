import React from 'react';
import SearchBar from './Searchbar';
import Banner from './Banner'
import ImageGallery from './ImageGallary';

const Home = () => {
  return (
    <div className="home-page">
        <br /><br /><br /><br /><br />
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-900">
        <center>Welcome to Bharat Bargain</center>
          </h1>
      <SearchBar />
      <Banner/>
      {/* Other content goes here */}
      <ImageGallery/>
    </div>
  );
};

export default Home;
