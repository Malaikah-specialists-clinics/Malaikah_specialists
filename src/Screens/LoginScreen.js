import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
// import { LinkContainer } from 'react-router-bootstrap';

const Login =()=>{
 

    return (
      <>
        <div
          className="formcontent"
          style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <Row>
            <Col md>
              <h2 style={{ marginTop: '40px', textAlign: 'center' }}>Login</h2>
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
              <Form
                action="http://localhost:3000/users/login"
                Method="POST"
                style={{ padding: '10px' }}
              >
                <Row>
                  <Col md>
                    <Form.Label id="field">Email Address</Form.Label>
                    <Form.Control name="email" id="form-control" />
                  </Col>
                </Row>
                <Row>
                  <Col md>
                  <Form.Label id="field">
                  Password
                </Form.Label>
                <Form.Control name="password" type="password" id="form-control" />
                  </Col>
                  </Row>
                <Row>              
                  <Col style={{marginTop:'5%'}}>
                    <Button type='submit' id="Btn">
                      LOGIN
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ marginTop: '9.5%' }}>
                    <p>
                      Have No account? <a href="#register">Sign Up</a>
                    </p>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
      </>
    );
  }
  

export default Login;
