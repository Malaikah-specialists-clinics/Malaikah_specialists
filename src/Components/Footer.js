import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="">
          <div className="row">
            <div className="col-sm-4" id="footerLogo">
              <h5 className="white-text">Logo</h5>
              <p className="grey-text text-lighten-4">
                Malaikah Specialist Center aim is to provide you with quality,
                accessible and affordable health care services & health
                education.
              </p>
            </div>
            <div className="col-sm-4 " id="footerNav">
              <h5 className="white-text ">Navigation</h5>
              <ul>
                <li>
                  <a className="white-text text-lighten-3" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="white-text text-lighten-3" href="#!">
                    Research
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#hcare">
                    Services & Programs
                  </a>
                </li>
                <li>
                  <a className="white-text text-lighten-3" href="#!">
                    Events & Education
                  </a>
                </li>
                <li>
                  <a className="white-text text-lighten-3" href="#!">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4" id="contactUs">
              <h5 className="white-text">Contact Us</h5>
              <ul>
                <li>
                Email: support@malaikahgroup.com</li>
                <li>Tel: +234 703 229 3770 </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container white-text">
            {' '}
            © 2021 Copyright. All rightes reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
