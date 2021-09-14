import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import kwm from "./images/kwm.svg";
import mint from "./images/mint.jpg";
import MSS from "./images/MSS.jpg";
import TaskPlanner from "./images/TaskPlanner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
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
    <div className="work container" id="work">
      <h1 className="sectionNum">03. </h1>
      <h1 className="sectionTitle"> Some Things I've Built</h1>

      <div className="row projMain">
        <Fade bottom duration={1000} delay={600} distance="30px">
          <div className="col project-image">
            <img src={TaskPlanner} className="workImage" />
          </div>
        </Fade>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <div className="col-lg-8 project-content">
            <p className="subtitle">Featured Project</p>
            <h2 className="projectTitle">
              Neurodivergent Task Planner Web App
            </h2>
            <div className="projDescription">
              <p className="projectP">
                I developed a scheduling/task management web application with
                special options designed{" "}
                <span className="emphasis">
                  to better accommodate neurodivergent users.
                </span>{" "}
                I utilized 2 REST APIs and 0Auth authentication for this
                application.
              </p>
            </div>
            <div className="projTech">
              <ul className="techList">
                <li>React</li>
                <li>Node</li>
                <li>VSCode</li>
                <li>HTML</li>

                <li>CSS</li>
                <li>Bootstrap</li>
                <li>MongoDB</li>
                <li>REST API</li>
                <li>0Auth</li>
              </ul>
            </div>
            <div className="projLinks">
              <a href="https://github.com/rhagerty/taskmanager">
                <FontAwesomeIcon icon={faGithub} className="linksIcon" />
              </a>
            </div>
          </div>
        </Fade>
      </div>

      <div className="row projMain">
        <Fade bottom duration={1000} delay={600} distance="30px">
          <div className="col project-image">
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
          <div className="col-lg-8 project-content">
            <p className="subtitle">Featured Project</p>
            <h2 className="projectTitle">Accounting Firm Website</h2>
            <div className="projDescription">
              <p className="projectP">
                I designed, wireframed, and developed a responsive site layout,
                content, and branding materials with{" "}
                <span className="emphasis">
                  special attention paid to accessibility standards.
                </span>
              </p>
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
          <div className="col project-image">
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
          <div className="col-lg-8 project-content">
            <p className="subtitle">Featured Project</p>
            <h2 className="projectTitle">Online Solar Store</h2>
            <div className="projDescription">
              <p className="projectP">
                I designed and developed a responsive website layout, content,
                and branding materials. I created an inventory tracking and
                management process and configured it with the site to live
                update.
              </p>
            </div>

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
            <p className="otherFlag">Volunteer Project</p>
            <h5 className="otherTitle">Website Redevelopment</h5>
            <p className="volunteer-desc">
              I helped Mint Artists Guild redevelop their website to a new,
              mobile-friendly theme.
            </p>
            <div className="other-tech">
              <ul className="other-tech-list">
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
            <p className="otherFlag">Web App</p>
            <h5 className="otherTitle">"Your Personal Mixologist"</h5>
            <p className="volunteer-desc">
              I developed a web application for searching and storing cocktail
              recipes.
            </p>
            <div className="other-tech">
              <ul className="other-tech-list">
                <li>Python</li>
                <li>Express</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Rest API</li>
                <li>Heroku</li>
              </ul>
            </div>
            <div className="otherProjLinks">
              <a href="https://github.com/rhagerty/Capstone-Project">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 otherCol">
            <p className="otherFlag">Volunteer Project</p>
            <h5 className="otherTitle">Animal Shelter Website Page Template</h5>

            <p className="volunteer-desc">
              I'm currently developing a WordPress template with embedded
              affiliate links that an animal shelter can add to their website
              for fundraising purposes.
            </p>
            <div className="other-tech">
              <ul className="other-tech-list">
                <li>WordPress</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Work;
