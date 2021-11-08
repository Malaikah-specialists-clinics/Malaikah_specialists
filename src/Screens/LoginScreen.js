import React, { Component } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
// import { LinkContainer } from 'react-router-bootstrap';

class Login extends Component {
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
          <h2 style={{marginTop: '40px', textAlign: 'center'}}>Login</h2>
              <div id="pic">
                <img
                  src="/images/doc.jpg"
                  alt="care"
                  width="500px"
                  height="340px"
                />
              </div>
            </Col>
            <Col md sm={6} className="form">
              <Form action="" Method="POST" style={{padding:'10px'}}>
                <Row>
                  <Col md>
                    <Form.Label id="field">Email Address</Form.Label>
                    <Form.Control name="doa" id="form-control" />
                  </Col>
                </Row>
                <Row>
                  <Col md>
                  <Form.Label id="field">
                  Password
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
                  </Row>
                  <Row>
                  <Col style={{marginTop:'9.5%'}}>
                  <p>Have No account? <a href="#register">Sign Up</a></p>
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

export default Login;
