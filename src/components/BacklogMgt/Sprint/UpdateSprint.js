import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { MDBCol } from "mdb-react-ui-kit";
import SprintService from "../../../Services/SprintService";
import SuccessfulUpdation from "./SuccessfulUpdation";

// setting states for Update Sprint form fields on change when updating
function UpdateSprint(props) {
  const handleChange = (e) => {
    const value = e.target.value;
    setSprint({ ...sprint, [e.target.name]: value });
  };

  //setting states for Sprint update form fields
  const [sprint, setSprint] = useState({
    sprintId: props.sprintId,
    sprintName: "",
    startDate: "",
    endDate: "",
    sprintGoal: "",
    duration: "",
  });

  // fetching the data from the backend
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await SprintService.getSprintById(sprint.sprintId);
        setSprint(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // updating the sprints based on sprintId
  const updateSprint = (e) => {
    e.preventDefault();
    SprintService.updateSprint(props.sprintId, sprint)
      .then((res) => {
        props.onHide();
        // window.location.reload(false);
        setShowSuccess(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [inactive, setInactive] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div>
      <div className={`container ${inactive ? "inactive" : ""}`}>
        {/* <Button
          variant="primary"
          className="rounded bg-[#1e90ff] text-white border-none px-3 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#1e90ff] ease-in-out"
          onClick={handleShow}
        >
          Edit Sprint
        </Button> */}

        <Modal {...props}>
          {/* header section */}
          <Modal.Header closeButton>
            <Modal.Title>Edit Sprint</Modal.Title>
          </Modal.Header>

          {/* body section */}
          <Modal.Body>
            <Form>
              <MDBCol>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Edit Sprint Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Sprint Name"
                    autoFocus
                    name="sprintName"
                    value={sprint.sprintName}
                    onChange={(e) => handleChange(e)}
                    // required
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Edit Duration</Form.Label>
                  <Form.Select
                    name="duration"
                    value={sprint.duration}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="default">--Duration--</option>
                    <option value="custom">Custom</option>
                    <option value="1 week">1 week</option>
                    <option value="2 weeks">2 weeks</option>
                    <option value="4 weeks">4 weeks</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Edit Start date</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="startDate"
                    value={sprint.startDate}
                    onChange={(e) => handleChange(e)}
                    // placeholder="JhonDee999"
                    // autoFocus
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Edit End date</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="endDate"
                    value={sprint.endDate}
                    onChange={(e) => handleChange(e)}
                    // placeholder="Start Date"
                    // autoFocus
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Edit Sprint Goal</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Goal"
                    name="sprintGoal"
                    value={sprint.sprintGoal}
                    onChange={(e) => handleChange(e)}
                    // autoFocus
                  />
                </Form.Group>
              </MDBCol>
            </Form>
          </Modal.Body>

          {/* button section */}
          <Modal.Footer>
            <Button
              variant="primary"
              className="rounded bg-[#1e90ff] text-white border-none  font-semibold hover:bg-[#1e90ff] "
              onClick={updateSprint}
            >
              Update
            </Button>

            <Button
              variant="secondary"
              className="rounded bg-none text-black border-none font-semibold hover:underline hover:bg-white "
              onClick={props.onHide}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <SuccessfulUpdation
        onHide={() => setShowSuccess(false)}
        show={showSuccess}
        message="Sprint Details Updated Successfully"
      />
    </div>
  );
}

export default UpdateSprint;
