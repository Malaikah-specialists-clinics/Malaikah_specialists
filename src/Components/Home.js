import React from 'react';
import { Container } from 'react-bootstrap';
import About from './About'
import Events from './Events';  
import Research from './Research';
function Home(){
    return (
      <>
      <Container className='formcontent'>
    <Events/>
    <Research/>
     <About/>
      </Container>
       
      </>
    );

}

export default Home;