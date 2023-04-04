import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import EpicService from "../../Services/EpicService";

const AddEpic = () => {
  const [inactive, setInactive] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [epic, setepic] = useState({
    id: "",
    project: "",
    epicName: "",
    epicSummary: "",
    reporter: "",
    epicDescription: "",
    priority: "",
    assignee: "",
    team: "",
    targetStart: "",
    targetEnd: "",
    storyPoints: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setepic({ ...epic, [e.target.name]: value });
  };

  const saveEpic = (e) => {
    //  e.preventDefault();
    EpicService.saveEpic(epic)
      .then((response) => {
        console.log(response);
      })
      .catch((Error) => {});
  };

  const handlebuttonclick = (e) => {
    saveEpic();
    handleClose();
  };



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
                  onChange={(e) => handleChange(e)}>
                    <option value="">Select the project</option>
                    <option value="Project 1">Project 1</option>
                    <option value="Project 2">Project 2</option>
                    <option value="Project 3">Project 3</option>
                    <option value="Project 4">Project 4</option>
                  </Form.Select>
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
                    onChange={(e) => handleChange(e)} />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Project Summary</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Summary"
                    name="epicName"
                    value={epic.epicSummary}
                    onChange={(e) => handleChange(e)}
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Reporter</Form.Label>
                  <Form.Select
                  name="reporter"
                  value={epic.reporter}
                  onChange={(e) => handleChange(e)}>
                    <option value="">Reporter</option>
                    <option value="Ravindu Karunaweera">Ravindu Karunaweera</option>
                    <option value="Yasiru Basura">Yasiru Basura</option>
                    <option value="Seefa Banu">Seefa Banu</option>
                  </Form.Select>
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
                    onChange={(e) => handleChange(e)}
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
                  onChange={(e) => handleChange(e)}>
                    <option value="">Priority</option>
                    <option value="Low">Low</option>
                    <option value="Med">Med</option>
                    <option value="High">High</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Assignee</Form.Label>
                  <Form.Select
                  name="assignee"
                  value={epic.assignee}
                  onChange={(e) => handleChange(e)}>
                    <option value="">Assignee</option>
                    <option value="Ravindu Karunaweera">Ravindu Karunaweera</option>
                    <option value="Yasiru Basura">Yasiru Basura</option>
                    <option value="Seefa Banu">Seefa Banu</option>
                  </Form.Select>
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
                      onChange={(e) => handleChange(e)}
                      />
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
                      onChange={(e) => handleChange(e)}
                      />
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
                    onChange={(e) => handleChange(e)}
                  />
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
              onClick={handlebuttonclick}
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
