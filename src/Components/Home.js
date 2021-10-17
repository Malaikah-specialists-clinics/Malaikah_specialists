import React from 'react';
import { Container } from 'react-bootstrap';
import About from './About'
import Events from './Events';  
import Research from './Research';
import Specialities from './Specialities';
function Home(){
    return (
      <>
      <Container className='formcontent'>
      <Specialities/>
    <Events/>
    <Research/>
     <About/>
      </Container>
       
      </>
    );

}

export default Home;