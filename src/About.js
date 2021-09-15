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
        <h1 className="sectionNum" id="one">
          01.
        </h1>{" "}
        <h1 className="sectionTitle">About Me</h1>
        <Row className="about-wrapper">
          <Col lg={5} md={12} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">

              <div className="about-wrapper__image">
                <img alt="profile picture" id="profilePic" src={Img} />
              </div>
            </Fade>
          </Col>
          <Col lg={7} md={12} sm={12}>
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  Hi! I'm Becca -- your friendly neighborhood computer nerd and
                  self-proclaimed idea machine. My fascination with technology,
                  computers, and coding began before I can remember. As a
                  preteen, I dabbled with HTML styling for my social media pages
                  (LiveJournal or Myspace anyone?) and was an avid video gamer.
                  It didn't take long before I discovered the kismet connection
                  between my technical brain and computer savvy and made the
                  decision to pursue software engineering.
                </p>
                <p className="about-wrapper__info-text">
                  Fast forward to today, I have designed and developed numerous
                  apps and websites. I've focused my education and my work on
                  responsive development and accessible design. I'm an avid
                  researcher, which allows me to more deeply understand my
                  audience (or the problem) and provide a unique solution.
                </p>
                <p className="about-wrapper__info-text">
                  I have a 1 year old cat named Moosh, am an avid traveler, and
                  nature and animal enthusiast. I am also a very community
                  oriented person and spend as much time as possible
                  volunteering and mentoring in Detroit. While I am an advocate
                  for many causes, my primary focuses are human rights,
                  community aid, and environmentalism. I'm currently developing
                  a template for animal rescue shelters to use on their websites
                  for embedded affiliate links.
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
