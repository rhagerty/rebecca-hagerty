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
            delay={1000}
            distance="30px"
          >
            <p className="contact-wrapper__info-text">
              I'm currently open to select web development and UX researcher opportunities. Feel free
              to <a href="mailto:rhagertydevelopment@gmail.com">reach out</a>{" "}
              and I'll respond as soon as I'm able. I look forward to hearing
              from you!
            </p>
          </Fade>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
