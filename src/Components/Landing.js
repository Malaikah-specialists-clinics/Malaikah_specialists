import React from 'react'
import { useEffect, useRef } from 'react'
import { Col } from 'react-bootstrap'
import Alerts from './alertComp'
import { init } from 'ityped'

function Landing() {
  const textRef = useRef()

  useEffect(() => {
    console.log(textRef);
    init(textRef.current, {
      showCursor: false,
      typeSpeed: 100,
      backDelay: 5000,
      disableBackTyping: false,
      loop: true,

      strings: ['Quality Innovative', 'Healthcare Delivery'],
    })
  }, [])
  return (
    <>
      <Col>
      <div className="video-container">
        <img src="/images/hospital.jpeg" alt="doctor" id="himg"/>
        <Alerts />
          <div id="caption">
            <h1 className="htext">
              <span ref={textRef}></span>
            </h1>
            <p id="paragrah ">
              {/* Easing access to affordable <br />
              healthcare services. <br />
              We link global doctors to you */}
              {/* <span ref={paragrah}></span> */}
            </p>
          </div>
          </div>
      </Col>
    </>
  );
}

export default Landing;
