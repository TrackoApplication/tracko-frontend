import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import Dropdown from "react-bootstrap/Dropdown";
import AccessGroupService from "../../Services/AccessGroupService"; 
import './Group.css'
import SuccessfulAction from "../CommonComponents/SuccessfulAction";


const EditGroup = (props) => {
const [showSuccess, setShowSuccess] = useState(false);
  const { id, groupName } = props;
  const [selectedValuesMember, setSelectedValuesMember] = useState([]);
  const [selectedValuesAccess, setSelectedValuesAccess] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);

  const [peopleOption, setPeopleOption] = useState([]);
  const [accessOption, setAccessOption] = useState([]);

  const handleCheckboxChangeMember = (e) => {
    const { options } = e.target;
    const selectedValues = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
  
    setSelectedValuesMember(selectedValues);
    console.log(selectedValues);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    const data = {
      systemUserId: selectedValuesMember,
      accessId: selectedValuesAccess,
    };
    console.log(data);
    try {
      const response = await AccessGroupService.addMembers(id, selectedValuesMember,accessToken);
      console.log(response.data);
      setShowSuccess(true);

    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
 

    const fetchMemberData = async () => {
      setLoading(true);
      try {
        const response = await AccessGroupService.getMemberList(
          id,
          accessToken
        );
        setPeopleOption(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    const fetchAccessData = async () => {
      setLoading(true);
      try {
        const response = await AccessGroupService.getAccessList(
          id,
          accessToken
        );
        setAccessOption(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchAccessData();
    fetchMemberData();

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
                    placeholder={groupName}
                    autoFocus
                    disabled
                  />
                </Form.Group>
              </MDBCol>
            </MDBRow>

            <Form.Control
              as="select"
              multiple
              className="mb-3 form-control-group "
              value={selectedValuesMember}
              onChange={(e) => handleCheckboxChangeMember(e)}
            >
              {peopleOption.map((peopleOptions) => (
                <option
                  key={peopleOptions.systemUserId}
                  value={peopleOptions.systemUserId}
                  style={{
                    backgroundColor: selectedValuesMember.includes(
                      peopleOptions.firstName
                    )
                      ? "green"
                      : "white",
                  }}
                >
                  {peopleOptions.firstName}
                </option>
              ))}
            </Form.Control>

  

            {/* <Form.Group className="mb-3" controlId="multiSelect2">
              <Form.Label>Add Access</Form.Label>
              <Form.Control
              as="select"
              multiple
              value={selectedValuesAccess}
              onChange={(e) => handleCheckboxChangeAccess(e)}
            >
              {accessOption.map((accessOptions) => (
                <option
                  key={accessOptions.accessId}
                  value={accessOptions.accessId}
                  style={{
                    backgroundColor: selectedValuesMember.includes(
                      accessOptions.accessName
                    )
                      ? "green"
                      : "white",
                  }}
                >
                  {accessOptions.accessName}
                </option>
              ))}
            </Form.Control>
            </Form.Group> */}

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
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <SuccessfulAction
        onHide={() => setShowSuccess(false)}
        show={showSuccess}
        message="New User Added to AccesGroup Successfully"
      />
    </>
  );
};

export default EditGroup;
