// src/components/HeroSection.js
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="bg-gray-50 mt-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between py-12">
        <motion.div
          className="lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Introducing</span>
            <span className="block text-blue-600 xl:inline"> Acme Note</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-md lg:text-xl md:mt-5 md:max-w-3xl">
            Acme Note is the ultimate web-based application for taking notes.
            Sign up now and enhance your productivity!
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            className="w-full h-full object-cover rounded-lg shadow-lg md:w-1/2 lg:w-full"
            src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Acme Note"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
