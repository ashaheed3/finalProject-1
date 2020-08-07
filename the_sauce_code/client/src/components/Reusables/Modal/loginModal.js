import Modal from 'react-bootstrap/Modal';
import React from 'react';

const Modal = (props) => {

    return (
        <div className="modal fade" id={props.id} tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
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
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="sumbit" className="btn btn-secondary" data-dismiss="modal">Sign Up</button>
                                        </div> 
                                    </div>
                                </div>
                            </div>
    )
}

export default Modal;