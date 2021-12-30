import React from "react";
import { Card, CardGroup, Row,Col, Container } from "react-bootstrap";

const Courses = () => {
  return (
    <>
    <Container style={{maxWidth: '100%'}}>
    <h2>Our Courses</h2>
      <CardGroup style={{justifyContent: 'space-evenly'}}>
        <Card style={{margin: '1%'}}>
          <Card.Img variant="top" src="/images/nursingbook.jpg" />
          <Card.Body>
            <Card.Title>Nursing</Card.Title>
            <Card.Text>
              Nursing is a profession within the health care sector focused on
              the care of individuals, families, and communities so they may
              attain, maintain, or recover optimal health and quality of life.
              ... Nurse practitioners are nurses with a graduate degree in
              advanced practice nursing.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col><strong>USD300</strong></Col>
              <Col><strong><a href="#applicationforms">View More</a></strong></Col>
            </Row>
          </Card.Footer>
        </Card>
        <Card style={{margin: '1%'}}>
          <Card.Img variant="top" src="/images/nursingbook.jpg" />
          <Card.Body>
            <Card.Title>Surgery</Card.Title>
            <Card.Text>
              Surgery is a medical or dental specialty that uses operative
              manual and instrumental techniques on a person to investigate or
              treat a pathological condition such as a disease or injury, to
              help improve bodily function, appearance, or to repair unwanted
              ruptured areas.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col><strong>USD300</strong></Col>
              <Col><strong><a href="#applicationforms">View More</a></strong></Col>
            </Row>
          </Card.Footer>
        </Card>
        <Card style={{margin: '1%'}}>
          <Card.Img variant="top" src="/images/nursingbook.jpg" />
          <Card.Body>
            <Card.Title>Mid-wifery</Card.Title>
            <Card.Text>
              Midwifery is the health science and health profession that deals
              with pregnancy, childbirth, and the postpartum period in addition
              to the sexual and ...
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col><strong>USD300</strong></Col>
              <Col><strong><a href="#applicationforms">View More</a></strong></Col>
            </Row>
          </Card.Footer>
        </Card>
      </CardGroup>
      <div style={{textAlign: 'right'}}>
        <a href="#applicationforms">Explore More Courses</a>
      </div>
      </Container>
    </>
  );
};

export default Courses;
