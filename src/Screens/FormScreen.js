import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';
import { base_url } from '../Constants/index.js';
import { Formik } from 'formik';

const validateBookappt = (bookapptDetails) => {
  const errors = {};

  if (!bookapptDetails.email) {
    errors.email = 'Please Enter Email';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(bookapptDetails.email)
  ) {
    errors.email = 'Invalid email address';
  }

  if (!bookapptDetails.sdept) {
    errors.sdept = 'Field Required';
  }

  if (!bookapptDetails.doa) {
     errors.doa = 'Field Required';
  }

  if (!bookapptDetails.toa) {
    errors.toa = 'Field Required';
  }

  if (!bookapptDetails.moa) {
    errors.moa = 'Field Required';
  }

  if (!bookapptDetails.pmi) {
    errors.pmi = 'Field Required';
  }

  return errors;
};


const FormPage = ({ closeDialog }) => {
  // alertText = () => {
  //   alert('You have an appointment!!, Please check your email');
  // };

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
                sdept: '',
                doa: '',
                toa: '',
                moa: '',
                pmi: '',
              }}
              validate={validateBookappt}
              onSubmit={(values, actions) => {
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
                <Form onSubmit={formik.handleSubmit} >
                  <h2>Book An Appointment</h2>
                  <h4>Patient Information </h4>
                  <Row>
                    <Col md>
                      <Form.Label id="field">Email</Form.Label>
                      <Form.Control
                        placeholder="winniek@example.com"
                        id="form-control email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
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
                          id="form-control dept"
                          name="sdept"
                          value={formik.values.sdept}
                          onChange={formik.handleChange}
                        >
                          <option>Select department</option>
                          <option>Gynecology</option>
                          <option>Paediatrics</option>
                          <option>Non-communicable diseases</option>
                          <option>Hernia and appendicitis Surgery</option>
                        </Form.Select>
                        {formik.touched.sdept && formik.errors.sdept ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.sdept}
                          </span>
                        ) : null}
                      </Col>
                      <Col md>
                        <Form.Label id="field">Date Of Appointment</Form.Label>
                        <Form.Control
                          type="date"
                          name="doa"
                          value={formik.values.doa}
                          onChange={formik.handleChange}
                          id="form-control doa"
                        />
                        {formik.touched.doa && formik.errors.doa ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.doa}
                          </span>
                        ) : null}
                      </Col>
                    </Row>
                    <Row>
                      <Col md>
                        <Form.Label id="field">Time Of Appointment</Form.Label>
                        <Form.Control
                          type="time"
                          name="toa"
                          value={formik.values.toa}
                          onChange={formik.handleChange}
                          id="form-control toa"
                        />
                        {formik.touched.toa && formik.errors.toa ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.toa}
                          </span>
                        ) : null}
                      </Col>

                      <Col md>
                        <Form.Label id="field">Mode of appointment</Form.Label>
                        <Form.Select
                          name="moa"
                          value={formik.values.moa}
                          onChange={formik.handleChange}
                          id="form-control moa"
                        >
                          <option>Select mode of appointment</option>
                          <option>Online</option>
                          <option>In Person</option>
                        </Form.Select>
                        {formik.touched.moa && formik.errors.moa ? (
                          <span style={{ color: 'red' }}>
                            {formik.errors.moa}
                          </span>
                        ) : null}
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
                    {formik.touched.pmi && formik.errors.pmi ? (
                      <span style={{ color: 'red' }}>{formik.errors.pmi}</span>
                    ) : null}
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
              <img
                src="/images/caremeds.jpg"
                alt="doctor"
                style={{ width: '80%', height: '70%', marginTop: '3%' }}
              />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default FormPage;
