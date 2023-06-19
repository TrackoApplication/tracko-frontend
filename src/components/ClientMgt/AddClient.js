import React, { useState } from "react";

import { navigate, useNavigate } from "react-router-dom";

import ClientService from "../../Services/ClientService";

import SuccessfulAction from "../CommonComponents/SuccessfulAction";

import Button from "react-bootstrap/Button";
import { FormControl } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";

const AddClient = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [errors, setErrors] = useState({});
    const handleShow = () => setShow(true);
  const [showSuccess, onCancel, setShowSuccess] = useState(false);

  const [client, setClient] = useState({
    id: "",

    clientName: "",

    contactPerson: "",

    emailId: "",

    description: "",
  });



  const setField = (field, value) => {
    setClient({
      ...client,
      [field]: value,
    });
  };
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;

    setClient({ ...client, [e.target.name]: value });
  };

  const validateForm = () => {
    if (!client.clientName || client.clientName.length > 30) {
      alert("Client Name is required and must not exceed 30 characters.");

      return false;
    }

    if (!/^[A-Za-z ]+$/.test(client.contactPerson)) {
      alert(
        "Contact Person is required and must contain only English letters."
      );

      return false;
    }

    if (!/\S+@\S+\.\S+/.test(client.emailId)) {
      alert("Email ID is required and must be a valid email address.");

      return false;
    }

    if (!client.description) {
      alert("Description is required.");

      return false;
    }

    return true;
  };

  const saveClient = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const confirmation = window.confirm(
      "Are you sure you want to save this client?"
    );

    if (!confirmation) {
      return;
    }

    ClientService.saveClient(client)

      .then((response) => {
        navigate("/clientList");
      })

      .catch((error) => {
        console.log(error);
      });

    setShowSuccess(true);
  };

  const reset = (e) => {
    e.preventDefault();

    setClient({
      id: "",

      clientName: "",

      contactPerson: "",

      emailId: "",

      description: "",
    });
  };

  return (
    <div>
      <Button
        variant="primary"
        onClick={handleShow}


        className="rounded bg-[#231651] text-white border-none px-6 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#231651]  ease-in-out"
      >
        Add Client
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <MDBRow>
              <MDBCol>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Client Name</Form.Label>
                  <Form.Control
                    type="Name"
                    name="clientName"
                    value={client.clientName}
                    required
                    onChange={(e) => setField("projectName", e.target.value)}
                    isInvalid={!!errors.clientName}
                    //onChange={(e) => handleChange(e)}
             
                    autoFocus
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    className="invalidfeedback"
                  >
                    {errors.projectName}
                  </Form.Control.Feedback>
                </Form.Group>
              </MDBCol>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="Text"
                  placeholder="..........."
                  name="description"
                  value={client.description}
                  // onChange={(e) => handleChange(e)}
                  autoFocus
                  required
                  onChange={(e) => setField("description", e.target.value)}
                  isInvalid={!!errors.description}
                />
                <Form.Control.Feedback
                  type="invalid"
                  className="invalidfeedback"
                >
                  {errors.description}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Contact person</Form.Label>
                <Form.Control
                  type="Text"
                  placeholder="..........."
                  name="contactperson"
                  value={client.description}
                  // onChange={(e) => handleChange(e)}
                  autoFocus
                  required
                  onChange={(e) => setField("contactPerson", e.target.value)}
                  isInvalid={!!errors.description}
                />
                <Form.Control.Feedback
                  type="invalid"
                  className="invalidfeedback"
                >
                  {errors.contactperson}
                </Form.Control.Feedback>
              </Form.Group>

            </MDBRow>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="rounded bg-none text-black border-none font-semibold hover:underline hover:bg-white "
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="rounded bg-[#231651] text-white border-none  font-semibold hover:bg-[#2a1670] "
            onClick={saveClient}
          >
            Create Project
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddClient;
