import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoImage from '../Asset/logo.png';
import { Icon } from '@iconify/react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!isNavOpen);
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };


  return (
    <div className='container'>
      <Navbar expand="lg" className=" bg-white d-lg-none">
      <Container fluid>
        <Navbar.Brand href="#" className='me-0'>
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
          style={{ borderColor: 'white',  backgroundColor: isNavOpen ? 'white' : '' }}
        >
          <Icon icon="heroicons:bars-3-20-solid"  style={{ fontSize: '2.3rem', color: '#2d59af' }} />
        </Button>
        <Navbar.Collapse id="navbarScroll" className={isNavOpen ? 'show' : ''}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">SIGN UP</Nav.Link>
            <Nav.Link href="#action2">FEATURES</Nav.Link>
            <NavDropdown title="INDUSTRIES" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">FLOORING</NavDropdown.Item>
              <NavDropdown.Item href="#action4">ROOFING</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">DRYWALL</NavDropdown.Item>
              <NavDropdown.Item href="#action5">INSULATION</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              FAQS
            </Nav.Link>
            <Nav.Link href="#" disabled>
              CONTACT US
            </Nav.Link>
            <Nav.Link href="#" disabled>
              LOGIN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='d-none d-lg-inline-flex'>
      <div className='py-3'>
         <div className='d-flex my-4'>
         <div className='mx-0'>
           <img
            src={logoImage}
            alt="Your Logo"
            width="275"
            height="25"
            className="d-inline-block align-top"
            />
          </div>
          <div className='ms-5 d-flex fontsi fw-bold'>
            <div className='d-flex justify-content-between'>
              <span className='mx-5 ps-5'>FEATURES</span>
            </div>
            <div>
            <Dropdown onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} show={showDropdown} >
               <div className='dropdown'>
                <span
                 className=''
                 role='button'
                 aria-haspopup='true'
                 aria-expanded='false'
                >
                INDUSTRIES
                </span>
              <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                 <a className='dropdown-item' href='#'>
                  FLOORING
                 </a>
                 <a className='dropdown-item' href='#'>
                 ROOFING
                 </a>
                 <a className='dropdown-item' href='#'>
                 DRYWALL
                 </a>
                 <a className='dropdown-item' href='#'>
                 INSULATION
                 </a>
              </div>
            </div>
              
            </Dropdown>  
            </div>    
            <div className='d-flex justify-content-between'>
              <span className='mx-5'>FAQS</span>
              <span>CONTACT US</span>
              <Link to="/" className='mx-5 bg-success text-white px-3 py-1 rounded-5 text-decoration-none text-dark'>LOGIN</Link>
              <Link to="/register" className='bg-success px-3 text-white py-1 rounded-5 text-decoration-none text-dark'>SIGN UP</Link>
            </div>
          </div>
         </div>
        </div>
    </div>
    </div>
  );
}

export default Header;
