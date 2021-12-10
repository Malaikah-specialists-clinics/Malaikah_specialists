import React from "react";
import {Card, Col, Row} from "react-bootstrap"


function Pastappts() {
  return (
<>
<Card id="card">
  <Card.Body>
    <Row>
        <Col sm={3} className="inline">
        <h3>10-Nov</h3>
        <h3>Friday</h3>
        <h5 style={{ marginTop: "15px" }}>10pm</h5>
        </Col>
        <Col sm={1} style={{borderLeft: '1px solid grey'}}></Col>
        <Col sm={8} className="inline">
        <h5 style={{ marginBottom: "10px" }}>Treatment</h5>
        <h3>Stomach Disorder</h3>
        <h5 style={{ marginTop: "15px" }}>
          Location:<span>Virtual</span>
        </h5>
        </Col>
    </Row>
  </Card.Body>
</Card>
</>

)
}

export default Pastappts;
