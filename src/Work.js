import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import kwm from "./images/kwmLayer.jpg";
import mint from "./images/mint.jpg";
import MSS from "./images/MSS.jpg";
import TaskPlanner from "./images/TaskPlanner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Work() {
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
    <div className="work container">
      <h1 className="sectionNum">03. </h1>
      <h1 className="sectionTitle"> Some Things I've Built</h1>

      <div className="row projMain">
        <Fade bottom duration={1000} delay={600} distance="30px">
          <div className="col-md-12 col-sm-12 project-image">
            <img src={kwm} className="workImage" />
          </div>
        </Fade>

        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <div className="project-content">
            <p className="subtitle">Featured Project</p>
            <h2 className="projectTitle">Accounting Firm Website</h2>
            <div className="projDescription">
              <ul className="descriptionList">
                <li>
                  <FontAwesomeIcon icon={faCaretRight} /> Designed, wireframed,
                  and developed responsive site layout, content, and branding materials
                  with
                  <span className="special">
                    special attention paid to accessibility standards and layout
                    responsiveness.
                  </span>
                </li>
              </ul>
            </div>
            <div className="projTech">
              <ul className="techList">
                <li>WordPress</li>
                <li>Figma</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className="projLinks">
              <a href="https://www.kwm-cpas.com">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
        </Fade>
      </div>

      <div className="row projMain">
        <Fade bottom duration={1000} delay={600} distance="30px">
          <div className="col-md-12 col-sm-12 project-image">
            <img src={TaskPlanner} className="workImage workImageR" />
          </div>
        </Fade>
   
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <div className="project-content">
            <p className="subtitleL">Featured Project</p>
            <h2 className="projectTitleL">
              Neurodivergent Task Planner Web App
            </h2>
            <div className="projDescriptionL">
              <ul className="descriptionList">
                <li>
                  <FontAwesomeIcon icon={faCaretRight} /> Designed and developed
                  initial concept for a scheduling and task management app with
                  special options to better accommodate the neurodiverse.
                </li>
              </ul>
            </div>
            <div className="projTechL">
              <ul className="techList">
                <li>React</li>
                <li>Node</li>
                <li>Styled Components</li>
                <li>VSCode</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className="projLinksL">
              <a href="https://github.com/rhagerty/taskmanager">
                <FontAwesomeIcon icon={faGithub} className="linksIcon" />
              </a>
            </div>
          </div>
        </Fade>
      </div>

      <div className="row projMain">
        <Fade bottom duration={1000} delay={600} distance="30px">
          <div className="col-md-12 col-sm-12 project-image">
            <img src={MSS} className="workImage" />
          </div>
        </Fade>

        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <div className="project-content">
            <p className="subtitle">Featured Project</p>
            <h2 className="projectTitle">Online Solar Store</h2>
            <div className="projDescription">
              <ul className="descriptionList">
                <li>
                  <FontAwesomeIcon icon={faCaretRight} /> Designed, wireframed,
                  and developed site layout, content, and branding materials
                  with
                  <span className="special">specia</span>
                </li>
              </ul>
            </div>
            <br />
            <div className="projTech">
              <ul className="techList">
                <li>Wix</li>
                <li>Figma</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div className="projLinks">
              <a href="https://www.mysolarstore.com">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
        </Fade>
      </div>

      <Fade
        left={isDesktop}
        bottom={isMobile}
        duration={1000}
        delay={1000}
        distance="30px"
      >
        <h4 className="notable">Other Notable Projects</h4>
        <div className="row otherProjs">
          <div className="col-md-4 col-sm-12 otherCol">
            <img
              src={mint}
              alt="Mint Artists Guild Website Screenshot"
              className="otherImgs"
            />
            <p className="otherFlag">Volunteer Project</p>
            <h5 className="otherTitle">Website Redevelopment</h5>
            <div className="projTechL">
              <ul
                className="techList
              "
              >
                <li>WordPress</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className="otherProjLinks">
              <a href="https://www.mintartistsguild.org">
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 otherCol">
            <img
              src={mint}
              alt="Mint Artists Guild Website Screenshot"
              className="otherImgs"
            />
            <p className="otherFlag"></p>
            <h5 className="otherTitle">Your Personal Mixologist</h5>
            <div className="projTechL">
              <ul className="techList">
                <li>Python</li>
                <li>Express</li>
                <li>VSCode</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Rest API</li>
                <li>Heroku</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 otherCol">
            <img
              src={mint}
              alt="Mint Artists Guild Website Screenshot"
              className="otherImgs"
            />
            <h5 className="otherTitle">
              Mint Artists Guild Website Redevelopment
            </h5>
            <p className="otherFlag">Volunteer Project</p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Work;
