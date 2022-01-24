import React from "react";
import SideNavbar from "../Components/Sidenav/SideNavbar";
import { Col, Container, Row, Alert } from "react-bootstrap";
import axios from "axios";
import { base_url } from "../Constants/index.js";
import { useState, useEffect } from "react";

const PatientProfile = () => {
  const [user, setUser] = useState([]);
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };

  useEffect(() => {
    axios
      .get(`${base_url}/auth/users`, config)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log({ message: err });
      });
  });

  if (user) {
    return (
      <div style={{ background: "#f8f8f8" }}>
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
              <div
                style={{
                  padding: "3%",
                  marginBottom: "3%",
                  background: "#fcfcfc",
                }}
              >
                <img src="/images/79285222.jpeg" id="photo" alt="" /> <br />
                <input type="file" id="file" />
                <label
                  style={{
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "20px",
                  }}
                  for="file"
                >
                  Change Picture
                </label>
                <div style={{ textAlign: "left" }}>
                  <h4>{user.name}</h4>
                </div>
              </div>

              <div className="info ">
                <h3>Personal Information</h3>
                <Row>
                  <Col md>
                    <div>
                      <h5>Date of birth</h5>
                      <h4>{user.dob}</h4>
                    </div>

                    <div>
                      <h5>Gender</h5>
                      <h4>{user.gender}</h4>
                    </div>
                    <div>
                      <h5>Address</h5>
                      <h4>{user.location}</h4>
                    </div>
                  </Col>
                  <Col md>
                    <div>
                      <h5>Phone</h5>
                      <h4>{user.phoneNumber}</h4>
                    </div>
                    <div>
                      <h5>Marital Status</h5>
                      <h4>Single</h4>
                    </div>
                    <div>
                      <h5>Date Joined</h5>
                      <h4>30-05-2021</h4>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } 
  else {
    return (
      <div>
        <Alert variant="danger"> USER DOES NOT EXIST </Alert>
      </div>
    );
  }
};

export default PatientProfile;
