import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { MDBCol } from "mdb-react-ui-kit";
import SprintService from "../../../Services/SprintService";
import SuccessfulUpdation from "./SuccessfulUpdation";

function UpdateSprint(props) {
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "duration") {
      if (value === "custom") {
        setSprint((prevState) => ({
          ...prevState,
          duration: value,
        }));
      } else {
        const startDate = new Date(sprint.startDate);
        let endDate = new Date(startDate);
  
        if (value === "1 week") {
          endDate.setDate(startDate.getDate() + 7);
        } else if (value === "2 weeks") {
          endDate.setDate(startDate.getDate() + 14);
        } else if (value === "3 weeks") {
          endDate.setDate(startDate.getDate() + 21);
        } else if (value === "4 weeks") {
          endDate.setDate(startDate.getDate() + 28);
        }
  
        setSprint((prevState) => ({
          ...prevState,
          duration: value,
          endDate: endDate.toISOString().substr(0, 10),
        }));
      }
    } else if (name === "startDate" || name === "endDate") {
      const dateValue = new Date(value).toISOString();
      setSprint((prevState) => ({
        ...prevState,
        [name]: dateValue,
      }));
    } else {
      setSprint((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };  

  const [sprint, setSprint] = useState({
    sprintId: props.sprintId,
    sprintName: "",
    startDate: "",
    endDate: "",
    sprintGoal: "",
    duration: "default",
  });

  //Update date solution
  // const Date = new Date(sprint.startDate);
  // const formattedDate = Date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await SprintService.getSprintById(props.sprintId);
        setSprint(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [props.sprintId, props]); // Add props to the dependency array
  
  

  const updateSprint = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      SprintService.updateSprint(props.sprintId, sprint)
        .then((res) => {
          props.onHide();
          setShowSuccess(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setErrors(formErrors);
    }
  };

  const [errors, setErrors] = useState({});

  const validate = () => {
    const { sprintName, duration, startDate, endDate } = sprint;
    const newErrors = {};

    if (!sprintName || sprintName === "") {
      newErrors.sprintName = "Sprint name cannot be blank";
    }

    if (!duration || duration === "default") {
      newErrors.duration = "Duration cannot be blank";
    }

    if (!startDate || startDate === "") {
      newErrors.startDate = "Start date cannot be blank";
    }

    if (!endDate || endDate === "") {
      newErrors.endDate = "End date cannot be blank";
    }

    return newErrors;
  };

  const [inactive] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div>
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <Modal {...props}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Sprint</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <MDBCol>
                <Form.Group className="mb-3">
                  <Form.Label>Edit Sprint Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Sprint Name"
                    autoFocus
                    name="sprintName"
                    value={sprint.sprintName}
                    onChange={handleChange}
                    isInvalid={!!errors.sprintName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.sprintName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Edit Duration</Form.Label>
                  <Form.Select
                    name="duration"
                    value={sprint.duration}
                    onChange={handleChange}
                    isInvalid={!!errors.duration}
                  >
                    <option value="default">--Duration--</option>
                    <option value="custom">Custom</option>
                    <option value="1 week">1 week</option>
                    <option value="2 weeks">2 weeks</option>
                    <option value="3 weeks">3 weeks</option>
                    <option value="4 weeks">4 weeks</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.duration}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Edit Start date</Form.Label>
                  <Form.Control
                    type="date"
                    name="startDate"
                    value={sprint.startDate}
                    onChange={handleChange}
                    isInvalid={!!errors.startDate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.startDate}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Edit End date</Form.Label>
                  <Form.Control
                    type="date"
                    name="endDate"
                    value={sprint.endDate}
                    onChange={handleChange}
                    isInvalid={!!errors.endDate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.endDate}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Edit Sprint Goal</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Goal"
                    name="sprintGoal"
                    value={sprint.sprintGoal}
                    onChange={handleChange}
                  />
                </Form.Group>
              </MDBCol>
            </Form>
          </Modal.Body>

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


