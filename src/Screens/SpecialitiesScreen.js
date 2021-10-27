import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class Specialities extends Component {
  toggle = () => {
    var x = document.getElementById("toggle", "toggle1");

    if (x.style.display !== "none") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  };

  toggle1 = () => {
    var x = document.getElementById("toggle1");

    if (x.style.display !== "none") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  };

  toggle2 = () => {
    var x = document.getElementById("toggle2");

    if (x.style.display !== "none") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  };

  toggle3 = () => {
    var x = document.getElementById("toggle3");

    if (x.style.display !== "none") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  };

  toggle4 = () => {
    var x = document.getElementById("toggle4");

    if (x.style.display !== "none") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  };

  toggle5 = () => {
    var x = document.getElementById("toggle5");

    if (x.style.display !== "none") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  };
  render() {
    return (
      <div>
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
              Specialities
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
                    <button id="details" onClick={this.toggle}>
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

        <div class="row offset-md-2" style={{ height: "auto" }}>
          <div class="col-sm-4">
            <div class="card-box" id="card4">
              <div class="card-thumbnail">
                <img
                  className="card-image"
                  src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/Black-midwife-feeling-and-measuring-pregnant-womans-stomach-for-exam-1296x728-header-1.jpg?w=1155&h=1528"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div id="card5">
              <h2>Women Care (Gynaecology) </h2>

              <p>
                We Deliver Competent based, affordable Gynecological Services.
              </p>
              <Row>
                <Col md>
                  <div class="details">
                    <button id="details" onClick={this.toggle1}>
                      View Details
                    </button>
                  </div>
                </Col>
                <Row id="toggle1">
                  <Col>
                    <ul>
                      <li>Pelvic Floor Prolapse</li>
                      <li>Family Planing</li>

                      <li>Uterine Fibroids</li>
                      <li>Urinary Incontinence</li>
                      <li>Papsmear abnormalities</li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      <li>Cervical Dysplasia</li>
                      <li>Pelvic Pain</li>
                      <li>Menstrual Disorders</li>
                      <li>Polycystic Ovarian Syndrome</li>
                      <li>Infertility an many others</li>
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

        <div class="row offset-md-2" style={{ height: "auto" }}>
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
              <h2>Non-Communicable Diseases </h2>

              <p>
                A non-communicable disease (NCD) is a disease that is not
                transmissible directly from one person to another. We use a
                blend of Natural and western medicine to cure non-communicable
                diseases at a very affordable price
              </p>
              <div class="row">
                <Row>
                  <Col md>
                  <div class="details">
                    <button id="details" onClick={this.toggle2}>
                      View Details
                    </button>
                  </div>
                  </Col>
                  <Row id="toggle2">
                  <Col>
                    <ul>
                      <li>Cancer</li>
                      <li>Diabetes</li>
                      <li>Chronic Kidney Disesase</li>
                      <li>Osteoporosis</li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      <li>Stroke</li>
                      <li>Heart Diseases</li>
                      <li>Autoimmune Diseases</li>
                      <li>Others</li>
                    </ul>
                  </Col>
                </Row> 
                <Col md>
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
        </div>

        <div class="row offset-md-2" style={{ height: "auto" }}>
          <div class="col-sm-4">
            <div class="card-box" id="card4">
              <div class="card-thumbnail">
                <img
                  className="card-image"
                  src="https://www.conwaymedicalcenter.com/wp-content/uploads/2020/05/need-hernia-surgery-1024x585.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div id="card5">
              <h2>Hernia and appendicitis Surgery </h2>

              <p>
                Our experience doctors are available to cure your hernia and
                appendicitis.
              </p>
              <Row>
                <Col md>
                  <div class="details">
                    <button id="details" onClick={this.toggle3}>
                      View Details
                    </button>
                  </div>
                </Col>
                <Row id="toggle3">
                  <Col>
                    <ul>
                      <li>Inguinal hernia</li>
                      <li>Hiatal hernia</li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      <li>Umbilical hernia</li>
                      <li>Ventral hernia</li>
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
        <div class="row offset-md-2" style={{ height: "auto" }}>
          <div class="col-sm-4">
            <div class="card-box" id="card4">
              <div class="card-thumbnail">
                <img
                  className="card-image"
                  src="https://www.hopkinsmedicine.org/-/media/images/health/3_-wellness/kids-and-teens-health/healthy-eating-teens-teaser.ashx"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div id="card5">
              <h2>Health Education </h2>

              <p>
                Health education is a social science that draws from the
                biological, environmental, psychological, physical and medical
                sciences to promote health and prevent disease, disability and
                premature death through education-driven voluntary behavior
                change activities.
              </p>
              <Row>
                <Col md>
                  <div class="details">
                    <button id="details" onClick={this.toggle4}>
                      View Details
                    </button>
                  </div>
                </Col>
                <Row id="toggle4">
                  <Col>
                    
                    <ul>
                      <li>Fitness</li>
                      <li>Self confidence</li>
                      <li>Happiness</li>
                      <li>Knowing Yourself well</li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      <li>Women's health</li>
                      <li>Men's health</li>
                      <li>Autoimmune Diseases</li>
                      <li>Impact of clean environment on health </li>
                    </ul>
                  </Col>
                </Row>
                <Col md style={{ marginTop: "5px" }}>
                  <Link  to="/form" role="button">
                  <button className="Btn">
                    Book An Appointment
                    </button>
                    
                  </Link>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        <div class="row offset-md-2" style={{ height: "auto" }}>
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
              <h2>Executive Ambulance Services</h2>

              <p>
                We are a provider of quality ambulance services in Benue State.
                Our executive Ambulance to travel to any part of Nigeria. Your
                welfare is our concern
              </p>

              <div class="col-sm-6 col-9" style={{ marginTop: "5px" }}>
                <Link  to="/form" role="button">
                <button className="Btn">
                    Book An Appointment
                    </button>
                
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="row offset-md-2" style={{ height: "auto" }}>
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
              <h2>Patent Medicine Store (Chemist) </h2>

              <p>
                High quality imported medicine from USA, India UK and locally
                manufactured medicine that works.
              </p>
              <Row>
                <Col md>
                  <div class="details">
                    <button id="details" onClick={this.toggle5}>
                      View Details
                    </button>
                  </div>
                </Col>
                <Row id="toggle5">
                  <Col>
                    <ul>
                      <li>
                        This store located at Tse-Kucha Market - For others, you
                        can call: 08060960546
                      </li>
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
      </div>
    );
  }
}

export default Specialities;
