import React, { Component} from 'react';
import { Row, Col, Form, Button} from "react-bootstrap";
import axios from 'axios';
// import { useFormik } from 'formik';
// import { Formik } from 'formik';
import { base_url } from '../Constants/index.js';

// import * as Yup from 'yup';
// import { LinkContainer } from 'react-router-bootstrap';

 

class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  //  const { handleChange, handleSubmit, values } = useFormik({ 
  // initialValues: { email: '', password: '' },
  // onSubmit: (values) =>
  //   alert(`Email: ${values.email}, Password: ${values.password}`),
  // });
 

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };


   onSubmit(e) {
    e.preventDefault();
  
    const loginObject = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post(`${base_url}/users/login`, loginObject, {
        headers: { 'Access-Control-Allow-Origin': '*' },
      })

      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      this.props.history.push('/bookappts');
      
  }
 
  render(){
    return (
      <>
        <div
          className="formcontent"
          style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <Row>
            <Col md>
              <h2 style={{ marginTop: '40px', textAlign: 'center' }}>Login</h2>
              <div id="pic">
                <img
                  src="/images/doc.jpg"
                  alt="care"
                  width="500px"
                  height="340px"
                />
              </div>
            </Col>
            {/* <Formik initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={()=> {
              navigate('/users/login')
            }} */}
            {/* > */}
            <Col md sm={6} className="form">
              <Form
                onSubmit={(e) => this.onSubmit(e)}
                style={{ padding: '10px' }}
              >
                <Row>
                  <Col md>
                    <Form.Label id="field">Email Address</Form.Label>
                    <Form.Control
                      name="email"
                      value={this.state.email}
                      onChange={this.changeHandler}
                      // onChangeText={handleChange('email')}
                      id="form-control"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md>
                    <Form.Label id="field">Password</Form.Label>
                    <Form.Control
                      name="password"
                      value={this.state.password}
                      onChange={this.changeHandler}
                      // onChangeText={handleChange('password')}
                      type="password"
                      id="form-control"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col style={{ marginTop: '5%' }}>
                    <Button type="submit"
                    // onPress={handleSubmit}
                     id="Btn">
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
            </Col>
          {/* </Formik>   */}
          </Row>
        </div>
      </>
    );
  }
  }
  

export default Login;
