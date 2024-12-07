import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="text-gray-600 body-font fixed top-0 w-full bg-blue-500 z-10 shadow-md">
      <div className="container mx-auto flex flex-wrap p-4 md:p-5 flex-col md:flex-row items-center">
        <a
          href="#"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <img
            src="public/Images/BargainBharat-logos.jpeg"
            width="60"
            alt="BargainBharat Logo"
          />
          <span className="ml-2 text-xl">BargainBharat</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <Link to='/' className="mr-3 hover:text-red-900 ">
            Home   &nbsp;&nbsp;&nbsp;
          </Link>
          <Link to='/About' className="mr-3 hover:text-red-900 ">
            About Us   &nbsp;&nbsp;&nbsp;
          </Link>
          <Link to='/Compare' className="mr-3 hover:text-red-900 ">
            Compare   &nbsp;&nbsp;&nbsp;
          </Link>
          <Link to='/offer' className="mr-3 hover:text-red-900 ">
            Offer Zone   &nbsp;&nbsp;&nbsp;
          </Link>
        </nav>
      </div> 
    </header>
  );
};

export default Header;
