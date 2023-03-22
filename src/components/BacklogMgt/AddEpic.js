import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MDBCol } from 'mdb-react-ui-kit';

const AddEpic = () => {
    
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
              + Create Epic
              </Button>
  
            <Modal show={show} onHide={handleClose}>
  
              {/* header section */}
              <Modal.Header closeButton>
                <Modal.Title>Create Epic</Modal.Title>
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
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                          type="text"
                          placeholder="Name"
                          // autoFocus
                          />
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
                          <Form.Label>Reporter</Form.Label>
                          <Form.Select>
                            <option value="">Reporter</option>
                            <option value="">Ravindu Karunaweera</option>
                            <option value="">Yasiru Basura</option>
                            <option value="">Seefa Banu</option>
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
                          <Form.Label>Priority</Form.Label>
                          <Form.Select>
                            <option value="">Priority</option>
                            <option value="">Low</option>
                            <option value="">Med</option>
                            <option value="">High</option>
                          </Form.Select>
                          </Form.Group>
                      
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label>Issue </Form.Label>
                          <Form.Select placeholder="Enter Issue type">
                            <option value="">Select the issue </option>
                            <option value="">Issue 01</option>
                            <option value="">Issue 02</option>
                            <option value="">Issue 03</option>
                          </Form.Select>
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
                          <Form.Label>Story points</Form.Label>
                          <Form.Control
                          type="number"
                          // placeholder="name@example.com"
                          // autoFocus
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

export default AddEpic