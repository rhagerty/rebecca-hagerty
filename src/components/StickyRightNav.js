import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import styles from "../styles.module.css";
import { HideBetween } from "react-hide-on-scroll";

function StickyRightNav() {
  return (
    <HideBetween height startHeight={0} endHeight={400}>
      <div className={classNames(styles.hideHeight, styles.sticky)}>
        <div className="up-arrow-wrapper">
          <a href="#logo">
            <FontAwesomeIcon icon={faArrowUp} id="up-arrow" />
          </a>
        </div>
      </div>
    </HideBetween>
  );
}

export default StickyRightNav;
