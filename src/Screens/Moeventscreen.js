 
 import React from 'react'
//  import { Screens} from 'react'
//  import { Row, Card, Col } from 'react-bootstrap';

 const Moeventscreen =()=>{
   
      return (
        <>
          <div class="hcare">
            <div class="row">
              <div class="col-sm-2">
                <div class="card" id="card1">
                  <div className="item-date"></div>
                  <div>
                    <h3 className="day"> 30</h3>
                    <h3 className="month">NOV</h3>
                  </div>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="card" id="card2">
                  <h2>Food and Nutrition</h2>
                  <h6>2.00pm-4.00pm</h6>
                  <p>
                    The workshop aims to discuss: Preventing noncommunicable
                    dieseases and how to boost immunity.
                  </p>
                  <div>
                    <h5 style={{ float: 'left' }}>Location:</h5>
                    <h6 style={{ float: 'left', padding: '3px 15px' }}>
                      Virtual
                    </h6>
                  </div>
                  <div>
                    <h5 style={{ float: 'left' }}>Contact:</h5>
                    <h6 style={{ float: 'left', padding: '3px 15px' }}>
                      malaikah@gmail.com
                    </h6>
                  </div>
                </div>
              </div>
              <div class="pic col-sm-2">
                <div class="card">
                  <img
                    className="card-image"
                    src="https://images.unsplash.com/photo-1535229398509-70179087ac75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      );
   }
     
 
 export default Moeventscreen
 
 
 