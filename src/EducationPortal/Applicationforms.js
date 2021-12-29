import React from 'react'
import { Form, Row, Col, Container } from 'react-bootstrap';

const Applicationforms = () => {
    return (
      <>
        <Container>
          <div
            className="hcare"
            style={{
              width: '80%',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '8%',
            }}
          >
            <h1>Admission Application</h1>
            <Row>
              <Col>
                <Form>
                  <Col md className="">
                    <Row>
                      <Col md className="inputField">
                        <Form.Control placeholder="First Name" />
                      </Col>
                      <Col md>
                        <Form.Control placeholder="Last Name" />
                      </Col>
                    </Row>
                    <Row>
                      <Form.Control placeholder="Password" />
                      <Row>
                        <Form.Control placeholder="Email Address" />
                      </Row>
                      <Row>
                        <Form.Select name="moa" id="form-control">
                          <option>Select Academic Major/Field.</option>
                          <option>Nursing </option>
                          <option>General Medicine</option>
                          <option>Midwivery</option>
                          <option>Public Health</option>
                        </Form.Select>
                      </Row>
                    </Row>
                    <Row>
                      <Col md>
                        <div className="pic">
                          <img
                            src="/images/caremeds.jpg"
                            alt="doctor"
                            style={{
                              width: '600px',
                              height: '600px',
                              marginTop: '3%',
                            }}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Form>
              </Col>
            </Row>
          </div>
        </Container>
      </>
    );
}

export default Applicationforms;
