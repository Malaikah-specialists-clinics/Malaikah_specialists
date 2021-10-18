<<<<<<< HEAD
import React from "react";


import Events from '../Components/Events'
import About from "../Components/About";


const Home=()=> {
  return (
    <div className="">
      <h1 style={{ marginTop: "140px" }}>THIS IS HOME PAGE</h1>
      <Events />
      <About />
     
    </div>
  );
=======
import React from 'react';
import { Container } from 'react-bootstrap';
import About from './About'
import Events from './Events';  
import Research from './Research';
import Specialities from './Specialities';
import Landing from './Landing';
function Home(){
    return (
      <>
      <Container className='formcontent'>
      <Landing/>
      <Specialities/>
    <Events/>
    <Research/>
     <About/>
      </Container>
       
      </>
    );

>>>>>>> 32187f67c56a056c1911727fa7c123da141c5964
}

export default Home;
