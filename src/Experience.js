import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faWordpress, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

export default function Experience() {
  return (
    <div className="experience" id="experience">
      <h1 className="sectionNum">02.</h1>
      <h1 className="sectionTitle"> Experience</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#00cdac", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #00cdac" }}
          date="June 2021 - present"
          iconStyle={{ background: "#00cdac", color: "#fff", paddingLeft: "5px"  }}
          icon={<FontAwesomeIcon icon={faJs} />}
        >
          <h3 className="vertical-timeline-element-title">
            Website Designer & Developer
          </h3>
          <h5 className="vertical-timeline-element-subtitle">My Solar Store</h5>
          <ul className="technologies">
            <Badge>Figma</Badge>
            <Badge>Wix</Badge>
            <Badge>JS</Badge>
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1BCCB4", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #1BCCB4" }}
          date="June 2021 - Sept 2021"
          iconStyle={{ background: "#1BCCB4", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faWordpress} />}
        >
          <h3 className="vertical-timeline-element-title">
            Website Designer & Developer
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            Kramer Weiss & Menahem, CPAs
          </h5>
          <ul className="technologies">
            <Badge>Figma</Badge>
            <Badge>WordPress</Badge>
            <Badge>PHP</Badge>
            <Badge>JS</Badge>
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
            <Badge>Bootstrap</Badge>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2021 - Sept 2021"
          iconStyle={{ background: "#35CBBB", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #35CBBB" }}
          contentStyle={{ background: "#35CBBB", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faWordpress} />}
        >
          <h3 className="vertical-timeline-element-title">Website Developer</h3>
          <h5 className="vertical-timeline-element-subtitle">
            Mint Artists Guild
          </h5>
          <ul className="technologies">
            <Badge>WordPress</Badge>
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="March 2021 - Sept 2021"
          iconStyle={{ background: "#42CBBF", color: "#fff", paddingLeft: "6px"  }}
          contentStyle={{ background: "#42CBBF", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #42CBBF" }}
          icon={<FontAwesomeIcon icon={faHtml5} />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h5 className="vertical-timeline-element-subtitle">
            Michigan Solar Solutions
          </h5>
          <ul className="technologies">
            <Badge>Java</Badge>
            <Badge>Hubspot</Badge>
            <Badge>JS</Badge>
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element"
          date="June 2017 - April 2019"
          contentArrowStyle={{ borderRight: "7px solid  #69C9CA" }}
          contentStyle={{ background: "#69C9CA", color: "#fff" }}
          iconStyle={{ background: "#69C9CA", color: "#fff", paddingLeft: "8px" }}
          icon={<FontAwesomeIcon icon={faFileExcel} />}
        >
          <h3 className="vertical-timeline-element-title">Process Engineer</h3>
          <h5 className="vertical-timeline-element-subtitle">General Motors</h5>
          <ul className="technologies">
            <Badge>Excel</Badge>
            <Badge>SQL</Badge>
            <Badge>SAP</Badge>
          </ul>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}
