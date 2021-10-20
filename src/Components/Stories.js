
import React from 'react'
import { Container, Carousel} from 'react-bootstrap'

const Stories = () => {
    return (
      <>
        <Container className="storycont">
          <h1
            style={{
              color: '#0A1F3E',
              paddingTop: '20px',
              textAlign: 'center',
            }}
          >
            OUR SUCCESS STORIES
          </h1>
          <Carousel variant="dark">
            <Carousel.Item>
              <div id="storycard">
                <h2 id="strytitle">Gynecology</h2>
                <img
                  id="storyimg"
                  src="https://avatars.githubusercontent.com/u/79285222?v=4"
                  alt=""
                />
                <p className="strycontent">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                {/* <h6>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </h6> */}
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div id="storycard">
                <h2 id="strytitle">Paediatrics</h2>
                <img
                  id="storyimg"
                  src="https://avatars.githubusercontent.com/u/79285222?v=4"
                  alt=""
                />
                <p className="strycontent">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                {/* <h6>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </h6> */}
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div id="storycard">
                <h2 id="strytitle">Auto-immune diseases</h2>
                <img
                  id="storyimg"
                  src="https://avatars.githubusercontent.com/u/79285222?v=4"
                  alt=""
                />
                <p className="strycontent">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                {/* <h6>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </h6> */}
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </>
    );
}

export default Stories
