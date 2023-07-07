import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import EpicService from "../../Services/EpicService";
import { useNavigate } from "react-router-dom";
import Epic from "./Epic";
// import { useHistory } from 'react-router-dom';

const AddEpic = () => {
  const Nav = useNavigate();
  const [inactive, setInactive] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [form, setForm] = useState({});
  // const [Errors, setErrors] = useState({});
  const [validated, setValidated] = useState(false);
  const [EnteredEpicId, setEnteredEpicId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const [epic, setepic] = useState({
    id: "",
    project: "",
    epicName: "",
    reporter: "",
    epicDescription: "",
    priority: "",
    assignee: "",
    team: "",
    targetStart: "",
    targetEnd: "",
    storyPoints: "",
  });

  const saveEpic = (e) => {
    //  e.preventDefault();
    EpicService.saveEpic(epic)
      .then((response) => {
        console.log(response);
        // const savedEpicId = response.data.project;
        // setEnteredEpicId(savedEpicId);
        // console.log('the saved epic id is' , savedEpicId);
      })
      .catch((error) => {
        console.log(error);
      });
    handleClose();
    setLoading(true);
  };

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setepic({ ...epic, [e.target.name]: value });
  // };

  // setting state for form fields on change

  const setField = (field, value) => {
    setepic({
      ...epic,
      [field]: value,
    });
  };

  //Handlng form submit. Validating the form and if valid then saving the data to the database
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      saveEpic(e);
      Nav("/Backlogview");
      handleClose();
      // setShowSuccess(true);
    } else {
      setErrors(formErrors);
    }
  };

  // validating the form fields
  const validate = () => {
    const {
      project,
      epicName,
      reporter,
      epicDescription,
      priority,
      assignee,
      team,
      targetStart,
      targetEnd,
      storyPoints,
    } = epic;

    const startDate = new Date(Epic.targetStart || new Date()); // Use the current date if start date is not set



    //defining the errors object
    debugger
    const errors = {};
    if (!project || project === "") {
      errors.project = "Project is required";
    }
    if (!epicName || epicName === "") {
      errors.epicName = "Epic Name is required";
    }

    if (!reporter || reporter === "") {
      errors.reporter = "Reporter is required";
    }

    if (!epicDescription || epicDescription === "") {
      errors.epicDescription = "Epic Description is required";
    }

    if (!priority || priority === "") {
      errors.priority = "Epic Priority is required";
    }

    if (!assignee || assignee === "") {
      errors.assignee = "Assignee is required";
    }


    // if (!targetStart || targetStart === "") {
    //   errors.targetStart = "Start date is required";
    // }

    if (!targetEnd || targetEnd === "") {
      errors.targetEnd = "End date required";
    }

    // if (!storyPoints || storyPoints === "") {
    //   errors.storyPoints = "Story Points required";
    // }

    if (!storyPoints || storyPoints === "" || storyPoints < 1 ) {
      errors.storyPoints =
        "Story point estimate for Epic must be above 0";
    }


    // }else if(checkEmailExists){
    //   errors.emailId = 'Email Id already not exists';
    // }

    return errors;
  };

  

  // const history = useHistory();
  // const projectId = '123'; // Replace with your actual project ID
  // const navigateToProjectDetails = () => {
  //   history.push(`/epic/${epicId}`);
  // };

  // const lastEpicId=props.lastEpicId;
  // console.log('last epicId is' , lastEpicId);

  return (
    <div>
      <div className={`container ${inactive ? "inactive" : ""}`}>
        {/* <h1>Backlog</h1>
              <br></br>
              <button> + Create issue</button> */}

        <Button
          variant="primary"
          className="rounded bg-[#231651] text-white border-none px-6 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#231651] ease-in-out"
          onClick={handleShow}
        >
          + Create Epic
        </Button>

        <Modal show={show} onHide={handleClose}>
          {/* header section */}
          <Modal.Header closeButton>
            <Modal.Title>Create Epic</Modal.Title>
          </Modal.Header>

          {/* body section */}
          <Modal.Body>
            <Form style={{ overflowY: "scroll", height: "350px" }}>
              <MDBCol>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Project</Form.Label>
                  <Form.Select
                    name="project"
                    value={epic.project}
                    required
                    onChange={(e) => setField("project", e.target.value)}
                    isInvalid={!!errors.project}
                  >
                    {/* </Form.Group>onChange={(e) => handleChange(e)}> */}
                    <option value="">Select the project</option>
                    <option value="Project 1">Project 1</option>
                    <option value="Project 2">Project 2</option>
                    <option value="Project 3">Project 3</option>
                    <option value="Project 4">Project 4</option>
                  </Form.Select>
                  <Form.Control.Feedback
                    type="invalid"
                    className="invalidfeedback"
                  >
                    {errors.project}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Epic Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="epicName"
                    value={epic.epicName}
                    required
                    onChange={(e) => setField("epicName", e.target.value)}
                    isInvalid={!!errors.epicName}
                    // onChange={(e) => handleChange(e)}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    className="invalidfeedback"
                  >
                    {errors.epicName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Reporter</Form.Label>
                  <Form.Select
                    name="reporter"
                    value={epic.reporter}
                    //onChange={(e) => handleChange(e)}
                    onChange={(e) => setField("reporter", e.target.value)}
                    isInvalid={!!errors.reporter}
                  >
                    <option value="">Reporter</option>
                    <option value="Ravindu Karunaweera">
                      Ravindu Karunaweera
                    </option>
                    <option value="Yasiru Basura">Yasiru Basura</option>
                    <option value="Seefa Banu">Seefa Banu</option>
                  </Form.Select>
                  <Form.Control.Feedback
                    type="invalid"
                    className="invalidfeedback"
                  >
                    {errors.reporter}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Epic Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    name="epicDescription"
                    value={epic.epicDescription}
                    // onChange={(e) => handleChange(e)}
                    onChange={(e) =>
                      setField("epicDescription", e.target.value)
                    }
                    isInvalid={!!errors.epicDescription}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Priority</Form.Label>
                  <Form.Select
                    name="priority"
                    value={epic.priority}
                    //onChange={(e) => handleChange(e)}
                    onChange={(e) => setField("priority", e.target.value)}
                    isInvalid={!!errors.priority}
                  >
                    <option value="">Priority</option>
                    <option value="Low">Low</option>
                    <option value="Med">Med</option>
                    <option value="High">High</option>
                  </Form.Select>
                  <Form.Control.Feedback
                    type="invalid"
                    className="invalidfeedback"
                  >
                    {errors.priority}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Assignee</Form.Label>
                  <Form.Select
                    name="assignee"
                    value={epic.assignee}
                    //onChange={(e) => handleChange(e)}
                    onChange={(e) => setField("assignee", e.target.value)}
                    isInvalid={!!errors.assignee}
                  >
                    <option value="">Assignee</option>
                    <option value="Ravindu Karunaweera">
                      Ravindu Karunaweera
                    </option>
                    <option value="Yasiru Basura">Yasiru Basura</option>
                    <option value="Seefa Banu">Seefa Banu</option>
                  </Form.Select>
                  <Form.Control.Feedback
                    type="invalid"
                    className="invalidfeedback"
                  >
                    {errors.assignee}
                  </Form.Control.Feedback>
                </Form.Group>
                <MDBRow>
                  <MDBCol>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>TargetStart</Form.Label>
                      <Form.Control
                        type="date"
                        name="targetStart"
                        value={epic.targetStart}
                        // onChange={(e) => handleChange(e)}
                        onChange={(e) =>
                          setField("targetStart", e.target.value)
                        }
                        isInvalid={!!errors.targetStart}
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        className="invalidfeedback"
                      >
                        {errors.targetStart}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </MDBCol>

                  <MDBCol>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>TargetEnd</Form.Label>
                      <Form.Control
                        type="date"
                        name="targetEnd"
                        value={epic.targetEnd}
                        // onChange={(e) => handleChange(e)}
                        onChange={(e) => setField("targetEnd", e.target.value)}
                        isInvalid={!!errors.targetEnd}
                      />
                      <Form.Control.Feedback
                        type="invalid"
                        className="invalidfeedback"
                      >
                        {errors.targetEnd}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </MDBCol>
                </MDBRow>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Story points</Form.Label>
                  <Form.Control
                    type="number"
                    name="storyPoints"
                    value={epic.storyPoints}
                    // onChange={(e) => handleChange(e)}
                    onChange={(e) => setField("storyPoints", e.target.value)}
                    isInvalid={!!errors.storyPoints}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    className="invalidfeedback"
                  >
                    {errors.storyPoints}
                  </Form.Control.Feedback>
                </Form.Group>
              </MDBCol>
            </Form>
          </Modal.Body>

          {/* button section */}
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
              onClick={handleSubmit}
            >
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AddEpic;
