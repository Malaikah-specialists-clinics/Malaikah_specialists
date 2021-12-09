import React from "react";
import SideNavbar from "../Components/SideNavbar";
import { Col, Container, Row } from "react-bootstrap";

const Appointments = () => {
  return (
    <div style={{ background: "#f8f8f8" }} className="formcontent">
      <Container>
        <Row>
          <Col sm={4}>
            <SideNavbar />
          </Col>
          <Col
            style={{
              marginTop: "5%",
              paddingTop: "2%",
              textAlign: "center",
            }}
            sm={8}
          >
            <div class="container">
              <div class="tab-slider--nav">
                <ul class="tab-slider--tabs">
                  <li class="tab-slider--trigger active" rel="tab1">
                    Tab 1
                  </li>
                  <li class="tab-slider--trigger" rel="tab2">
                    Tab 2
                  </li>
                </ul>
              </div>
              <div class="tab-slider--container">
                <div id="tab1" class="tab-slider--body">
                  <div class="card" id="card">
                    <div class="card-body row">
                      <div className="col-sm-3 inline">
                        <h3>10-Jan</h3>
                        <h3>Thursday</h3>
                        <h5 style={{ marginTop: "15px" }}>10pm</h5>
                      </div>
                      {/* <div class="vl col-sm-1"></div> */}
                      <div class="vertical col-sm-1"></div>

                      <div className="col-sm-6 inline">
                        <h5 style={{ marginBottom: "10px" }}>Treatment</h5>
                        <h3>Stomach Disorder</h3>
                        <h5 style={{ marginTop: "15px" }}>
                          Location:<span>Virtual</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab2" class="tab-slider--body">
                <div class="card" id="card">
                    <div class="card-body row">
                      <div className="col-sm-3 inline">
                        <h3>10-Jan</h3>
                        <h3>Thursday</h3>
                        <h5 style={{ marginTop: "15px" }}>10pm</h5>
                      </div>
                      {/* <div class="vl col-sm-1"></div> */}
                      <div class="vertical col-sm-1"></div>

                      <div className="col-sm-6 inline">
                        <h5 style={{ marginBottom: "10px" }}>Treatment</h5>
                        <h3>Stomach Disorder</h3>
                        <h5 style={{ marginTop: "15px" }}>
                          Location:<span>Virtual</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Appointments;
