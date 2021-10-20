import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Research() {
  return (
    <>
      <Container>
      <h2 style={{textAlign:"center", padding:"5px 0px 30px 0px"}}>Our Research</h2>
        <Row>
          <Col md className="research" > 
            <p>
              Meow all night head nudges . Cat not kitten around get scared by
              sudden appearance of cucumber, bawl under human beds so eat
              owner's food. I am the best try to jump onto window and fall while
              scratching at wall yet while happily ignoring when being called.
              Stare at the wall, play with food and get confused by dust.
              Meow all night head nudges . Cat not kitten around get scared by
              sudden appearance of cucumber, bawl under human beds so eat
              owner's food. I am the best try to jump onto window and fall while
              scratching at wall yet while happily ignoring when being called.
              Stare at the wall, play with food and get confused by dust.
            </p>
            <Button href="#rscreen" id="Btn" >
                LEARN MORE
              </Button>{" "}
          </Col>
          <Col md>
            <div id="pic">
            <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/01/327372_1100-1100x628.jpg" alt=""
              style={{
                width:"600px",
                height:"300px",
                borderRadius:"10% 0% 0% 10%"
              }}
              />
            </div>
              
               
          </Col>
        </Row>
        
      </Container>
    </>
  );
}

export default Research;