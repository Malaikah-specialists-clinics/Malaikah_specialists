import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';
import { base_url } from '../Constants/index.js';
import { withRouter } from 'react-router-dom';
import { Formik } from 'formik';
// import CORS from "react"
// import { useState, useEffect } from "react";



const validateBookappt = (detailsBookappt) => {
  const errors = {};
  if (!detailsBookappt.email) {
    errors.email = 'Please Enter Email';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(detailsBookappt.email)
  ) {
    errors.email = 'Invalid email address';
  }
  if (!detailsBookappt.sdept === "") {
    errors.sdept = 'Field Required';
  } 
  // else if (detailsBookappt.sdept.length > 20) {
  //   errors.sdept = 'Name cannot exceed 20 characters';
  // }
  //  if (!detailsBookappt.name) {
  //    errors.name = 'Please Enter Full Names';
  //  } else if (detailsBookappt.doa.length > 20) {
  //    errors.name = 'Name cannot exceed 20 characters';
  //  }

  return errors;
};

const FormPage = ({ closeDialog }) => {
  // alertText = () => {
  //   alert('You have an appointment!!, Please check your email');
  // };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: '',
  //     sdpet: '',
  //     doa: '',
  //     toa: '',
  //     moa: '',
  //     pmi: '',
  //   };
  // }
  // changeHandler = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  // validate = { validateBookappt };
  // onSubmit(e) {
  //   this.alertText();
  //   e.preventDefault();

  //   const patientObject = {
  //     email: this.state.email,
  //     sdept: this.state.sdept,
  //     doa: this.state.doa,
  //     toa: this.state.toa,
  //     moa: this.state.moa,
  //     pmi: this.state.pmi,
  //   };
  //   axios
  //     .post(`${base_url}/bookappts`, patientObject, {
  //       headers: { 'Access-Control-Allow-Origin': '*' },
  //     })

  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   this.props.history.push('/profile');
  // }

  return (
    <>
      <div
        className="formcontent"
        style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto' }}
      >
        <Row>
          <Col md sm={6} className="form">
            <Formik
              initialValues={{
                email: '',
              }}
              // validationSchema={registereventSchema}
              validate={validateBookappt}
              onSubmit={(values, actions, errors) => {
                setTimeout(() => {
                  const patientObject = {
                    email: values.email,
                    sdept: values.sdept,
                    doa: values.doa,
                    toa: values.toa,
                    moa: values.moa,
                    pmi: values.pmi,
                  };

                  axios.post(`${base_url}/bookappts`, patientObject, {
                    headers: { 'Access-Control-Allow-Origin': '*' },
                  });
                  window.location.href = '/#/profile';
                  if (closeDialog) {
                    closeDialog();
                  }
                  actions.setSubmitting(false);
                }, 1000);
              }}
            >
              {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                  <h2>Book An Appointment</h2>
                  <h4>Patient Information </h4>
                  <Row>
                    <Col md>
                      <Form.Label id="field">Email</Form.Label>
                      <Form.Control
                        placeholder="winniek@example.com"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <span style={{ color: 'red' }}>
                          {formik.errors.email}
                        </span>
                      ) : null}
                    </Col>
                  </Row>
                  <Col md className="">
                    <Row>
                      <Col md className="inputField">
                        <Form.Label id="field">Department</Form.Label>
                        <Form.Select
                          name="sdept"
                          value={formik.values.sdept}
                          onChange={formik.handleChange}
                          id="form-control sdept"
                        >
                          <option>Select department</option>
                          <option>Gynecology</option>
                          <option>Paediatrics</option>
                          <option>Non-communicable diseases</option>
                          <option>Hernia and appendicitis Surgery</option>
                          {formik.touched.sdept && formik.errors.sdept ? (
                            <span style={{ color: 'red' }}>
                              {formik.errors.sdept}
                            </span>
                          ) : null}
                        </Form.Select>
                      </Col>
                      <Col md>
                        <Form.Label id="field">Date Of Appointment</Form.Label>
                        <Form.Control
                          name="doa"
                          value={formik.values.doa}
                          onChange={formik.handleChange}
                          id="form-control"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md>
                        <Form.Label id="field">Time Of Appointment</Form.Label>
                        <Form.Control
                          name="toa"
                          value={formik.values.toa}
                          onChange={formik.handleChange}
                          id="form-control"
                        />
                      </Col>

                      <Col md>
                        <Form.Label id="field">Mode of appointment</Form.Label>
                        <Form.Select
                          name="moa"
                          value={formik.values.moa}
                          onChange={formik.handleChange}
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
                      value={formik.values.pmi}
                      onChange={formik.handleChange}
                      type="text-area"
                      id="textarea"
                    />
                    <Row>
                      <Col>
                        <Button type="submit" id="Btn">
                          BOOK APPOINTMENT
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Form>
              )}
            </Formik>
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
};
export default withRouter(FormPage);
