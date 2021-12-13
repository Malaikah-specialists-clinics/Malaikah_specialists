import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { base_url } from '../Constants/index.js';
import {
  // Formik,
  //  Field,
  useFormik,
} from 'formik';

// import * as Yup from 'yup';

const Trial = () => {
  console.log('values');
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     email: '',
  //     eventsid: '',
  //   };
  // }

  //   function changeHandler(e) {
  //     this.setState({ [e.target.name]: e.target.value });
  //   }

  const nets = useFormik({
    initialValues: {
      name: '',
      email: '',
    },

    onSubmit: (data) => {
      console.log(data);
      // data.preventDefault();

      const registereventObject = {
        name: data.name,
        email: data.email,
        eventsid: 2,
      };
      axios
        .post(`${base_url}/event-reg`, registereventObject, {
          headers: { 'Access-Control-Allow-Origin': '*' },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      this.props.history.push('/moevents');
    },
  });

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* {event.map((events) => ( */}
      {/* <Modal
        // {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      > */}
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter" //   key={events.id}
        >
          <h2 style={{ textAlign: 'center' }}>
            {/* {events.title} */}
            title
          </h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{ fontSize: '16px' }}>
          {/* {events.date} */}
          date
          <span>Date</span>
        </h4>
        <h4 style={{ fontSize: '16px' }}>
          {/* {events.time} */}
          time
          <span>Time</span>
        </h4>
        <p>Please fill in your information to help us prepare for the event</p>

        <form onSubmit={nets.onSubmit}>
          <Form.Control name="name" onChange={nets.handleChange} />

          <Form.Control
            name="email"
            type="email"
            onChange={nets.handleChange}
          />

          <Button id="Btn" style={{ width: '100%' }} type="submit">
            Submit
          </Button>
          <Button className="btn btn-light" onClick={handleClose}>
            Cancel
          </Button>
        </form>
      </Modal.Body>
      {/* // ))} */}
      {/* </Modal> */}
    </>
  );
};

export default Trial;
