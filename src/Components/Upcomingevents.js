import React from 'react'
import { Card,  Col, Row } from 'react-bootstrap';

const Upcomingevents = () => {
    return (
      <div>
        <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '90%' }}>
          <div className="upcoming">
            <h2>Upcoming Events</h2>
            <a href="#moeevents" style={{ textDecoration: 'none' }}>
              <h4>Find more Events</h4>
            </a>
          </div>
          <Card
            style={{
              height: 'auto',
              position: 'relative',
              maxWidth: '100%',
              margin: 'auto',
            }}
          >
            <Row style={{ height: 'auto' }}>
              <Col
                sm={2}
                style={{
                  paddingTop: '4%',
                  backgroundColor: '#020e20',
                  textAlign: 'center',
                }}
              >
                <h3> 30</h3>
                <h3>NOV</h3>
              </Col>
              <Col sm={8} style={{ border: 'none' }}>
                <h2>Food and Nutrition</h2>

                <h6>2.00pm-4.00pm</h6>
                <p>
                  The workshop aims to discuss: Preventing noncommunicable
                  dieseases and how to boost immunity.
                </p>
                <div>
                  <h5 style={{ textAlign: 'left' }}>
                    Location:
                    <span style={{ fontWeight: 'lighter' }}>Virtual</span>{' '}
                  </h5>
                </div>
                <div>
                  <h5 style={{ textAlign: 'left' }}>
                    Contact:
                    <span style={{ fontWeight: 'lighter' }}>
                      malaikah@gmail.com
                    </span>
                  </h5>
                </div>
              </Col>
              <Col sm={2}>
                <img
                  className="pic"
                  src="https://images.unsplash.com/photo-1535229398509-70179087ac75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  style={{ height: '200px', width: '100%' }}
                />
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    );
}

export default Upcomingevents
