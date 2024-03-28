import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoImage from "../Asset/logo.png";
import { Icon } from "@iconify/react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  const navLinks = [
    { href: "#action1", text: "SIGN UP" },
    { href: "#action2", text: "FEATURES" },
    { title: "INDUSTRIES", items: [
      { href: "#action3", text: "FLOORING" },
      { href: "#action4", text: "ROOFING" },
      { href: "#action5", text: "DRYWALL" },
      { href: "#action6", text: "INSULATION" }
    ]},
    { href: "#", text: "FAQS", disabled: true },
    { href: "#", text: "CONTACT US", disabled: true },
    { href: "#", text: "LOGIN", disabled: true }
  ];
  const handleNavToggle = () => {
    setNavOpen(!isNavOpen);
  };

  const location = useLocation();
  console.log(location);

  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div className="container">
      <Navbar expand="lg" className=" bg-white d-lg-none">
        <Container fluid>
          <Navbar.Brand href="#" className="me-0">
            <img
              src={logoImage}
              alt="Your Logo"
              width="175"
              height="20"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Button
            variant="outline-light"
            onClick={handleNavToggle}
            className="d-lg-none mb-2"
            style={{
              borderColor: "white",
              backgroundColor: isNavOpen ? "white" : "",
            }}
          >
            <Icon
              icon="heroicons:bars-3-20-solid"
              style={{ fontSize: "2.3rem", color: "#2d59af" }}
            />
          </Button>
          <Navbar.Collapse
            id="navbarScroll"
            className={isNavOpen ? "show" : ""}
          >
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
  {navLinks.map((link, index) => {
    if (link.title) {
      return (
        <NavDropdown key={index} title={link.title} id="navbarScrollingDropdown">
          {link.items.map((item, idx) => (
            <NavDropdown.Item key={idx} href={item.href}>{item.text}</NavDropdown.Item>
          ))}
        </NavDropdown>
      );
    } else {
      return (
        <Nav.Link key={index} href={link.href} disabled={link.disabled}>{link.text}</Nav.Link>
      );
    }
  })}
</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-none d-lg-inline-flex">
        <div className="py-3">
          <div className="d-flex my-4">
            <div className="mx-0">
              <img
                src={logoImage}
                alt="Your Logo"
                width="275"
                height="25"
                className="d-inline-block align-top"
              />
            </div>
            <div className="ms-5 d-flex fontsi fw-bold">
              <div className="d-flex justify-content-between">
                <span className="mx-5 ps-5">FEATURES</span>
              </div>
              <div>
                <Dropdown
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  show={showDropdown}
                >
                  <div className="dropdown">
                    <span
                      className=""
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      INDUSTRIES
                    </span>
                    <div
                      className={`dropdown-menu ${showDropdown ? "show" : ""}`}
                    >
                      <a className="dropdown-item" href="/floor">
                        FLOORING
                      </a>
                      <a className="dropdown-item" href="/roof">
                        ROOFING
                      </a>
                      <a className="dropdown-item" href="/dry">
                        DRYWALL
                      </a>
                      <a className="dropdown-item" href="/insult">
                        INSULATION 
                      </a>
                    </div>
                  </div>
                </Dropdown>
              </div>
              <div className="d-flex justify-content-between">
                <span className="mx-5">FAQS</span>
                <span>CONTACT US</span>
                <span>
                <Link
                  to="/"
                  className={`mx-5 px-3 py-1 rounded-5 text-decoration-none text-dark ${
                    location.pathname === "/" ? "active_2 text-white" : ""
                  }`}
                >
                  LOGIN
                </Link> 
                </span>
                <span><Link
                  to="/register"
                  className={`px-3 py-1  text-dark rounded-5 text-decoration-none ${
                    location.pathname === "/register"
                      ? "active_2 text-white"
                      : ""
                  }`}
                >
                  SIGN UP
                </Link></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
