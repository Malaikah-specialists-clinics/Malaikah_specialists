import React from 'react';
import { Row, Col, Form,Container, Button} from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';


function FormPage(){
    return(
        <>
    <Container>
  <Row>
    <Col className='form'>
    <Form>
    <h2>Book An Appointment</h2>
    <h4>Patient Information </h4>
  <Row>
    <Col className='inputField'>
        <Form.Label id='field'>First Name</Form.Label>
      <Form.Control  placeholder="E.g Mark" />
      <Form.Label id='field'>Email</Form.Label>
      <Form.Control  placeholder="winniek@example.com" />
      <Form.Label id='field'>Date Of Birth</Form.Label>
      <Form.Control  placeholder="mm/yyyy/dd" />
     
    </Col>
    <Col className='inputField'>
    <Form.Label id='field' >Last Name</Form.Label>
      <Form.Control placeholder="E.g Mukuye" />
      <Form.Label id='field'>Phone Number</Form.Label>
      <Form.Control placeholder="+2347000000" />
      <Form.Label id='field'>Gender</Form.Label>
      <Form.Control placeholder="gender" />
    </Col>
  </Row>
  
   <Button  href="/form2" id='Btn'>NEXT</Button>{' '}
</Form>
    </Col>
    <Col>
    <div id="pic">
    <img src="/images/caremeds.jpg" alt='care' width= "600px" height="470px"/>
    </div>
    </Col>
  </Row>
  </Container>
        </>
    )
}

export default FormPage;