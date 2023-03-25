import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MDBCol,MDBRow } from 'mdb-react-ui-kit';

const AddProject = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
      return (
        <>
          <Button 
          variant="primary" 
          className="rounded bg-[#231651] text-white border-none px-6 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#231651] ease-in-out" 
          onClick={handleShow}>
            Add Project
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <MDBRow>
                  <MDBCol>
                    
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Project Name</Form.Label>
                            <Form.Control
                                type="Name"
                                placeholder="Return 0 Software Project"
                                autoFocus
                            />
                            </Form.Group>
                    </MDBCol>
                    
                
                <MDBCol>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Key</Form.Label>
                  <Form.Control
                    type="Number"
                    placeholder="3329"
                    autoFocus
                  />
                  </Form.Group>

                  </MDBCol>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="Text"
                    placeholder="..........."
                    autoFocus
                  />             
                </Form.Group>

                </MDBRow>
                

                <Form.Label>Client</Form.Label>
                  <Form.Control
                    type="Name"
                    placeholder="Creative Software"
                    autoFocus
                  />
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Project Lead</Form.Label>
                        <Form.Select>
                          <option value="">Assignee</option>
                          <option value="">Ravindu Karunaweera</option>
                          <option value="">Yasiru Basura</option>
                          <option value="">Seefa Banu</option>
                        </Form.Select>
                        </Form.Group>
              </Form>
           

              
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" className='rounded bg-none text-black border-none font-semibold hover:underline hover:bg-white ' onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" className='rounded bg-[#231651] text-white border-none  font-semibold hover:bg-[#2a1670] ' onClick={handleClose}>
                Create Project
              </Button>
            </Modal.Footer>
          </Modal>
        </>
   
  )
}
    
  
export default AddProject