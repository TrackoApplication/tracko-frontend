import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { MDBCol } from "mdb-react-ui-kit";
import IssueService from "../../../Services/IssueService";
import EpicService from "../../../Services/EpicService";
import "./AddIssue.css";
import { useEffect } from "react";
import SprintService from "../../../Services/SprintService";
import IssuetypeService from "../../../Services/IssuetypeService";
import PriorityService from "../../../Services/PriorityService";
import ProjectService from "../../../Services/ProjectService";
// import { useNavigate } from "react-router-dom";

//setting states for Issue form fields
const AddIssue = () => {
  const [loading, setloading] = useState(true);
  const [sprints, setsprints] = useState([]);
  const [epics, setepics] = useState([]);
  const [issuetypes, setissuetypes] = useState([]);
  const [priorities, setpriorities] = useState([]);
  const [projects, setprojects] = useState([]);

  const [issue, setIssue] = useState({
    issueId: "",
    projectName: "",
    issuetypeName: "",
    summary: "",
    description: "",
    assignee: "",
    sprintName: "",
    epicName: "",
    reqOfTesting: "true",
    spdeveloping: 0,
    sptesting: 0,
    totalSP: 0,
    priority: "",
    reporter: "",
    status: "",
  });

  //Retrieving sprint names from the backend
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await SprintService.getSprints();
        setsprints(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };
    fetchData();
  }, []);

  //Retrieving epic names from the backend
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await EpicService.getEpics();
        setepics(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };
    fetchData();
  }, []);

  //Retrieving issue types from the backend
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await IssuetypeService.getIssuetype();
        setissuetypes(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };
    fetchData();
  }, []);

  //Retrieving priorities from the backend
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await PriorityService.getPriority();
        setpriorities(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };
    fetchData();
  }, []);

  //Retrieving priorities from the backend
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await ProjectService.getProjects();
        setprojects(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };
    fetchData();
  }, []);

  // const navigate = useNavigate();

  // setting states for Issue form fields on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "reqOfTesting") {
      const reqOfTestingValue = value === "true";
      setIssue({
        ...issue,
        reqOfTesting: reqOfTestingValue,
        sptesting: reqOfTestingValue ? issue.sptesting : 0, // Reset sptesting if reqOfTesting is changed to "false"
      });
    } else {
      setIssue({ ...issue, [name]: value });
    }
  };

  // save issue to the database using issueservice post API
  const saveIssue = (e) => {
    e.preventDefault();
    issue.totalSP = parseInt(issue.spdeveloping) + parseInt(issue.sptesting);
    // console.log(issue);
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
      issuetypeName: "",
      summary: "",
      description: "",
      assignee: "",
      sprintName: "",
      epicName: "",
      reqOfTesting: "true",
      spdeveloping: 0,
      sptesting: 0,
      totalSP: 0,
      priority: "",
      reporter: "",
      status: "",
    });
    handleClose();
  };

  // const [Loading, setLoading] = useEffect({});
  // const [projectOption, setProjectOption] = useState({});

  //backend connection
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setLoading(true);
  //       try {
  //         const response = await IssueService.getProjectList();
  //         setProjectOption(response.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //       setLoading(false);
  //     };
  //     fetchData();
  //   }, []);

  const [inactive] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  // setting states for Issue form fields on change
  const setField = (field, value) => {
    setIssue({
      ...issue,
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
    debugger;
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      saveIssue(e);
    } else {
      setErrors(formErrors);
    }
  };

  const validate = () => {
    const {
      projectName,
      issuetypeName,
      summary,
      reqOfTesting,
      spdeveloping,
      sptesting,
      priority,
      reporter,
    } = issue;
    const newErrors = {};
    debugger;
    if (!projectName || projectName === "") {
      newErrors.projectName = "Project name cannot be blank";
    }

    if (!issuetypeName || issuetypeName === "") {
      newErrors.issuetypeName = "Issue type cannot be blank";
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
      // newErrors.sptesting = null;
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
      <div
        className={`container ${
          inactive ? "inactive" : ""
        } btn-add-issue-container`}
      >
        <Button
          variant="link"
          className="text-black border-none font-semibold text-decoration-none shadow-none btn-add-issue"
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
                    value={issue.projectName}
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
                    {!loading && (
                      <>
                        {projects.map((project) => (
                          <option
                            key={project.projectId}
                            value={project.projectName}
                          >
                            {project.projectName}
                          </option>
                        ))}
                      </>
                    )}
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
                    name="issuetypeName"
                    value={issue.issuetypeName}
                    // onChange={(e) => handleChange(e)}
                    onChange={(e) => setField("issuetypeName", e.target.value)}
                    isInvalid={!!errors.issuetypeName}
                    defaultValue="Select the Issue Type"
                  >
                    <option value="" disabled selected>
                      Select the Issue Type
                    </option>

                    {!loading && (
                      <>
                        {issuetypes.map((issuetype) => (
                          <option
                            key={issuetype.issueTypeId}
                            value={issuetype.issuetypeName}
                          >
                            {issuetype.issuetypeName}
                          </option>
                        ))}
                      </>
                    )}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid" className="infeedback">
                    {errors.issuetypeName}
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
                    value={issue.summary}
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
                  <Form.Label className="flabel">Assignee</Form.Label>
                  <Form.Select
                    className="sitem"
                    name="assignee"
                    value={issue.assignee}
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
                    value={issue.sprintName}
                    onChange={(e) => handleChange(e)}
                    defaultValue="Select the Sprint"
                  >
                    <option value="" disabled selected>
                      Select the Sprint
                    </option>

                    {!loading && (
                      <>
                        {sprints.map((sprint) => (
                          <option
                            key={sprint.sprintId}
                            value={sprint.sprintName}
                          >
                            {sprint.sprintName}
                          </option>
                        ))}
                      </>
                    )}
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
                    value={issue.epicName}
                    onChange={(e) => handleChange(e)}
                    defaultValue="Select the Epic"
                  >
                    <option value="" disabled selected>
                      Select the Epic
                    </option>
                    {!loading && (
                      <>
                        {epics.map((epic) => (
                          <option key={epic.epicId} value={epic.epicName}>
                            {epic.epicName}
                          </option>
                        ))}
                      </>
                    )}
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
                    value={issue.reqOfTesting}
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
                    value={issue.spdeveloping}
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
                    value={issue.sptesting}
                    // onChange={handleChange}
                    onChange={(e) => setField("sptesting", e.target.value)}
                    isInvalid={!!errors.sptesting}
                    required={issue.reqOfTesting === "true"}
                    disabled={issue.reqOfTesting !== "true"} // Disable the field when reqOfTesting is set to "false"
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
                    disabled
                    // value={issue.totalSP}
                    value={
                      parseInt(issue.spdeveloping) + parseInt(issue.sptesting)
                    }
                    // onChange={(e) =>setField("totalSP", issue.spdeveloping + issue.sptesting)}
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
                    value={issue.priority}
                    // onChange={(e) => handleChange(e)}
                    required
                    defaultValue="Select the priority"
                    onChange={(e) => setField("priority", e.target.value)}
                    isInvalid={!!errors.priority}
                  >
                    <option value="" disabled selected>
                      Select the Priority
                    </option>
                    {!loading && (
                      <>
                        {priorities.map((issuePriority) => (
                          <option
                            key={issuePriority.priorityId}
                            value={issuePriority.priority}
                          >
                            {issuePriority.priority}
                          </option>
                        ))}
                      </>
                    )}
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
                    value={issue.reporter}
                    // onChange={(e) => handleChange(e)}
                    onChange={(e) => setField("reporter", e.target.value)}
                    isInvalid={!!errors.reporter}
                  >
                    {/* In here it should automatically show the current user(The one who enter the issue) */}
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

export default AddIssue;
