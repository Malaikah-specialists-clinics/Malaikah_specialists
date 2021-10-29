 
 
 import React, { useState, useEffect } from 'react';
 import axios from 'axios';
 //  import { Screens} from 'react'
 //  import { Row, Card, Col } from 'react-bootstrap';

 const Moeventscreen = () => {
   const [event, setEvents] = useState([]);
   useEffect(() => {
     //  console.log("useEffect");
     axios
       .get('http://localhost:3010/events')
       .then((res) => {
         setEvents(res.data);
         console.log(res.data);
       })
       .catch((err) => {
         console.log({ message: err });
       });
   }, []);
  //  console.log(events)
  

   return (
     <>
       <div class="hcare" style={{ display: 'block' }}>
         {event.map((events) => (
           <div
             class="row offset-md-1"
             style={{ width: '100%' }}
             key={events.id}
           >
             <div class="col-sm-1">
               <div class="card" id="datecard">
                 <div className="item-date"></div>
                 <div>
                   <h3 className="day">{events.event_date}</h3>
                   {/* <h3 className="month">NOV</h3> */}
                 </div>
               </div>
             </div>
             <div class="col-sm-8">
               <div class="card" id="contentcard">
                 <h2>{events.event_name}</h2>
                 <h6>{events.event_time}</h6>
                 <p>{events.event_description}</p>
                 <div>
                   <h5 style={{ float: 'left' }}>{events.event_location}</h5>
                   <h6 style={{ float: 'left', padding: '3px 15px' }}>
                     {events.event_location}
                   </h6>
                 </div>
                 <div>
                   <h5 style={{ float: 'left' }}>Contact:</h5>
                   <h6 style={{ float: 'left', padding: '3px 15px' }}>
                     malaikah@gmail.com
                   </h6>
                 </div>
               </div>
             </div>
           </div>
         ))}
       </div>
     </>
   );
 };

 export default Moeventscreen;
 
 
 
 
 
 