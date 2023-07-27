import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { MDBCol } from "mdb-react-ui-kit";
import SprintIssueService from "../../../Services/SprintIssueService";
// import { useNavigate } from "react-router-dom";

//setting states for Issue form fields
const AddSprintIssue = () => {
  const [sprintissue, setSprintIssue] = useState({
    sprintIssueId: "",
    projectName: "",
    issueType: "",
    summary: "",
    description: "",
    assignee: "",
    sprintName: "",
    epicName: "",
    reqOfTesting: "true",
    spdeveloping: "",
    sptesting: "",
    totalSP: "",
    priority: "",
    reporter: "",
  });

  // const navigate = useNavigate();

  // setting states for Issue form fields on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "reqOfTesting") {
      const reqOfTestingValue = value === "true";
      setSprintIssue({
        ...sprintissue,
        reqOfTesting: reqOfTestingValue,
        sptesting: reqOfTestingValue ? sprintissue.sptesting : 0, // Reset sptesting if reqOfTesting is changed to "false"
      });
    } else {
      setSprintIssue({ ...sprintissue, [name]: value });
    }
  };

  // save issue to the database using issueservice post API
  const saveSprintIssue = (e) => {
    e.preventDefault();
    SprintIssueService.saveSprintIssue(sprintissue)
      .then((response) => {
        console.log(response);
        window.location.reload(false);
        // navigate("/Emptybacklog")
      })
      .catch((error) => {
        console.log(error);
      });
    handleClose();
  };

  // resetting the issue form fields when closing the modal
  const reset = (e) => {
    e.preventDefault();
    setSprintIssue({
      sprintIssueId: "",
      projectName: "",
      issueType: "",
      summary: "",
      description: "",
      assignee: "",
      sprintName: "",
      epicName: "",
      reqOfTesting: "true",
      spdeveloping: "",
      sptesting: "",
      totalSP: "",
      priority: "",
      reporter: "",
    });
    handleClose();
  };

  const [inactive] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  // setting states for Issue form fields on change
  const setField = (field, value) => {
    setSprintIssue({
      ...sprintissue,
      [field]: value,
    });

    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      saveSprintIssue(e);
    } else {
      setErrors(formErrors);
    }
  };

  const validate = () => {
    const {
      projectName,
      issueType,
      summary,
      reqOfTesting,
      spdeveloping,
      sptesting,
      priority,
      reporter,
    } = sprintissue;
    const newErrors = {};

    if (!projectName || projectName === "") {
      newErrors.projectName = "Project name cannot be blank";
    }

    if (!issueType || issueType === "") {
      newErrors.issueType = "Issue type cannot be blank";
    }

    if (!summary || summary === "") {
      newErrors.summary = "Summary cannot be blank";
    }

    if (!reqOfTesting || reqOfTesting === "") {
      newErrors.reqOfTesting = "Requirement of testing cannot be blank";
    }

    if (reqOfTesting === "true") {
      if (
        !spdeveloping ||
        spdeveloping === "" ||
        spdeveloping < 1 ||
        spdeveloping > 21
      ) {
        newErrors.spdeveloping =
          "Story point estimate for developing is required and must be between 1 and 21";
      }
      if (!sptesting || sptesting === "" || sptesting < 1 || sptesting > 21) {
        newErrors.sptesting =
          "Story point estimate for testing is required and must be between 1 and 21";
      }
    } else if (reqOfTesting === "false") {
      if (
        !spdeveloping ||
        spdeveloping === "" ||
        spdeveloping < 1 ||
        spdeveloping > 21
      ) {
        newErrors.spdeveloping =
          "Story point estimate for developing is required and must be between 1 and 21";
      }
      // Clear the error message for sptesting when reqOfTesting is "false"
      newErrors.sptesting = null;
    }

    if (!priority || priority === "") {
      newErrors.priority = "Priority cannot be blank";
    }

    if (!reporter || reporter === "") {
      newErrors.reporter = "Reporter cannot be blank";
    }

    return newErrors;
  };

  return (
    <div>
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <Button
          variant="link"
          className="text-black border-none font-semibold text-decoration-none shadow-none"
          onClick={handleShow}
        >
          + Create Issue
        </Button>

        <Modal show={show} onHide={handleClose} dialogClassName="mdl">
          {/* header section */}
          <Modal.Header className="hd">
            <Modal.Title className="mt">Create Issue</Modal.Title>
          </Modal.Header>

          {/* body section */}
          <Modal.Body className="modalb">
            <Form className="frm">
              <MDBCol>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="flabel">Project</Form.Label>
                  <Form.Select
                    className="sitem"
                    name="projectName"
                    value={sprintissue.projectName}
                    // onChange={(e) => handleChange(e)}
                    autoFocus
                    required
                    defaultValue="Select the Project"
                    onChange={(e) => setField("projectName", e.target.value)}
                    isInvalid={!!errors.projectName}
                  >
                    <option value="" disabled selected>
                      Select the Project
                    </option>
                    <option value="project1">Project 1</option>
                    <option value="project2">Project 2</option>
                    <option value="project3">Project 3</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid" className="infeedback">
                    {errors.projectName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="flabel">Issue type</Form.Label>
                  <Form.Select
                    className="sitem"
                    name="issueType"
                    value={sprintissue.issueType}
                    // onChange={(e) => handleChange(e)}
                    onChange={(e) => setField("issueType", e.target.value)}
                    isInvalid={!!errors.issueType}
                    defaultValue="Select the Issue Type"
                  >
                    <option value="" disabled selected>
                      Select the Issue Type
                    </option>
                    <option>Issue</option>
                    <option>Bug</option>
                    <option>QA</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid" className="infeedback">
                    {errors.issueType}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="flabel">Summary</Form.Label>
                  <Form.Control
                    className="citem"
                    type="text"
                    placeholder="Summary"
                    name="summary"
                    value={sprintissue.summary}
                    // onChange={(e) => handleChange(e)}
                    onChange={(e) => setField("summary", e.target.value)}
                    isInvalid={!!errors.summary}
                    required={true}
                    // autoFocus
                  />
                  <Form.Control.Feedback type="invalid" className="infeedback">
                    {errors.summary}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="flabel">Description</Form.Label>
                  <Form.Control
                    className="citem"
                    as="textarea"
                    rows={5}
                    placeholder="Description"
                    name="description"
                    value={sprintissue.description}
                    onChange={(e) => handleChange(e)}
                    required
                    // autoFocus
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="flabel">Assignee</Form.Label>
                  <Form.Select
                    className="sitem"
                    name="assignee"
                    value={sprintissue.assignee}
                    onChange={(e) => handleChange(e)}
                    defaultValue="Select the Assignee"
                  >
                    <option value="" disabled selected>
                      Select the Assignee
                    </option>
                    <option>Automatic</option>
                    <option>Ravindu Karunaweera</option>
                    <option>Yasiru Basura</option>
                    <option>Seefa Banu</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="flabel">Sprint</Form.Label>
                  <Form.Select
                    className="sitem"
                    name="sprintName"
                    value={sprintissue.sprintName}
                    onChange={(e) => handleChange(e)}
                    defaultValue="Select the Sprint"
                  >
                    <option value="" disabled selected>
                      Select the Sprint
                    </option>
                    <option>Sprint 1</option>
                    <option>Sprint 2</option>
                    <option>Sprint 3</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="flabel">Epic</Form.Label>
                  <Form.Select
                    className="sitem"
                    name="epicName"
                    value={sprintissue.epicName}
                    onChange={(e) => handleChange(e)}
                    defaultValue="Select the Epic"
                  >
                    <option value="" disabled selected>
                      Select the Epic
                    </option>
                    <option>Epic 1</option>
                    <option>Epic 2</option>
                    <option>Epic 3</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="flabel">
                    Requirement of Testing
                  </Form.Label>
                  <Form.Select
                    className="sitem"
                    name="reqOfTesting"
                    value={sprintissue.reqOfTesting}
                    // onChange={(e) => handleChange(e)}
                    onChange={(e) => setField("reqOfTesting", e.target.value)}
                    isInvalid={!!errors.reqOfTesting}
                    required
                  >
                    <option value="" disabled selected>
                      Select the Requirement of Testing
                    </option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid" className="infeedback">
                    {errors.reqOfTesting}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="flabel">
                    Story point estimate for developing
                  </Form.Label>
                  <Form.Control
                    className="cnm"
                    type="number"
                    name="spdeveloping"
                    value={sprintissue.spdeveloping}
                    // onChange={(e) => handleChange(e)}
                    onChange={(e) => setField("spdeveloping", e.target.value)}
                    isInvalid={!!errors.spdeveloping}
                    required
                    // placeholder="name@example.com"
                    // autoFocus
                  />
                  <Form.Control.Feedback type="invalid" className="infeedback">
                    {errors.spdeveloping}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="flabel">
                    Story point estimate for testing
                  </Form.Label>
                  <Form.Control
                    className="cnm"
                    type="number"
                    name="sptesting"
                    value={sprintissue.sptesting}
                    // onChange={handleChange}
                    onChange={(e) => setField("sptesting", e.target.value)}
                    isInvalid={!!errors.sptesting}
                    required={sprintissue.reqOfTesting === "true"}
                    disabled={sprintissue.reqOfTesting !== "true"} // Disable the field when reqOfTesting is set to "false"
                  />
                  <Form.Control.Feedback type="invalid" className="infeedback">
                    {errors.sptesting}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="flabel">
                    Total estimated story point
                  </Form.Label>
                  <Form.Control
                    className="cnm"
                    type="number"
                    name="totalSP"
                    value={
                      parseInt(sprintissue.spdeveloping) +
                      parseInt(sprintissue.sptesting)
                    }
                    onChange={(e) => handleChange(e)}
                    disabled
                    // placeholder="name@example.com"
                    // autoFocus
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="flabel">Priority</Form.Label>
                  <Form.Select
                    className="sitem"
                    name="priority"
                    value={sprintissue.priority}
                    // onChange={(e) => handleChange(e)}
                    required
                    defaultValue="Select the priority"
                    onChange={(e) => setField("priority", e.target.value)}
                    isInvalid={!!errors.priority}
                  >
                    <option value="" disabled selected>
                      Select the priority
                    </option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid" className="infeedback">
                    {errors.priority}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="flabel">Reporter</Form.Label>
                  <Form.Select
                    className="sitem"
                    name="reporter"
                    value={sprintissue.reporter}
                    // onChange={(e) => handleChange(e)}
                    onChange={(e) => setField("reporter", e.target.value)}
                    isInvalid={!!errors.reporter}
                  >
                    <option value="" disabled selected>
                      Select the Reporter
                    </option>
                    <option>Reporter 1</option>
                    <option>Reporter 2</option>
                    <option>Reporter 3</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid" className="infeedback">
                    {errors.reporter}
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
              onClick={reset}
            >
              Cancel
            </Button>

            <Button
              variant="primary"
              className="rounded bg-[#281454] text-white border-none  font-semibold hover:bg-[#281454] "
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

export default AddSprintIssue;
