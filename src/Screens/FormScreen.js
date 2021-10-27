import React from "react";
import { Row, Col, Form, Container, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function FormPage() {
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
                  <Form.Label id="field">First Name</Form.Label>
                  <Form.Control placeholder="E.g Mark" id="form-control"  />
                  </Col>
                  <Col md>
                  <Form.Label id="field">Last Name</Form.Label>
                  <Form.Control placeholder="E.g Mukuye" id="form-control" />
                  </Col>
                  </Row>
                  <Row>
                    <Col md>
                    <Form.Label id="field">Email</Form.Label>
                  <Form.Control
                    placeholder="winniek@example.com"
                    id="form-control"
                  />
                    </Col>
                    <Col md>
                    <Form.Label id="field">Phone Number</Form.Label>
                  <Form.Control placeholder="+2347000000" id="form-control" />
                    </Col>
                  </Row>
                 <Row>
                   <Col md>
                   <Form.Label id="field">Date Of Birth</Form.Label>
                  <Form.Control placeholder="mm/yyyy/dd" id="form-control"/>
                   </Col>
                   <Col md>
                   <Form.Label id="field">Gender</Form.Label>
                  <Form.Control placeholder="gender" id="form-control" />
                   </Col>
                 </Row>
              <Button href="#form2" id="Btn">
                NEXT
              </Button>{" "}
            </Form>
          </Col>
          <Col md sm={6} className="pic">
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
export default FormPage;
