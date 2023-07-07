import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import SuccessfulUpdation from "./SuccessfulUpdation";
import ProjectService from "../../Services/ProjectService";
import { useNavigate } from "react-router-dom";

function UpdateProject(props) {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => props.onHide();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [validated, setValidated] = useState(false);
  const id = props.data.id;

  const setField = (field, value) => {
    setProject({
      ...project,
      [field]: value,
    });
  };

  const [project, setProject] = React.useState(props.data);

  const handleChange = (e) => {
    const value = e.target.value;
    setProject({ ...project, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      ProjectService.updateProject(props.data.id, project)
        .then((res) => {
          setShowSuccess(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setErrors(formErrors);
    }
  };

  const validate = () => {
    const { projectName, imageURL, description, client, projectLead } = project;

    //defining the errors object
    const errors = {};
    if (!projectName || projectName === "") {
      errors.projectName = "Project Name is required";
    }

    if (!description || description === "") {
      errors.description = "Description is required";
    }

    if (!client || client === "") {
      errors.client = "Client is required";
    }

    if (!projectLead || projectLead === "") {
      errors.projectLead = "Project Lead is required";
    }

    return errors;
  };

  const [inactive] = React.useState(false);

  return (
    <div>
      <div className={`container ${inactive ? "inactive" : ""}`}>
        <Modal {...props} dialogClassName="mdw">
          <Modal.Body>
            <Form>
              <MDBRow>
                <MDBCol>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Project Name</Form.Label>
                    <Form.Control
                      type="Name"
                      name="projectName"
                      value={project.projectName}
                      required
                      onChange={(e) => setField("projectName", e.target.value)}
                      isInvalid={!!errors.projectName}
                      //onChange={(e) => handleChange(e)}
                      placeholder="Return 0 Software Project"
                      autoFocus
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="invalidfeedback"
                    >
                      {errors.projectName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </MDBCol>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="Name"
                    name="imageURL"
                    value={project.imageURL}
                    onChange={(e) => handleChange(e)}
                    placeholder="Enter Project image URL"
                    autoFocus
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="Text"
                    placeholder="..........."
                    name="description"
                    value={project.description}
                    // onChange={(e) => handleChange(e)}
                    autoFocus
                    required
                    onChange={(e) => setField("description", e.target.value)}
                    isInvalid={!!errors.description}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    className="invalidfeedback"
                  >
                    {errors.description}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Client </Form.Label>
                  <Form.Control
                    type="Name"
                    name="client"
                    value={project.client}
                    //onChange={(e) => handleChange(e)}
                    placeholder="Creative Software"
                    autoFocus
                    required
                    onChange={(e) => setField("client", e.target.value)}
                    isInvalid={!!errors.client}
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    className="invalidfeedback"
                  >
                    {errors.client}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Project Lead </Form.Label>
                  {/* <FormControl name="projectLead"> */}
                  <Form.Select
                    name="projectLead"
                    value={project.projectLead}
                    // onChange={(e) => handleChange(e)}
                    required
                    onChange={(e) => setField("projectLead", e.target.value)}
                    isInvalid={!!errors.projectLead}
                  >
                    <option value="">Assignee</option>
                    <option value="Ravindu Karunawwera">
                      Ravindu Karunaweera
                    </option>
                    <option value="Yasiru Basura">Yasiru Basura</option>
                    <option value="Seefa Baanu">Seefa Banu</option>
                    <option value="Jithmi Kumarasingha">
                      Jithmi Kumarasingha
                    </option>
                    <option value="Dulani Lamahewage">Dulani Lamahewage</option>
                  </Form.Select>
                  <Form.Control.Feedback
                    type="invalid"
                    className="invalidfeedback"
                  >
                    {errors.projectLead}
                  </Form.Control.Feedback>
                </Form.Group>
              </MDBRow>
            </Form>
          </Modal.Body>
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
              Update Project
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <SuccessfulUpdation
        onClose={() => {          
          props.onHide();
          setShowSuccess(false)}
        }
        show={showSuccess}
        message="Project Details Updated Successfully"
      />
    </div>
  );
}

export default UpdateProject;
