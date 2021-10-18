import React from "react";
import { Col, Row, Card, CardGroup, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Specialities() {
  return (
    <> 
    <h2 style={{textAlign: 'center', fontWeight: 'bolder', top:'0'}}> Our Specialities</h2>
     <Container>
      <Row>
        <Col>
          <CardGroup id='crd-grp' style={{borderTop: '1px solid grey', borderBottom:'1px solid grey'}}>
          <LinkContainer to='/specialities'>
          <Card id="crds">
              <Card.Img
                variant="top"
                src="/images/gynae.png"
                width="45px"
                height="135px"
                border-radius='50%'
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
                src="/images/kid.png"
                width="75px"
                height="135px"
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
                src="/images/ambulance.png"
                width="75px"
                height="135px"
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
                src="/images/surgery.jpg"
                width="75px"
                height="135px"
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
                src="/images/nurse-edu.png"
                width="75px"
                height="135px"
              />
              <Card.Body>
                <h6>Health Education</h6>
              </Card.Body>
            </Card>
            </LinkContainer>
          </CardGroup>
        </Col>
      </Row>
      {/* second row */}
      
      <Row id='row2'>
        <Col md>
        <h2>Speciality Services</h2>
          <Row>
            <Col>
              <div>
                <img
                  src="https://actionhealthstaffing.net/wp-content/uploads/2017/12/HomeCare-Icon.png"
                  alt="homecare"
                  width="75px"
                  height="105px"
                />{" "}
                <br />
                <a href="#hcare" style={{color:'#0A1F3E', textDecoration:'none'}}> Home Care services</a>
              </div>
            </Col>
            <Col>
              <div>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  width="75px"
                  height="100px"
                />{" "}
                <br />
                <a href="#emergservice" style={{color:'#0A1F3E', textDecoration:'none'}}>Emergency Services</a>
              </div>
            </Col>
          </Row>
          
        </Col>
        <Col md>
          <Card id="spc-card" style={{ width: "25rem", height: "180px" }}>
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
