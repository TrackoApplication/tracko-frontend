// import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../Issue/IssueDeleteConfirmation.css";

const IssueDeleteConfirmation = (props) => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);

  const CallDelete = () => {
    props.deleteSprintIssue(props.sprintIssueId);
    props.onHide();
  };

  return (
    <div>
      {/* delete confirmation modal */}
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header deleteButton className="dhd">
          <Modal.Title className="dmt">Delete Issue</Modal.Title>
        </Modal.Header>

        {/* warning message */}
        <Modal.Body className="delbody">
          Are you sure you want to delete the Issue?
        </Modal.Body>

        <Modal.Footer>
          {/* deleting the issue */}
          <Button
            variant="primary"
            className="rounded bg-[#ff0000] text-white border-none  font-semibold hover:bg-[#ff0000] "
            onClick={() => CallDelete()}
          >
            Delete
          </Button>

          {/* canceling the deletion */}
          <Button
            variant="secondary"
            className="rounded bg-none text-black border-none font-semibold hover:underline hover:[#C0CCC3] "
            onClick={props.onHide}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default IssueDeleteConfirmation;
