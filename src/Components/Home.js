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
}

export default Home;
