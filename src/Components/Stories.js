import React from "react";
import { Col, Container,Row } from "react-bootstrap";
 import { useState, useEffect } from "react";
  import axios from "axios";

const Stories = () => {
   const [story, setStory  ] = useState([]);
   useEffect(() => {
     axios
       .get('http://localhost:3000/stories')
       .then((res) => {
         setStory(res.data);
         console.log(res.data);
       })
       .catch((err) => {
         console.log({ message: err });
       });
   }, []);
  return (
    <>
    {story.map((story_entity) => (
      <div className="storycont">
        <h2
          style={{
            paddingTop: "20px",
            textAlign: "center",
          }}
        >
          OUR SUCCESS STORIES
        </h2>
        <Container style={{paddingBottom: '30px'}}>
        <Row>
          <Col>
          <h4 style={{textAlign: 'center'}}>{story_entity.department}</h4>
          <iframe
          width="260"
          height="200"
          src={story_entity.url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
          </Col>
         </Row>
        
        </Container>
      </div>
      ))}
    </>
  );
};

export default Stories;
