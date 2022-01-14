import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";



const Specialities=()=>{
  

  const toggle = () => {
    var x = document.getElementById("toggle", "toggle1");

    if (x.style.display !== "none") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  };
    return (
      <>
     
        <div className="b-img">
          <div className="b-color">
            <h1
              style={{
                fontSize: "65px",
                padding: "210px 10px 20px",
                color: "whitesmoke",
                fontWeight: "bolder",
              }}
            >
              Our
              <br />
              Specialties
            </h1>
          </div>
        </div>
        <Container>
        <div
          class="row"
          style={{ height: "auto", marginTop: "30px" }}
        >
          <div class="col-sm-4" >
            <div class="card-box" id="card4">
              <div class="card-thumbnail">
                <img
                  className="card-image"
                  src="https://v4e6q8v8.stackpathcdn.com/wp-content/uploads/2016/11/peads-min-1024x683.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div id="card5">
              <h2>Child Care (Paedriatics) </h2>

              <p>
                Paediatrics (also spelled pediatrics or pædiatrics) is the
                branch of medicine that involves the medical care of infants,
                children, and
              </p>
              <Row>
                <Col md>
                  <div class="details">
                    <button id="details" onClick={toggle}>
                      View Details
                    </button>
                  </div>
                </Col>
                <Row id="toggle">
                  <Col>
                    <ul>
                      <li>Sore Throat</li>
                      <li>Skin Infection</li>
                      <li>Cough</li>
                      <li>Ear Pain</li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      <li>Bronchitis</li>
                      <li>Pain</li>
                      <li>Urinary Tarct Infection</li>
                      <li>Other Conditions associated with children</li>
                    </ul>
                  </Col>
                </Row>
                <Col md style={{ marginTop: "5px" }}>
                  <Link to="/form" role="button">
                    <button className="Btn">
                    Book An Appointment
                    </button>
                  </Link>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        
        </Container>
      </>
    );
  }


export default Specialities;
