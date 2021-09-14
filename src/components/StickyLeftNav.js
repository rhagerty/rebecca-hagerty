import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function StickyLeftNav() {
  return (
    <div className="social-icons-wrapper">
      <ul className="social-icons">
        <li>
          <Link to="https://github.com/rhagerty">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/hagertyrebecca">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </li>
        <li>
          <Link to="mailto:rhagertydevelopment@gmail.com">
            rhagertydevelopment@gmail.com
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default StickyLeftNav;
