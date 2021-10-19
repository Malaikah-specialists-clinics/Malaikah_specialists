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
                src="https://cdn-icons-png.flaticon.com/512/4006/4006060.png"
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
                src="https://cdn-icons.flaticon.com/png/512/4854/premium/4854135.png?token=exp=1634645666~hmac=3eba40743218c499b4beadfd986c4ce2"
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
                src="https://cdn-icons.flaticon.com/png/512/2869/premium/2869649.png?token=exp=1634645514~hmac=01f65621a2a2d1b1a171d7a68424bb1e"
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
                src="https://cdn-icons.flaticon.com/png/512/2217/premium/2217851.png?token=exp=1634646916~hmac=2d58814817dff428da07690fc8877c3f"
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
                src="https://cdn-icons-png.flaticon.com/512/1694/1694130.png"
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
                src="https://cdn-icons-png.flaticon.com/512/4006/4006060.png"
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
                src="https://cdn-icons.flaticon.com/png/512/4854/premium/4854135.png?token=exp=1634645666~hmac=3eba40743218c499b4beadfd986c4ce2"
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
                src="https://cdn-icons.flaticon.com/png/512/2869/premium/2869649.png?token=exp=1634645514~hmac=01f65621a2a2d1b1a171d7a68424bb1e"
               
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
                src="https://cdn-icons.flaticon.com/png/512/2217/premium/2217851.png?token=exp=1634646916~hmac=2d58814817dff428da07690fc8877c3f"
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
                src="https://cdn-icons-png.flaticon.com/512/1694/1694130.png"
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
                  src="https://cdn-icons.flaticon.com/png/512/3695/premium/3695987.png?token=exp=1634649510~hmac=21ba80a5b2e766143c3ca40d62cee702"
                  alt="homecare"
                  className='crd-icon'
                />{" "}
                <br />
                <a href="#hcare" style={{color:'#0A1F3E', textDecoration:'none'}}> Home Care services</a>
              </div>
           
              <div className='col-sm-6 col-5'>
                <img
                  src="https://cdn-icons.flaticon.com/png/512/2955/premium/2955622.png?token=exp=1634649651~hmac=362d0cd2dbaf80576a60000214381f64"
                  alt=""
                  className='crd-icon'
                />{" "}
                <br />
                <a href="#emergservice" style={{color:'#0A1F3E', textDecoration:'none'}}>Emergency Services</a>
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
