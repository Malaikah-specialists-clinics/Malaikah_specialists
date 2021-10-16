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
                <Col className="inputField">
                  <Form.Label id="field">First Name</Form.Label>
                  <Form.Control placeholder="E.g Mark" id="form-control" className="col-md-6 col-sm-12" />
                  <Form.Label id="field">Email</Form.Label>
                  <Form.Control
                    placeholder="winniek@example.com"
                    id="form-control"
                    className="col-md-6 col-sm-12"
                  />
                  <Form.Label id="field">Date Of Birth</Form.Label>
                  <Form.Control placeholder="mm/yyyy/dd" id="form-control" className="col-md-6 col-sm-12" />
                </Col>
                <Col className="inputField">
                  <Form.Label id="field">Last Name</Form.Label>
                  <Form.Control placeholder="E.g Mukuye" id="form-control" className="col-md-6 col-sm-12"/>
                  <Form.Label id="field">Phone Number</Form.Label>
                  <Form.Control placeholder="+2347000000" id="form-control" className="col-md-6 col-sm-12"/>
                  <Form.Label id="field">Gender</Form.Label>
                  <Form.Control placeholder="gender" id="form-control" className="col-md-6 col-sm-12"/>
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


{/* 
<div class="row">
  <div class='col-md-6'>
  <form class="col-lg-6 col-md-7 col-sm-12 form mx-auto" name="form" method="POST" action="myboda.html"
                style={{background: "rgb(255, 255, 255)", borderRadius: "15px"}}>
                <div class="form-field">
                    <label for="date"></label>
                    <input name="date" id="date" type="text" class="form-control" placeholder="Enter Today's Date"
                        onfocus="(this.type='date')" />
                    
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <input name="pick-up" id="pick-up" type="text" class="form-control"
                            placeholder="Pick Up Location" />
                        <small class="error"></small>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <input name="dropoff" id="dropoff" type="text" class="form-control"
                            placeholder="Drop off Location" />
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <input name="timeOfUpLocation" id="pickup-time" type="text" class="form-control"
                            placeholder="Pick Up Time" onfocus="(this.type='time')" />
                        
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <input name="arrivalTime" id="arrivalTime" type="text" class="form-control"
                            placeholder="Arrival Time" onfocus="(this.type='time')" />
                      
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <input name="temp" id="temp" type="text" aria-describedby="basic-addon2" class="form-control"
                            placeholder="Temperature" />
                       
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <select id="vaccinated" class="custom-select">
                            <option value="">Vaccinated?</option>
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                        </select>
                    </div>
                </div>

                <div class="form-field">
                    <input name="nameof" id="nameof" type="text" class="form-control" placeholder="Name" />
                </div>
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div class="form-field">
                            <select id="gender">
                                <option value="">Choose Gender</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                            </select>
                            <small class="error"></small>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="form-field">
                            <input name="tel" id="tel" type="text" class="form-control" placeholder="Tel No." />
                           
                        </div>
                    </div>
                </div>
                <div class="form-field">
                    <input name="nationalid" id="nationalid" type="text" class="form-control"
                        placeholder="National ID/Passprt No." />
                  
                </div>
               
                <button onclick="checkEmpty(inputs), valid()" class="btn btn-success btn-block" id="submit"
                    type="button" value="Submit">Submit</button>
            </form>
  </div> 
  <div class='col-md-6'>
  <img
    src="/images/caremeds.jpg"
                alt="care"
                width="600px"
                height="470px"
              />
  </div>
            
        </div> */}

      </Container>
    </>
  );
}

export default FormPage;
