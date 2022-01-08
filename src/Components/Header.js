import React from "react";
import { Nav, Navbar, Row, Col, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import authService from "../Services/auth.service";


function Header() {

  
  return (
    <>
      <div className="fixed-top" style={{ position: 'fixed' }}>
        <Navbar bg="light">
          <LinkContainer style={{ marginLeft: '82%' }} to="/login">
            <Nav.Link onClick={authService.logout}>
              <h5 style={{ color: '#020e20' }}>LOGIN</h5>
            </Nav.Link>
          </LinkContainer>
        </Navbar>
        <Navbar
          className="navbar"
          variant="dark"
          style={{ backgroundColor: '#20c997' }}
          expand="lg"
          collapseOnSelect
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Brand>
                <Row>
                  <Col>
                    <div>
                      <img
                        alt=""
                        src="/images/bluelogo-01.png"
                        width="85"
                        height="85"
                        className="d-inline-block align-top"
                      />
                    </div>
                  </Col>
                  <Col style={{ paddingTop: '20px' }}>
                    Malaikah Specialists Clinics <br />{' '}
                    <small style={{ marginLeft: '8%', fontSize: '13.5px' }}>
                      <i>Angels of Health</i>
                    </small>
                  </Col>
                </Row>
              </Navbar.Brand>
            </Nav>
            <Nav className="ml-auto nav-items">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/specscreen">
                <Nav.Link>Specialties</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/rscreen">
                <Nav.Link>Research</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/moeevents">
                <Nav.Link>Events</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/studenthome">
                <Nav.Link>Education</Nav.Link>
              </LinkContainer>
              <NavDropdown title="About Us" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#about">Core Values</NavDropdown.Item>
                <NavDropdown.Item href="#staff">Staff</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
