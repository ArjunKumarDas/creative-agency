import React from 'react';
import './Manubar.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import logo from '../../../../images/logos/logo.png';
const Manubar = () => {
  return (
    <>
      <Row className="pt-3">
        <Col>
          <Navbar expand="lg">
            <Navbar.Brand href="/"><img className="logo" src={logo} alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link className="mr-5 text-dark" href="/">Home</Nav.Link>
                <Nav.Link className="mr-5 text-dark" href="/portfolio">Our Portfolio</Nav.Link>
                <Nav.Link className="mr-5 text-dark" href="/teem">Our Team</Nav.Link>
                <Nav.Link className="mr-5 text-dark" href="/conatct">Contact Us</Nav.Link>
                <Nav.Link className="pl-5 pr-5 btn bg-dark text-light" href="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </>
  );
};

export default Manubar;