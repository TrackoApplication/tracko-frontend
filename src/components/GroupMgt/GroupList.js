import React from 'react'
import './Group.css';
import { useState } from 'react'
import NavBar from '../NavBar/Navbar'
import { useNavigate } from 'react-router-dom'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import AddGroup from './AddGroup';

export const GroupList = () => {
  return (

    <div className="mainGroup">
      <div className='title'>
            <h1 >Group </h1> 
      </div>
        <div className ="h-12 m-4">
            <AddGroup/>
        </div>

          <div className='mx-4 shadow rounded'>
            <MDBTable >
              <MDBTableHead className='bg-gray-100 rounded '>
                <tr >
                  <th scope='col'>Group</th>
                  <th scope='col'>Members</th>
                  <th scope='col'>Access to</th>
                  <th scope='col'>Actions</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div >
                        <p className='mb-1'>Product Owner</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className='fw-normal mb-1'>1</p>
                  </td>
                  <td>
                    <MDBBadge color='success' pill>
                      7
                    </MDBBadge>
                  </td>
                  <td>
                    <MDBBtn color='link' rounded size='sm'>
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
                    <p className='fw-normal mb-1'>6</p>
                  </td>
                  <td>
                    <MDBBadge color='primary' pill>
                     6
                    </MDBBadge>
                    
                  </td>
                  <td>
                    <MDBBtn color='link' rounded size='sm'>
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
                    <p className='fw-normal mb-1'>8</p>
                  </td>
                  <td>
                    <MDBBadge color='warning' pill>
                      2
                    </MDBBadge>
                  </td>
                  <td>
                    <MDBBtn color='link' rounded size='sm'>
                    Show Details
                    </MDBBtn>
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </div>

        </div>


  )
}
