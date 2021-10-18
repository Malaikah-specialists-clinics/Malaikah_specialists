import React from "react";

<<<<<<< HEAD
const About = () => {
=======
import { FaQuestionCircle, FaEye, FaRegHandshake} from 'react-icons/fa';

>>>>>>> 32187f67c56a056c1911727fa7c123da141c5964


const About = () => {
  
  return (
    <div class="container About">
     
      <div class="offset-md-1">
        <h4 class="offset-md-4" > <FaQuestionCircle/> About Us</h4>
        <p>
          Malaikah Specialist Center aims is to provide you with quality,
          accessible, & affordable health care services & health education. Our
          specialized services include: Virtual Consultation, Emergency
          Services, Home Care Services, Virtual Communities.
        </p>
      </div>
      <div class="row justify-content-center">
        <div class="col-sm-6">
          <h5 class="black-text"> <FaEye/> Our Vision</h5>
          <p class="black-text">
            To provide exceptional quality, affordable and innovative care that
            ensures good health and wellbeing of the communities and Africans
            with a mandate for health education and research.
          </p>
        </div>
        <div class="col-sm-6">
          <h5 class="black-text"> <FaRegHandshake/> Our Mission</h5>
          <p>
            To be a reference point and recognized by patients, staff, peer
            institutions, and the community as the leading model providing
            exceptional, innovative care and research that makes a difference in
            diversity and inclusion.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
