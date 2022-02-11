import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { base_url } from '../Constants';

const Research = () => {
  const [research, setResearch] = useState([]);

   useEffect(() => {
     axios
       .get(`${base_url}/research`)
       .then((res) => {
         setResearch(res.data);
         console.log('data', res);
       })
       .catch((err) => {
         console.log({ message: err });
       });
   }, []);
  
  
//  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
    return (
      <>
        <div className="res-bimg">
          <div className="res-bcolor">
            <h1
              style={{
                fontSize: '80px',
                padding: '210px 10px 20px',
                color: 'whitesmoke',
                fontWeight: 'bolder',
              }}
            >
              Our
              <br />
              Research
            </h1>
          </div>
        </div>
        <Container>
          {research.map((research_entity) => (
            <div class="row" style={{ height: 'auto', marginTop: '30px' }}>
              <div class="col-sm-4">
                <div class="card-box" id="card4">
                  <div class="card-thumbnail">
                    <img
                      className="card-image"
                      src={research_entity.image}
                      alt=" "
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-8">
                <div id="card5">
                  <h2>{research_entity.title}</h2>
                  <Row>
                  <Col style={{ marginTop: '5px' }}>{research_entity.date}</Col>
                  </Row>

                  <p>{research_entity.content}</p>
                  <Row>
                    {/* <Col md style={{ marginTop: "5px" }}>
                  <Button style={{background:'#0a1f3e', border: 'none'}} >
                    Comments
                  </Button>
                </Col> */}
                    <Col md style={{ marginTop: '5px' }}>
                      <Link
                        class="btn btn-primary"
                        to="/readmore"
                        role="button"
                        style={{
                          background: '#FBBB35',
                          color: 'black',
                          border: 'none',
                        }}
                      >
                        Read More
                      </Link>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          ))}
        </Container>
      </>
    );
 
}

export default Research;
