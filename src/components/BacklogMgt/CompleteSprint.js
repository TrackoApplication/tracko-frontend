import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MDBCol } from 'mdb-react-ui-kit';

const SprintCompletion = () => {
  const [inactive, setInactive] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <div>

        <div className={`container ${inactive ? "inactive" : ""}`}>

          <Button 
            variant="primary" 
            className="rounded bg-[#231651] text-white border-none px-6 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#231651] ease-in-out" 
            onClick={handleShow}>
            Complete Sprint
          </Button>

        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header deleteButton>
                <Modal.Title>Complete Sprint</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form.Label>Complete Project 1 Sprint 1</Form.Label>
                <br /><br />
                <Form.Label>This sprint contains</Form.Label>
                <ul>
                    <li>0 completed values</li>
                    <li>0 open issues</li>
                </ul>
                <br />
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Move open issues to</Form.Label>
                    <Form.Select>
                        <option value="">--Select option--</option>
                        <option value="">Next sprint</option>
                        <option value="">Backlog</option>
                    </Form.Select>
                </Form.Group>
            </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" className='rounded bg-none text-black border-none font-semibold hover:underline hover:bg-white ' onClick={handleClose}>
            Cancel
            </Button>

            <Button variant="primary" className='rounded bg-[#231651] text-white border-none  font-semibold hover:bg-[#2a1670] ' onClick={handleClose}>
            Complete
            </Button>

        </Modal.Footer>

        </Modal>
            
        </div>
    </div>
  );
}

export default SprintCompletion;