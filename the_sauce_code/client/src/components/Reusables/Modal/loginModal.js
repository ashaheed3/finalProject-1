import Modal from 'react-bootstrap/Modal';
import { Button} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import {useState} from 'react';

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
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
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            The Sauce Code Login
             <Form>
                                              <Form.Group as={Row} controlId="formHorizontalEmail">
                                                  <Form.Label column sm={2}>
                                                  Username
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
                                              </Form>
                                         
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">Sign Up</Button>
          </Modal.Footer>
        </Modal>
       
                                             
      </div>
    );
  }
  
  render(<Login />);