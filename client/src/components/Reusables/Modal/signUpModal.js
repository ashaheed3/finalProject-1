import Modal from 'react-bootstrap/Modal';
import { Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import React, {useState} from 'react';



function SignUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >

        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
           <Form>
                                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                                <Form.Label column sm={2}>
                                                First Name
                                                </Form.Label>
                                                <Col sm={10}>
                                                <Form.Control type="email" placeholder="Email" />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                                <Form.Label column sm={2}>
                                                Last Name
                                                </Form.Label>
                                                <Col sm={10}>
                                                <Form.Control type="password" placeholder="Password" />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                                <Form.Label column sm={2}>
                                                Email
                                                </Form.Label>
                                                <Col sm={10}>
                                                <Form.Control type="email" placeholder="Email" />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                                <Form.Label column sm={2}>
                                                Password
                                                </Form.Label>
                                                <Col sm={10}>
                                                <Form.Control type="password" placeholder="Password" />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group controlId="exampleForm.ControlSelect2">
                                                <Form.Label>Meal Preferences</Form.Label>
                                                <Form.Control as="select" multiple>
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Sign Up</Button>
        </Modal.Footer>
      </Modal>
     
                                           
    </div>
  );
}


export default SignUp;