import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Sidebar from '../SideBar/Sidebar';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MDBCol,MDBRow } from 'mdb-react-ui-kit';

const Backlog = () => {
  const [inactive, setInactive] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <div>

        <div className={`container ${inactive ? "inactive" : ""}`}>
            
            {/* <h1>Backlog</h1>
            <br></br>
            <button> + Create issue</button> */}

            <Button 
            variant="primary" 
            className="rounded bg-[#231651] text-white border-none px-6 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#231651] ease-in-out" 
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
              <Form>
                <MDBCol>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Project</Form.Label>
                        <Form.Control
                            type="Projectname"
                            // placeholder="Jhon"
                            autoFocus
                            // required
                        />
                        </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Issue type</Form.Label>
                        <Form.Control
                            type="issuetype"
                            // placeholder="Dee"
                            autoFocus
                        />
                        </Form.Group>
                
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Summary</Form.Label>
                        <Form.Control
                        type="summary"
                        // placeholder="JhonDee999"
                        autoFocus
                        />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                        type="description"
                        // placeholder="name@example.com"
                        autoFocus
                        />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Assignee</Form.Label>
                        <Form.Control
                        type="assignee"
                        // placeholder="name@example.com"
                        autoFocus
                        />
                        </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Sprint</Form.Label>
                        <Form.Control
                        type="sprint"
                        // placeholder="name@example.com"
                        autoFocus
                        />
                        </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Epic</Form.Label>
                        <Form.Control
                        type="epic"
                        // placeholder="name@example.com"
                        autoFocus
                        />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label></Form.Label>
                        <Form.Control
                        type="epic"
                        // placeholder="name@example.com"
                        autoFocus
                        />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Requirement of testing</Form.Label>
                        <Form.Control
                        type="reqoftesting"
                        // placeholder="name@example.com"
                        autoFocus
                        />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Story point estimate for developing</Form.Label>
                        <Form.Control
                        type="devstorypoint"
                        // placeholder="name@example.com"
                        autoFocus
                        />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Story point estimate for testing</Form.Label>
                        <Form.Control
                        type="qastorypoint"
                        // placeholder="name@example.com"
                        autoFocus
                        />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Total estimated story point</Form.Label>
                        <Form.Control
                        type="totalstorypoint"
                        // placeholder="name@example.com"
                        autoFocus
                        />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Story point estimate for testing</Form.Label>
                        <Form.Control
                        type="qastorypoint"
                        // placeholder="name@example.com"
                        autoFocus
                        />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Priority</Form.Label>
                        <Form.Control
                        type="priority"
                        // placeholder="name@example.com"
                        autoFocus
                        />
                        </Form.Group>
                        
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Reporter</Form.Label>
                        <Form.Control
                        type="reporter"
                        // placeholder="name@example.com"
                        autoFocus
                        />
                        </Form.Group>
                           
                </MDBCol>
              </Form>
            </Modal.Body>

            {/* button section */}
            <Modal.Footer>

              <Button variant="secondary" className='rounded bg-none text-black border-none font-semibold hover:underline hover:bg-white ' onClick={handleClose}>
                Cancel
              </Button>

              <Button variant="primary" className='rounded bg-[#231651] text-white border-none  font-semibold hover:bg-[#2a1670] ' onClick={handleClose}>
                Create
              </Button>

            </Modal.Footer>
          </Modal>
            
        </div>
    </div>
  );
}

export default Backlog;