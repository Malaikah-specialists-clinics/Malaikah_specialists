import React from 'react'
import { Container,  CardGroup, Card, Row, Col} from 'react-bootstrap'; 
import { Column } from 'typeorm';

const StudentDashboard = () => {
    return (
        <div className='hcare'>
          <Container style={{maxWidth: '100%'}}>
    <h2>MY DASHBOARD</h2>
     

      <Row style={{justifyContent: 'space-evenly'}}>
          <Col style={{width: "60%"}}>
          <Card style={{margin: '1%', height:"20%", width: "80%"}}>
          <Card.Img variant="top" src="/images/profileicon.png" style={{ width: "60%", margin: "auto"}}/>
          <Card.Body>
            <Card.Title style={{textAlign: 'center'}}>MY PROFILE</Card.Title>
            
          </Card.Body>
         
        </Card>
        </Col>

       <Col style={{width: "60%"}}>
        <Card style={{margin: '1%' , width: "80%"}}>
          <Card.Img variant="top" src="/images/quiz.png" style={{ width: "60%", margin: "auto", height: "10%"}} />
          <Card.Body>
            <Card.Title style={{textAlign: 'center'}}>MY GRADES</Card.Title>
           
          </Card.Body>
         
        </Card>
        </Col>
        <Col style={{width: "60%"}}>
        <Card style={{margin: '1%', width: "80%"}}>
          <Card.Img variant="top" src="/images/writing.png" style={{ width: "60%", margin: "auto", height: "10%"}}/>
          <Card.Body>
            <Card.Title style={{textAlign: 'center'}}>START NEW APPLICATION</Card.Title>
            
          </Card.Body>
          
        </Card>
        </Col>
      </Row>
    <Row>
        <Col style={{width: '10%', height: "2%"}}>
    <Card style={{margin: '1%', height:"20%", width: "80%"}}>
          <Card.Img variant="top" src="/images/checklist.png" style={{ width: "40%", margin: "auto", height: "10%"}}/>
          <Card.Body>
            <Card.Title style={{textAlign: 'center'}}>ASSIGNMENTS</Card.Title>
            
          </Card.Body>
          
        </Card>
        </Col>
        <Col>
        <Card style={{margin: '1%', height:"20%", width: "80%"}}>
          <Card.Img variant="top" src="/images/paper.png" style={{ width: "40%", margin: "auto"}}/>
          <Card.Body>
            <Card.Title style={{textAlign: 'center'}}>LEARNING MATERIALS</Card.Title>
            
          </Card.Body>
          </Card>
          </Col>
    </Row>
      </Container>  
        </div>
    )
}

export default StudentDashboard
