import React, { useState, useEffect } from 'react';
// import NavBar from '../NavBar/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import SystemUserService from '../../Services/SystemUserService';
import { useNavigate, useParams } from 'react-router-dom';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';



export const UpdateUser = ({ id }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [validated, setValidated] = useState(false);
  const [emailExists, setEmailExists] = useState(false);


  const handleChange = (field, value) => {

    setsystemUser({
      ...systemUser,
      [field]: value
    });

  }


  const [systemUser, setsystemUser] = React.useState({
    id: '',
    firstName: '',
    lastName: ''
    // userName: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await SystemUserService.getSystemUserById(id);
        setsystemUser(response.data);
      } catch (error) {
        console.log(error);

      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const editSystemUser = (e, id) => {
    e.preventDefault();
    handleShow();
  };

  const updateSystemUser = (e) => {
    e.preventDefault();
    SystemUserService.updateSystemUser(id, systemUser).then((res) => {
      navigate('/UserList');
    }
    ).catch((error) => {
      console.log(error);
    }
    );


  }

  return (
    <>
      <i class="bi bi-pen"
        onClick={(e, id) => { editSystemUser(e, systemUser.id) }}
      >
      </i>


      {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit user</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <MDBRow>
                <MDBCol>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="Name"
                      placeholder={systemUser.firstName}
                      autoFocus
                    />
                  </Form.Group>
                </MDBCol>
                <MDBCol>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="Name"
                      placeholder={systemUser.lastName}
                      autoFocus
                    />
                  </Form.Group>
                </MDBCol>
              </MDBRow>


              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder={systemUser.emailId}
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Group</Form.Label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Product Owner</option>
                  <option>Scrum master</option>
                  <option>Team member</option>
                </select>

              </Form.Group>

            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className='rounded bg-none text-black border-none font-semibold hover:underline hover:bg-white ' onClick={handleClose}>
              Close
            </Button>
            <Button
              onClick={updateSystemUser}
              variant="primary" className='rounded bg-[#231651] text-white border-none  font-semibold hover:bg-[#2a1670] '>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form noValidate validated={validated} >
            <MDBRow>
              <MDBCol>
                <Form.Group className="mb-3" >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    name='firstName'
                    type="Name"
                    placeholder="Jhon"
                    autoFocus
                    value={systemUser.firstName}
                    // onChange={(e)=>handleChange(e)}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    required
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
              </MDBCol>
              <MDBCol>
                <Form.Group className="mb-3" >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    name='lastName'
                    type="Name"
                    placeholder="Dee"
                    autoFocus
                    required
                    value={systemUser.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>

                </Form.Group>
              </MDBCol>
            </MDBRow>

            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    name="userName"
                    type="Name"
                    placeholder="JhonDee999"
                    autoFocus
                    required
                    value={systemUser.userName} 
                    onChange = {(e) => handleChange('userName', e.target.value)}
                    isInvalid={!!errors.userName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.userName}
                  </Form.Control.Feedback>

                  </Form.Group> */}

            {/* <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                id='password'
                placeholder="********"
                autoFocus
                required
                value={systemUser.password}
                name="password"
                onChange={(e) => handleChange('password', e.target.value)}
                isInvalid={!!errors.password}

              />

              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>

            </Form.Group>


            <Form.Group className="mb-3" c>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                name="confirmPassword"
                type="password"
                placeholder="********"
                autoFocus
                value={systemUser.confirmPassword}
                required
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name='emailId'
                type="email"
                placeholder="name@example.com"
                autoFocus
                required
                value={systemUser.emailId}
                onChange={(e) => handleChange('emailId', e.target.value)}
                isInvalid={!!errors.emailId}

              />
              <Form.Control.Feedback type="invalid">
                {errors.emailId}
              </Form.Control.Feedback>
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Group</Form.Label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Product Owner</option>
                <option>Scrum master</option>
                <option>Team member</option>
              </select>

            </Form.Group>
            
              <btn
                className="btn btn-blue btn-sm"
                onClick={handleClose}>
                Close
              </btn>

              <btn
                className="btn btn-green btn-sm"
                type='submit'
                // onClick={saveSystemUser}>
                onClick={updateSystemUser}
              >
                Update Changes
              </btn>

           
          </Form>
        </Modal.Body>

      </Modal>



    </>
  )
}
