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
            <Container>
               
                <h2 style={{ textAlign: 'center' }}>{research.title}</h2>
                <div>
                <Row  style={{margin: "auto"}}>
                    <Col>
                        <img src={research.image} alt="" style={{width: "50%", textAlign: "center"}}/>
                    </Col>
                </Row>
                </div>
                <Row>
                    <Col md>
                        <article style={{ marginTop: '1%' }}>
                            {research.content}
                        </article>

                    </Col>
                </Row>
                <hr style={{ borderTop: '2px solid gray' }} />
            </Container>
        </>
    );
}

export default Readmore;