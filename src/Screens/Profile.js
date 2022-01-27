import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SideNavbar from "../Components/Sidenav/SideNavbar";
import { Col, Container, Row } from "react-bootstrap";
import AuthService from "../Services/auth.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { name: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

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
}