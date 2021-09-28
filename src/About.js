import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import Img from "./images/me.jpg";
import moosh from "./images/moosh1.jpg";
import moosh2 from "./images/moosh2.jpg";
import moosh3 from "./images/moosh3.jpg";

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
              <Row>
                <Col lg={4} md={4} sm={4}><img alt="picture of cat" src={moosh} className="moosh"/></Col>
                <Col lg={4} md={4} sm={4}><img alt="picture of cat" src={moosh2} className="moosh"/></Col>
                <Col lg={4} md={4} sm={4}><img alt="picture of cat" src={moosh3} className="moosh"/></Col>
              </Row>
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
                I am a creative full-stack developer, engineer, and graphic designer based in Detroit, Michigan. My place in the world seems to be at the intersection of creativity and logic. All projects are a problem to be solved, whether it’s to do with design or code—only the tools change. My process is iterative; I approach each problem as a learning experience that informs the rest of the project. My love for research and gathering data is only bounded by my shared love for watching a project come to life on the screen. 
                </p>
                <p className="about-wrapper__info-text">
                My career path has provided me the opportunity to seamlessly combine my personal values of community, inclusivity, and enacting positive social change with my work. I build websites for nonprofits, mentor teen girls going into STEM, and am passionate about removing the barriers between “design” and “accessible design” (<b>all</b> design should be accessible!).

                </p>
                <p className="about-wrapper__info-text">
                Whether the internet or the outdoors, I love exploring and traveling to new places with my cat, Moosh (she also really loves computers). I live my life with open-mindedness and wide-eyed curiosity. I am always experimenting, always learning, and never bored.
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
