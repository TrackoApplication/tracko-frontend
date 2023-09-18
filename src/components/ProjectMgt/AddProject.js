import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { FormControl } from "react-bootstrap";
import ProjectService from "../../Services/ProjectService";

const AddProject = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [errors, setErrors] = useState({});
  const [loading, setloading] = useState(true);
  const [clients, setClients] = useState([]);
  const [projectLeads, setProjectLeads] = useState([]);
  const [pos, setPos] = useState([]);

  const [project, setproject] = useState({
    id: "",
    projectName: "",
    imageURL: "",
    description: "",
    client: 0,
    projectLead: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setproject({ ...project, [e.target.name]: value });
  };

  const saveproject = (e) => {
    const accessToken = localStorage.getItem("accessToken");
    //  e.preventDefault();
    ProjectService.saveproject(project)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    handleClose();
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const id = localStorage.getItem("userId");
    console.log(id);
    const fetchdata = async () => {
      setloading(true); //set loading to true as at this moment we are loading the data
      try {
        //calling the api itself in the try block
        const response = await ProjectService.getProjectClients(accessToken,id);
        //to get the data from the api it may take some time. so we need to wait until we get the data
        //so we Use the "await" & ** must include the "async" to the funcion itselt as 'await' expressions are only allowed within async functions and at the top levels of modules.
        setClients(response.data); //setting the response to the state(useState) and passing the whatever data
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false); //when everything is done set loading to false
    };
    const fetchPo = async () => {
      setloading(true); //set loading to true as at this moment we are loading the data
      try {
        //calling the api itself in the try block
        const response = await ProjectService.getProjectPo(accessToken,id);
        //to get the data from the api it may take some time. so we need to wait until we get the data
        //so we Use the "await" & ** must include the "async" to the funcion itselt as 'await' expressions are only allowed within async functions and at the top levels of modules.
        setPos(response.data); //setting the response to the state(useState) and passing the whatever data
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false); //when everything is done set loading to false
    };
    fetchPo();
    //above is the declaration of the function "fetchdata"
    fetchdata(); //calling of the function
  }, []);

  const setField = (field, value) => {
    setproject({
      ...project,
      [field]: value,
    });
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    // const fetchData = await axios.get
  }, []);

  //Handlng form submit. Validating the form and if valid then saving the data to the database
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      saveproject(e);
      //Nav("/EpicList");
      handleClose();
      // setShowSuccess(true);
    } else {
      setErrors(formErrors);
    }
  };

  // validating the form fields
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

  return (
    <>
      <Button
        variant="primary"
        className="rounded bg-[#231651] text-white border-none px-6 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#231651]  ease-in-out"
        onClick={handleShow}
      >
        Add Project
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
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
                <Form.Label>Client</Form.Label>
                <Form.Control
                  as="select"
                  name="client"
                  value={project.client} // Make sure project.client is a single value
                  onChange={(e) => setField("client", e.target.value)}
                  isInvalid={!!errors.client}
                  autoFocus
                  required
                >
                  <option value="">Select a client</option>
                  {!loading && (
                    <>
                  {clients.map((client) => (
                    <option key={client.clientId} value={client.clientId}>
                      {client.clientName}
                    </option>
                  ))}
                  </>
                  )}
                </Form.Control>
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
                <Form.Label>Product Owner </Form.Label>
                {/* <FormControl name="projectLead"> */}
                <Form.Select
                  name="projectLead"
                  value={project.projectLead}
                  // onChange={(e) => handleChange(e)}
                  required
                  onChange={(e) => setField("projectLead", e.target.value)}
                  isInvalid={!!errors.projectLead}
          
                >
                   <option value="">Select a product owner</option>
                      {!loading && (
                    <>
                      {pos.map((po) => (
                  <option key = {po.systemUserId} value={po.systemUserId}>{po.firstName}</option>
                       ))}
                    </>
                  )}
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
            Create Project
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProject;

//Styles for the image preview
const styles = {
  preview: {
    marginTop: 10,
  },

  image: { maxWidth: "20%", maxHeight: 320 },

  input: {
    display: "none", //hides the irrelavent details in the "input" tag
  },
};
