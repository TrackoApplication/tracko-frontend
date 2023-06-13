import React, { useState, useEffect } from 'react';
// import NavBar from '../NavBar/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import SystemUserService from '../../Services/SystemUserService';
import { useNavigate, useParams } from 'react-router-dom';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import SuccessfulAction from '../CommonComponents/SuccessfulAction';


export const UpdateUser = (props) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [validated, setValidated] = useState(false);
  const [emailExists, setEmailExists] = useState(false);

  const id = props.systemUserId;


  const handleChange = (field, value) => {

    setsystemUsers({
      ...systemUsers,
      [field]: value
    });

  }

  const [systemUsers, setsystemUsers] = React.useState({
    systemUserId: id,
    firstName: '',
    lastName: '',
    accessGroup: '',
    // userName: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await SystemUserService.getSystemUserById(systemUsers.systemUserId);
        setsystemUsers(response.data);
        console.log(systemUsers);
      } catch (error) {
        console.log(error);

      }
      setLoading(false);
    };
    fetchData();
  }, []);

   

  const updateSystemUser = (e) => {
    const accessToken = localStorage.getItem('accessToken');
    e.preventDefault();
    SystemUserService.updateSystemUser(id,systemUsers,accessToken).then((res) => {
      props.onHide();
      // window.location.reload(false);
      setShowSuccess(true);    

    }
    ).catch((error) => {
      console.log(error);
    }
    );

  }

  return (
    <>
    
      <Modal  {...props} >
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
                    placeholder={systemUsers.firstName}
                    autoFocus
                    value={systemUsers.firstName}
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
                    placeholder={systemUsers.lastName}
                    autoFocus
                    required
                    value={systemUsers.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>

                </Form.Group>
              </MDBCol>
            </MDBRow>


            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Group</Form.Label>
              <select 
              class="form-control" 
              id="exampleFormControlSelect1"
              name='accessGroupName'
              type="Name"
              placeholder={systemUsers.accessGroup}
              autoFocus
              required
              // value={systemUsers.accessGroup}
              onChange={(e) => handleChange('accessGroup', e.target.value)}
              >
                <option value="Not Assigned<">Not Assigned</option>
                <option value="Product Owner">Product Owner</option>
              </select>

            </Form.Group>
            
              <btn
                className="btn btn-blue btn-sm"
                onClick={props.onHide}>
                Close
              </btn>

              <btn
                className="btn btn-green btn-sm"
                type='submit'
                onClick={updateSystemUser}
              >
                Update Changes
              </btn>
           
          </Form>
        </Modal.Body>

      </Modal>

      <SuccessfulAction
        onHide={() => setShowSuccess(false)}
        show={showSuccess}
        message="User Details Updated Successfully"
      />


    </>
  )
}
