import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const SprintCompletion = () => {
  const [inactive, setInactive] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <Button
          variant="Success"
          className="rounded bg-[#1e90ff] text-white border-none px-3 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#1e90ff] ease-in-out"
          onClick={handleShow}
        >
          Complete Sprint
        </Button>

        {/* <MDBBadge color='secondary' rounded-circle>0</MDBBadge>
          <MDBBadge color='primary' rounded-circle>0</MDBBadge>
          <MDBBadge color='success' rounded-circle>2</MDBBadge> */}

        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header deleteButton>
            <Modal.Title>Complete Sprint</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Label>Complete Project 1 Sprint 1</Form.Label>
            <br />
            <br />
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
            <Button
              variant="primary"
              className="rounded bg-[#1e90ff] text-white border-none  font-semibold hover:bg-[#1e90ff] "
              onClick={handleClose}
            >
              Complete Sprint
            </Button>

            <Button
              variant="secondary"
              className="rounded bg-none text-black border-none font-semibold hover:underline hover:bg-[#C0CCC3] "
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default SprintCompletion;
