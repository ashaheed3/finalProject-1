import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import API from '../../../utils/API';

// redux
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../../actions/alert';
import { register } from '../../../actions/auth';
import PropTypes from 'prop-types';

function SignUp({ register, isAuthenticated }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialFormData = Object.freeze({
    firstName: '',
    lastName: '',
    username: '',
    emailAddress: '',
    password: '',
    mealPreferences: '',
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
    firstName,
    lastName,
    username,
    emailAddress,
    password,
    mealPreferences,
  } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const preferences = mealPreferences;
    register({
      firstName,
      lastName,
      username,
      emailAddress,
      password,
      preferences,
    }).then((res) => console.log(res));
  };

  if (isAuthenticated) {
    return <Redirect to='/profilepage' />;
  }

  return (
    <div>
      <Button variant='primary' onClick={handleShow}>
        Sign Up
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>You've The Sauce Now</h3>
          <Form>
            <Form.Group as={Row} controlId='formHorizontalEmail'>
              <Form.Label column sm={2}>
                First Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  name='firstName'
                  onChange={handleChange}
                  type='text'
                  placeholder='First Name'
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId='formHorizontalPassword'>
              <Form.Label column sm={2}>
                Last Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  name='lastName'
                  onChange={handleChange}
                  type='text'
                  placeholder='Last Name'
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId='formHorizontalPassword'>
              <Form.Label column sm={2}>
                Username
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  name='username'
                  onChange={handleChange}
                  type='text'
                  placeholder='username'
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId='formHorizontalEmail'>
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  name='emailAddress'
                  onChange={handleChange}
                  type='email'
                  placeholder='Email'
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId='formHorizontalPassword'>
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  name='password'
                  onChange={handleChange}
                  type='password'
                  placeholder='Password'
                />
              </Col>
            </Form.Group>

            <Form.Group controlId='exampleForm.ControlSelect2'>
              <Form.Label>Meal Preferences</Form.Label>
              <Form.Control
                as='select'
                multiple
                name='mealPreferences'
                onChange={handleChange}
              >
                <option>Gluten Free</option>
                <option>Keto</option>
                <option>Lacoto-Vegan</option>
                <option>Ovo-Vegetarian</option>
                <option>Vegetarian</option>
                <option>Primal</option>
                <option>Whole 30</option>
                <option>Pescatarian</option>
                <option>Vegan</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button id='btnModal' onClick={handleSubmit} variant='primary'>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(SignUp);
