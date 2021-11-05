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
            src="/images/chat-icon-by-back1design1-580x355-removebg-preview.png"
            alt=""
          />
        </div>
        <div></div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static" //   aria-labelledby="contained-modal-title-vcenter"
          //   centered
        >
          <Modal.Header id="PopModel" closeButton>
            <Modal.Title id="popuptitle">
              Welcome to Malaikah Specialist Care
            </Modal.Title>
          </Modal.Header>
          <Modal.Body id="PopModel">
            {/* onclick= {() => { navigation('/#/form');}} */}
            <LinkContainer to="/form">
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


// export default class App extends React.Component {
//   state = {
//     seen: false,
//   };

//   togglePop = () => {
//     this.setState({
//       seen: !this.state.seen,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <div className="btn" onClick={this.togglePop}>
//           <button>New User?</button>
//         </div>
//         {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
//       </div>
//     );
//   }
// }
