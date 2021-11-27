import React from "react"
import { CardGroup, Card } from "react-bootstrap"


const StaffComp = (props) => {
    return (
      <>
          <CardGroup id="staffcardgroup">
            <Card className="staffcard">
              <Card.Img variant="top" src={props.Img} />
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.body}</Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>

      </>
    );
}

export default StaffComp
