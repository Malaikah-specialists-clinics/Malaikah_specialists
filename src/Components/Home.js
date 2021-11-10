import React from 'react';
import Events from './Events';  
import Research from './Research';
import Specialities from './Specialities';
import Landing from './Landing';
import Stories from './Stories';
import Popupbtn from './Popupbtn';
import Maps from './maps';  


function Home(){
    return (
      <>
        <div className="formcontent">
          <Landing />
          <Specialities />
          <Events />
          <Research />
          <Stories />
          <Popupbtn />
          <Maps />
        </div>
      </>
    );

}

export default Home;
