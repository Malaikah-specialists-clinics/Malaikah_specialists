import React from 'react';
import About from './About'
import Events from './Events';  
import Research from './Research';
import Specialities from './Specialities';
import Landing from './Landing';
import Stories from './Stories'
function Home(){
    return (
      <>
      <div className='formcontent'>
      <Landing/>
      <Specialities/>
    <Events/>
    <Research/>
    <Stories />
     <About/>
      </div>
      
      
       
      </>
    );

}

export default Home;
