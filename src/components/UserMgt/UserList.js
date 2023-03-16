import React, { useEffect } from 'react'
import { useState } from 'react'
import NavBar from '../NavBar/Navbar'
import { useNavigate } from 'react-router-dom'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import AddUser from './AddUser';
import SystemUserService from '../../Services/SystemUserService';
import './userList.css'
import Avatar from 'react-avatar';
import User from './User';
import ConfirmPopup from './ConfirmPopup';


const UserList = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const [systemUsers, setSystemUsers] = useState([]);
  const [newchange, setNewchange] = useState(false);


  useEffect(() => {
    
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await SystemUserService.getSystemUser();
        setSystemUsers(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

 

  const deleteSystemUser = (id) => {
      SystemUserService.deleteSystemUser(id).then((res) => {
        if (systemUsers) {
          setSystemUsers((prevElement) => {
            alert("User Deleted Successfully");
            return prevElement.filter((systemUser) => systemUser.id !== id);
          });
        }

      });
      
  };

  

  

  

  

  return (

    <>

      <div className=" h-12 m-4 ">
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
              {systemUsers.map((systemUser) => (
                  <User
                  systemUser={systemUser}
                  deleteSystemUser={deleteSystemUser}
                  key={systemUser.SystemUserId}
                  >
                  </User>
                
              ))}

            </MDBTableBody>

          )}

        </MDBTable>

      </div>

      

    </>
  )
};

export default UserList