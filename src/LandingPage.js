import React from "react";

// core components

import Hero from "./components/Hero";
import About from "./About";
import Footer from "./components/Footer";
import Experience from "./Experience";
import Skills from "./Work";
import Contact from "./Contact";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <Hero />
      <About/>
      <Experience/>
      <Skills/>
      <Contact/>
      <Footer />
    </>
  );
}

export default LandingPage;
