import React, { Component} from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
// import { useState} from 'react';
import axios from 'axios';
import { base_url } from '../Constants/index.js';


class EventModelScreen extends Component {
  
constructor(props) {
  super(props);
  this.state = {
    name: '',
    email: '',
    eventsid: ''
  };
}
  
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  

  onSubmit(e) {
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

  render() {
    //   const [show, setShow] = useState(false);
    //   const handleClose = () => setShow(false); 
    return (
      <>
        {/* {event.map((events) => ( */}
        <div>
          <Modal.Header closeButton>
            <Modal.Title
              id="contained-modal-title-vcenter"
              //   key={events.id}
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
            <Form onSubmit={(e) => this.onSubmit(e)}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.changeHandler}
                className="form-control"
              />
              <label>Email</label>
              <input
                name="email"
                value={this.state.email}
                onChange={this.changeHandler}
                className="form-control"
              />
              <label>eventsid</label>
              <input
                name="eventsid"
                value={this.state.eventsid}
                onChange={this.changeHandler}
                className="form-control"
              />
              <div
                class="d-grid gap-2 col-6 mx-auto"
                style={{ marginTop: '25px ' }}
              >
                <Button id="Btn" style={{ width: '100%' }} type="submit">
                  Submit
                </Button>
                <Button
                  className="btn btn-light"
                  //   onClick={handleClose}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </div>
        {/* ))} */}
      </>
    );
  }
}

export default EventModelScreen;
