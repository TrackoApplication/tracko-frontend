import React from 'react'
import './Forum.css';
import { useState } from 'react'
import NavBar from '../NavBar/Navbar'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import AddForum from './AddForum';
import ReplyForum from './ReplyForum';


export const ForumList = () => {
  return (

    <div className="mainGroup">
      <div className='title'>
            <h1 >Forum </h1> 
      </div>
        <div className ="h-12 m-4">
            <AddForum/>
        </div>

          <div className='mx-4 shadow rounded'>
            <MDBTable >
              <MDBTableHead className='bg-gray-100 rounded '>
                <tr >
                  <th scope='col'>Created By-:</th>
                  <th scope='col'>Related issue or child issue-:</th>
                  <th scope='col'>Description</th>
                </tr>
              
              </MDBTableHead>
              <MDBTableBody>
              <tr>
                <td>
            
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>John Doe</p>
                <p className='text-muted mb-0'>john.doe@gmail.com</p>
              </div>
            </div>
            
          </td>
          <td>mesuring QA's performance</td>
          <td> How to calculate story points</td>
         
          </tr>
                </MDBTableBody>
            </MDBTable>
            </div>
            <div className ="h-12 m-4">
            <ReplyForum/>
        </div>

        <div className='mx-4 shadow rounded'>
            <MDBTable >
              <MDBTableHead className='bg-gray-100 rounded '>
                <tr >
                  <th scope='col'>Name</th>
                  <th scope='col'>Reply</th>
                </tr>
              
              </MDBTableHead>
              <MDBTableBody>
              <tr>
                <td>
            
             <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
              <p className='fw-bold mb-1'>Alex Ray</p>
                <p className='text-muted mb-0'>alex.ray@gmail.com</p>
              </div>
            </div>
            
          </td>
          <td>Take their working time and bulid a measuring system like storypoints</td>
          
         
          </tr>

          <tr>
                <td>
            
             <div className='d-flex align-items-center'>
              <img
               src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
              <p className='fw-bold mb-1'>Kate Hunington</p>
                <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
              </div>
            </div>
            
          </td>
          <td>Make a proper criteria to measure their workload and time that they spend with a task</td>
          
         
          </tr>

          <tr>
                <td>
            
             <div className='d-flex align-items-center'>
              <img
               src='https://mdbootstrap.com/img/new/avatars/9.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
              <p className='fw-bold mb-1'>Selin Hilton</p>
                <p className='text-muted mb-0'>selin.hilton@gmail.com</p>
              </div>
            </div>
            
          </td>
          <td>QA performance can measure using time and the effort they use to complete a task. So create a new srory point considering the time and effort</td>
          
         
          </tr>

          
                </MDBTableBody>
            </MDBTable>
            </div>
        
          </div>

)
}
