import React from 'react';
import { Nav, Navbar, Row, Col, NavDropdown, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { RiLoginCircleFill } from 'react-icons/ri';

function Header() {
  const handleLogout = () => {
		localStorage.removeItem("user");
	//  window.location.reload();
	};
  return (
    <>
      <div className="sticky-top">
        <Navbar  expand="md" style={{ padding: '0', backgroundColor: '#EEEEEE' }}>
          <Container>
            <Navbar.Brand style={{ fontSize: 'medium', color: '#0a1f3e' }}>
              <MdEmail />
              info@malaikahgroup.com
            </Navbar.Brand>
            <Navbar.Brand style={{ fontSize: 'medium', color: '#0a1f3e' }}>
              <FaPhoneAlt />
              0772670952
            </Navbar.Brand>
            <Navbar.Brand
              href="#login"
              onClick={handleLogout}
              style={{ fontSize: 'medium', color: '#0a1f3e' }}
            >
              <RiLoginCircleFill />
              LOGIN
            </Navbar.Brand>
          </Container>
        </Navbar>

        <Navbar
          className="navbar"
          variant="dark"
          style={{ backgroundColor: '#20c997', padding: '0 2%' }}
          expand="lg"
          collapseOnSelect
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Navbar.Brand>
                <Row>
                  <Col lg>
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
                  <Col lg style={{ paddingTop: '20px' }}>
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
