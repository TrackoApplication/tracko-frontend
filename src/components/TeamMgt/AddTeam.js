import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import NavBar from '../NavBar/Navbar';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import { MDBCol,MDBRow } from 'mdb-react-ui-kit';
import TeamService from '../../Services/TeamService';
import SuccessfulAction from "../CommonComponents/SuccessfulAction"

const AddTeam = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const[team,setTeam]= useState({
    id:"",
    teamName:"",
    users:"",
    
});

const navigate = useNavigate();

const handleChange= (e) =>{ //getting values
  const value = e.target.value;
  setTeam({ ...team, [e.target.name]:value});
  };

  const saveTeam =(e) =>{
    e.preventDefault();
    TeamService.saveTeam(team)
    .then((response) => {
      console.log(response);
      navigate("/teamList");
    
     })
     .catch((error) => {
      console.log(error);
     });
     setShowSuccess(true)
    };
    
    const reset =(e) => {
      e.preventDefault();
      setTeam({
        id:"",
        teamName:"",
        users:"",
       
      });
    };
      



    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    
      return (
        <div>
        <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
          <div className=" text-2xl tracking-wider fw-bold">
              <h1>Add New Team</h1>
          </div>
          <div className="items-center justify-center h-10 w-full"></div>
          <label className='block text-gray-600 text-sm font-normal'>
             TeamName
              </label>
          <input 
          type="text" 
          placeholder="Team01"
          name='teamName'
         value={team.teamName}
         onChange={(e) => handleChange(e)}
  
         className='h-10 w-96 border mt-2 px-2 '></input>

{/* <div className="items-center justify-center h-10 w-full"></div>
          <label className='block text-gray-600 text-sm font-normal'>
             Group
              </label>
              <select class="form-select" aria-label="Default select example"> */}
  {/* <option selected>select the group</option>
  <option value="1">group01</option>
  <option value="2">group02</option>
  <option value="3">group</option> */}
{/* </select> */}
          
          <div className="items-center justify-center h-14 w-full"></div>
          <label className='block text-gray-600 text-sm font-normal'>
              Users
              </label>
          <input type="number" 
          placeholder="10"
          name='users'
           value={team.users}
          onChange={(e) => handleChange(e)}
          className='h-10 w-96 border mt-2 px-2 '></input>

          
          
        
  
         
  
          <div className="items-center justify-center h-10 w-full my-4 space-x-4 pt-4">
              <button 
              onClick={saveTeam}
              className="rounded text-white font-semibold bg-[#231651] hover:bg-blue-700 py-2 px-6">
                Save
              </button>
              <button 
              onClick={reset}
              className="rounded text-white font-semibold bg-[#231651] hover:bg-blue-700 py-2 px-6">
                Clear
                </button>
          </div>
          
          </div>
         
  </div>
  <SuccessfulAction
  onHide={() => setShowSuccess(false)}
  show={showSuccess}
  message="Team Saved Successfully"
/>

</div>

      );
};

export default AddTeam;