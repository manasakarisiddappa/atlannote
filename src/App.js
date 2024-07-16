// src/App.js
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/FeaturesSection";
import Testimonials from "./components/TestimonialsSection";
import Pricing from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import AddtionalFeatures from "./components/AddtionalFeatures";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AddtionalFeatures />
      <Testimonials />
      <Pricing />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default App;
