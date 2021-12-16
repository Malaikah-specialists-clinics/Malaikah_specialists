import React, {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { base_url } from '../Constants/index.js';
import { Formik } from 'formik';

 


const EventModelScreen = ({ data, closeDialog }) => {

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
          onSubmit={(values, actions) => {
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
            <form onSubmit={formik.handleSubmit.handleVal}>
              <label>Names</label>
              <Form.Control
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                required
              />
            
              <label>Email</label>
              <Form.Control
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                required
              />

              <Button id="Btn" style={{ width: '100%' }} type="submit">
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </Modal.Body>
    </>
  );
};

export default EventModelScreen;
