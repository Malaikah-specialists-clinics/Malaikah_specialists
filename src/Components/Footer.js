import React from 'react';
import { Col, Row } from 'react-bootstrap';


function Footer() {
  return (
    <>
    <Row className='footer'>
      <Col md style={{textAlign: 'center'}}>
      <h5 className="white-text">Logo</h5>
            <p className="grey-text text-lighten-4">
             Malaikah Specialist Center aim is to provide you with quality,
             accessible and affordable health care services & health
             education.
            </p>
      </Col>
      <Col md style={{textAlign: 'center'}}>
      <h5 className="white-text ">Navigation</h5>
            <ul>
              <li>
                <a className="footer-li" href="#home">
                  Home
               </a>
             </li>
             <li>
               <a className="footer-li" href="#!">
                  Research
               </a>
          </li>
              <li>
                <a className="footer-li" href="#hcare">
                  Services & Programs
                 </a>
              </li>
               <li>
                 <a className="footer-li" href="#!">
                    Events & Education
                </a>
              </li>
               <li>
                  <a className="footer-li" href="#!">
                    About
                   </a>
               </li>
              </ul>
      </Col>
      <Col md style={{textAlign: 'center'}}>
      <h5 className="white-text">Contact Us</h5>
           <ul>
              <li>
               Email: support@malaikahgroup.com</li>
               <li>Tel: +234 703 229 3770 </li>
             </ul>
      </Col>
      <div >
          {' '}
            © 2021 Copyright. All rights reserved.
         </div>
    </Row>
  </>
   );
}

export default Footer;
