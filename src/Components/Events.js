import React from 'react';
import { Carousel, Container} from 'react-bootstrap';
import Tips from './Tips';
import Upcomingevents from './Upcomingevents'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { base_url } from '../Constants/index.js';

const Events = () => {
  const [events, setEvents] = useState([]);
  // const [pastdates, setpastDates] = useState(null)
  useEffect(() => {
    axios
      .get(`${base_url}/events`)
      .then((res) => {
        setEvents(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log({ message: err });
      });
  }, []);

  // const d = new Date();
  // pastdates.search('query', {
  //     filters: `date_timestamp > ${Math.floor(
  //       d.setDate(d.getDate() - 7) / 1000
  //     )}`,
  //   })
  //   .then(({ hits }) => {
  //     console.log(hits);
  //   });

  // const filteredDates = dates.filter((d) => new Date(d) - new Date() > 0);

  return (
    <Container style={{ maxWidth: '100%' }}>
      <h2
        style={{ textAlign: 'center', fontWeight: 'bolder', paddingTop: '5%' }}
      >
        Events
      </h2>

      <Carousel>
        {events.map((events_entity) => (
          <Carousel.Item>
            <img
              src={events_entity.image}
              alt=" "
              style={{ height: '400px', width: '100%' }}
            />
            <Carousel.Caption>
              <h4>{events_entity.title}</h4>
              <p>{events_entity.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Upcomingevents />
      <Tips />
    </Container>



    // {/* method one seems to be working 1 */}
    // {/* {events.map((events_entity) => (
    //     <Carousel.Item key={events_entity}>
    //       <img
    //         className="d-block w-100"
    //         // src={events_entity.image}
    //         // src= `${events_entity.image}`
    //         src='/events"+ event_entity'
    //         //  ./{event.image}.jpg
    //         // src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2017/12/05112949/hospital-event-promotion.jpg"
    //         alt="First slide"
    //         style={{ height: '400px', width: '100%' }}
    //       />
    //       <Carousel.Caption>
    //         <h4>{events_entity.title}</h4>
    //         <p>{events_entity.description}</p>
    //       </Carousel.Caption>
    //     </Carousel.Item>
    //   ))} */}
    // {/* <Carousel.Item>
    //       <img
    //         className="d-block w-100"
    //         src="https://higherlogicdownload.s3.amazonaws.com/CCGCOP/44c83e86-513d-42d6-b779-70c3625da6b3/UploadedImages/homepage/tile-1-bg.jpeg"
    //         alt="Second slide"
    //         style={{ height: '400px', width: '100%' }}
    //       />

    //       <Carousel.Caption>
    //         <h4>{events_entity.title}</h4>
    //         <p>{events_entity.description}</p>
    //       </Carousel.Caption>
    //     </Carousel.Item> */}
    // {/* <Carousel.Item>
    //       <img
    //         className="d-block w-100"
    //         src="https://www.clarityexperiences.com/hubfs/2018%20Website/2018%20Healthcare/healthcare-event-presentation-cvs-health.jpg"
    //         alt="Third slide"
    //         style={{ height: '400px', width: '100%' }}
    //       />

    //       <Carousel.Caption>
    //         <h4>{events_entity.title}</h4>
    //         <p>{events_entity.description}</p>
    //       </Carousel.Caption>
    //     </Carousel.Item> */}
  );
};

export default Events;
