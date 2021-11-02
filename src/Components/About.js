import React from "react";
// import { FaQuestionCircle, FaEye, FaRegHandshake} from 'react-icons/fa';
import {Accordion} from 'react-bootstrap'


const About = () => {
  
  return (
    <div class="About">
     
      <div class="offset-md-1">
        <h4 class="offset-md-4" >  About Us</h4>
        <p>
          Malaikah Specialist Center aims is to provide you with quality,
          accessible, & affordable health care services & health education. Our
          specialized services include: Virtual Consultation, Emergency
          Services, Home Care Services, Virtual Communities.
        </p>
      </div>
      <Accordion flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header style={{textAlign: 'center'}}>Our Vision</Accordion.Header>
    <Accordion.Body>
      To provide exceptional quality, affordable and innovative care that
      ensures good health and wellbeing of the communities and Africans
      with a mandate for health education and research.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Our Mission</Accordion.Header>
    <Accordion.Body>
    To be a reference point and recognized by patients, staff, peer
    institutions, and the community as the leading model providing
    exceptional, innovative care and research that makes a difference in
    diversity and inclusion.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Our Principles</Accordion.Header>
    <Accordion.Body>
    <ul>
         <li> Malaikah shall nurture all upcoming practitioners equally without any discrimination.</li>
         <li> Malaikah shall work with other like minded partners involved in quality and innovative care delivery.</li>
         <li> Malaikah cherishes the principle of <b>result oriented</b> management and therefore all staff shall execute their work with minimum supervision based on their agreed action plans per work plans.</li>
         <li> Malaikah shall seek <b>professionalism </b>in all its operations.</li>
         <li> Malaikah believes in collective efforts realized through <b>teamwork</b>.</li>
         <li> Malaikah shall pride itself in <b>gender sensitivity</b> in its operations in terms of clients and staff.</li>
       </ul>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </div>
  );
};

export default About;
