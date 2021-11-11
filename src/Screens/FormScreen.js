import React, {Component} from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


 

class FormPage extends Component {

  alertText = () => {
    alert('You have an appointment!!, Please check your email');
  };
  render(){
  return (
    <>
      <div
        className="formcontent"
        style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto'}}
      >
        <Row>
          <Col md sm={6} className="form">
            <Form action="http://localhost:3000/bookappts" Method="POST">
              <h2>Book An Appointment</h2>
              <h4>Patient Information </h4>
              <Row>
                <Col md>
                  <Form.Label id="field">Email</Form.Label>
                  <Form.Control
                    placeholder="winniek@example.com"
                    id="form-control"
                    name="email"
                  />
                </Col>
              </Row>
              <Col md className="">
                <Row>
                  <Col md className="inputField">
                    <Form.Label id="field">Select Department</Form.Label>
                    <Form.Control name="sdept" id="form-control" />
                  </Col>
                  <Col md>
                    <Form.Label id="field">Date Of Appointment</Form.Label>
                    <Form.Control name="doa" id="form-control" />
                  </Col>
                </Row>
                <Row>
                  <Col md>
                    <Form.Label id="field">Time Of Appointment</Form.Label>
                    <Form.Control name="toa" id="form-control" />
                  </Col>
                  <Col md>
                    <Form.Label id="field">Location</Form.Label>
                    <Form.Control name="location" id="form-control" />
                  </Col>
                </Row>

                <Form.Label id="field">
                  What is your primary medical issue?
                </Form.Label>
                <Form.Control name="pmi" type="text-area" id="textarea" />
                <Row>
                  <Col>
                    {' '}
                    <Button type="submit" id="Btn" onClick={this.alertText}>
                      BOOK APPOINTMENT
                    </Button>{' '}
                  </Col>
                </Row>
              </Col>
            </Form>
          </Col>
          <Col md>
            <div className="pic">
            <img src="/images/caremeds.jpg" alt="doctor" style={{width:'600px', height:'600px', marginTop: '3%'}}/>
            </div>
           </Col>
        </Row>
      </div>
    </>
  );
  }
}
export default FormPage;
