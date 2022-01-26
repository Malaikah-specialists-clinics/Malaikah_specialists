import React, {useState}from "react";
import { Col, Row, Container, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Research = () => {
  
  
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <>
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
        <Container>
        <div
          class="row"
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
                  
                    25/04/2021
                 
                </Col>
                <Col md style={{ marginTop: "5px" }}>
                  <Button style={{background:'#0a1f3e', border: 'none'}} onClick={handleShow}>
      Comments
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <input />
        </Modal.Footer>
      </Modal>
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
        </>
    );
 
}

export default Research;
