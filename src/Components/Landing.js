import React from "react";
import { Col } from "react-bootstrap";
import Alerts from './alertComp';

function Landing() {
  return (
    <>
      {/* id="bgvid" poster="/images/emeservice.jpg" */}
      <Col> 
      <div className="video-container">
        
        {/* <video
          src="/videos/video-dmm.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        /> */}
        <div id="caption" className="video-container">
        <Alerts />
          <h1 style={{marginTop:'20%'}}>
            Quality Innovative <br />
            Healthcare Delivery
          </h1>
          {/* <p className="caption">
            Easing access to affordable <br />
            healthcare services. <br />
            We link global doctors to you
          </p> */}
        </div>
      </div>
      </Col>
    </>
  );
}

export default Landing;
