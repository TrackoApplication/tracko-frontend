import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TeamService from "../../Services/TeamService";
import SuccessfulAction from "../CommonComponents/SuccessfulAction";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const AddTeam = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const [scrumMaster, setScrumMaster] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  const [team, setTeam] = useState({
    teamName: "",
    scrumMasterId : 0,
    memberId : 0

  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setTeam({ ...team, [e.target.name]: value });
  };

  const setField = (field, value) => {
    setTeam({
      ...team,
      [field]: value,
    });
  };

  const reset = (e) => {
    e.preventDefault();
    setTeam({
      id: "",
      teamName: "",
      users: "",
    });
  };
 
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const projectId = localStorage.getItem("projectId");
    const getScrumMasters = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/accessgroups/membersPerProjectGroup?id1=${projectId}&id2=2`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        console.log(response.data);
        setScrumMaster(response.data);

      } catch (err) {
        console.error(err.message);
      }
      setLoading(false);
    };
    const getTeamMembers = async () => {
      setLoading(true);
      try {
        const response2 = await axios.get(
          `http://localhost:8080/api/v1/accessgroups/membersPerProjectGroup?id1=${projectId}&id2=3`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        console.log(response2.data);
        setTeamMembers(response2.data);

      } catch (err) {
        console.error(err.message);
      }
      setLoading(false);
    };
    getTeamMembers();
    getScrumMasters();
  }, []);

  const saveTeam = async (e) => {
    const accessToken = localStorage.getItem("accessToken");
    const projectId = localStorage.getItem("projectId");
    e.preventDefault();

    // Validation
    if (!team.teamName || team.teamName.length < 5) {
      alert("Team name is required and should contain up to 5 characters.");
      return;
    }

        // // Save team
        // TeamService.saveTeam(accessToken,team,projectId)
        //   .then((response) => {
        //     console.log(team);
        //     console.log(response);
        //     navigate("/teamView");
        //     setShowSuccess(true);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });

           console.log(team);
    
          try {
            const response2 = await TeamService.saveTeam(accessToken,team,projectId);
            console.log(response2.data);
            navigate("/teamView");
            handleClose();
            setShowSuccess(true);
    
    
          } catch (err) {
            console.error(err.message);
          }

      }
    

  const handleClose = () => {
    setShow(false);
    setShowSuccess(false);
  };

  return (
    <div>
       <Button
        variant="primary"
        className="rounded bg-[#231651] text-white border-none px-6 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#231651]  ease-in-out"
        onClick={handleShow}
      >
        Add Team
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Team</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Team Name</Form.Label>
            <Form.Control
              name="teamName"
              type="Name"
              placeholder="Team Name"
              value={team.teamName}
              onChange={handleChange}
             
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="flabel">Scrum Master</Form.Label>
            <Form.Select
              as="select"
              name="scrumMasterId"
              value={team.scrumMasters}
              // onChange={(e) => handleChange(e)}
              autoFocus
              required
              defaultValue="Select the Project"
              onChange={(e) => setField("scrumMasterId", e.target.value)}
            >
              <option value="" disabled selected>
                Select the Scrum master
              </option>
             
                    {scrumMaster.map((scrumMasters) => (
                      <option
                        key={scrumMasters.systemUserId}
                        value={scrumMasters.systemUserId}
                      >
                        {scrumMasters.firstName}
                      </option>
                    ))}
       
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="flabel">Team Member</Form.Label>
            <Form.Select
              as="select"
              name="memberId"
              value={team.teamMember}
              // onChange={(e) => handleChange(e)}
              autoFocus
              required
              defaultValue="Select the members"
              onChange={(e) => setField("memberId", e.target.value)}
            >
              <option value="" disabled selected>
                Select the member
              </option>
                    {teamMembers.map((teamMember) => (
                      <option
                        key={teamMember.systemUserId}
                        value={teamMember.systemUserId}
                      >
                        {teamMember.firstName}
                      </option>
                    ))}
       
            </Form.Select>
          </Form.Group>

          <div className="items-center justify-center h-10 w-full my-4 space-x-4 pt-4">
            <button
              onClick={saveTeam}
              className="rounded text-white font-semibold bg-[#231651] hover:bg-blue-700 py-2 px-6"
            >
              Save
            </button>
            <button
              onClick={reset}
              className="rounded text-white font-semibold bg-[#231651] hover:bg-blue-700 py-2 px-6"
            >
              Clear
            </button>
            <button
              onClick={handleClose}
              className="rounded text-white font-semibold bg-[#231651] hover:bg-blue-700 py-2 px-6"
            >
              Cancel
            </button>
          </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <SuccessfulAction
        onHide={() => setShowSuccess(false)}
        show={showSuccess}
        message="Team Saved Successfully"
      />
    </div>
  );

};

export default AddTeam;
