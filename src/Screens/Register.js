import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
// import { LinkContainer } from 'react-router-bootstrap';

class Register extends Component {
  alertText = () =>{
    alert('You have an appointment!!, Please check your email')
}

  render(){
    return (
      <>
        <div
          className="formcontent"
          style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <Row>
          <Col md>
          <h2 style={{marginTop: '40px', textAlign: 'center'}}>Create An Account</h2>
              <div id="pic">
                <img
                  src="/images/reg.jpg"
                  alt="care"
                  width="500px"
                  height="380px"
                />
              </div>
            </Col>
            <Col md sm={6} className="form">
              <Form action="" Method="POST" style={{padding:'10px'}}>
                <Row>
                  <Col md className="inputField">
                    <Form.Label id="field">Full Names</Form.Label>
                    <Form.Control name="" id="form-control" />
                  </Col>
                  <Col md>
                    <Form.Label id="field">Email Address</Form.Label>
                    <Form.Control name="doa" id="form-control" />
                  </Col>
                </Row>
                <Row>
                  <Col md>
                    <Form.Label id="field">Phone number</Form.Label>
                    <Form.Control name="toa" id="form-control" />
                  </Col>
                  <Col md>
                    <Form.Label id="field">Age</Form.Label>
                    <Form.Control name="location" id="form-control" />
                  </Col>
                </Row>
                <Row>
                  <Col md>
                  <Form.Label id="field">
                  Password
                </Form.Label>
                <Form.Control name="pmi" type="text" id="form-control" />
                  </Col>
                  <Col md>
                  <Form.Label id="field">
                  Confirm Password
                </Form.Label>
                <Form.Control name="pmi" type="text" id="form-control" />
                  </Col>
                </Row>
                <Row>              
                  <Col style={{marginTop:'5%'}}>
                    <Button id="Btn">
                      REGISTER
                    </Button>
                  </Col>
                  <Col style={{marginTop:'9.5%'}}>
                  <p>Already have an account? <a href="#login">Sign in</a></p>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
      </>
    );
  }
  
}

export default Register;
