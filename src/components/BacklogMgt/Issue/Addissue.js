import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { MDBCol } from "mdb-react-ui-kit";
import IssueService from "../../../Services/IssueService";
import { useNavigate } from "react-router-dom";

//setting states for Issue form fields
const AddIssue = () => {
  const [issue, setIssue] = useState({
    issueId: "",
    projectName: "",
    issueType: "",
    summary: "",
    description: "",
    assignee: "",
    sprintName: "",
    epicName: "",
    reqOfTesting: false,
    spdeveloping: 0,
    sptesting: 0,
    totalSP: 0,
    priority: "",
    reporter: "",
  });

  const navigate = useNavigate();

  // setting states for Issue form fields on change
  const handleChange = (e) => {
    const value = e.target.value;
    setIssue({ ...issue, [e.target.name]: value });
  };

  // save issue to the database using issueservice post API
  const saveIssue = (e) => {
    e.preventDefault();
    IssueService.saveIssue(issue)
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
    setIssue({
      issueId: "",
      projectName: "",
      issueType: "",
      summary: "",
      description: "",
      assignee: "",
      sprintName: "",
      epicName: "",
      reqOfTesting: false,
      spdeveloping: 0,
      sptesting: 0,
      totalSP: 0,
      priority: "",
      reporter: "",
    });
    handleClose();
  };

  const [inactive, setInactive] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  // setting states for Issue form fields on change
  // const setField = (field, value) => {
  //   setIssue({
  //     ...issue,
  //     [field]: value
  //   })

  //   if(!!errors[field]) setErrors({
  //     ...errors,
  //     [field]: null
  //   })
  // }

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

        <Modal show={show} onHide={handleClose}>
          {/* header section */}
          <Modal.Header>
            <Modal.Title>Create Issue</Modal.Title>
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
                    name="projectName"
                    value={issue.projectName}
                    onChange={(e) => handleChange(e)}
                    autoFocus
                    defaultValue="Select the Project"
                  >
                    <option value="" disabled selected>
                      Select the Project
                    </option>
                    <option value="project1">Project 1</option>
                    <option value="project2">Project 2</option>
                    <option value="project3">Project 3</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Issue type</Form.Label>
                  <Form.Select
                    name="issueType"
                    value={issue.issueType}
                    onChange={(e) => handleChange(e)}
                    // onChange={(e) => setField("issueType", e.target.value)}
                    // isInvalid={!!errors.issueType}
                    defaultValue="Select the Issue Type"
                  >
                    <option value="" disabled selected>
                      Select the Issue Type
                    </option>
                    <option>Issue</option>
                    <option>Bug</option>
                    <option>QA</option>
                  </Form.Select>
                  {/* <Form.Control.Feedback type="invalid">
                    {errors.issueType}
                  </Form.Control.Feedback> */}
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Summary</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Summary"
                    name="summary"
                    value={issue.summary}
                    onChange={(e) => handleChange(e)}
                    required={true}
                    // autoFocus
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Description"
                    name="description"
                    value={issue.description}
                    onChange={(e) => handleChange(e)}
                    required
                    // autoFocus
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Assignee</Form.Label>
                  <Form.Select
                    name="assignee"
                    value={issue.assignee}
                    onChange={(e) => handleChange(e)}
                    defaultValue="Select the Assignee"
                  >
                    <option value="" disabled selected>
                      Select the Assignee
                    </option>
                    <option>Ravindu Karunaweera</option>
                    <option>Yasiru Basura</option>
                    <option>Seefa Banu</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Sprint</Form.Label>
                  <Form.Select
                    name="sprintName"
                    value={issue.sprintName}
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
                  <Form.Label>Epic</Form.Label>
                  <Form.Select
                    name="epicName"
                    value={issue.epicName}
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
                  <Form.Label>Requirement of Testing</Form.Label>
                  <Form.Select
                    name="reqOfTesting"
                    value={issue.reqOfTesting}
                    onChange={(e) => handleChange(e)}
                    required
                  >
                    <option value="" disabled selected>
                      Select the Requirement of Testing
                    </option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Story point estimate for developing</Form.Label>
                  <Form.Control
                    type="number"
                    name="spdeveloping"
                    value={issue.spdeveloping}
                    onChange={(e) => handleChange(e)}
                    required
                    // placeholder="name@example.com"
                    // autoFocus
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Story point estimate for testing</Form.Label>
                  <Form.Control
                    type="number"
                    name="sptesting"
                    value={issue.sptesting}
                    onChange={(e) => handleChange(e)}
                    required
                    // placeholder="name@example.com"
                    // autoFocus
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Total estimated story point</Form.Label>
                  <Form.Control
                    type="number"
                    name="totalSP"
                    value={
                      parseInt(issue.spdeveloping) + parseInt(issue.sptesting)
                    }
                    onChange={(e) => handleChange(e)}
                    readOnly
                    // placeholder="name@example.com"
                    // autoFocus
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Priority</Form.Label>
                  <Form.Select
                    name="priority"
                    value={issue.priority}
                    onChange={(e) => handleChange(e)}
                    required
                    defaultValue="Select the priority"
                  >
                    <option value="" disabled selected>
                      Select the priority
                    </option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Reporter</Form.Label>
                  <Form.Select
                    name="reporter"
                    value={issue.reporter}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="" disabled selected>
                      Select the Reporter
                    </option>
                    <option>Reporter 1</option>
                    <option>Reporter 2</option>
                    <option>Reporter 3</option>
                  </Form.Select>
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
              className="rounded bg-[#1e90ff] text-white border-none  font-semibold hover:bg-[#1e90ff] "
              onClick={saveIssue}
            >
              Create
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default AddIssue;
