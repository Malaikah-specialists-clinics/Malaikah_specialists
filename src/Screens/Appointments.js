import React from "react";
import SideNavbar from "../Components/SideNavbar";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import Pastappts from "../Components/Pastappts"
import Upcomingappts from "../Components/Upcomingappts"

const Appointments = () => {
  return (
    <>
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
             <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
                variant="pills"
                
              >
                <Tab eventKey="home" title="Upcoming" id="tab-pills">
                <Upcomingappts />
                </Tab>
                <Tab eventKey="profile" title="Past" id="tab-pills">
                 <Pastappts />
                </Tab>
              </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default Appointments;
