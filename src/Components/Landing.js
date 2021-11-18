import React  from "react";
import {useEffect, useRef} from "react"
import { Col } from "react-bootstrap";
import Alerts from './alertComp';
import { init } from 'ityped';

function Landing() {
  const textRef = useRef();
  // const paragrah = useRef();

  useEffect(() => {
    console.log(textRef);
    init(textRef.current, {
      showCursor: false,
      typeSpeed: 100,
      backDelay: 5000,
      disableBackTyping: false,
      loop: true,

      strings: ['Quality Innovative', 'Healthcare Delivery'],
    });
    // console.log(paragrah);
    // init(paragrah.current, {
    //   disableBackTyping: false,
    //   strings: [
    //     'Easing access to affordable',
    //     'healthcare services.',
    //     'We link global doctors to you',
    //   ],
    // });
  }, []);
  return (
    <>
      {/* id="bgvid" poster="/images/emeservice.jpg" */}
      <Col>
        <div className="video-container">
          <div id="caption" className="video-container">
            <Alerts />
            <h1 style={{ marginTop: '20%' }}>
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
