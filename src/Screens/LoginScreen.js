import React from 'react';
import { Row, Col, Form, Button} from "react-bootstrap";
import axios from 'axios';
import { base_url } from '../Constants/index.js';
import { Formik} from 'formik';

const validateLogin = (userLogin) => {
  const errors = {};
  if (!userLogin.email) {
    errors.email = 'Please Enter Email';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userLogin.email)
  ) {
    errors.email = 'Invalid email address';
  }
  if (!userLogin.password) {
    errors.password = 'Please enter correct password';
  } else {
    errors.password = 'correct password'
  }

  return errors;
};




const Login =()=> {

  // changeHandler = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  //  onSubmit(e) {
  //   e.preventDefault();
  
  //   const loginObject = {
  //     email: this.state.email,
  //     password: this.state.password,
  //   };
  //   axios
  //     .post(`${base_url}/users/login`, loginObject, {
  //       headers: { 'Access-Control-Allow-Origin': '*' },
  //     })

  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //     // this.props.history.push('/profile');
      
  // }
 
    return (
      <>
        <div
          className="formcontent"
          style={{
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '8%',
          }}
        >
          <Row>
            <Col md>
              <h2 style={{ textAlign: 'center' }}>Login</h2>
              <div id="pic">
                <img
                  src="/images/doc.jpg"
                  alt="care"
                  width="500px"
                  height="340px"
                />
              </div>
            </Col>
            <Col md sm={6} className="form">
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                validate={validateLogin}
                onSubmit={(values) => {
                  const loginObject = {
                    email: values.email,
                    password: values.password,
                  };

                  axios.post(`${base_url}/event-reg`, loginObject, {
                    headers: { 'Access-Control-Allow-Origin': '*' },
                  });
                }}
              >
                {(formik) => (
                  <Form
                    onSubmit={(e) => this.onSubmit(e)}
                    style={{ padding: '10px' }}
                  >
                    <Row>
                      <Col md>
                        <Form.Label id="field">Email Address</Form.Label>
                        <Form.Control
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          id="email"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md>
                        <Form.Label id="field">Password</Form.Label>
                        <Form.Control
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          type="password"
                          id="form-control"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ marginTop: '5%' }}>
                        <Button type="submit" id="Btn" onSubmit="user()">
                          LOGIN
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ marginTop: '9.5%' }}>
                        <p>
                          Have No account? <a href="#register">Sign Up</a>
                        </p>
                      </Col>
                    </Row>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </div>
      </>
    );
}
  

export default Login;
