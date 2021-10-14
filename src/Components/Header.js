import React from 'react';
import { Nav, Container, Navbar} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Header(){
return(
    <>
    <header>
    <Navbar>
     <Container>
     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    
     </Container>
   </Navbar>  
    </header>
   <Navbar className="navbar" bg='light' variant='light' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Malaikah</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className="me-auto">
           {/* <Nav.Link to='/'>
           <Nav.Link href="#home">Home</Nav.Link>
           </Nav.Link> */}
        </Nav>
            <Nav className='ml-auto'>
            <LinkContainer to='/'>
           <Nav.Link href="#home">Home</Nav.Link>
           </LinkContainer>
            <LinkContainer to='/login'>
                <Nav.Link>
                 Services&Programs
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/form'>
                <Nav.Link href='#form'>
                 Research
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                 Events&Education
                </Nav.Link>
              </LinkContainer>
                <LinkContainer to='/register'>
                  <Nav.Link>
                        About Us
                  </Nav.Link>
                </LinkContainer>

              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    </>
     
  );
}

export default Header;




