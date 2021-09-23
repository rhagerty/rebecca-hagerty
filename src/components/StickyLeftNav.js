import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames";
import styles from "../styles.module.css";
import { HideBetween } from "react-hide-on-scroll";

function StickyLeftNav() {
  return (
    <HideBetween height startHeight={0} endHeight={400}>
      <div className={classNames(styles.hideHeight, styles.sticky)}>
        <div className="social-icons-wrapper">
          <ul className="social-icons">
            <li>
              <Link href="https://github.com/rhagerty">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/hagertyrebecca">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </li>
            <li>
              <Link href="mailto:rhagertydevelopment@gmail.com">
                rhagertydevelopment@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </HideBetween>
  );
}

export default StickyLeftNav;
