import React from "react";
import { Col, Row, Card, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


function Specialities() {
  return (
    <> 
    <h2 style={{textAlign: 'center', fontWeight: 'bolder', top:'0'}}> Our Specialities</h2>
     <Container>
      <Row>
        <Col>
        <div className='slider'>
        <div className='slider-track' >
          <LinkContainer to='/specialities'>
          <Card id="crds">
               <Card.Img
                variant="top"
                className='crd-icon'
                src="/images/gynecology.png"
              /> 
              
              <Card.Body>
               <h6>Gynecology services</h6>
              </Card.Body>
            </Card>
          </LinkContainer>
           
          <LinkContainer to='/specialities'>
            <Card id="crds">
              <Card.Img
              className='crd-icon'
                variant="top"
                src="/images/bby.png"
              />
              <Card.Body>
                <h6>Paediatrics</h6>
              </Card.Body>
            </Card>
            </LinkContainer>
            <LinkContainer to='/specialities'>
            <Card id="crds">
              <Card.Img
                variant="top"
                className='crd-icon'
                src="/images/ambl.png"
              />
              <Card.Body>
                <h6>Ambulance services</h6>
              </Card.Body>
            </Card>
            </LinkContainer>
            <LinkContainer to='/specialities'>
            <Card id="crds">
              <Card.Img
                variant="top"
                className='crd-icon'
                src="/images/tummy.png"
              />
              <Card.Body>
                <h6>Hernia & Appendicitis surgery</h6>
              </Card.Body>
            </Card>
            </LinkContainer>

            <LinkContainer to='/specialities'>
            <Card id="crds">
              <Card.Img
                variant="top"
                className='crd-icon'
                src="/images/edu.png"
              />
              <Card.Body>
                <h6>Health Education</h6>
              </Card.Body>
            </Card>
            </LinkContainer>
          <LinkContainer to='/specialities'>
          <Card id="crds">
              <Card.Img
                variant="top"
                className='crd-icon'
                src="/images/gynecology.png"
              />
              <Card.Body>
               <h6>Gynecology services</h6>
              </Card.Body>
            </Card>
          </LinkContainer>
           
          <LinkContainer to='/specialities'>
            <Card id="crds">
              <Card.Img
                variant="top"
                className='crd-icon'
                src="/images/bby.png"
              />
              <Card.Body>
                <h6>Paediatrics</h6>
              </Card.Body>
            </Card>
            </LinkContainer>
            <LinkContainer to='/specialities'>
            <Card id="crds">
              <Card.Img
                variant="top"
                className='crd-icon'
                src="/images/ambl.png"
               
              />
              <Card.Body>
                <h6>Ambulance services</h6>
              </Card.Body>
            </Card>
            </LinkContainer>
            <LinkContainer to='/specialities'>
            <Card id="crds">
              <Card.Img
                variant="top"
                className='crd-icon'
                src="/images/tummy.png"
              />
              <Card.Body>
                <h6>Hernia & Appendicitis surgery</h6>
              </Card.Body>
            </Card>
            </LinkContainer>

            <LinkContainer to='/specialities'>
            <Card id="crds">
              <Card.Img
                variant="top"
                className='crd-icon'
                src="/images/edu.png"
              />
              <Card.Body>
                <h6>Health Education</h6>
              </Card.Body>
            </Card>
            </LinkContainer>
          {/* </CardGroup> */}
          </div>
          </div>
        </Col>
      </Row>
      {/* second row */}
      
      <Row id='row2'>
        <Col sm={6} >
        <h2>Speciality Services</h2>
          <Row>
              <div className='col-sm-6 col-5'>
                <img
                  src="/images/homecare.png"
                  alt="homecare"
                  className='crd-icon'
                />{" "}
                <br />
                <a
                  href="#hcare"
                  style={{ color: "#0A1F3E", textDecoration: "none" }}
                >
                  {" "}
                  Home Care services
                </a>
              </div>
           
              <div className='col-sm-6 col-5'>
                <img
                  src="/images/emergecy.png"
                  alt=""
                  className='crd-icon'
                />{" "}
                <br />
                <a
                  href="#emergservice"
                  style={{ color: "#0A1F3E", textDecoration: "none" }}
                >
                  Emergency Services
                </a>
              </div>
          </Row>
          
        </Col>
        <Col sm={4}>
          <Card id="spc-card" style={{ width: "22rem", height: "180px"}}>
            <Card.Title style={{textAlign: 'center'}}>Check Our Weekly Time Table</Card.Title>
            <ul style={{listStyleType:'none'}}>
              <li>Mon - Fri <p style={{float: 'right', paddingRight:'40px'}}>8:00- 23:00</p> <hr/></li> 
              <li>Saturday <p style={{float: 'right', paddingRight:'40px'}}>8:00- 22:00</p><hr/></li>
              <li>Sunday <p style={{float: 'right', paddingRight:'40px'}}>9:00- 21:00</p> <hr/></li>
            </ul>
          </Card>
        </Col>
      </Row>
      </Container>
    </>
  );
}

export default Specialities;
