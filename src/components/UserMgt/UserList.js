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
import './userList.css'
import Avatar from 'react-avatar';


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

      <div className='mx-4'>
        <MDBTable className='user-table '>
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
                      <Avatar name={systemUser.firstName} size="40" round={true} />

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
                      Not Assigned
                    </MDBBadge>
                  </td>
                  <td className='w-[200px]'>

                    <UpdateUser id={systemUser.id} />

                    <MDBBtn
                      onClick={(e, id) => deleteSystemUser(e, systemUser.id)}
                      color='link' rounded size='sm'>
                      Delete
                    </MDBBtn>
                  </td>
                </tr>

              ))}


            </MDBTableBody>

          )}


        </MDBTable>


      </div>

    </>
  )
}

export default UserList