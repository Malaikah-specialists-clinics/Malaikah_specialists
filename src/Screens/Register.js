import React, { Component } from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import {axios} from "axios"
import {base_url} from "../Constants/index.js"

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      dob: '',
      gender: '',
      location: '',
      password: '',
      confirmPassword: '',
    }; 
  }
  changeHandler = e =>{
    this.setState({ [e.target.name]: e.target.value });
  }; 

  onSubmit(e) {
    e.preventDefault();

    const userObject = {
      name: this.state.name,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      dob: this.state.dob,
      gender: this.state.gender,
      location: this.state.location,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
     axios
       .post(`${base_url}/users`, userObject)

       .then((res) => {
         console.log(res.data);
       })
       .catch((err) => {
         console.log(err);
       });
  }

  render() {
    return (
      <>
        <div
          className="formcontent"
          style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <Row>
            <Col md>
              <h2 style={{ marginTop: '40px', textAlign: 'center' }}>
                Create An Account
              </h2>
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
              <Form onSubmit={(e) => this.onSubmit(e)}
                style={{ padding: '10px' }}
              >
                <Row>
                  <Col md>
                    <Form.Label id="field">Full Names</Form.Label>
                    <Form.Control
                      name="name"
                      type="text"
                      id="form-control"
                      value={this.state.name}
                      onChange={this.changeHandler}
                    />
                  </Col>
                  <Col md className="inputField">
                    <Form.Label id="field">Email Address</Form.Label>
                    <Form.Control
                      name="email"
                      id="form-control"
                      value={this.state.email}
                      onChange={this.changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md>
                    <Form.Label id="field">Phone number</Form.Label>
                    <Form.Control
                      name="phoneNumber"
                      id="form-control"
                      value={this.state.phoneNumber}
                      onChange={this.changeHandler}
                    />
                  </Col>
                  <Col md>
                    <Form.Label id="field">Date of birth</Form.Label>
                    <Form.Control
                      name="dob"
                      id="form-control"
                      value={this.state.dob}
                      onChange={this.changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md>
                    <Form.Label id="field">Gender</Form.Label>
                    <Form.Select
                      name="gender"
                      id="form-control"
                      value={this.state.gender}
                      onChange={this.changeHandler}
                    >
                      <option>Select Gender</option>
                      <option value="1">Female</option>
                      <option value="2">Male</option>
                      <option value="3">Prefer not to say</option>
                    </Form.Select>
                  </Col>
                  <Col md>
                    <Form.Label id="field">Location</Form.Label>
                    <Form.Control
                      name="location"
                      type="text"
                      id="form-control"
                      value={this.state.location}
                      onChange={this.changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md>
                    <Form.Label id="field">Password</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      id="form-control"
                      value={this.state.password}
                      onChange={this.changeHandler}
                    />
                  </Col>
                  <Col md>
                    <Form.Label id="field">Confirm Password</Form.Label>
                    <Form.Control
                      name="confirmPassword"
                      type="password"
                      id="form-control"
                      value={this.state.confirmPassword}
                      onChange={this.changeHandler}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col style={{ marginTop: '5%' }}>
                    <Button type="submit" id="Btn">
                      REGISTER
                    </Button>
                  </Col>
                  <Col style={{ marginTop: '9.5%' }}>
                    <p>
                      Already have an account? <a href="#login">Sign in</a>
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
}

export default Register;
