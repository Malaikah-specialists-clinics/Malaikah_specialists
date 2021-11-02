import React from 'react';
import { Col, Row } from 'react-bootstrap';

import {
  FacebookIcon,
  LinkedinIcon,
  FacebookShareButton,
  LinkedinShareButton,
} from 'react-share';
// import YouTubeShareButton from 'react-youtube'
// import YouTubeIcon from 'react-youtube'
// import {WhatsappIcon} from 'react-share'
// import { FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube} from '@fortawesome/free-brands-svg-icons'


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
            <FacebookShareButton
              href="https://www.facebook.com/malaikahmedicalcenter"
              quote={'Malaika Specialist Care'}
              hashtag="#MalaikahCare"
              className="socialmediaicon"
            >
              <FacebookIcon logoFillColor="black" round="true"></FacebookIcon>
            </FacebookShareButton>
            <LinkedinShareButton
              href="https://www.linkedin.com/company/malaikah-specialist-clinics"
              quote={'Malaika Specialist Care'}
              hashtag="#MalaikahCare"
            >
              <LinkedinIcon logoFillColor="white" round="true"></LinkedinIcon>
            </LinkedinShareButton>
            {/* <YouTubeShareButton
              href="https://www.youtube.com/channel/UCZogwUu3bJLpOgca5LdI8Yw"
              quote={'Malaika Specialist Care'}
              hashtag="#MalaikahCare"
            >
              <YouTubeIcon logoFillColor="white" round="true"></YouTubeIcon>
            </YouTubeShareButton> */}
            {/* <WhatsappShareButton title="Sharing Content" url="https://web.whatsapp.com/">
              <WhatsappIcon logoFillColor="white" round="true"></WhatsappIcon>
            </WhatsappShareButton> */}
            {/* <a
              href="https://web.whatsapp.com/"
              hashtag="#MalaikahCare"
              className="socialmediaicon"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a> */}
            <a
              logoFillColor="red"
              round="true"
              href="https://www.youtube.com/channel/UCZogwUu3bJLpOgca5LdI8Yw"
            >
              <FontAwesomeIcon icon={faYoutube}/>
            </a>
          </Col>
          <div> © 2021 Copyright. All rights reserved.</div>
        </Row>
      </footer>
    </>
  );
}

export default Footer;
