import React, { } from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
// import {useEffect } from "react";
// import {axios} from "axios"
// import { base_url } from '../Constants/index.js';



const Register =()=> {
  // const [isLoading, setIsLoading] = useState(false);
  // const [, setUsers] = useState([]);

//    useEffect(() => {
//   // // POST request using axios inside useEffect React hook
//   const user = {
//     name: 'name',
//     email: 'email',
//     phoneNumber: 'phoneNumber',
//     dob: 'dob',
//     gender: 'gender',
//     location: 'location',
//     password: 'password',
//     confirmPassword: 'confirmPassword',
//   };
  
//   axios
//     .post(`${base_url}/users`, user)
//     .then((response) => { setIsLoading(false); setUsers(response.user.id)
      
//     });

//   // empty dependency array means this effect will only run once (like componentDidMount in classes)
// }, []);
//  if (isLoading) {
//    return <div>Loading...</div>;
//  }



    // const user = {
    //   name: 'name',
    //   email: 'email',
    //   phoneNumber: 'phoneNumber',
    //   dob: 'dob',
    //   gender: 'gender',
    //   location: 'location',
    //   password: 'password',
    //   confirmPassword: 'confirmPassword',
    // };
    // axios.post(`${base_url}/users`, user)
    //   .then((response) => {
    //     console.log('Status: ', response.status);
    //   })
    //   .catch((error) => {
    //     console.error('Something went wrong!', error);
    //   });
    return (
      <>
        <div
          className="formcontent"
          style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
        >
          <Row>
            <Col md>
              <h2 style={{ marginTop: "40px", textAlign: "center" }}>
                Create An Account
              </h2>
              <div id="pic">
                <img
                  src="/images/reg.jpg"
                  alt="care"
                  width="500px"
                  height="380px"
                />
              </div>
            </Col>
            <Col md sm={6} className="form">
              <Form action="http://localhost:3000/users" Method="POST" style={{ padding: "10px" }}>
                <Row>
                  <Col md>
                    <Form.Label id="field">Full Names</Form.Label>
                    <Form.Control
                      name="name"
                      type="text"
                      id="form-control"
                    />
                  </Col>
                  <Col md className="inputField">
                    <Form.Label id="field">Email Address</Form.Label>
                    <Form.Control name="email" id="form-control" />
                  </Col>
                </Row>
                <Row>
                  <Col md>
                    <Form.Label id="field">Phone number</Form.Label>
                    <Form.Control name="phoneNumber" id="form-control" />
                  </Col>
                  <Col md>
                    <Form.Label id="field">Date of birth</Form.Label>
                    <Form.Control name="dob" id="form-control" />
                  </Col>
                </Row>
                <Row>
                  <Col md>
                  <Form.Label id="field">Gender</Form.Label>
                    <Form.Select name="gender" id="form-control" >
                      <option>Select Gender</option>
                      <option value="1">Female</option>
                      <option value="2">Male</option>
                      <option value="3">Prefer not to say</option>
                    </Form.Select>
                  </Col>
                  <Col md>
                    <Form.Label id="field">Location</Form.Label>
                    <Form.Control
                      name="location"
                      type="text"
                      id="form-control"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md>
                    <Form.Label id="field">Password</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      id="form-control"
                    />
                  </Col>
                  <Col md>
                    <Form.Label id="field">Confirm Password</Form.Label>
                    <Form.Control
                      name="confirmPassword"
                      type="password"
                      id="form-control"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col style={{ marginTop: "5%" }}>
                    <Button type='submit' id="Btn">REGISTER</Button>
                  </Col>
                  <Col style={{ marginTop: "9.5%" }}>
                    <p>
                      Already have an account? <a href="#login">Sign in</a>
                    </p>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
      </>
    );
}

export default Register;
