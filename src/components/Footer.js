// src/components/Footer.js
import React from "react";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Acme Note. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-gray-400">
            <img src={facebook} alt="" className="h-6 duration-200 ficon" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img src={twitter} alt="" className="h-6 duration-200 ficon" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img src={instagram} alt="" className="h-6 duration-200 ficon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
