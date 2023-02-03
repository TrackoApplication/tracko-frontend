import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MDBCol } from 'mdb-react-ui-kit';

const SprintDeletion = () => {
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
            Delete Sprint
          </Button>

        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header deleteButton>
                <Modal.Title>Delete Sprint</Modal.Title>
            </Modal.Header>

            <Modal.Body>Are you sure you want to delete Project 1 Sprint 1?</Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" className='rounded bg-none text-black border-none font-semibold hover:underline hover:bg-white ' onClick={handleClose}>
            Cancel
            </Button>

            <Button variant="primary" className='rounded bg-[#231651] text-white border-none  font-semibold hover:bg-[#2a1670] ' onClick={handleClose}>
            Delete
            </Button>

        </Modal.Footer>

        </Modal>
            
        </div>
    </div>
  );
}

export default SprintDeletion;
