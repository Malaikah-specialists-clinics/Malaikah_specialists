import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, Alert, Card, Container, Form } from "react-bootstrap";
import { base_url } from '../Constants/index.js';
import { Button, Modal} from 'react-bootstrap';




const Moeventscreen = (props) => {
  const [event, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(`${base_url}/events`)
      .then((res) => {
        setEvents(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log({ message: err });
      });
  }, []);
  //  console.log(events)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (event.length > 0) {
    return (
      <>
        <div class="hcare">
          {event.map((events) => (
            <div>
              <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                
                show={show}
                onHide={handleClose}
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    <h2 style={{ textAlign: 'center' }}>{events.title}</h2>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4 style={{ fontSize: '16px' }}>
                    Date:
                    <span>{events.date}</span>
                  </h4>
                  <h4 style={{ fontSize: '16px' }}>
                    Time:
                    <span>{events.time}</span>
                  </h4>
                  <p>
                    Please fill in your information to help us prepare for the
                    event
                  </p>
                  <Form>
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" />

                    <label>Email</label>
                    <input type="email" name="email" className="form-control" />

                    <div
                      class="d-grid gap-2 col-6 mx-auto"
                      style={{ marginTop: '25px ' }}
                    >
                      <Button id="Btn" style={{width: "100%", }} type="submit">
                        Submit
                      </Button>
                      <Button className="btn btn-light" onClick={handleClose}>
                        Cancel
                      </Button>
                    </div>
                  </Form>
                </Modal.Body>
              </Modal>

             <Container style={{ maxWidth: '100%', margin: '0' }}>
                <Card
                  id="contentcard"
                  style={{ marginLeft: 'auto', marginRight: 'auto' }}
                >
                  <Row style={{ height: 'auto' }} key={events.id}>
                    <Col
                      sm={2}
                      style={{
                        paddingTop: '4%',
                        backgroundColor: '#020e20',
                        textAlign: 'center',
                      }}
                    >
                      <h3 className="day">{events.date}</h3>
                    </Col>
                    <Col sm={10} style={{ padding: '5px 30px' }}>
                      <h2>{events.title}</h2>
                      <h6>{events.time}</h6>
                      <p>{events.description}</p>

                      <div>
                        <h5 style={{ textAlign: 'left' }}>
                          Location:{' '}
                          <span style={{ fontWeight: 'lighter' }}>
                            {' '}
                            {events.location}
                          </span>{' '}
                        </h5>
                      </div>
                      <div>
                        <h5 style={{ textAlign: 'left' }}>
                          Contact:{' '}
                          <span style={{ fontWeight: 'lighter' }}>
                            {' '}
                            malaikah@gmail.com
                          </span>
                        </h5>
                      </div>
                      <button onClick={handleShow} className="Btn">
                        REGISTER
                      </button>
                    </Col>
                  </Row>
                </Card>
              </Container>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <div className="event-alert" variant="success">
        <Alert variant="success">NO EVENTS YET</Alert>
      </div>
    );
  }
};

export default Moeventscreen;
