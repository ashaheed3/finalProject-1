import React from "react";
import Modal from 'react-bootstrap/Modal';
import { Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import {useState} from 'react';

import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../actions/auth';

function Login({ login, isAuthenticated}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialFormData = Object.freeze({
    username: '',
    password: ''
  });

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const {
    username,
    password
  } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    login(
      username,
      password
    ).then((res) => console.log(res));
  };

  
  if (isAuthenticated) {
    return <Redirect to="/profilepage" />;
  }

    return (
      <div>
         <Button variant="primary" onClick={handleShow}>
         Login
      </Button>
      
  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >

          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h3>You've The Sauce Now</h3> 
             <Form>
                                              <Form.Group as={Row} controlId="formHorizontalEmail">
                                                  <Form.Label column sm={2}>
                                                  Username
                                                  </Form.Label>
                                                  <Col sm={10}>
                                                  <Form.Control
                                                   
                    name="username" onChange={handleChange} type="text" placeholder="Username" />
                                                  </Col>
                                              </Form.Group>
  
                                              <Form.Group as={Row} controlId="formHorizontalPassword">
                                                  <Form.Label column sm={2}>
                                                  Password
                                                  </Form.Label>
                                                  <Col sm={10}>
                  <Form.Control name='password' onChange={handleChange} type="password" placeholder="Password" />
                                                  </Col>
                                              </Form.Group>
                                              </Form>
                                         
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button id='btnModal' onClick={handleSubmit} variant="primary">Log in</Button>
          </Modal.Footer>
        </Modal>
       
                                             
      </div>
    );
  }
  
  Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  
  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps, { login })(Login);