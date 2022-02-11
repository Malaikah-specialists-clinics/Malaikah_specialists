import React from "react";
import SideNavbar from "../Components/Sidenav/SideNavbar";
import { Col, Container, Row, Alert } from "react-bootstrap";
import AuthService from "../Services/auth.service";
import PictureUploader from "../Components/Profile/profilepic";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  if(!currentUser){
    return(
      <Alert
      className="alert"
        variant=""
        style={{margin: '10% 0'}}>
        <p>
        USER UNAVAILABLE
        </p>
      
      </Alert>
    )
  }
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
                <PictureUploader />
                {/* <img src="/images/79285222.jpeg" id="photo" alt="" /> <br />
                <input type="file" id="file" />
                <label style={{fontWeight:'bold', cursor: 'pointer', fontSize:'20px'}} for="file">Change Picture</label> */}
                <div style={{ textAlign: "left" }}>
                  <h4>{currentUser.name}</h4>
                </div>
              </div>
             
              <div className="info ">
              <h3>Personal Information</h3>
                <Row>
                  <Col md >
                    <div>
                    <h5>Date of birth</h5>
                    <h4>{currentUser.dob}</h4>
                    </div>
                    
                    <div>
                      <h5>Gender</h5>
                      <h4>{currentUser.gender}</h4>
                    </div>
                    <div>
                      <h5>Address</h5>
                      <h4>{currentUser.location}</h4>
                    </div>
                  </Col>
                  <Col md >
                    <div>
                      <h5>Phone</h5>
                      <h4>{currentUser.phoneNumber}</h4>
                    </div>
                    <div>
                      <h5>Marital Status</h5>
                      <h4>{currentUser.marital}</h4>
                    </div>
                    <div>
                      <h5>Email Address</h5>
                      <h4>{currentUser.email}</h4>
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
  export default Profile;