import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, Alert, Card, Container} from "react-bootstrap";
import { base_url } from '../Constants/index.js';
import {  Modal} from 'react-bootstrap';
import  EventModelScreen from './EventModelScreen'


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
          <div>
            <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={show}
              onHide={handleClose}
            >
            <EventModelScreen/>
            </Modal>

            {event.map((events) => (
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
                            {events.location}
                          </span>{' '}
                        </h5>
                      </div>
                      <div>
                        <h5 style={{ textAlign: 'left' }}>
                          Contact:{' '}
                          <span style={{ fontWeight: 'lighter' }}>
                            malaikah@gmail.com
                          </span>
                        </h5>
                      </div>
                      <button className="Btn" onClick={handleShow}>REGISTER</button>
                    </Col>
                  </Row>
                </Card>
              </Container>
            ))}
          </div>
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
