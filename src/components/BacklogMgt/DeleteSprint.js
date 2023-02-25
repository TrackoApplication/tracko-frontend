import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MDBBadge} from 'mdb-react-ui-kit';

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
            className="rounded bg-[#ff0000] text-white border-none px-3 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#ff0000] ease-in-out" 
            onClick={handleShow}>
            Delete Sprint
          </Button>

          {/* <MDBBadge color='secondary' rounded-circle>2</MDBBadge>
          <MDBBadge color='primary' rounded-circle>0</MDBBadge>
          <MDBBadge color='success' rounded-circle>0</MDBBadge> */}

          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header deleteButton>
                <Modal.Title>Delete Sprint</Modal.Title>
            </Modal.Header>

            <Modal.Body>Are you sure you want to delete Project 1 Sprint 1?</Modal.Body>

          <Modal.Footer>
            <Button variant="primary" className='rounded bg-[#ff0000] text-white border-none  font-semibold hover:bg-[#ff0000] ' onClick={handleClose}>
            Delete
            </Button>

            <Button variant="secondary" className='rounded bg-none text-black border-none font-semibold hover:underline hover:[#C0CCC3] ' onClick={handleClose}>
            Cancel
            </Button>

        </Modal.Footer>

        </Modal>
            
        </div>
    </div>
  );
}

export default SprintDeletion;
