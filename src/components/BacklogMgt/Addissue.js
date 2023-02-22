import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MDBCol } from 'mdb-react-ui-kit';

const AddIssue = () => {
  const [inactive, setInactive] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <div>

        <div className={`container ${inactive ? "inactive" : ""}`}>

            <Button 
            variant="link" 
            className="text-black border-none font-semibold text-decoration-none" 
            onClick={handleShow}>
            + Create Issue
            </Button>

          <Modal show={show} onHide={handleClose}>

            {/* header section */}
            <Modal.Header closeButton>
              <Modal.Title>Create Issue</Modal.Title>
            </Modal.Header>

            {/* body section */}
            <Modal.Body>
              <Form style={{overflowY:"scroll", height:"350px"}}>
                <MDBCol>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Project</Form.Label>
                        <Form.Select>
                          <option value="">Select the project</option>
                          <option value="">Project 1</option>
                          <option value="">Project 2</option>
                          <option value="">Project 3</option>
                        </Form.Select>
                        </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Issue type</Form.Label>
                        <Form.Select placeholder="Enter Issue type">
                          <option value="">Select the issue type</option>
                          <option value="">Issue</option>
                          <option value="">Bug</option>
                          <option value="">QA</option>
                        </Form.Select>
                        </Form.Group>
                
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Summary</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Summary"
                        // autoFocus
                        />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                        as="textarea" rows={5}
                        placeholder="Description"
                        // autoFocus
                        />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Assignee</Form.Label>
                        <Form.Select>
                          <option value="">Assignee</option>
                          <option value="">Ravindu Karunaweera</option>
                          <option value="">Yasiru Basura</option>
                          <option value="">Seefa Banu</option>
                        </Form.Select>
                        </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Sprint</Form.Label>
                        <Form.Select>
                          <option value="">Select the sprint</option>
                          <option value="">Sprint 1</option>
                          <option value="">Sprint 2</option>
                          <option value="">Sprint 3</option>
                        </Form.Select>
                        </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Epic</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Epic name"
                        // autoFocus
                        />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Requirement of testing</Form.Label>
                        <Form.Select>
                          <option value="">Select requirement of testing</option>
                          <option value="">Yes</option>
                          <option value="">No</option>
                        </Form.Select>
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Story point estimate for developing</Form.Label>
                        <Form.Control
                        type="number"
                        // placeholder="name@example.com"
                        // autoFocus
                        />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Story point estimate for testing</Form.Label>
                        <Form.Control
                        type="number"
                        // placeholder="name@example.com"
                        // autoFocus
                        />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Total estimated story point</Form.Label>
                        <Form.Control
                        type="number"
                        // placeholder="name@example.com"
                        // autoFocus
                        />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Priority</Form.Label>
                        <Form.Select>
                          <option value="">Select the priority</option>
                          <option value="">High</option>
                          <option value="">Medium</option>
                          <option value="">Low</option>
                        </Form.Select>
                        </Form.Group>
                        
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Reporter</Form.Label>
                        <Form.Select>
                          <option value="">Reporter</option>
                          <option value="">Reporter 1</option>
                          <option value="">Reporter 2</option>
                          <option value="">Reporter 3</option>
                        </Form.Select>
                        </Form.Group>
                           
                </MDBCol>
              </Form>
            </Modal.Body>

            {/* button section */}
            <Modal.Footer>

              <Button variant="secondary" className='rounded bg-none text-black border-none font-semibold hover:underline hover:bg-white ' onClick={handleClose}>
                Cancel
              </Button>

              <Button variant="primary" className='rounded bg-[#1e90ff] text-white border-none  font-semibold hover:bg-[#1e90ff] ' onClick={handleClose}>
                Create
              </Button>

            </Modal.Footer>
          </Modal>
            
        </div>
    </div>
  );
}

export default AddIssue;