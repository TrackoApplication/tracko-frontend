import React from 'react'
import './Group.css';
import { useState } from 'react'
import NavBar from '../NavBar/Navbar'
import { useNavigate } from 'react-router-dom'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import AddGroup from './AddGroup';
import "./Group.css"
import { useEffect } from 'react';
import axios from 'axios';

export const GroupList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [groups, setGroups] = useState([]);

  

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    const getGroups = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8080/api/v1/accessgroups/all", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setGroups(response.data);
        console.log(response.data);
      }
      catch (err) {
        console.error(err.message);
      }
      setLoading(false);
    }; 
    
    getGroups();
   
  }, []);

  return (

    <div className="mainGroup">
      <div className='title'>
        <h1 >Return0/Group </h1>
      </div>
      <div className="h-12 m-4">
        <AddGroup />
      </div>

      <MDBTable className='m-4 group-table center'>
        <MDBTableHead className='bg-gray-100 rounded '>
          <tr >
            <th scope='col'>Access Group</th>
            <th scope='col'>Group Description</th>
            <th scope='col' >No. of Members</th>
            <th scope='col'>Actions</th>

          </tr>
        </MDBTableHead>


        {!loading && (
        <MDBTableBody>
        {groups.map((group) => (
          <tr>

            <td className='col-2'>
              <div className='d-flex align-items-center col-3'>
                  <p className='mb-1 '>{group.accessGroupName}</p>
              </div>
            </td>

            <td>
              <p className=' mb-1 col-9 text-justify' style={{fontSize:"10px"}}>{group.description}</p>
            </td>

            <td className='col-3 '>
              <MDBBadge color='success' pill>
                7
              </MDBBadge>
            </td>

            <td className='col-2'>
              <MDBBtn
               onClick={() => navigate('/GroupDetail/' + group.accessGroupId)}
                color='link' rounded size='sm'>
                Show Details
              </MDBBtn>
            </td>

          </tr>
          
        ))}
        </MDBTableBody>
        )}

      </MDBTable>
    </div>




  )
}
