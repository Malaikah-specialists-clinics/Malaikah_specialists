import React from "react";
import { Row, Col, Form, Container, Button } from "react-bootstrap";
// import { LinkContainer } from 'react-router-bootstrap';

function FormPage2() {
  return (
    <>
      <Container className="formcontent">
        <Row>
          <Col md sm={6} className="form">
            <Form>
              <h2>Book An Appointment</h2>
              <h4>Patient Information </h4>
              <Row>
                <Col md className="inputField">
                  <Form.Label id="field">Select Department</Form.Label>
                  <Form.Control id="form-control" />
                </Col>
                <Col md>
                  <Form.Label id="field">Date Of Appointment</Form.Label>
                  <Form.Control id="form-control" />
                </Col>
              </Row>
              <Row>
                <Col md>
                  <Form.Label id="field">Time Of Appointment</Form.Label>
                  <Form.Control id="form-control" />
                </Col>
                <Col md>
                  <Form.Label id="field">Location</Form.Label>
                  <Form.Control id="form-control" />
                </Col>
              </Row>

              <Form.Label id="field">
                What is your primary medical issue?
              </Form.Label>
              <Form.Control type="text-area" id="textarea" />
              <Row>
                <Col>
                  {" "}
                  <Button href="#form" id="Btn">
                    BACK
                  </Button>{" "}
                </Col>
                <Col>
                  {" "}
                  <Button id="Btn">BOOK APPOINTMENT</Button>{" "}
                </Col>
              </Row>
            </Form>
          </Col>
          <Col md sm={6}>
            <div id="pic">
              <img
                src="/images/caremeds.jpg"
                alt="care"
                width="600px"
                height="470px"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FormPage2;
