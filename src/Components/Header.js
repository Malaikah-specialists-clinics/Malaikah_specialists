import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <>
      <Container>
        <div className="fixed-top" style={{ position: "fixed" }}>
          <Navbar
            className="navbar"
            variant="dark"
            style={{ backgroundColor: "#0A1F3E" }}
            expand="lg"
            collapseOnSelect
          >
            <Container>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Navbar.Brand>
                    <img
                      alt=""
                      src="/images/logo-01.png"
                      width="40"
                      height="40"
                      className="d-inline-block align-top"
                    />
                  </Navbar.Brand>
                </Nav>
                <Nav className="ml-auto">
                  <LinkContainer to="/">
                    <Nav.Link >Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/specscreen">
                    <Nav.Link>Services&Programs</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/rscreen">
                    <Nav.Link >Research</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/moeevents">
                    <Nav.Link>Events&Education</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/emergservice">
                    <Nav.Link >About Us</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </Container>
    </>
  );
}

export default Header;
