import React, { useEffect } from 'react'
import { useState } from 'react'
import NavBar from '../NavBar/Navbar'
import { useNavigate } from 'react-router-dom'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import AddUser from './AddUser';
import SystemUserService from '../../Services/SystemUserService';
import { UpdateUser } from './UpdateUser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { MDBCol, MDBRow } from 'mdb-react-ui-kit';



const UserList = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const [systemUser, setSystemUser] = useState([]);


  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await SystemUserService.getSystemUser();
        setSystemUser(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteSystemUser = (e, id) => {
    e.preventDefault();
    SystemUserService.deleteSystemUser(id).then((res) => {
      if (systemUser) {
        setSystemUser((prevElement) => {
          return prevElement.filter((systemUser) => systemUser.id !== id);
        });
      }
    });

  };

  const editSystemUser = (e, id) => {
    e.preventDefault();

  };


  return (

    <>
      <NavBar />

      <div className=" h-12 m-4 ">
        {/* <button 
         onClick={<AddUser handleClose/>}
        // onClick = {() => navigate("/addUser")}
        className="rounded bg-[#231651] text-white px-6 py-2 font-semibold transition duration-700 hover:scale-105 ease-in-out">Add User</button> */}
        <AddUser />
      </div>

      <div className='mx-4 justify-content-md-center'>
        <MDBTable align=' middle' className='w-[100%]'>
          <MDBTableHead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Role</th>
              <th scope='col'>Group</th>
              <th scope='col'>Actions</th>
            </tr>
          </MDBTableHead>

          {!loading && (

            <MDBTableBody>
              {systemUser.map((systemUser) => (

                <tr key={systemUser.id} >
                  <td className='w-[400px]'>
                    <div className='d-flex align-items-center'>
                      {/* <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              /> */}
                      <b-avatar variant="secondary"></b-avatar>
                      <div className='ms-3'>
                        <p className='fw-bold mb-1'>{systemUser.firstName}</p>
                        <p className='text-muted mb-0'>{systemUser.emailId}</p>
                      </div>
                    </div>
                  </td>
                  <td className='w-[300px]'>
                    <p className='fw-normal mb-1 '>System Admin</p>
                  </td>
                  <td className='w-[400px]'>
                    <MDBBadge color='success' pill>
                      Active
                    </MDBBadge>
                  </td>
                  <td className='w-[200px]'>
                    <MDBBtn
                      // onClick={(e,id) => {editSystemUser(e ,systemUser.id)} ; handleShow()}
                      onClick={handleShow}
                      color='link' rounded size='sm' cursor-pointer>
                      Edit
                    </MDBBtn>

                    <a
                      onClick={(e, id) => deleteSystemUser(e, systemUser.id)}
                      color='link' rounded size='sm'>
                      Delete
                    </a>
                  </td>
                </tr>

              ))}


            </MDBTableBody>

          )}
                    

        </MDBTable>

        {systemUser.map((systemUser) => (
        <Modal show={show} onHide={handleClose}>
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
            <Button variant="primary" className='rounded bg-[#231651] text-white border-none  font-semibold hover:bg-[#2a1670] '>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

    ))}
      </div>

    </>
  )
}

export default UserList