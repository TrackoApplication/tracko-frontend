import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import Dropdown from "react-bootstrap/Dropdown";
import AccessGroupService from "../../Services/AccessGroupService";

const EditGroup = () => {
  const [selectedValuesMember, setSelectedValuesMember] = useState([]);
  const [selectedValuesAccess, setSelectedValuesAccess] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);

    const [peopleOption, setPeopleOption] = useState([]);

  const handleCheckboxChangeMember = (e) => {
    const { value } = e.target;
    setSelectedValuesMember((prevSelectedValuesMember) => {
      // Toggle the value in the array
      if (prevSelectedValuesMember.includes(value)) {
        return prevSelectedValuesMember.filter((val) => val !== value);
      } else {
        return [...prevSelectedValuesMember, value];
      }
    });
  };

  const handleCheckboxChangeAccess = (e) => {
    const { value } = e.target;
    setSelectedValuesAccess((prevSelectedValuesAccess) => {
      // Toggle the value in the array
      if (prevSelectedValuesAccess.includes(value)) {
        return prevSelectedValuesAccess.filter((val) => val !== value);
      } else {
        return [...prevSelectedValuesAccess, value];
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await AccessGroupService.getPeopleList();
        setPeopleOption(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Button
        variant="primary"
        className="rounded bg-[#231651] text-white border-none px-6 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#231651] ease-in-out my-0"
        onClick={handleShow}
      >
        Edit Group
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <MDBRow>
              <MDBCol>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Group Name</Form.Label>
                  <Form.Control
                    type="Name"
                    placeholder="Team members"
                    autoFocus
                    disabled
                  />
                </Form.Group>
              </MDBCol>
            </MDBRow>

            <Form.Group className="mb-3" controlId="multiSelect1">
              <Form.Label>Add Member</Form.Label>
              <Form.Control
                as="select"
                multiple
                value={selectedValuesMember}
                onChange={handleCheckboxChangeMember}
              >
                {peopleOption.map((peopleOptions) => (
                  <option
                    key={peopleOptions.peopleId}
                    value={peopleOptions.peopleName}
                  >
                    {peopleOptions.peopleName}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <div className="border p-2 my-2 bg-gray-100 rounded ">
              <h3>Selected Members:</h3>
              {selectedValuesMember.length > 0 ? (
                <ul>
                  {selectedValuesMember.map((value) => (
                    <p key={value}>{value}</p>
                  ))}
                </ul>
              ) : (
                <p>No Members selected</p>
              )}
            </div>

            <Form.Group className="mb-3" controlId="multiSelect2">
              <Form.Label>Add Access</Form.Label>
              <Form.Control
                as="select"
                multiple
                value={selectedValuesAccess}
                onChange={handleCheckboxChangeAccess}
              >
                <option>Create backlog</option>
                <option>Create forum</option>
                <option>Delete sprint</option>
                <option>delete issue</option>
              </Form.Control>
            </Form.Group>
            <div className="border p-2 my-2 bg-gray-100 rounded ">
              <h3>Selected Access:</h3>
              {selectedValuesAccess.length > 0 ? (
                <ul>
                  {selectedValuesAccess.map((value) => (
                    <p key={value}>{value}</p>
                  ))}
                </ul>
              ) : (
                <p>No Access selected</p>
              )}
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="rounded bg-none text-black border-none font-semibold hover:underline hover:bg-white "
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            variant="primary"
            className="rounded bg-[#231651] text-white border-none  font-semibold hover:bg-[#2a1670] "
            onClick={handleClose}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditGroup;
