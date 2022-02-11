import React, {useEffect, useState} from "react";
import { Row, Col, Container} from "react-bootstrap";
import axios from "axios";
import { base_url } from "../Constants";




function Readmore() {
    const [research, setResearch] = useState([]);
    useEffect(() => {
        axios
            .get(`${base_url}/research`)
            .then((res) => {
                setResearch(res.data);
                console.log("This is readmore", res);
            })
            .catch((err) => {
                console.log({ message: err });
            });
    }, []);

    return (
      <>
        {research.map((research_entity) => (
          <Container>
            <h2 style={{ textAlign: 'center' }}>{research_entity.title}</h2>

            <Row style={{ margin: 'auto' }}>
              <Col>
                <img
                  src={research_entity.image}
                  alt=""
                  style={{ width: '50%', textAlign: 'center' }}
                />
              </Col>
            </Row>
            <Row>
              <Col md>
                <article style={{ marginTop: '1%' }}>
                  {research_entity.article}
                </article>
              </Col>
            </Row>
            <hr style={{ borderTop: '2px solid gray' }} />
          </Container>
        ))}
      </>
    );
}

export default Readmore;
