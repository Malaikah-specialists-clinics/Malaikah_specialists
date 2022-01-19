import React from 'react';
import { CardGroup, Container,} from 'react-bootstrap';
import  StaffComp from '../Components/Staff/StaffComp';

const Staffscreen = (props) => {
    return (
      <>
      <Container style={{maxWidth: '100%'}}>
        <div class="hcare">
        <h2 style={{ textAlign: 'center', marginTop: '10px'}}> Meet Our Doctors</h2>
            <CardGroup style={{justifyContent: 'space-evenly'}}>
              <StaffComp  Img="/images/doc.jpg" title="DR. COLLINES K.B" body="Experience: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece  of classical Latin literature from 45 BC,  making "/>
              <StaffComp Img="/images/doc.jpg" title="DR. MARK ALEX" body="Experience: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece  of classical Latin literature from 45 BC,  making "/>
              <StaffComp Img="/images/doc.jpg" title="DR.FRED OPIO" body="Experience: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece  of classical Latin literature from 45 BC,  making "/>
              </CardGroup>
              <CardGroup style={{justifyContent: 'space-evenly'}}>
              <StaffComp  Img="/images/doc.jpg" title="DR. WINNIE.KK" body="Experience: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece  of classical Latin literature from 45 BC,  making "/>
              <StaffComp Img="/images/doc.jpg" title="DR. BAKER AGABA" body="Experience: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece  of classical Latin literature from 45 BC,  making "/>
              <StaffComp Img="/images/doc.jpg" title="DR. ALICIA KWESIGA" body="Experience: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece  of classical Latin literature from 45 BC,  making "/>
            </CardGroup>
        </div>
        </Container>
      </>
    );
}

export default Staffscreen;
