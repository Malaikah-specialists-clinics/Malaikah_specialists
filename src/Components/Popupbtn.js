import { useState}  from 'react';
import {LinkContainer} from 'react-router-bootstrap'
import {Button, Modal, Row,} from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
// import { FaComment } from 'react-icons';



const Popupbtn = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
        {/* <FontAwesomeIcon icon={faWhatsapp} className="youtubeicon"
            onClick={handleShow}
          /> */}
        <div className="popicon" onClick={handleShow}>
          <img
            className="popup"
            src="/images/chaticon.png"
            alt=""
          />
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static" //   aria-labelledby="contained-modal-title-vcenter"
          //   centered
        >
          <Modal.Header id="PopModel" closeButton>
            <Modal.Title id="popuptitle">
              Welcome To Malaikah Specialists Clinics!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body id="PopModel">
            {/* onclick= {() => { navigation('/#/form');}} */}
            <LinkContainer to="/login">
              <Button id="bookappointbtn">
                <Row xs={12} md={8}>
                  <h5 className="bookappoint">BOOK AN APPOINTMENT</h5>
                </Row>
              </Button>
            </LinkContainer>

            <LinkContainer to="/form">
              <Row xs={12} md={8}>
                <Button id="talktodocbtn">
                  <h5 className="talktodoc">TALK TO A DOCTOR</h5>
                </Button>
              </Row>
            </LinkContainer>
          </Modal.Body>
        </Modal>
      </>
    );
}

export default Popupbtn
