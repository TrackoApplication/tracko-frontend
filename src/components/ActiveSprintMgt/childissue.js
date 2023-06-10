import React, { useEffect, useState } from 'react';
import Sidebar from '../SideBar/Sidebar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MDBCol } from 'mdb-react-ui-kit';
import { BsPersonCircle } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import "./childissue.css"
import MultipleAttachments from './Attachment';

const Childissue = () => {
  const [inactive, setInactive] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [childissue, setChildissue] = useState({
    type:"",
    summary:"",
    description:"",
    assignee:"",
    sprint:"",
    reqOfTest:false,
    devEstimatedSP:0,
    testEstimatedSP:0,
    totalSP:0,
    priority:"",
    reporter:""
  });

  const [errors, setErrors] = useState({
    type: '',
    summary: '',
    reqOfTest: ''
  });

  //function to handle form field changes and update the state value
  const onInputChange = (e) => {
    const { value, name } = e.target;

    setChildissue({ ...childissue, [name]: value});

    if (name === 'devEstimatedSP' || name === 'testEstimatedSP') {
      const devSP = name === 'devEstimatedSP' ? parseInt(value) || 0 : childissue.devEstimatedSP || 0;
      const testSP = name === 'testEstimatedSP' ? parseInt(value) || 0 : childissue.testEstimatedSP || 0;
      const totalSP = parseInt(devSP) + parseInt(testSP);
      setChildissue((prevState) => ({ ...prevState, totalSP }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate the form fields
    const validationErrors = {};
    if (!childissue.type) {
      validationErrors.type = 'Child issue type is required';
    }
    if (!childissue.summary) {
      validationErrors.summary = 'Summary is required';
    }
    if (!childissue.reqOfTest) {
      validationErrors.reqOfTest = 'Requirement of testing is required';
    }

    setErrors(validationErrors);
    
    // If there are any validation errors, set them and stop form submission
    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    
    // Clear the validation errors
    setErrors({});
    
    // Perform further actions (e.g., submit data to server)
    // ...
  };
  

  const saveChildissue = async (e) => {
    e.preventDefault();
      try {
        await axios.post('http://localhost:8080/childissue/add_iss', childissue);
        alert('Issue created successfully!');
      } catch (error) {
        console.log(error);
        alert('An error occurred while creating the issue.');
      }
    handleClose();
  };

  const [childissues, setChildissues] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/childissue/get_iss').then((response) => {
      setChildissues(response.data);
    });
  }, []);

  const reset = (e) => {
    e.preventDefault();
    setChildissue({
      type:"",
      summary:"",
      description:"",
      assignee:"",
      sprint:"",
      reqOfTest:"",
      devEstimatedSP:"",
      testEstimatedSP:"",
      totalSP:"",
      priority:"",
      reporter:""
    });
    handleClose();
  };
 
  return (    
    <div className='App'>
      <div className='AppGlass'>
        <Sidebar

        onCollapse={(inactive) => {
            setInactive(inactive);
        }}
        
        />
        <div className='childissuePage'>

        <h2>{"Active Sprint > Issue 1"}</h2>
          <div>
            <div class="row">
              <div class="col-sm-7">

              <div className="scrollbar-container">
              <div className="scrollbar-content">

                <h3>{"Issue 1 - Project planning stage"}</h3>
                  <Button 
                    variant="primary" 
                    className="rounded bg-[#1e90ff] text-white border-none px-3 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#1e90ff] ease-in-out" 
                    onClick={handleShow}>
                    Create Child Issue
                  </Button>

                  <Modal show={show} onHide={handleClose}>

                    {/* header section */}
                    <Modal.Header closeButton>
                      <Modal.Title>Create Child Issue</Modal.Title>
                    </Modal.Header>

                    {/* body section */}

                    <div className="scrollbar-container-2">
                    <div className="scrollbar-content">
                    <Modal.Body>
                      <Form onSubmit={handleSubmit}>
                        <MDBCol>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='star'>Child issue Type</Form.Label>
                                <Form.Select
                                  name="type"
                                  value={childissue.type}
                                  onChange={(e) => onInputChange(e)}
                                  required
                                  isInvalid={!!errors.type}
                                >
                                  <option value="" disabled>--Issue Type--</option>
                                  <option value="bug">Bug</option>
                                  <option value="issue">Issue</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">{errors.type}</Form.Control.Feedback>
                            </Form.Group>
                        
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='star'>Summary</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="summary"
                                    //autoFocus
                                    value={childissue.summary}
                                    onChange={(e) => onInputChange(e)}
                                    required
                                    isInvalid={!!errors.summary}
                                />
                                <Form.Control.Feedback type="invalid">{errors.summary}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea" 
                                    rows={5} 
                                    name="description"
                                    value={childissue.description}
                                    onChange={(e) => onInputChange(e)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Assignee</Form.Label>
                                <Form.Select
                                  name="assignee"
                                  value={childissue.assignee}
                                  onChange={(e) => onInputChange(e)}
                                  required
                                >
                                  <option value="" disabled>--Assignee--</option>
                                  <option value="tom">Tom</option>
                                  <option value="jerry">Jerry</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Sprint</Form.Label>
                                <Form.Select
                                  name="sprint"
                                  value={childissue.sprint}
                                  onChange={(e) => onInputChange(e)}
                                  required
                                >
                                  <option value="" disabled>--Sprint--</option>
                                  <option value="sprint 1">Sprint 1</option>
                                  <option value="sprint 2">Sprint 2</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='star'>Requirement of testing</Form.Label>
                                <Form.Select
                                  name="reqOfTest"
                                  value={childissue.reqOfTest}
                                  onChange={(e) => onInputChange(e)}
                                  required
                                >
                                  <option value="yes">Yes</option>
                                  <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Story point estimate for Developing</Form.Label>
                                <Form.Control
                                  type="number"
                                  name="devEstimatedSP"
                                  value={childissue.devEstimatedSP}
                                  onChange={(e) => onInputChange(e)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Story point estimate for Testing</Form.Label>
                                <Form.Control
                                  type="number"
                                  name="testEstimatedSP"
                                  value={childissue.testEstimatedSP}
                                  onChange={(e) => onInputChange(e)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Total Estimated Story points</Form.Label>
                                <Form.Control
                                  type="number"
                                  name="totalSP"
                                  value={childissue.totalSP}
                                  onChange={(e) => onInputChange(e)}
                                  readOnly
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label className='star'>Priority</Form.Label>
                                  <Form.Select
                                    name="priority"
                                    value={childissue.priority}
                                    onChange={(e) => onInputChange(e)}
                                  >
                                    <option value="high">High</option>
                                    <option value="medium">Medium</option>
                                    <option value="low">Low</option>
                                  </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Reporter</Form.Label>
                                <Form.Select
                                    name="reporter"
                                    value={childissue.reporter}
                                    onChange={(e) => onInputChange(e)}
                                >
                                  <option value="tom">Tom</option>
                                  <option value="jerry">Jerry</option>
                                </Form.Select>
                            </Form.Group>
                                  
                        </MDBCol>
                      </Form>
                    </Modal.Body>
                    </div>
                    </div>


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
                        type = "submit"
                        variant="primary"
                        className="rounded bg-[#1e90ff] text-white border-none  font-semibold hover:bg-[#1e90ff] "
                        onClick={saveChildissue}
                      >
                        Create
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <MultipleAttachments />

                <div class="list-group" className='list'>
                  <div class="col-12">

                  {childissues.map((childissue) => (
                    <Link 
                      key={childissue.id} 
                      type="button" 
                      className="list-group-item list-group-item-action" 
                      to={`../CreateChildIssue?childIssueId=${childissue.issueID}`}
                    >
                      <div className='d-flex justify-content-between'>
                        <div>
                          <button class='badge bg-primary border'>
                            {childissue.issueID}
                          </button>
                            {" -> "}
                            {childissue.summary}
                        </div>
                        <div className='d-flex'>
                          <IconContext.Provider value={{ size: "2em" }}>
                            <div>
                              <BsPersonCircle />
                            </div>
                          </IconContext.Provider></div>
                      </div>
                    </Link>
                  ))}
                  </div>
                </div>

                </div>
               </div>

              </div>

              <div class="col-sm-5">
                <h3>Issue 1 details</h3>

              <div class="card border mb-3 shadow-sm">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Story points</li>
                  <li class="list-group-item">Sprint</li>
                  <li class="list-group-item">Priority level</li>
                </ul>
              </div>

              <div class="card border mb-3 shadow-sm">
                <div class="card-header justify-content-between">
                  Developer phase
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Assignee
                    <IconContext.Provider value={{ size: "2em" }}>
                      <div>
                        <BsPersonCircle />
                      </div>
                    </IconContext.Provider>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Reporter
                    <IconContext.Provider value={{ size: "2em" }}>
                      <div>
                        <BsPersonCircle />
                      </div>
                    </IconContext.Provider>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Story points
                    <span class="badge bg-primary">14</span>
                  </li>
                </ul>
              </div>

              <div class="card border mb-3 shadow-sm">
                <div class="card-header">
                  QA phase
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Assignee
                    <IconContext.Provider value={{ size: "2em" }}>
                      <div>
                        <BsPersonCircle />
                      </div>
                    </IconContext.Provider>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Reporter
                    <IconContext.Provider value={{ size: "2em" }}>
                      <div>
                        <BsPersonCircle />
                      </div>
                    </IconContext.Provider>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Story point
                    <span class="badge bg-primary">14</span>
                  </li>
                </ul>
              </div>
              </div>

            </div>
          </div>

          
            
        </div>
      </div>
    </div>
  );
}

export default Childissue; 