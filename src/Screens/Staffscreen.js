import React from 'react';
import { CardGroup,} from 'react-bootstrap';
import  StaffComp from '../Components/StaffComp';

const Staffscreen = (props) => {
    return (
      <>
        <div class="hcare">
        <h1 style={{ textAlign: 'center', fontSize: '50px', marginTop: '10px'}}> Meet Our Doctors</h1>
          {/* {this.props.titles.map((title) => ( <StaffComp title={} />))} */}
            <CardGroup>
              <StaffComp  Img="/images/doc.jpg" title="DR. COLLINES K.B" body="Experience: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece  of classical Latin literature from 45 BC,  making "/>
              <StaffComp Img="/images/doc.jpg" title="DR. MARK ALEX" body="Experience: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece  of classical Latin literature from 45 BC,  making "/>
              <StaffComp Img="/images/doc.jpg" title="DR.FRED OPIO" body="Experience: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece  of classical Latin literature from 45 BC,  making "/>
              <StaffComp  Img="/images/doc.jpg" title="DR. WINNIE.KK" body="Experience: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece  of classical Latin literature from 45 BC,  making "/>
              <StaffComp Img="/images/doc.jpg" title="DR. BAKER AGABA" body="Experience: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece  of classical Latin literature from 45 BC,  making "/>
              <StaffComp Img="/images/doc.jpg" title="DR. ALICIA KWESIGA" body="Experience: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece  of classical Latin literature from 45 BC,  making "/>
              {/* <Card className="staffcard">
              <Card.Img variant="top" src="/images/doc.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="staffcard">
              <Card.Img variant="top" src="/images/doc.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
            </Card> */}
            </CardGroup>
        </div>
      </>
    );
}

export default Staffscreen;
