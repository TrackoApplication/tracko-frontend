import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const SprintCompletion = () => {
  const [inactive] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <Button
          variant="secondary"
          className="rounded bg-[#228b22] text-white border-none px-3 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#228b22] ease-in-out"
          onClick={handleShow}
        >
          Complete Sprint
        </Button>

        {/* sprint completion modal */}
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header deleteButton className="bg-[#1F456E] text-white">
            <Modal.Title className="mt">Complete Sprint</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Label className="flabel">
              Complete Project 1 Sprint 1
            </Form.Label>
            <br />
            <br />
            <Form.Label className="flabel">This sprint contains</Form.Label>
            {/* add the options to move issues when completing a sprint */}
            <ul>
              <li>0 completed values</li>
              <li>0 open issues</li>
            </ul>
            <br />
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Move open issues to</Form.Label>
              {/* example options: Next sprint, Backlog */}
              <Form.Select className="sitem">
                <option disabled value="">
                  --Select option--
                </option>
                <option value="">Backlog</option>
              </Form.Select>
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="primary"
              className="rounded bg-[#1F456E] text-white border-none  font-semibold hover:bg-[#1F456E] "
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
