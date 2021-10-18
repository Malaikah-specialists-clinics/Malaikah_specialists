import React from "react";
// import { Container } from "react-bootstrap";

function Landing() {
  return (
    <>
      {/* id="bgvid" poster="/images/emeservice.jpg" */}
       <div className="video-container">
       <video src="/videos/video-dmm.mp4" type="video/mp4" autoPlay muted loop />
       <div class="caption">
       <h1>Quality Innovative <br/>
           Healthcare Delivery
      </h1>
      <h2>Easing access to affordable <br/>
healthcare services. <br/>
We link global doctors to you

</h2>
    </div>
       </div>
    </>
  );
}

export default Landing;
