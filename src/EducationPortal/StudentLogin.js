import React from "react";
import { Container, Form, Button, Row, Col} from "react-bootstrap";

const StudentLogin = () => {
  return (
    <>
    <Container style={{marginTop:'15%', marginBottom: '5%'}}>
      <Form className="stdform">
      <Row>
        <Col xs lg="6"> <h2>LOGIN</h2></Col>
        <Col xs lg="3"><h4>Student</h4></Col>
        <Col xs lg="3"> <h4>Facilitator</h4></Col>
      </Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div style={{textAlign:'center'}}>
        <Button id="Btn" type="submit">  SUBMIT </Button>
        </div>
        
         
      
      </Form>
    </Container>
    </>
  );
};

export default StudentLogin;
