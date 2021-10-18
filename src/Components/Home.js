import React from 'react';
import About from './About'
import Events from './Events';  
import Research from './Research';
import Specialities from './Specialities';
import Landing from './Landing';
function Home(){
    return (
      <>
      <div className='formcontent'>
      <Landing/>
      <Specialities/>
    <Events/>
    <Research/>
     <About/>
      </div>
      
      
       
      </>
    );

}

export default Home;
