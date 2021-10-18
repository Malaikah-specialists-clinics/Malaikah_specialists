 
 import React from 'react'
 import { Row, Card, Col } from 'react-bootstrap';

 const Moeventscreen = () => {
     return (
       <>
         <div class="hcare">
           <Row className="main mb-3" id="rowevents">
             <Col>
               <Card id="carddate">
                 <Card.Body>
                   <Card.Text class="eventdate">
                     <div>
                       <h3> 30</h3>
                       <h3>NOV</h3>
                     </div>
                   </Card.Text>
                 </Card.Body>
               </Card>
             </Col>

             <Col>
               <Card id="morevents">
                 <Card.Body>
                   <Card.Text class="detailscard">
                     <div>
                       <h2>Food and Nutrition</h2>
                       <h6>2.00pm-4.00pm</h6>
                       <p>
                         The workshop aims to discuss: Preventing
                         noncommunicable dieseases and how to boost immunity.
                       </p>
                     </div>
                   </Card.Text>
                 </Card.Body>
               </Card>
             </Col>

             <Col>
               <Card id="imgcard">
                 <img
                   className="pic"
                   src="https://images.unsplash.com/photo-1535229398509-70179087ac75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                   alt=""
                   width="250px"
                   height="220px"
                 />
               </Card>
             </Col>
           </Row>
           
           <Row className="main" id="rowevents">
             <Col>
               <Card id="carddate">
                 <Card.Body>
                   <Card.Text class="eventdate">
                     <div>
                       <h3> 30</h3>
                       <h3>NOV</h3>
                     </div>
                   </Card.Text>
                 </Card.Body>
               </Card>
             </Col>

             <Col>
               <Card id="morevents">
                 <Card.Body>
                   <Card.Text class="detailscard">
                     <div>
                       <h2>Food and Nutrition</h2>
                       <h6>2.00pm-4.00pm</h6>
                       <p>
                         The workshop aims to discuss: Preventing
                         noncommunicable dieseases and how to boost immunity.
                       </p>
                     </div>
                   </Card.Text>
                 </Card.Body>
               </Card>
             </Col>

             <Col>
               <Card id="imgcard">
                 <img
                   className="pic"
                   src="https://images.unsplash.com/photo-1535229398509-70179087ac75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                   alt=""
                   width="250px"
                   height="220px"
                 />
               </Card>
             </Col>
           </Row>
         </div>
       </>
     );
 }
 
 export default Moeventscreen
 
 
 