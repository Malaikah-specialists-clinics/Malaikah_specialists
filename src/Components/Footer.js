import React from "react";
import { Col, Row } from "react-bootstrap";

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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer>
        <Row className="footer">
          <Col md style={{ textAlign: "center" }}>
            <img
              src="/images/bluelogo-01.png"
              alt=""
              width="100px"
              height="100px"
            /> MALAIKAH
          </Col>
          <Col md style={{ textAlign: "center" }}>
            <h5 className="white-text ">NAVIGATION</h5>

            <a className="footer-li" href="/">
              Home |
            </a>

            <a className="footer-li" href="#rscreen">
              Research |
            </a>

            <a className="footer-li" href="#specscreen">
              Specialties |
            </a>

            <a className="footer-li" href="#moeevents">
              Events |
            </a>

            <a className="footer-li" href="#emergservice">
              About
            </a>
            <div style={{ textAlign: "center" }}>
              {" "}
              © 2021 Copyright. All rights reserved.
            </div>
          </Col>
          <Col md style={{ textAlign: "center" }}>
            <h5 className="white-text">CONTACT US</h5>
            <ul>
              <li className="footer-li">Email: support@malaikahgroup.com</li>
              <li className="footer-li">Tel: +234 703 229 3770 </li>
            </ul>
            <FacebookShareButton
              href="https://www.facebook.com/malaikahmedicalcenter"
              quote={'Malaika Specialist Care'}
              hashtag="#MalaikahCare"
            >
              <FacebookIcon
                className="facebookicon"
                logoFillColor="black"
                round="true"
              ></FacebookIcon>
            </FacebookShareButton>
            <LinkedinShareButton
              href="https://www.linkedin.com/company/malaikah-specialist-clinics"
              quote={'Malaika Specialist Care'}
              hashtag="#MalaikahCare"
            >
              <LinkedinIcon
                className="linkedinicon"
                logoFillColor="white"
                round="true"
              ></LinkedinIcon>
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
            <a href="https://www.youtube.com/channel/UCZogwUu3bJLpOgca5LdI8Yw">
              <FontAwesomeIcon icon={faYoutube} className="youtubeicon" />
            </a>
          </Col>
        </Row>
      </footer>
    </>
  );
}

export default Footer;
