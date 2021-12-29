import React from 'react'
import { Card, CardGroup, Container} from "react-bootstrap";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { base_url } from '../Constants/index.js';

const Tips = () => {
   const [tip, setTips] = useState([]);
   useEffect(() => {
     axios
       .get(`${base_url}/tips`)
       .then((res) => {
         setTips(res.data);
         console.log(res.data);
       })
       .catch((err) => {
         console.log({ message: err });
       });
   }, []);

  return (
    <Container style={{maxWidth: '100%'}}>
      <div id="tipcrd">
        {tip.map((tip_entity) => (
          <CardGroup
            key={tip_entity.id}
            style={{ width: '94%', margin: 'auto' }}
          >
            <Card md id="crd">
              <Card.Body>
                <Card.Title>{tip_entity.title}</Card.Title>
                <Card.Text>{tip_entity.description}</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        ))}
      </div>
    </Container>
  );
}

export default Tips;
