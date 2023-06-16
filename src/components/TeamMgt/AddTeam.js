import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TeamService from '../../Services/TeamService';
import SuccessfulAction from "../CommonComponents/SuccessfulAction";


const AddTeam = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
 
  const [team, setTeam] = useState({
    id: "",
    teamName: "",
    users: "",
    members:"",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setTeam({ ...team, [e.target.name]: value });
  };

 
  
  
  
    

    

  const reset = (e) => {
    e.preventDefault();
    setTeam({
      id: "",
      teamName: "",
      users: "",
      members:"",
    });
  };

 
  
  const saveTeam = (e) => {
    e.preventDefault();
  
    // Validation
    if (!team.teamName || team.teamName.length > 10) {
      alert('Team name is required and should contain up to 10 characters.');
      return;
    }
  
    if (team.users < 0) {
      alert('Users should be a non-negative number.');
      return;
    }
  
    // Fetch existing teams
    TeamService.getTeam()
      .then((response) => {
        const existingTeams = response.data;
  
        // Check if team name already exists
        if (existingTeams.some((existingTeam) => existingTeam.teamName === team.teamName)) {
          alert('Team name already exists. Please choose a different name.');
          return;
        }
  
        // Save team
        TeamService.saveTeam(team)
          .then((response) => {
            console.log(response);
            navigate('/teamView');
          })
          .catch((error) => {
            console.log(error);
          });
  
        setShowSuccess(true);
      })
      .catch((error) => {
        console.log(error);
      });
     
  };
  
  // const handleClose = () => {
  //   setShow(false);
  //   setShowSuccess(false);
  // };


  return (
    <div>
      <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
          <div className="text-2xl tracking-wider fw-bold">
            <h1>Add New Team</h1>
          </div>
          <div className="items-center justify-center h-10 w-full"></div>
          <label className="block text-gray-600 text-sm font-normal">
            TeamName
          </label>
          <input
            type="text"
            placeholder="Team01"
            name="teamName"
            value={team.teamName}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2"
          ></input>

          <div className="items-center justify-center h-14 w-full"></div>
          <label className="block text-gray-600 text-sm font-normal">
            Users
          </label>
          <input
            type="number"
            placeholder="10"
            name="users"
            value={team.users}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2"
          ></input>

        <label className="block text-gray-600 text-sm font-normal">MemberList</label>
<select
  name="members"
  value={team.members}
  onChange={handleChange}
  className="h-10 w-96 border mt-2 px-2"
>
  <option value="">Select members</option>
  <option value="admin">Jithmi</option>
  <option value="admin">Seefa</option>
  <option value="user">Dulani</option>
  <option value="user">Ravindu</option>
  <option value="user">Yasiru</option>
</select>

          <div className="items-center justify-center h-10 w-full my-4 space-x-4 pt-4">
            <button
              onClick={saveTeam}
              className="rounded text-white font-semibold bg-[#231651] hover:bg-blue-700 py-2 px-6">
              Save
            </button>
            <button
              onClick={reset}
              className="rounded text-white font-semibold bg-[#231651] hover:bg-blue-700 py-2 px-6"
            >
              Clear
            </button>
            {/* <button
              onClick={handleClose}
              className="rounded text-white font-semibold bg-[#231651] hover:bg-blue-700 py-2 px-6"
            >
              Cancel
            </button> */}
          </div>
        </div>
      </div>
      <SuccessfulAction
        onHide={() => setShowSuccess(false)}
        show={showSuccess}
        // message="Team Saved Successfully"
      />
    </div>
  );
};

export default AddTeam;
