import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function StickyRightNav() {
  return (
    <div className="up-arrow-wrapper">
      <a href="#logo">
        <FontAwesomeIcon icon={faArrowUp} id="up-arrow"/>
      </a>
    </div>
  );
}

export default StickyRightNav;
