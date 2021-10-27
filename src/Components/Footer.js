import React from 'react';
import { Col, Row } from 'react-bootstrap';


function Footer() {
  return (
    <>
    <Row className='footer'>
      <Col md style={{textAlign: 'center'}}>
      <img src='/images/logo-01.png' alt='' width='220px' height='100px' />
            <p className="grey-text text-lighten-4">
             Malaikah Specialist Center aim is to provide you with quality,
             accessible and affordable health care services & health
             education.
            </p>
      </Col>
      <Col md style={{textAlign: 'center'}}>
      <h5 className="white-text ">Navigation</h5>
            <ul>
              <li className="footer-li">
                <a className="footer-li" href="#home">
                  Home
               </a>
             </li>
             <li className="footer-li">
               <a className="footer-li" href="#!">
                  Research
               </a>
          </li>
              <li className="footer-li">
                <a className="footer-li" href="#hcare">
                  Services & Programs
                 </a>
              </li>
               <li className="footer-li">
                 <a className="footer-li" href="#!">
                    Events & Education
                </a>
              </li>
               <li className="footer-li">
                  <a className="footer-li" href="#!">
                    About
                   </a>
               </li>
              </ul>
      </Col>
      <Col md style={{textAlign: 'center'}}>
      <h5 className="white-text">Contact Us</h5>
           <ul>
              <li className="footer-li">
               Email: support@malaikahgroup.com</li>
               <li className="footer-li">Tel: +234 703 229 3770 </li>
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
