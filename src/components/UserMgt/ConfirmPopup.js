import { delay } from "framer-motion";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import UserList from "./UserList";

const ConfirmPopup = (props) => {
  const multicCall = () => {
    props.deleteSystemUser(props.systemUserId);
    props.onHide();
  };

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this user? This action cannot be
          undone.
        </Modal.Body>
        <Modal.Footer>
          <btn className="btn btn-blue" onClick={props.onHide}>
            Close
          </btn>
          <btn className="btn btn-red" onClick={() => multicCall()}>
            Delete
          </btn>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ConfirmPopup;
