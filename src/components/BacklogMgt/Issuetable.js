import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const Backlogtable = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <MDBTable className='border-dashed solid'>
      <MDBTableHead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            {/* <div className='d-flex align-items-center'>
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
            </div> */}
          </td>
          <td>
            {/* <p className='fw-normal mb-1'>System Admin</p> */}
          </td>
          <td>
            {/* <MDBBadge color='success' pill>
              Active
            </MDBBadge> */}
          </td>
          <td>
            {/* <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn> */}
          </td>
        </tr>
        <tr>
          <td>
            {/* <div className='d-flex align-items-center'>
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
            </div> */}
          </td>
          <td>
            {/* <p className='fw-normal mb-1'>User</p> */}
          </td>
          <td>
            {/* <MDBBadge color='primary' pill>
              Scrum Master
            </MDBBadge>
            <MDBBadge color='warning' pill>
              Product Owner
            </MDBBadge> */}
          </td>
          <td>
            {/* <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn> */}
          </td>
        </tr>
        <tr>
          <td>
            {/* <div className='d-flex align-items-center'> */}
              {/* <img
                src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Kate Hunington</p>
                <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
              </div>
            </div> */}
          </td>
          <td>
            {/* <p className='fw-normal mb-1'>System Admin</p> */}
          </td>
          <td>
            {/* <MDBBadge color='warning' pill>
              Product Owner
            </MDBBadge> */}
          </td>
          <td>
            {/* <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn> */}
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>


    </>
  )
}

export default Backlogtable;
