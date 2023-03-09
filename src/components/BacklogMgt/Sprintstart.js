import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MDBCol } from 'mdb-react-ui-kit';
import SprintService from '../../services/SprintService';

const SprintStart = () => {

  const [sprint, setSprint] = useState({
    sprintId:"",
    sprintName:"",
    startDate:"",
    endDate:"",
    sprintGoal:"",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setSprint({...sprint,[e.target.name]: value});
  };

  const saveSprint = (e) => {
    e.preventDefault();
    SprintService.saveSprint(sprint).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
    handleClose();
  };

  const [inactive, setInactive] = React.useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <div>

        <div className={`container ${inactive ? "inactive" : ""}`}>

          <Button 
            variant="primary" 
            className="rounded bg-[#1e90ff] text-white border-none px-3 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#1e90ff] ease-in-out" 
            onClick={handleShow}>
            Start Sprint
          </Button>

          <Modal show={show} onHide={handleClose}>

            {/* header section */}
            <Modal.Header closeButton>
              <Modal.Title>Start Sprint</Modal.Title>
            </Modal.Header>

            {/* body section */}
            <Modal.Body>
              <Form>
                <MDBCol>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Sprint name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Sprint Name"
                            autoFocus
                            name="sprintName" 
                            value={sprint.sprintName} 
                            onChange={(e) => handleChange(e)}
                            // required
                        />

                        </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Duration</Form.Label>
                        <Form.Select>
                          <option value="">--Duration--</option>
                          <option value="">Custom</option>
                          <option value="">1 week</option>
                          <option value="">2 weeks</option>
                          <option value="">4 weeks</option>
                        </Form.Select>
                        </Form.Group>
                
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Start date</Form.Label>
                        <Form.Control
                          type="datetime-local"
                          name="startDate" 
                          value={sprint.startDate} 
                          onChange={(e) => handleChange(e)}
                        // placeholder="JhonDee999"
                        // autoFocus
                        />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>End date</Form.Label>
                        <Form.Control
                          type="datetime-local"
                          name="endDate" 
                          value={sprint.endDate} 
                          onChange={(e) => handleChange(e)}
                        // placeholder="name@example.com"
                        // autoFocus
                        />
                        </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Sprint Goal</Form.Label>
                        <Form.Control
                          as="textarea" rows={5}
                          placeholder="Goal"
                          name="sprintGoal" 
                          value={sprint.sprintGoal} 
                          onChange={(e) => handleChange(e)}
                        // autoFocus
                        />
                        </Form.Group>
                           
                </MDBCol>
              </Form>
            </Modal.Body>

            {/* button section */}
            <Modal.Footer>
              <Button variant="primary" className='rounded bg-[#1e90ff] text-white border-none  font-semibold hover:bg-[#1e90ff] ' onClick={saveSprint}>
                Start
              </Button>

              <Button variant="secondary" className='rounded bg-none text-black border-none font-semibold hover:underline hover:bg-white ' onClick={handleClose}>
                Cancel
              </Button>

            </Modal.Footer>
          </Modal>
            
        </div>
    </div>
  );
}

export default SprintStart;