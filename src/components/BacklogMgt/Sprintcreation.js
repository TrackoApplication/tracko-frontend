import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MDBCol } from 'mdb-react-ui-kit';

const SprintCreation = () => {
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
            Create Sprint
            </Button>

          <Modal show={show} onHide={handleClose}>

            {/* header section */}
            <Modal.Header closeButton>
              <Modal.Title>Start Sprint</Modal.Title>
            </Modal.Header>

            {/* body section */}
            <Modal.Body>
              <Form>
                <MDBCol>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Sprint name</Form.Label>
                        <Form.Control
                            type="sprintname"
                            // placeholder="Jhon"
                            autoFocus
                            // required
                        />

                        </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Duration</Form.Label>
                        <Form.Control
                            type="duration"
                            // placeholder="Dee"
                            // autoFocus
                        />
                        </Form.Group>
                
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Start date</Form.Label>
                        <Form.Control
                        type="s-date"
                        // placeholder="JhonDee999"
                        // autoFocus
                        />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>End date</Form.Label>
                        <Form.Control
                        type="e-date"
                        // placeholder="name@example.com"
                        // autoFocus
                        />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Sprint Goal</Form.Label>
                        <Form.Control
                        type="goal"
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

export default SprintCreation;