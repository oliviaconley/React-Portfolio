import React, { useState } from "react";
// import Container from "./Container";

import Navigation from "./Navigation";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { ScrollToTop } from "./components/Scroll/ScrollToTop";

const App = () => {
  return (
    <>
    <div className="bg-lime-100 font-mono">
      <Navigation />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
    <ScrollToTop />
    </>
  );
};

export default App;
