import React from 'react';
import { Container } from 'react-bootstrap';
import About from './About'
import Events from './Events';  
function Home(){
    return (
      <>
      <Container className='formcontent'>
    <Events/>
     <About/>
      </Container>
       
      </>
    );

}

export default Home;