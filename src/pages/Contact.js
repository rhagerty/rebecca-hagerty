import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row } from "react-bootstrap";

const Contact = () => {
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
    <section id="contact">
      <Container>
        <h1 className="sectionNum">04.</h1>{" "}
        <h1 className="sectionTitle">Contact</h1>
        <Row className="contact-wrapper">
          <Fade
            left={isDesktop}
            bottom={isMobile}
            duration={1000}
            delay={500}
            distance="30px"
          >
            <p className="contact-wrapper__info-text">
              I'm not currently open to new opportunities, but feel free
              to <a href="mailto:rhagertydevelopment@gmail.com">reach out</a>{" "}
              with any web development or process improvement queries. I look forward to hearing
              from you!
            </p>
          </Fade>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
