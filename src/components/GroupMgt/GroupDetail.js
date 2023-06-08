import React from 'react'
import './Group.css';
import { useState } from 'react'
import NavBar from '../NavBar/Navbar'
import { useNavigate } from 'react-router-dom'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import EditGroup from './EditGroup';
import Sidebar from '../SideBar/Sidebar';
import './Group.css'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const GroupDetail = () => {
    const { id } = useParams();
    const [inactive, setInactive] = React.useState(false);
    const navigate = useNavigate();
    const [group, setGroup] = useState([]);
    const [loading, setLoading] = useState(false);
    const [accessGroups, setAccessGroups] = useState([]);

    const [accessGroupName, setAccessGroupName] = useState('');

    useEffect(() => {
        const getGroup = async () => {
          setLoading(true);
          try {
            console.log(id);
            const response = await axios.get('http://localhost:8080/api/v1/accessgroups/one/'+id);
    
            setAccessGroups(response.data);
            setAccessGroupName(response.data.accessGroupName);
            console.log(response.data);
          }
          catch (err) {
            console.error(err.message);
          }
          setLoading(false);
        }; 
        getGroup();
       
      }, []);
    

    return (


        <div className='App'>
   
            <div className='AppGlass'>
                <Sidebar
                    onCollapse={(inactive) => {
                        setInactive(inactive);
                    }}
                />


                <div className="mainGroup">
                    

                    <div className='title'>
                        <h1 >Return0/Group/{accessGroupName} </h1>
                    </div>

                    <div className="h-12 m-4">
                        <EditGroup />
                    </div>
                    <div className='container-box'>
                        <div className='member'>

                            <MDBTable className='group-details-table'>
                                <MDBTableHead className='bg-gray-100 rounded '>
                                    <tr >
                                        <th scope='col-5'>Members</th>
                                        <th scope='col-6'>Action</th>
                                    </tr>
                                </MDBTableHead>


                                <MDBTableBody>
                                    <tr>

                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <div >
                                                    <p className='mb-1'>Jhon</p>
                                                </div>
                                            </div>
                                        </td>


                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <div >
                                                    <i class="bi bi-trash"></i>
                                                </div>
                                            </div>

                                        </td>

                                    </tr>





                                </MDBTableBody>
                            </MDBTable>
                        </div>
                        <div className='access'>
                            <MDBTable className='group-details-table'>
                                <MDBTableHead className='bg-gray-100 rounded '>
                                    <tr >
                                        <th scope='col-5'>Access</th>
                                        <th scope='col-6'>Action</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    <tr className='bg-green-300'>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <div >
                                                    <p className='mb-1'>Create Backlog</p>

                                                </div>
                                            </div>

                                        </td>
                                        <td>
                                            <div className='d-flex'>
                                                <div className="align-items-center">
                                                </div>
                                            </div>

                                        </td>

                                    </tr>
                                    <tr className='bg-green-300'>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <div >
                                                    <p className='mb-1'>View issue</p>

                                                </div>
                                            </div>

                                        </td>
                                        <td>
                                            <div className='d-flex'>
                                                <div className="align-items-center">
                                                </div>
                                            </div>

                                        </td>

                                    </tr>
                                    <tr className='bg-green-300'>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <div >
                                                    {/* <p className='mb-1'>View epic</p> */}
                                                    <p className="mb-1" data-toggle="tooltip" data-placement="right" title="Predefined/Default access given to Team member">
                                                    View Epic
                                                    </p>

                                                </div>
                                            </div>

                                        </td>
                                        <td>
                                            <div className='d-flex'>
                                                <div className="align-items-center">
                                                </div>
                                            </div>

                                        </td>

                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <div >
                                                    <p className='mb-1'>Create report</p>

                                                </div>
                                            </div>

                                        </td>
                                        <td>
                                            <div className='d-flex'>
                                                <div className="align-items-center">
                                                    <i class="bi bi-trash"></i>
                                                </div>
                                            </div>

                                        </td>

                                    </tr>
                               





                                </MDBTableBody>
                            </MDBTable>
                        </div>

                    </div>

                   
                </div>
         
                
            </div>
            
        </div>






    )
}

export default GroupDetail