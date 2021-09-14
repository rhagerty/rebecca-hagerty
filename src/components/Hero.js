import React, { useState, useEffect } from "react";

// reactstrap components
import { Button } from "reactstrap";
import Fade from "react-reveal/Fade";

// core components

function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero">
      <div className="hero">
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={500}
          distance="30px"
        >
          <span className="title-intro">{"Hi, my name is"} </span>
          <h1 className="hero-title">
            {"Becca Hagerty."}
            <br />
            <span className="text-color-main">
              {"I build things for the web."}
            </span>
          </h1>
          <p className="heroP">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products
          </p>
        </Fade>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Button
                href="/about"
                smooth
                duration={1000}
                className="theme-btn"
              >
                {"Know more"}
              </Button>
            </span>
          </p>
        </Fade>
      </div>
    </section>
  );
}

export default Hero;
