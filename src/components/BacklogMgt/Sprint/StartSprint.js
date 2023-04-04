import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { MDBCol } from "mdb-react-ui-kit";
import SprintService from "../../../Services/SprintService";
import { useNavigate } from "react-router-dom";

const SprintStart = () => {
  const [sprint, setSprint] = useState({
    sprintId: "",
    sprintName: "",
    startDate: "",
    endDate: "",
    sprintGoal: "",
    duration: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setSprint({ ...sprint, [e.target.name]: value });
  };

  const saveSprint = (e) => {
    e.preventDefault();
    SprintService.saveSprint(sprint)
      .then((response) => {
        console.log(response);
        navigate("/SprintList");
      })
      .catch((error) => {
        console.log(error);
      });
    handleClose();
  };

  const reset = (e) => {
    e.preventDefault();
    setSprint({
      sprintId: "",
      sprintName: "",
      startDate: "",
      endDate: "",
      sprintGoal: "",
      duration: "",
    });
    handleClose();
  };

  const [inactive, setInactive] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [form , setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setSprint({
      ...sprint,
      [field]: value
    })

    if(!!errors[field]) setErrors({
      ...errors,
      [field]: null
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validate();
    if(Object.keys(formErrors).length === 0) {
      saveSprint(e);
    }else{
      setErrors(formErrors)
    }
  }

  const validate = () => {
    const[sprintName, duration, startDate, endDate, sprintGoal] = sprint;
    const newErrors = {};

    if(!sprintName || sprintName === '') newErrors.sprintName = "Sprint name cannot be blank";
    if(!duration || duration === '--Duration--') newErrors.duration = "Duration cannot be blank";
    if(!startDate || startDate === '') newErrors.startDate = "Start date cannot be blank";
    if(!endDate || endDate === '') newErrors.endDate = "End date cannot be blank";
    if(!sprintGoal) newErrors.sprintGoal = "Sprint goal cannot be blank";

    return newErrors
  }

  return (
    <div>
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <Button
          variant="primary"
          className="rounded bg-[#1e90ff] text-white border-none px-3 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#1e90ff] ease-in-out"
          onClick={handleShow}
        >
          Start Sprint
        </Button>

        <Modal show={show} onHide={handleClose}>
          {/* header section */}
          <Modal.Header closeButton>
            <Modal.Title>Start Sprint</Modal.Title>
          </Modal.Header>

          {/* body section */}
          <Modal.Body>
            <Form>
              <MDBCol>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Sprint name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Sprint Name"
                    autoFocus
                    name="sprintName"
                    value={sprint.sprintName}
                    required
                    onChange={(e) => setField("sprintName", e.target.value)}
                    isInvalid={!!errors.sprintName}
                    // required
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.sprintName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Duration</Form.Label>
                  <Form.Select
                    name="duration"
                    value={sprint.duration}
                    required
                    onChange={(e) => setField("duration", e.target.value)}
                    isInvalid={!!errors.duration}
                  >
                    <option value="" disabled selected>--Duration--</option>
                    <option value="custom">Custom</option>
                    <option value="1 week">1 week</option>
                    <option value="2 weeks">2 weeks</option>
                    <option value="4 weeks">4 weeks</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.duration}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Start date</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="startDate"
                    value={sprint.startDate}
                    required
                    onChange={(e) => setField("startDate", e.target.value)}
                    isInvalid={!!errors.startDate}
                    // autoFocus
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.startDate}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>End date</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    name="endDate"
                    value={sprint.endDate}
                    required
                    onChange={(e) => setField("endDate", e.target.value)}
                    isInvalid={!!errors.endDate}
                    // placeholder="name@example.com"
                    // autoFocus
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.endDate}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Sprint Goal</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Goal"
                    name="sprintGoal"
                    value={sprint.sprintGoal}
                    required
                    onChange={(e) => setField("sprintGoal", e.target.value)}
                    isInvalid={!!errors.sprintGoal}
                    // autoFocus
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.sprintGoal}
                  </Form.Control.Feedback>
                </Form.Group>
              </MDBCol>
            </Form>
          </Modal.Body>

          {/* button section */}
          <Modal.Footer>
            <Button
              variant="primary"
              className="rounded bg-[#1e90ff] text-white border-none  font-semibold hover:bg-[#1e90ff] "
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Start
            </Button>

            <Button
              variant="secondary"
              className="rounded bg-none text-black border-none font-semibold hover:underline hover:bg-white "
              onClick={reset}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default SprintStart;
