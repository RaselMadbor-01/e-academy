import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import icon from "../../images/icons/open-book.png";

const NavBar = () => {
  const activeLinkStyle = {
    color: "#fff",
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="sm"
        variant="dark"
        style={{ backgroundColor: "#072A5F" }}
      >
        <Container>
          <Navbar.Brand>
            <img
              src={icon}
              alt="icon"
              width="50"
              height="50px"
              className="d-inline-block align-center p-2"
            />
            e-Academy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto d-flex justify-content-center align-items-center">
              <NavLink
                id="RouterNavLink"
                to="/home"
                className="link"
                activeStyle={activeLinkStyle}
              >
                Home
              </NavLink>

              <NavLink
                id="RouterNavLink"
                to="/about"
                className="link"
                activeStyle={activeLinkStyle}
              >
                About
              </NavLink>

              <NavLink
                id="RouterNavLink"
                to="/services"
                className="link"
                activeStyle={activeLinkStyle}
              >
                Services
              </NavLink>

              <NavLink
                id="RouterNavLink"
                to="/contact"
                className="link"
                activeStyle={activeLinkStyle}
              >
                Contact us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
