import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../images/logo.svg";

const ExampleNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
    <div className="main-navbar">
      <Navbar expand="lg">
        <NavbarBrand href="/rebecca-hagerty">
          <img src={logo} id="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar >
            <NavItem>
              <NavLink href="#about">
                <span className="navNum"> 01.</span> About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#experience">
                <span className="navNum"> 02.</span> Experience
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#work">
                <span className="navNum"> 03.</span> Work
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact">
                <span className="navNum"> 04.</span> Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://resume.creddle.io/resume/74s5v3886t8">
                <span className="resume"> Resume</span>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default ExampleNavbar;
