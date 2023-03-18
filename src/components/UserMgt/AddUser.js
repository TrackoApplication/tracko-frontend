import React, { useState } from 'react';
// import NavBar from '../NavBar/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MDBCol,MDBRow } from 'mdb-react-ui-kit';
import SystemUserService from '../../Services/SystemUserService';
import { useNavigate } from 'react-router-dom';

    

const AddUser = () => {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [loading, setLoading] = useState(false);
    const [form,setForm] = useState({});
    const [error,setError]=useState({});
    const [validated, setValidated] = useState(false);



  const [systemUser, setsystemUser] = React.useState({
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      emailId: '',
      confirmPassword: ''
    });

  const handleChange = (e) => {
    const value = e.target.value;
      setsystemUser({
          ...systemUser,
          [e.target.name]: e.target.value
      });
      if(value === ''){
        setError({
          ...error,
          [e.target.name]: 'This field is required'
        })
      }else{
        setError({
          ...error,
          [e.target.name]: ''
        })
      }

    }

  const saveSystemUser = (e) => {
    e.preventDefault();
    SystemUserService.saveSystemUser(systemUser).then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error);
    });
    handleClose();
    setLoading(true);
  }
    
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

      return (
        <>
          <Button 
          variant="primary" 
          className="rounded bg-[#231651] text-white border-none px-6 py-2 font-semibold transition duration-700 hover:scale-105 hover:bg-[#231651] ease-in-out" 
          onClick={handleShow}>
            Add User
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add user</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <MDBRow>
                    <MDBCol>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                name='firstName'
                                type="Name"
                                placeholder="Jhon"
                                autoFocus
                                value={systemUser.firstName} 
                                onChange={(e)=>handleChange(e)}
                                required
                            />
                          </Form.Group>
                    </MDBCol>
                    <MDBCol>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                name='lastName'
                                type="Name"
                                placeholder="Dee"
                                autoFocus
                                required
                                value={systemUser.lastName} 
                                onChange={(e)=>handleChange(e)}
                            />
                          </Form.Group>
                    </MDBCol>
                </MDBRow>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    name="userName"
                    type="Name"
                    placeholder="JhonDee999"
                    autoFocus
                    required
                    value={systemUser.userName} 
                    onChange={(e)=>handleChange(e)}
                    
                  />
                  </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="********"
                    autoFocus
                    required
                    value={systemUser.password} 
                    name="password"
                    onChange={(e)=>handleChange(e)}
                  />
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    name="confirmPassword"
                    type="password"
                    placeholder="********"
                    autoFocus
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    name='emailId'
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                    required
                    value={systemUser.emailId} 
                    onChange={(e)=>handleChange(e)}
                  />
                   <Form.Control.Feedback type="invalid">
                   Please provide a valid email address.
                  </Form.Control.Feedback>
                </Form.Group>

              <Form.Group controlId="">
                <Button variant="secondary" className='rounded bg-none text-black border-none font-semibold hover:underline hover:bg-white ' onClick={handleClose}>
                  Close
                </Button>
              </Form.Group>

              <Button variant="primary" className='rounded bg-[#231651] text-white border-none  font-semibold hover:bg-[#2a1670] ' 
              type='submit'
              onClick={saveSystemUser}>
                Save Changes
              </Button>
              </Form>
            </Modal.Body>
            
          </Modal>
        </>
   
  )
}

export default AddUser