import React, {Component} from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import axios from "axios";
import { base_url } from '../Constants/index.js';
import {withRouter} from 'react-router-dom'
// import CORS from "react"
// import { useState, useEffect } from "react";

 

class FormPage extends Component {
  alertText = () => {
    alert('You have an appointment!!, Please check your email');
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      sdpet: '',
      doa: '',
      toa: '',
      moa: '',
      pmi: '',
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit(e) {
    this.alertText();
    e.preventDefault();

    const patientObject = {
      email: this.state.email,
      sdept: this.state.sdept,
      doa: this.state.doa,
      toa: this.state.toa,
      moa: this.state.moa,
      pmi: this.state.pmi,
    };
    axios
      .post(`${base_url}/bookappts`, patientObject, {
        headers: { 'Access-Control-Allow-Origin': '*' },
      })

      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      this.props.history.push('/')
  }

  render() {
    return (
      <>
        <div
          className="formcontent"
          style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <Row>
            <Col md sm={6} className="form">
              <Form onSubmit={(e) => this.onSubmit(e)}>
                <h2>Book An Appointment</h2>
                <h4>Patient Information </h4>
                <Row>
                  <Col md>
                    <Form.Label id="field">Email</Form.Label>
                    <Form.Control
                      placeholder="winniek@example.com"
                      id="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.changeHandler}
                    />
                  </Col>
                </Row>
                <Col md className="">
                  <Row>
                    <Col md className="inputField">
                      <Form.Label id="field">Department</Form.Label>
                      <Form.Select
                        name="sdept"
                        value={this.state.sdept}
                        onChange={this.changeHandler}
                        id="form-control"
                      >
                        <option>Select department</option>
                        <option>Gynecology</option>
                        <option>Paediatrics</option>
                        <option>Non-communicable diseases</option>
                        <option>Hernia and appendicitis Surgery</option>
                      </Form.Select>
                    </Col>
                    <Col md>
                      <Form.Label id="field">Date Of Appointment</Form.Label>
                      <Form.Control
                        name="doa"
                        value={this.state.doa}
                        onChange={this.changeHandler}
                        id="form-control"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col md>
                      <Form.Label id="field">Time Of Appointment</Form.Label>
                      <Form.Control
                        name="toa"
                        value={this.state.toa}
                        onChange={this.changeHandler}
                        id="form-control"
                      />
                    </Col>

                    <Col md>
                      <Form.Label id="field">Mode of appointment</Form.Label>
                      <Form.Select
                        name="moa"
                        value={this.state.moa}
                        onChange={this.changeHandler}
                        id="form-control"
                      >
                        <option>Select mode of appointment</option>
                        <option>Online</option>
                        <option>In Person</option>
                      </Form.Select>
                    </Col>
                  </Row>

                  <Form.Label id="field">
                    What is your primary medical issue?
                  </Form.Label>
                  <Form.Control
                    name="pmi"
                    value={this.state.pmi}
                    onChange={this.changeHandler}
                    type="text-area"
                    id="textarea"
                  />
                  <Row>
                    <Col>
                      <Button type="submit"  id="Btn">
                        BOOK APPOINTMENT
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Form>
            </Col>
            <Col md>
              <div className="pic">
                <img
                  src="/images/caremeds.jpg"
                  alt="doctor"
                  style={{ width: '600px', height: '600px', marginTop: '3%' }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
export default withRouter (FormPage);
