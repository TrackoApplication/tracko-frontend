import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MDBCol } from 'mdb-react-ui-kit';

const Childissue = () => {
  const [inactive, setInactive] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <div>

        <div className={`container ${inactive ? "inactive" : ""}`}>

          <Button 
            variant="primary" 
            className="rounded bg-[#1e90ff] text-white border-none px-3 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#1e90ff] ease-in-out" 
            onClick={handleShow}>
            Issue 1
          </Button>

          <Modal show={show} onHide={handleClose}>

            {/* header section */}
            <Modal.Header closeButton>
              <Modal.Title>Create Child Issue</Modal.Title>
            </Modal.Header>

            {/* body section */}
            <Modal.Body>
              <Form>
                <MDBCol>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='star'>Project</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Project"
                            autoFocus
                            // required
                        />
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='star'>Issue Type</Form.Label>
                        <Form.Select>
                          <option value="">--Issue Type--</option>
                          <option value="">Bug</option>
                          <option value="">Issue</option>
                          <option value="">2 weeks</option>
                        </Form.Select>
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='star'>Summary</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Project"
                            autoFocus
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea" rows={5}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Assignee</Form.Label>
                        <Form.Select>
                          <option value="">--Assignee--</option>
                          <option value="">Tom</option>
                          <option value="">Jerry</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Sprint</Form.Label>
                        <Form.Select>
                          <option value="">--Sprint--</option>
                          <option value="">Sprint 1</option>
                          <option value="">Sprint 2</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Epic</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Epic"
                            autoFocus
                            // required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='star'>Requirement of testing</Form.Label>
                        <Form.Select>
                          <option value="">Yes</option>
                          <option value="">No</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Story point estimate for Developing</Form.Label>
                        <Form.Control
                            type="text"
                            autoFocus
                            // required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Story point estimate for Testing</Form.Label>
                        <Form.Control
                            type="text"
                            autoFocus
                            // required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Total Estimated Story points</Form.Label>
                        <Form.Control
                            type="text"
                            autoFocus
                            // required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Priority</Form.Label>
                        <Form.Control
                            type="text"
                            autoFocus
                            // required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Reporter</Form.Label>
                        <Form.Select>
                          <option value="">Tom</option>
                          <option value="">Jerry</option>
                        </Form.Select>
                    </Form.Group>
                           
                </MDBCol>
              </Form>
            </Modal.Body>

            {/* button section */}
            <Modal.Footer>
              <Button variant="primary" className='rounded bg-[#1e90ff] text-white border-none  font-semibold hover:bg-[#1e90ff] ' onClick={handleClose}>
                Create
              </Button>

              <Button variant="secondary" className='rounded bg-none text-black border-none font-semibold hover:underline hover:bg-white ' onClick={handleClose}>
                Cancel
              </Button>

            </Modal.Footer>
          </Modal>
            
        </div>
        <div>
            
        </div>
    </div>
  );
}

export default Childissue; 