import React from 'react'
import './Group.css';
import { useState } from 'react'
import NavBar from '../NavBar/Navbar'
import { useNavigate } from 'react-router-dom'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import AddGroup from './AddGroup';
import "./Group.css"

export const GroupList = () => {
  const navigate = useNavigate();

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

        <MDBTableBody>
          <tr>

            <td className='col-2'>
              <div className='d-flex align-items-center col-3'>
                  <p className='mb-1 '>Product Owner</p>
              </div>
            </td>

            <td>
              <p className=' mb-1 col-9 text-justify' style={{fontSize:"10px"}}>The Product Owner (PO) is a member of the Agile Team who is responsible for maximizing the value delivered by the team and ensuring that the Team Backlog is aligned with customer and stakeholder needs.</p>
            </td>

            <td className='col-3 '>
              <MDBBadge color='success' pill>
                7
              </MDBBadge>
            </td>

            <td className='col-2'>
              <MDBBtn
                onClick={() => navigate('/GroupDetail')}
                color='link' rounded size='sm'>
                Show Details
              </MDBBtn>
            </td>

          </tr>

          <tr>
            <td>
              <div className='d-flex align-items-center'>
                <div >
                  <p className='mb-1'>Team member</p>
                </div>
              </div>
            </td>
            <td>
              <p className='fw-normal mb-1 text-justify col-9 ' style={{fontSize:"10px"}}>Team members are assigned to different activities of the project. They are responsible for doing the work in sprints and make sure that iterations complete within the defined time limit. </p>
            </td>
            <td>
              <MDBBadge color='primary' pill>
                6
              </MDBBadge>
            </td>
            <td>
              <MDBBtn
                onClick={() => navigate('/GroupDetail')}
                color='link' rounded size='sm'>
                Show Details
              </MDBBtn>
            </td>
          </tr>

          <tr>
            <td>
              <div className='d-flex align-items-center'>
                <div >
                  <p className='mb-1'>Scrum Master</p>
                </div>
              </div>
            </td>
            <td>
              <p className='fw-normal mb-1 text-justify col-9 'style={{fontSize:"10px"}}>The scrum master is responsible for making sure that the team puts efforts to successfully achieve its targets. It is also the duty of scrum master to create a collaborative work environment that supports frictionless communication among the team members. </p>
            </td>
            <td>
              <MDBBadge color='warning' pill>
                2
              </MDBBadge>
            </td>
            <td>
              <MDBBtn
                onClick={() => navigate('/GroupDetail')}
                color='link' rounded size='sm'>
                Show Details
              </MDBBtn>
            </td>
          </tr>

        </MDBTableBody>
      </MDBTable>
    </div>




  )
}
