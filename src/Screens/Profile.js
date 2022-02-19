import React from "react";
// import SideNavbar from "../Components/Sidenav/SideNavbar";
import { Col, Container, Row, Alert } from "react-bootstrap";
import AuthService from "../Services/auth.service";
// import PictureUploader from "../Components/Profile/profilepic";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return(
  <>
    {currentUser? (
      <div style={{ background: "#f8f8f8" }} className="formcontent">
      <Container>
        <Row>
          {/* <Col sm={4}>
            <SideNavbar />
          </Col> */}
          <Col
            style={{
              marginTop: "5%",
              paddingTop: "2%",
              textAlign: "center",
              
            }}
         
          >
            <div style={{padding: '3%', marginBottom: '3%', background: "#fcfcfc" , display: 'flex', justifyContent: 'space-between'}}>
              <div style={{ textAlign: "left" }}>
               <h4>PATIENT : <span>{currentUser.name}</span></h4>
              </div>
              <div style={{display: 'flex'}}>
              <a
            href="https://wa.me/256754238777"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/Whatsappbtn.png " alt="" 
            style={{width: '40px', height: '40px'}}
            />
          </a>
          
              </div>
            </div>
            <h3 style={{color: '#0a1f3e'}}>Personal Information</h3>
         
            <div className="info ">
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
    ):(
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
 
    
    </>
      )
  }
  export default Profile;