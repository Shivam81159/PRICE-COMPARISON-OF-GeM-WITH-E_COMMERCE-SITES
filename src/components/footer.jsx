// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-white w-full"
      style={{ minWidth: "100vw" }}
    >
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <img
              src="public/Images/BargainBharat-logos.jpeg"
              width="75"
              alt="BargainBharat Logo"
            />
            <span className="ml-3 text-2xl font-serif font-bold">
              Bharat Bargain
            </span>
          </div>
          <div className="text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} BharatBargain. All rights
              reserved.
            </p>
            <p>
              Designed by{" "}
              <b>Shivam Srivastava</b>
            </p>
          </div>
          <div className="flex mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white mx-3">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white mx-3">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
