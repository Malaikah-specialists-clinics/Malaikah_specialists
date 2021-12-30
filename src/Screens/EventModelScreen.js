import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { base_url } from '../Constants/index.js';
import { Formik} from 'formik';
// import * as Yup from 'yup';

const validateRegister = (regPerson) => {
  const errors = {};
  if (!regPerson.name) {
    errors.name = 'Please Enter Full Names';
  } else if (regPerson.name.length > 20) {
    errors.name = 'Name cannot exceed 20 characters';
  }

  if (!regPerson.email) {
    errors.email = 'Please Enter Email';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(regPerson.email)
  ) {
    errors.email = 'Invalid email address';
  }

  return errors;
};



const EventModelScreen = ({ data, closeDialog }) => {
  // const registereventSchema = Yup.object().shape({
  //   name: Yup.string()
  //     .min(2, 'Too Short!')
  //     .max(50, 'Too Long!')
  //     .required('Required'),
  //   email: Yup.string().email('Invalid email').required('Required'),
  // });
 

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter" //   key={events.id}
        >
          <h2 style={{ textAlign: 'center' }}>{data.title}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{ fontSize: '16px' }}>
          <span>Date: </span>
          {data.date}
        </h4>
        <h4 style={{ fontSize: '16px' }}>
          <span>Time: </span>
          {data.time}
        </h4>
        <p>Please fill in your information to help us prepare for the event</p>
        <Formik
          initialValues={{
            name: '',
            email: '',
          }}
          // validationSchema={registereventSchema}
          validate={validateRegister}
          onSubmit={(values, actions,) => {
            setTimeout(() => {
              const registereventObject = {
                name: values.name,
                email: values.email,
                eventId: data.id,
              };

              axios.post(`${base_url}/event-reg`, registereventObject, {
                headers: { 'Access-Control-Allow-Origin': '*' },
              });
              if (closeDialog) {
                closeDialog();
              }
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
      
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <label>Names</label>
              <Form.Control
                name="name"
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <span style={{ color: 'red' }}>{formik.errors.name}</span>
              ) : null}
              <br/>

              <label>Email</label>
              <Form.Control
                name="email"
                id="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <span style={{ color: 'red' }}>{formik.errors.email}</span>
              ) : null}

              <Button id="Btn" style={{ width: '100%' }} type="submit">
                SUBMIT
              </Button>
            </form>
          )}
        </Formik>
      </Modal.Body>
    </>
  );
};

export default EventModelScreen;
