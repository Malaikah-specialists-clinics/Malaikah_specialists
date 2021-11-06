
import React from 'react'
import {Carousel} from 'react-bootstrap'
import { useState, useEffect } from 'react';
import axios from 'axios';

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
        <div className="storycont">
          <h1
            style={{
              color: '#0A1F3E',
              fontSize: '35px',
              paddingTop: '20px',
              textAlign: 'center',
            }}
          >
            OUR SUCCESS STORIES
          </h1>
          {story.map((story_entity) => (
            <Carousel variant="dark" key={story_entity.id}>
              <Carousel.Item>
                <div id="storycard">
                  <h2 id="strytitle">{story_entity.storytitle}</h2>
                  {/* <img
                    id="storyimg"
                    src="https://avatars.githubusercontent.com/u/79285222?v=4"
                    alt=""
                  /> */}
                  <p className="strycontent">{story_entity.storycontent}</p>
                  {/* <h6>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </h6> */}
                </div>
              </Carousel.Item>
            </Carousel>
          ))}
        </div>
      </>
    );
}

export default Stories
