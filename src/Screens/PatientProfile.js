import React from "react";
import SideNavbar from "../Components/SideNavbar";
import { Col, Container, Row } from "react-bootstrap";


const PatientProfile = () => {
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
            <div style={{padding: '3%', marginBottom: '3%', background: "#fcfcfc", }}>
              <img src="/images/79285222.jpeg" id="photo" alt="" /> <br />
              <input type="file" id="file" />
              <label style={{fontWeight:'bold', cursor: 'pointer', fontSize:'20px'}} for="file">Change Picture</label>
              <div style={{ textAlign: "left" }}>
                <h4>Lary Marc</h4>
              </div>
            </div>
           
            <div className="info ">
            <h3>Personal Information</h3>
              <Row>
                <Col md >
                  <div>
                  <h5>Date of birth</h5>
                  <h4>22-03-1945</h4>
                  </div>
                  
                  <div>
                    <h5>Gender</h5>
                    <h4>Male</h4>
                  </div>
                  <div>
                    <h5>Address</h5>
                    <h4>Lia Street, Moroto</h4>
                  </div>
                </Col>
                <Col md >
                  <div>
                    <h5>Phone</h5>
                    <h4>+256789212384</h4>
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
};

export default PatientProfile;
