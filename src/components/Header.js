/* <div className="text-xl font-bold">Acme Note</div>{" "} */

import React, { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsNavOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="shrink-0 flex items-center">
              <div className="text-xl font-bold">Acme Note</div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                onClick={() => scrollToSection("home")}
                className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Home
              </a>

              <a
                href="#"
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
              >
                Testimonials
              </a>
              <a
                href="#"
                onClick={() => scrollToSection("pricing")}
                className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
              >
                Login
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium">
              Sign Up
            </button>
          </div>
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleNav}
              className="text-gray-900 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            >
              {isNavOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isNavOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              onClick={() => scrollToSection("home")}
              className="text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>

            <a
              href="#"
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-500 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Testimonials
            </a>
            <a
              href="#"
              onClick={() => scrollToSection("pricing")}
              className="text-gray-500 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </a>

            <button className="bg-blue-600 text-white w-full px-3 py-2 rounded-md text-base font-medium">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
