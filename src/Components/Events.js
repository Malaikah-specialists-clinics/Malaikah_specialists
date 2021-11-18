
import React from "react";
import { Card, CardGroup, Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Events = () => {
   const [tip, setTips] = useState([]);
   useEffect(() => {
     axios
       .get('http://localhost:3000/tips')
       .then((res) => {
         setTips(res.data);
         console.log(res.data);
       })
       .catch((err) => {
         console.log({ message: err });
       });
   }, []);
  return (
    <div class="">
      <h2
        style={{
          textAlign: 'center',
          fontWeight: 'bolder',
          paddingTop: '5%',
        }}
      >
        Events
      </h2>
      <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2017/12/05112949/hospital-event-promotion.jpg"
      alt="First slide"
      style={{height: '400px', width: '100%'}}
    />
    <Carousel.Caption>
      <h4>First slide label</h4>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://higherlogicdownload.s3.amazonaws.com/CCGCOP/44c83e86-513d-42d6-b779-70c3625da6b3/UploadedImages/homepage/tile-1-bg.jpeg"
      alt="Second slide"
      style={{height: '400px', width: '100%'}}
    />

    <Carousel.Caption>
      <h4>Second slide label</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.clarityexperiences.com/hubfs/2018%20Website/2018%20Healthcare/healthcare-event-presentation-cvs-health.jpg"
      alt="Third slide"
      style={{height: '400px', width: '100%'}}
    />

    <Carousel.Caption>
      <h4>Third slide label</h4>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      <div
        style={{ marginLeft: 'auto', marginRight: 'auto', width: '90%' }}
      >
        <div className="upcoming">
          <h2>Upcoming Events</h2>
          <a href="#moeevents" style={{ textDecoration: 'none' }}>
            <h4>Find more Events</h4>
          </a>
        </div>
        <div class="row">
          <div class="col-sm-2">
            <div class="card" id="card1">
              <div className="item-date"></div>
              <div>
                <h3 className="day"> 30</h3>
                <h3 className="month">NOV</h3>
              </div>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="card" id="card2">
              <h2>Food and Nutrition</h2>
              <h6>2.00pm-4.00pm</h6>
              <p>
                The workshop aims to discuss: Preventing noncommunicable
                dieseases and how to boost immunity.
              </p>
              <div>
                <h5 style={{ float: 'left' }}>Location:</h5>
                <h6 style={{ float: 'left', padding: '0.5% 1.5%' }}>Virtual</h6>
              </div>
              <div>
                <h5 style={{ float: 'left' }}>Contact:</h5>
                <h6 style={{ float: 'left', padding: '0.5% 1.5%' }}>
                  malaikah@gmail.com
                </h6>
              </div>
            </div>
          </div>
          <div class="pic col-sm-2">
            <div class="card">
              <img
                className="card-image"
                src="https://images.unsplash.com/photo-1535229398509-70179087ac75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {tip.map((tip_entity) => (
        <CardGroup key={tip_entity.id} style={{width:'94%', margin:'auto'}}>
          <Card id="crd">
            <Card.Body>
              <a
                href="#articles"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                {' '}
                <Card.Title>{tip_entity.title1}</Card.Title>
              </a>
              <Card.Text>{tip_entity.description1}</Card.Text>
            </Card.Body>
          </Card>
          <Card id="crd">
            <Card.Body>
              <Card.Title>{tip_entity.title2}</Card.Title>
              <Card.Text>{tip_entity.description2}</Card.Text>
            </Card.Body>
          </Card>
          <Card id="crd">
            <Card.Body>
              <Card.Title>{tip_entity.title3}</Card.Title>
              <Card.Text>{tip_entity.description3}</Card.Text>
            </Card.Body>
          </Card>
          
        </CardGroup>
      ))}
    </div>
  );
};

export default Events;
