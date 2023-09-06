import React from "react";
import Services from "./components/Services";
import Prices from "./components/Prices";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Contact";
import About from "./components/About";
import StatsBanner from "./components/StatsBanner";
import Banner from "./components/Banner";
import TestimonialSec from "./components/Testimonial";
import Projects from "./components/Projects";
import FirstProject from "./components/FirstProject";
import LogoBanner from "./components/LogoBanner";
import ActionBanner from "./components/ActionBanner";

function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Hero />
      <StatsBanner />
      <Services />
      <TestimonialSec />
      <FirstProject />
      <Projects />
      <LogoBanner />
      <Prices />
      <Newsletter />
      <About />
      <ActionBanner />
      <Footer />
    </div>
  );
}

export default App;
