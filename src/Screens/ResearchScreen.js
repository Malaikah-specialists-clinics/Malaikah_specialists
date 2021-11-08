import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class Specialities extends Component {
  render() {
    return (
      <Container style={{maxWidth: '100%'}}>
        <div className="res-bimg">
          <div className="res-bcolor">
            <h1
              style={{
                fontSize: "80px",
                padding: "210px 10px 20px",
                color: "whitesmoke",
                fontWeight: "bolder",
              }}
            >
              Our
              <br />
              Research
            </h1>
          </div>
        </div>

        <div
          class="row offset-md-2"
          style={{ height: "auto", marginTop: "30px" }}
        >
          <div class="col-sm-4">
            <div class="card-box" id="card4">
              <div class="card-thumbnail">
                <img
                  className="card-image"
                  src="https://media.msf.org/AssetLink/407080s4p5src3vqpf1mra5oq7t4t8w5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div id="card5">
              <h2>Recent Publication</h2>

              <p>A research about COVID 19 vaccine in Africa ......</p>
              <Row>
                <Col style={{ marginTop: "5px" }}>
                  <Link
                    class="btn btn-primary"
                    to=""
                    role="button"
                    style={{ background: "#0A1F3E", border: 'none' }}
                  >
                    25/04/2021
                  </Link>
                </Col>
                <Col md style={{ marginTop: "5px" }}>
                  <Link
                    class="btn btn-primary"
                    to=""
                    role="button"
                    style={{
                      background: "white",
                      color: "black",
                      border: "none",
                    }}
                  >
                    25 comments
                  </Link>
                </Col>
                <Col md style={{ marginTop: "5px" }}>
                  <Link
                    class="btn btn-primary"
                    to=""
                    role="button"
                    style={{ background: "#FBBB35", color: "black", border: 'none' }}
                  >
                    Read More
                  </Link>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        <div
          class="row offset-md-2"
          style={{ height: "auto", marginTop: "30px" }}
        >
          <div class="col-sm-4">
            <div class="card-box" id="card4">
              <div class="card-thumbnail">
                <img
                  className="card-image"
                  src="https://media.msf.org/AssetLink/407080s4p5src3vqpf1mra5oq7t4t8w5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div id="card5">
              <h2>A new discovery</h2>

              <p>Recent publication on psycholigical disorder ......</p>
              <Row>
                <Col md style={{ marginTop: "5px" }}>
                  <Link
                    class="btn btn-primary"
                    to=""
                    role="button"
                    style={{ background: "#0A1F3E", border: 'none' }}
                  >
                    25/04/2021
                  </Link>
                </Col>
                <Col md style={{ marginTop: "5px" }}>
                  <Link
                    class="btn btn-primary"
                    to=""
                    role="button"
                    style={{
                      background: "white",
                      color: "black",
                      border: "none",
                    }}
                  >
                    25 comments
                  </Link>
                </Col>
                <Col md style={{ marginTop: "5px" }}>
                  <Link
                    class="btn btn-primary"
                    to=""
                    role="button"
                    style={{ background: "#FBBB35", color: "black", border: 'none' }}
                  >
                    Read More
                  </Link>
                </Col>
              </Row>
            </div>
          </div>
        </div>
    </Container>
    );
  }
}

export default Specialities;
