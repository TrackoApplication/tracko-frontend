import React, { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { MDBCol } from "mdb-react-ui-kit";
import SprintService from "../../../Services/SprintService";
import "./CreateSprint.css";
import { useDispatch } from "react-redux";
import { SET_SPRINTS } from "../../../reducers/sprintReducer";
import DurationService from "../../../Services/DurationService";

//setting states for Sprint start form fields
const SprintCreate = () => {
  const [sprint, setSprint] = useState({
    sprintId: "",
    sprintName: "",
    startDate: "",
    endDate: "",
    sprintGoal: "",
    duration: "",
  });

  const dispatch = useDispatch();

  // save sprints to the database using sprintservice post API
  const saveSprint = (e) => {
    e.preventDefault();
    SprintService.saveSprint(sprint)
      .then((response) => {
        console.log(response);
        SprintService.getSprints().then((response) => {
          dispatch({
            type: SET_SPRINTS,
            payload: response.data,
          });
          handleClose();
          // navigate("/SprintList");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // resetting the sprint form fields when closing the modal
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

  const [loading, setloading] = useState(true);
  const [inactive] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [durations, setDurations] = useState([]);

  //Retrieving durations from the backend
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await DurationService.getDuration();
        setDurations(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };
    fetchData();
  }, []);

  //Validation part of the date fields
  const setField = (field, value) => {
    if (field === "duration") {
      if (value === "custom") {
        setSprint({
          ...sprint,
          duration: value,
          endDate: "",
        });
      } else {
        const startDate = new Date(sprint.startDate || new Date()); // Use the current date if start date is not set
        const duration = parseInt(value.split(" ")[0]); // Extract the numeric value from the duration string
        const endDate = new Date(
          startDate.getTime() + duration * 7 * 24 * 60 * 60 * 1000
        ); // Calculate the end date in milliseconds

        setSprint({
          ...sprint,
          duration: value,
          startDate: startDate.toISOString().slice(0, 10), // Convert the start date to string format (YYYY-MM-DD)
          endDate: endDate.toISOString().slice(0, 10), // Convert the end date to string format (YYYY-MM-DD)
        });
      }
    } else if (
      field === "endDate" &&
      sprint.startDate &&
      value < sprint.startDate
    ) {
      setErrors({
        ...errors,
        [field]: "End date cannot be earlier than the start date",
      });
    } else {
      setSprint({
        ...sprint,
        [field]: value,
      });

      if (!!errors[field]) {
        setErrors({
          ...errors,
          [field]: null,
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      saveSprint(e);
    } else {
      setErrors(formErrors);
    }
  };

  const validate = () => {
    const { sprintName, duration, startDate, endDate } = sprint;
    const newErrors = {};

    if (!sprintName || sprintName === "") {
      newErrors.sprintName = "Sprint name cannot be blank";
    }

    if (!duration || duration === "--Duration--") {
      newErrors.duration = "Duration cannot be blank";
    }

    if (!startDate || startDate === "") {
      newErrors.startDate = "Start date cannot be blank";
    }
    if (!endDate || endDate === "") {
      newErrors.endDate = "End date cannot be blank";
    }

    // if(!sprintGoal) {newErrors.sprintGoal = "Sprint goal cannot be blank"};

    return newErrors;
  };

  return (
    <div>
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <Button
          variant="primary"
          className="rounded bg-[#281454] text-white border-none px-3 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#281454] ease-in-out"
          onClick={handleShow}
        >
          Create Sprint
        </Button>

        <Modal show={show} onHide={handleClose} dialogClassName="mdw">
          {/* header section */}
          <Modal.Header closeButton className="head">
            <Modal.Title className="title">Start Sprint</Modal.Title>
          </Modal.Header>

          {/* body section */}
          <Modal.Body className="mbody">
            <Form>
              <MDBCol>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="flb">Sprint name</Form.Label>
                  <Form.Control
                    className="citm"
                    type="text"
                    placeholder="Sprint Name"
                    autoFocus
                    name="sprintName"
                    value={sprint.sprintName}
                    required
                    // onChange={(e) => handleChange(e)}
                    onChange={(e) => setField("sprintName", e.target.value)}
                    isInvalid={!!errors.sprintName}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    className="invalidfeedback"
                  >
                    {errors.sprintName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="flb">Duration</Form.Label>
                  <Form.Select
                    className="sitm"
                    name="duration"
                    value={sprint.duration}
                    required
                    onChange={(e) => setField("duration", e.target.value)}
                    isInvalid={!!errors.duration}
                  >
                    <option value="" disabled>
                      --Duration--
                    </option>
                    {!loading && (
                      <>
                        {durations.map((dur) => (
                          <option key={dur.durationId} value={dur.duration}>
                            {dur.duration}
                          </option>
                        ))}
                      </>
                    )}
                  </Form.Select>
                  <Form.Control.Feedback
                    type="invalid"
                    className="invalidfeedback"
                  >
                    {errors.duration}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="flb">Start date</Form.Label>
                  <Form.Control
                    className="citm"
                    type="date"
                    name="startDate"
                    value={sprint.startDate}
                    required
                    onChange={(e) => setField("startDate", e.target.value)}
                    isInvalid={!!errors.startDate}
                    // onChange={(e) => handleChange(e)}
                    // autoFocus
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    className="invalidfeedback"
                  >
                    {errors.startDate}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="flb">End date</Form.Label>
                  <Form.Control
                    className="citm"
                    type="date"
                    name="endDate"
                    value={sprint.endDate}
                    required
                    onChange={(e) => setField("endDate", e.target.value)}
                    isInvalid={!!errors.endDate}
                    disabled={sprint.duration !== "custom"}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    className="invalidfeedback"
                  >
                    {errors.endDate}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="flb">Sprint Goal</Form.Label>
                  <Form.Control
                    className="cm"
                    as="textarea"
                    rows={5}
                    placeholder="Goal"
                    name="sprintGoal"
                    value={sprint.sprintGoal}
                    required
                    onChange={(e) => setField("sprintGoal", e.target.value)}
                    isInvalid={!!errors.sprintGoal}
                    // onChange={(e) => handleChange(e)}
                    // autoFocus
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    className="invalidfeedback"
                  >
                    {errors.sprintGoal}
                  </Form.Control.Feedback>
                </Form.Group>
              </MDBCol>
            </Form>
          </Modal.Body>

          {/* button section */}
          <Modal.Footer>
            <Button
              type="submit"
              variant="primary"
              className="rounded bg-[#281454] text-white border-none  font-semibold hover:bg-[#281454] "
              onClick={handleSubmit}
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

export default SprintCreate;
