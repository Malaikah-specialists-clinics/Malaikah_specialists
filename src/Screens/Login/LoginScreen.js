import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { base_url } from '../../Constants/index.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showPassword: false,
    };
  }
  // constructor(){
  //   super()
  //   this.state={
  //     showPassword:false
  //   }
  // }

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
      .post(`${base_url}/auth/login`, loginObject, {
        headers: { 'Access-Control-Allow-Origin': '*' },
      })

      .then((res) => {
        localStorage.setItem('access_token', res.data.access_token);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    this.props.history.push('/profile');
  }

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
                      id="form-control email"
                    />
                    <span id="EmailError"></span>
                  </Col>
                </Row>
                <Row>
                  <Col md>
                    <Form.Label id="field">Password</Form.Label>
                    <div className="password">
                      <Form.Control
                        name="password"
                        value={this.state.password}
                        onChange={this.changeHandler}
                        type={this.state.showPassword ? 'text' : 'password'}
                        id="form-control password"
                      />
                    </div>
                    <div className="span">
                      <span>
                        <img
                          src="/images/eye.png"
                          id="eye"
                          onClick={() =>
                            this.setState({
                              showPassword: !this.state.showPassword,
                            })
                          }
                          alt=""
                        />
                      </span>
                    </div>
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
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Login;
