import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, Alert, Card, Container } from "react-bootstrap";
import { URL } from '../Constants/index.js';

const Moeventscreen = () => {
  const [event, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/events`)
      .then((res) => {
        setEvents(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log({ message: err });
      });
  }, []);
 

  if (event.length > 0) {
    return (
      <>
        <div class="hcare">
          <Container style={{maxWidth: '100%'}}>
          {event.map((events) => (
            <Card id='contentcard' style={{marginLeft:'auto', marginRight: 'auto'}}>
              <Row
                style={{height: 'auto' }}
                key={events.id}
              >
                <Col sm={2} style={{paddingTop:'4%', backgroundColor:'#020e20', textAlign: 'center'}}>
                    <h3 className="day">{events.date}</h3>
                </Col>
                <Col sm={10} style={{padding: '5px 30px'}}>
                  <h2>{events.title}</h2>
                  <h6>{events.time}</h6>
                  <p>{events.description}</p>

                  <div>
                    <h5 style={{ textAlign: "left" }}>
                      Location:{" "}
                      <span style={{ fontWeight: "lighter" }}> {events.location}</span>{" "}
                    </h5>
                  </div>
                  <div>
                    <h5 style={{ textAlign: "left" }}>
                      Contact:{" "}
                      <span style={{ fontWeight: "lighter" }}>
                        {" "}
                        malaikah@gmail.com
                      </span>
                    </h5>
                  </div>
                  <button className="Btn">REGISTER</button>
                </Col>
              </Row>
            </Card>
          ))}
          </Container>
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
