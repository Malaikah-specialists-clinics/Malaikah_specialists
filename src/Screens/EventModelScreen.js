import React from 'react';
import { Modal,  Button } from 'react-bootstrap';
// import { useState} from 'react';
import axios from 'axios';
import { base_url } from '../Constants/index.js';
import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';

const EventModelScreen=()=> {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     email: '',
  //     eventsid: '',
  //   };
  // }

  function changeHandler (e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  function onSubmit (e) {
    e.preventDefault();

    const registereventObject = {
      name: this.state.name,
      email: this.state.email,
      eventsid: this.state.eventsid,
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
  }

  
    //   const [show, setShow] = useState(false);
    //   const handleClose = () => setShow(false);
    return (
      <>
        {/* {event.map((events) => ( */}
        <Modal.Header>
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
          <p>
            Please fill in your information to help us prepare for the event
          </p>
          <Formik
            initialValues={{
              name: '',
              email: '',
            }}
            // validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched}) => (
              <Form>
                <Field name="name" />
                {errors.name && touched.name ? <div>{errors.name}</div> : null}
                <Field name="email" type="email" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
                <Button
                  id="Btn"
                  style={{ width: '100%' }}
                  type="submit"
                  
                >
                  Submit
                </Button>
                <Button
                  className="btn btn-light"
                  //   onClick={handleClose}
                >
                  Cancel
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
        {/* // ))} */}
      </>
    ); 
}

export default EventModelScreen;
