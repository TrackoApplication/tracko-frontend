import React from 'react'
import './Team.css';
import { useState } from 'react'
import NavBar from '../NavBar/Navbar'
import { useNavigate } from 'react-router-dom'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import AddTeam from './AddTeam';

export const TeamList = () => {
  return (

    <div className="mainGroup">
      <div className='title'>
            <h1 >Team </h1> 
      </div>
        <div className ="h-12 m-4">
            <AddTeam/>
        </div>

          <div className='mx-4 shadow rounded'>
            <MDBTable >
              <MDBTableHead className='bg-gray-100 rounded '>
                <tr >
                  <th scope='col'>Team Name</th>
                  <th scope='col'>Users</th>
                  <th scope='col'>Actions</th>
                 </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div >
                        <p className='mb-1'>Team 1</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className='fw-normal mb-1'>1</p>
                  </td>
                  <td>
                    <MDBBtn color='warning' pill>
                      Delete
                    </MDBBtn>

                    <MDBBtn color='success' pill>
                      Edit
                    </MDBBtn>
                  </td>
                  
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div >
                        <p className='mb-1'>Group 2</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className='fw-normal mb-1'>6</p>
                  </td>
                  <td>
                    <MDBBtn color='warning' pill>
                      Delete
                    </MDBBtn>

                    <MDBBtn color='success' pill>
                      Edit
                    </MDBBtn>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div >
                        <p className='mb-1'>Team 3</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className='fw-normal mb-1'>8</p>
                  </td>
                  
                  <td>
                    <MDBBtn color='warning' pill>
                      Delete
                    </MDBBtn>

                    <MDBBtn color='success' pill>
                      Edit
                    </MDBBtn>
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </div>

        </div>


  )
}
