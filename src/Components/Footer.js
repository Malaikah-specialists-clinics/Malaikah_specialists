import React from 'react';
import { Col, Row } from 'react-bootstrap';

// import {FacebookIcon, FacebookShareButton, WhatsappShareButton} from 'react-share';
// import {WhatsappIcon} from 'react-share'
// import { FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faWhatsapp, faYoutube} from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <>
      <footer>
        <Row className="footer">
          <Col md style={{ textAlign: 'center' }}>
            <img
              src="/images/logo-01.png"
              alt=""
              width="220px"
              height="100px"
            />
            <p className="grey-text text-lighten-4">
              Malaikah Specialist Center aim is to provide you with quality,
              accessible and affordable health care services & health education.
            </p>
          </Col>
          <Col md style={{ textAlign: 'center' }}>
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
          <Col md style={{ textAlign: 'center' }}>
            <h5 className="white-text">Contact Us</h5>
            <ul>
              <li className="footer-li">Email: support@malaikahgroup.com</li>
              <li className="footer-li">Tel: +234 703 229 3770 </li>
            </ul>
            {/* <FacebookShareButton
              url="https://www.facebook.com/fredkwesif"
              quote={'Malaika Specialist Care'}
              hashtag="#MalaikahCare"
            >
              <FacebookIcon logoFillColor="white" round="true"></FacebookIcon>
            </FacebookShareButton>
            <WhatsappShareButton title="Sharing Content" url="https://web.whatsapp.com/">
              <WhatsappIcon logoFillColor="white" round="true"></WhatsappIcon>
            </WhatsappShareButton> */}
            <a
              href="https://www.facebook.com/fredkwesif"
              className="socialmediaicon"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://web.whatsapp.com/"
              hashtag="#MalaikahCare"
              className="socialmediaicon"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCy7-K6Pt5GIBuO8J-DflioA"
              className="socialmediaicon"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </Col>
          <div> © 2021 Copyright. All rights reserved.</div>
        </Row>
      </footer>
    </>
  );
}

export default Footer;
