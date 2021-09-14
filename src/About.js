import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import Img from "./images/me.jpg";

const About = () => {
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
    <section id="about">
      <Container>
        <h1 className="sectionNum" id="one">01.</h1>{" "}
        <h1 className="sectionTitle">About Me</h1>
        <Row className="about-wrapper">
          <Col lg={6} md={12} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <img alt="profile picture" id="profilePic" src={Img} />
              </div>
            </Fade>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  Hi! I'm Becca, your friendly neighborhood computer-nerd and
                  self-proclaimed idea machine. I love puzzles, numbers, complex
                  problems, and research (both noun and verb).
                </p>
                <p className="about-wrapper__info-text">
                  I'm a neurodivergent individual and a passionate
                  neurodiversity advocate. The effort that I have made to
                  understand my brain and the way it operates has implored me to
                  view my neurodivergency as a superpower. I want to help others do the same. 
                </p>
                <p className="about-wrapper__info-text">
                  {
                    "I have a 1 year old cat named Moosh and am an avid traveler and nature enthusiast. I am also a very community oriented person and spend as much time as possible volunteering and mentoring in Detroit. While I am an advocate for many causes, my primary focuses are human rights, community aid, and environmentalism."
                  }
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
