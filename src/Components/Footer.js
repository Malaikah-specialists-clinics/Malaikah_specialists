import React from 'react';
import { Col, Row } from 'react-bootstrap';


function Footer() {
  return (
    <>
    <footer>
    <Row className='footer'>
      <Col md style={{textAlign: 'center'}}>
      <img src='/images/logo-01.png' alt='' width='280px' height='150px' />
      </Col>
      <Col md style={{textAlign: 'center'}}>
      <h5 className="white-text ">NAVIGATION</h5>
            <ul>
              <li className="footer-li">
                <a className="footer-li" href="#home">
                  Home
               </a>
             </li>
             <li className="footer-li">
               <a className="footer-li" href="#rscreen">
                  Research
               </a>
          </li>
              <li className="footer-li">
                <a className="footer-li" href="#specscreen">
                  Services & Programs
                 </a>
              </li>
               <li className="footer-li">
                 <a className="footer-li" href="#moeevents">
                    Events & Education
                </a>
              </li>
               <li className="footer-li">
                  <a className="footer-li" href="#emergservice">
                    About
                   </a>
               </li>
              </ul>
      </Col>
      <Col md style={{textAlign: 'center'}}>
      <h5 className="white-text">CONTACT US</h5>
           <ul>
              <li className="footer-li">
               Email: support@malaikahgroup.com</li>
               <li className="footer-li">Tel: +234 703 229 3770 </li>
             </ul>
      </Col>
      <div style={{textAlign: 'center'}}>
          {' '}
            © 2021 Copyright. All rights reserved.
         </div>
    </Row>
    </footer>
  </>
   );
}

export default Footer;
