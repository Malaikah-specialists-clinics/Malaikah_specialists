import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { base_url } from '../Constants/index.js';
import { withRouter } from 'react-router-dom';
// import { Formik } from 'formik';

// import * as Yup from 'yup';

// const registerSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   email: Yup.string()
//     .min(2, 'Too Short!')
//     .email('Invalid email')
//     .required('Required'),
//   phoneNumber: Yup.string()
//     .min(9, 'TooShort!')
//     .max(16, 'Too Long!')
//     .required('Required'),
//   dob: Yup.string().required('Required'),
//   gender: Yup.string().required('Required'),
//   location: Yup.string()
//     .min(2, 'Too Short!')
//     .max(10, 'Too Long')
//     .required('Required'),
//   password: Yup.string()
//     .min(3, 'Too short!')
//     .max(10, 'Too Long!')
//     .required('Required'),
// });

// const initialValues = {
//   name: '',
//   email: '',
//   phoneNumber: '',
//   dob: '',
//   gender: '',
//   location: '',
//   password: '',
// };

// function validateEmail(value) {
//   let error;
//   if (!value) {
//     error = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
//     error = 'Invalid email address';
//   }
//   return error;
// }

class Register extends Component {
  // const initialValues = { name: '', email: '', phoneNumber: '',  dob: '', gender: '', location: '',  password: ''}
  // const [formValues, setFormValues]= useState(initialValues)

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      dob: '',
      gender: '',
      location: '',
      password: '',
      // confirmPassword: '',
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitData(e) {
    e.preventDefault();
    const {name, email, phoneNumber, dob, gender, location, password} = this.state
    const userObject = {
      name,
      email,
      phoneNumber,
      dob,
      gender,
      location,
      password,
      // confirmPassword: this.state.confirmPassword
    };
    // if()

    axios
      .post(`${base_url}/users`, userObject)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        // FormikHelpers.setSubmitting(false);
      });
    this.props.history.push('/login');
  }

  // submitData=(values, {setSubmitting})=> {
  //   axios
  //     .post(`${base_url}/users`, values)

  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   this.props.history.push('/login');
  // }

  render() {
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
              <h2 style={{ marginTop: '40px', textAlign: 'center' }}>
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
              {/* <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={
                  
                  this.submitData}
              >
                {({ values, errors, touched, isValidating, isSubmitting }) => ( */}
                  <Form
                    // onSubmit={(e) => this.onSubmit(e)}
                    style={{ padding: '10px' }}
                  >
                    <Row>
                      <Col md>
                        <Form.Label id="field">Full Names</Form.Label>
                        <Form.Control
                          name="name"
                          type="text"
                          id="form-control"
                          value={this.state.name}
                          onChange={this.changeHandler}
                        />
                        {/* {errors.name && touched.name ? (
                          <div>{errors.name}</div>
                        ) : null} */}
                      </Col>
                      <Col md className="inputField">
                        <Form.Label id="field">Email Address</Form.Label>
                        <Form.Control
                          // validate={validateEmail}
                          // type="email"
                          name="email"
                          id="form-control"
                          value={this.state.email}
                          onChange={this.changeHandler}
                        />
                        {/* {errors.email && touched.email ? (
                          <div>{errors.email}</div>
                        ) : null} */}
                      </Col>
                    </Row>
                    <Row>
                      <Col md>
                        <Form.Label id="field">Phone number</Form.Label>
                        <Form.Control
                          name="phoneNumber"
                          id="form-control"
                          value={this.state.phoneNumber}
                          onChange={this.changeHandler}
                        />
                        {/* {errors.phoneNumber && touched.phoneNumber ? (
                          <div>{errors.phoneNumber}</div>
                        ) : null} */}
                      </Col>
                      <Col md>
                        <Form.Label id="field">Date of birth</Form.Label>
                        <Form.Control
                          name="dob"
                          id="form-control"
                          value={this.state.dob}
                          onChange={this.changeHandler}
                        />
                        {/* {errors.dob && touched.dob ? (
                          <div>{errors.dob}</div>
                        ) : null} */}
                      </Col>
                    </Row>
                    <Row>
                      <Col md>
                        <Form.Label id="field">Gender</Form.Label>
                        <Form.Select
                          name="gender"
                          id="form-control"
                          value={this.state.gender}
                          onChange={this.changeHandler}
                        >
                          <option>Select Gender</option>
                          <option value="1">Female</option>
                          <option value="2">Male</option>
                          <option value="3">Prefer not to say</option>
                        </Form.Select>
                        {/* {errors.gender && touched.gender ? (
                          <div>{errors.gender}</div>
                        ) : null} */}
                      </Col>
                      <Col md>
                        <Form.Label id="field">Location</Form.Label>
                        <Form.Control
                          name="location"
                          type="text"
                          id="form-control"
                          value={this.state.location}
                          onChange={this.changeHandler}
                        />
                        {/* {errors.location && touched.location ? (
                          <div>{errors.location}</div>
                        ) : null} */}
                      </Col>
                    </Row>
                    <Row>
                      <Col md>
                        <Form.Label id="field">Password</Form.Label>
                        <Form.Control
                          name="password"
                          type="password"
                          id="form-control"
                          value={this.state.password}
                          onChange={this.changeHandler}
                        />
                        {/* {errors.password && touched.password ? (
                          <div>{errors.password}</div>
                        ) : null} */}
                      </Col>
                      {/* <Col md>
                    <Form.Label id="field">Confirm Password</Form.Label>
                    <Form.Control
                      name="confirmPassword"
                      type="password"
                      id="form-control"
                      value={this.state.confirmPassword}
                      onChange={this.changeHandler}
                    />
                  </Col> */}
                    </Row>
                    <Row>
                      <Col style={{ marginTop: '5%' }}>
                        <Button type="submit" id="Btn">
                          REGISTER
                        </Button>
                      </Col>
                      <Col style={{ marginTop: '9.5%' }}>
                        <p>
                          Already have an account? <a href="#login">Sign in</a>
                        </p>
                      </Col>
                    </Row>
                  </Form>
                {/* )} */}
              {/* </Formik> */}
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default withRouter(Register);
