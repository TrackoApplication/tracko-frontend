import React, { useState } from 'react';
import Sidebar from '../SideBar/Sidebar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MDBCol } from 'mdb-react-ui-kit';
import {BsPersonCircle} from "react-icons/bs";
import { IconContext } from "react-icons";

import "./childissue.css"
import MultipleAttachments from './Attachment';

const Childissue = () => {
  const [inactive, setInactive] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})

  const [issueType, setIssueType] = useState('');
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]:value
    })

    if(!!errors[field])
    setField({
      ...errors,
      [field]:null
    })
  }
 
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
                    <Form>
                      <MDBCol>

                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label className='star'>Issue Type</Form.Label>
                              <Form.Select>
                                <option disabled selected>--Issue Type--</option>
                                <option value="bug">Bug</option>
                                <option value="issue">Issue</option>
                              </Form.Select>
                          </Form.Group>
                      
                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label className='star'>Summary</Form.Label>
                              <Form.Control
                                  type="text"
                                  placeholder="Summary"
                                  autoFocus
                              />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>Description</Form.Label>
                              <Form.Control
                                  as="textarea" rows={5} value={issueType}
                              />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>Assignee</Form.Label>
                              <Form.Select>
                                <option value="">--Assignee--</option>
                                <option value="">Tom</option>
                                <option value="">Jerry</option>
                              </Form.Select>
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>Sprint</Form.Label>
                              <Form.Select>
                                <option value="">--Sprint--</option>
                                <option value="">Sprint 1</option>
                                <option value="">Sprint 2</option>
                              </Form.Select>
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label className='star'>Requirement of testing</Form.Label>
                              <Form.Select>
                                <option value="">Yes</option>
                                <option value="">No</option>
                              </Form.Select>
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>Story point estimate for Developing</Form.Label>
                              <Form.Control
                                  type="text"
                                  autoFocus
                                  // required
                              />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>Story point estimate for Testing</Form.Label>
                              <Form.Control
                                  type="text"
                                  autoFocus
                                  // required
                              />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>Total Estimated Story points</Form.Label>
                              <Form.Control
                                  type="text"
                                  autoFocus
                                  // required
                              />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>Priority</Form.Label>
                              <Form.Control
                                  type="text"
                                  autoFocus
                                  // required
                              />
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>Reporter</Form.Label>
                              <Form.Select>
                                <option value="">Tom</option>
                                <option value="">Jerry</option>
                              </Form.Select>
                          </Form.Group>
                                
                      </MDBCol>
                    </Form>
                  </Modal.Body>
                  </div>
                  </div>

                  {/* button section */}
                  <Modal.Footer>
                    <Button variant="primary" className='rounded bg-[#1e90ff] text-white border-none  font-semibold hover:bg-[#1e90ff] ' onClick={handleClose}>
                      Create
                    </Button>

                    <Button variant="secondary" className='rounded bg-none text-black border-none font-semibold hover:underline hover:bg-white ' onClick={handleClose}>
                      Cancel
                    </Button>

                  </Modal.Footer>
                </Modal>

                <MultipleAttachments />

                <div class="list-group" className='list'>
                  <div class="col-12">
                    <button type="button" class="list-group-item list-group-item-action">Child issue 1</button>
                    <button type="button" class="list-group-item list-group-item-action">Child issue 2</button>
                    <button type="button" class="list-group-item list-group-item-action">Child issue 3</button>
                    <button type="button" class="list-group-item list-group-item-action">Child issue 4</button>
                    <button type="button" class="list-group-item list-group-item-action">Child issue 5</button>
                  </div>
                </div>

                </div>
               </div>

              </div>

              <div class="col-sm-5">
                <h3>Issue 1 details</h3>

              <div class="card" className='cards border shadow-sm'>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Story points</li>
                  <li class="list-group-item">Sprint</li>
                  <li class="list-group-item">Priority level</li>
                </ul>
              </div>

              <div>......</div>

              <div class="card" className='cards border shadow-sm'>
                <div class="card-header justify-content-between">
                  Developer phase
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Assignee
                    <IconContext.Provider value={{ size: "1.5em" }}>
                      <div>
                        <BsPersonCircle />
                      </div>
                    </IconContext.Provider>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Reporter
                    <IconContext.Provider value={{ size: "1.5em" }}>
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

              <div>......</div>

              <div class="card" className='cards border shadow-sm'>
                <div class="card-header">
                  QA phase
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Assignee
                    <IconContext.Provider value={{ size: "1.5em" }}>
                      <div>
                        <BsPersonCircle />
                      </div>
                    </IconContext.Provider>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center">
                    Reporter
                    <IconContext.Provider value={{ size: "1.5em" }}>
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