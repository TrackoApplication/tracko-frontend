// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import TeamService from '../../Services/TeamService';
// import SuccessfulAction from "../CommonComponents/SuccessfulAction";

// const UpdateTeam = () => {
//   const [showSuccess, setShowSuccess] = useState(false);
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [team, setTeam] = useState({
//         id:id,
//         teamName:"",
//         users:"",
//     });
  
//     const handleChange = (e) => {
//       const value = e.target.value;
//       setTeam({ ...team, [e.target.name]: value });
//     };
  
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await TeamService.getTeamById(team.id);
//           setTeam(response.data);
//         } catch (error) {
//           console.log(error);
//         }
//       };
//       fetchData();
//     }, []);
  
//     const updateTeam = (e) => {
//       e.preventDefault();
//       console.log(team);
//       TeamService.updateTeam(team, id)
//         .then((response) => {
//           navigate("/teamList");
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//         setShowSuccess(true)
//     };
  

//   return (
//     <div>
//     <div className="flex max-w-2xl mx-auto shadow border-b">
//     <div className="px-8 py-8">
//       <div className="fw-bold text-2xl tracking-wider">
//           <h1>Update Team</h1>
//       </div>
//       <div className="items-center justify-center h-10 w-full"></div>
//       <label className='block text-gray-600 text-sm font-normal'>
//           TeamName
//           </label>
//       <input 
//       type="text" 
//       name='teamName'
//       value={team.teamName}
//       onChange={(e) => handleChange(e)}

//      className='h-10 w-96 border mt-2 px-2 '></input>
      
//       <div className="items-center justify-center h-10 w-full"></div>
//       <label className='block text-gray-600 text-sm font-normal'>
//           Users
//           </label>
//       <input type="number" 
//       name='users'
//       value={team.users}
//       onChange={(e) => handleChange(e)}
//       className='h-10 w-96 border mt-2 px-2 '></input>
      
      
      
     

//       <div className="items-center justify-center h-10 w-full my-4 space-x-4 pt-4">
//           <button 
//           onClick={updateTeam}
//           className="rounded text-white font-semibold bg-[#231651] hover:bg-red-700 py-2 px-6">
//             Update
//           </button>
//           <button 
//            onClick={() => navigate("/teamList")}
//           // onClick={onClose}
//           className="rounded text-white font-semibold bg-[#231651] hover:bg-blue-700 py-2 px-6">
//            Cancel
//             </button>
//       </div>
      
//       </div>
     
// </div>
// <SuccessfulAction
//     onHide={() => setShowSuccess(false)}
//     show={showSuccess}
//     message="Team Updated Successfully"
//   />

// </div>
  
  
// );
// };
  


// export default UpdateTeam;


// import React, { useState } from 'react';
// import { useNavigate,useParams} from 'react-router-dom';
// import TeamService from '../../Services/TeamService';
// import SuccessfulAction from "../CommonComponents/SuccessfulAction"

// const UpdateTeam = () => {
//   const [showSuccess, setShowSuccess] = useState(false);
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [team, setTeam] = useState({
//     id: id,
//     teamName: '',
//     users: '',
//   });

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setTeam({ ...team, [e.target.name]: value });
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await TeamService.getTeamById(team.id);
//         setTeam(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

 
//   const updateTeam = (e) => {
//     e.preventDefault();

//     // Validation
//     if (!team.teamName || team.teamName.length > 10) {
//       alert('Team name is required and should contain up to 10 characters.');
//       return;
//     }
  
//     if (team.users < 0) {
//       alert('Users should be a non-negative number.');
//       return;
//     }
  
//     // Fetch existing teams
//     TeamService.getTeam()
//       .then((response) => {
//         const existingTeams = response.data;
  
//         // Check if team name already exists
//         if (existingTeams.some((existingTeam) => existingTeam.teamName === team.teamName)) {
//           alert('Team name already exists. Please choose a different name.');
//           return;
//         }
    
//     TeamService.updateTeam(team, id)
//       .then((response) => {
//         // onSucces();
//         console.log(response);
//         navigate('/teamList');
//         // setShowSuccess(true); // Show success message
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//       setShowSuccess(true)
//       .catch((error) => {
//         console.log(error);
//       });
//   });
  

//   return (
//     <div>
//       <div className="flex max-w-2xl mx-auto shadow border-b">
//         <div className="px-8 py-8">
//           <div className="fw-bold text-2xl tracking-wider">
//             <h1>Update Team</h1>
//           </div>
//           <div className="items-center justify-center h-10 w-full"></div>
//           <label className="block text-gray-600 text-sm font-normal">TeamName</label>
//           <input
//             type="text"
//             name="teamName"
//             value={team.teamName}
//             onChange={handleChange}
//             className="h-10 w-96 border mt-2 px-2"
//           />

//           <div className="items-center justify-center h-10 w-full"></div>
//           <label className="block text-gray-600 text-sm font-normal">Users</label>
//           <input
//             type="number"
//             name="users"
//             value={team.users}
//             onChange={(e) => handleChange(e)}
//             className="h-10 w-96 border mt-2 px-2"
//           />

//           <div className="items-center justify-center h-10 w-full my-4 space-x-4 pt-4">
//             <button
//               onClick={updateTeam}
//               className="rounded text-white font-semibold bg-[#231651] hover:bg-red-700 py-2 px-6"
//             >
//               Update
//             </button>
//             <button
//               onClick={() => navigate("/teamList")}
//               className="rounded text-white font-semibold bg-[#231651] hover:bg-blue-700 py-2 px-6"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//       <SuccessfulAction
//         onHide={() => setShowSuccess(false)}
//         show={showSuccess}
//         message="Team Updated Successfully"
//       />
//     </div>
//   );
// };
//  export default UpdateTeam;

// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import TeamService from '../../Services/TeamService';
// import SuccessfulAction from '../CommonComponents/SuccessfulAction';

// const UpdateTeam = () => {
//   const [showSuccess, setShowSuccess] = useState(false);
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [team, setTeam] = useState({
//     id: id,
//     teamName: '',
//     users: '',
//   });
//   const [formErrors, setFormErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTeam((prevTeam) => ({ ...prevTeam, [name]: value }));
//   };

//   const validateForm = () => {
//     const errors = {};
//     let isValid = true;

//     // Validate team name
//     if (!team.teamName.trim()) {
//       errors.teamName = 'Team name is required';
//       isValid = false;
//     } else if (team.teamName.trim().length > 10) {
//       errors.teamName = 'Team name cannot exceed 10 characters';
//       isValid = false;
//     }

//     // Validate users
//     if (!team.users) {
//       errors.users = 'Users is required';
//       isValid = false;
//     } else if (team.users < 0) {
//       errors.users = 'Users cannot be negative';
//       isValid = false;
//     }

//     setFormErrors(errors);
//     return isValid;
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await TeamService.getTeamById(team.id);
//         setTeam(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const updateTeam = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log(team);
//       TeamService.updateTeam(team, id)
//         .then((response) => {
//           navigate('/teamList');
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//       setShowSuccess(true);
//     }
//   };

//   return (
//     <div>
//       <div className="flex max-w-2xl mx-auto shadow border-b">
//         <div className="px-8 py-8">
//           <div className="fw-bold text-2xl tracking-wider">
//             <h1>Update Team</h1>
//           </div>
//           <div className="items-center justify-center h-10 w-full"></div>
//           <label className="block text-gray-600 text-sm font-normal">TeamName</label>
//           <input
//             type="text"
//             name="teamName"
//             value={team.teamName}
//             onChange={handleChange}
//             className="h-10 w-96 border mt-2 px-2"
//           />
//           {formErrors.teamName && <div className="text-red-500">{formErrors.teamName}</div>}

//           <div className="items-center justify-center h-10 w-full"></div>
//           <label className="block text-gray-600 text-sm font-normal">Users</label>
//           <input
//             type="number"
//             name="users"
//             value={team.users}
//             onChange={handleChange}
//             className="h-10 w-96 border mt-2 px-2"
//           />
//           {formErrors.users && <div className="text-red-500">{formErrors.users}</div>}

//           <div className="items-center justify-center h-10 w-full my-4 space-x-4 pt-4">
//             <button
//               onClick={updateTeam}
//               className="rounded text-white font-semibold bg-[#231651] hover:bg-red-700 py-2 px-6"
//             >
//               Update
//             </button>
//             <button
//               onClick={() => navigate('/teamList')}
//               className="rounded text-white font-semibold bg-[#231651] hover:bg-blue-700 py-2 px-6"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//       <SuccessfulAction
//         onHide={() => setShowSuccess(false)}
//         show={showSuccess}
//         message="Team Updated Successfully"
//       />
//     </div>
//   );
// };

// export default UpdateTeam;

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TeamService from '../../Services/TeamService';
import SuccessfulAction from '../CommonComponents/SuccessfulAction';

const UpdateTeam = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [team, setTeam] = useState({
    id: id,
    teamName: '',
    users: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeam((prevTeam) => ({ ...prevTeam, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    // Validate team name
    if (!team.teamName.trim()) {
      errors.teamName = 'Team name is required';
      isValid = false;
    } else if (team.teamName.trim().length > 10) {
      errors.teamName = 'Team name cannot exceed 10 characters';
      isValid = false;
    }

    // Validate users
    if (!team.users) {
      errors.users = 'Users is required';
      isValid = false;
    } else if (team.users < 0) {
      errors.users = 'Users cannot be negative';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await TeamService.getTeamById(team.id);
        setTeam(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateTeam = (e) => {
    e.preventDefault();
    const confirmation = window.confirm('Are you sure you want to update this team?');
    if (!confirmation) {
      return;
    }

    if (validateForm()) {
      console.log(team);
      TeamService.updateTeam(team, id)
        .then((response) => {
          navigate('/teamList');
        })
        .catch((error) => {
          console.log(error);
        });
      setShowSuccess(true);
    }
  };

  return (
    <div>
      <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
          <div className="fw-bold text-2xl tracking-wider">
            <h1>Update Team</h1>
          </div>
          <div className="items-center justify-center h-10 w-full"></div>
          <label className="block text-gray-600 text-sm font-normal">TeamName</label>
          <input
            type="text"
            name="teamName"
            value={team.teamName}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2"
          />
          {formErrors.teamName && <div className="text-red-500">{formErrors.teamName}</div>}

          <div className="items-center justify-center h-10 w-full"></div>
          <label className="block text-gray-600 text-sm font-normal">Users</label>
          <input
            type="number"
            name="users"
            value={team.users}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2"
          />
          {formErrors.users && <div className="text-red-500">{formErrors.users}</div>}

          <div className="items-center justify-center h-10 w-full my-4 space-x-4 pt-4">
            <button
              onClick={updateTeam}
              className="rounded text-white font-semibold bg-[#231651] hover:bg-red-700 py-2 px-6"
            >
              Update
            </button>
            <button
              onClick={() => navigate('/teamList')}
              className="rounded text-white font-semibold bg-[#231651] hover:bg-blue-700 py-2 px-6"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <SuccessfulAction
        onHide={() => setShowSuccess(false)}
        show={showSuccess}
        message="Team Updated Successfully"
      />
    </div>
  );
};

export default UpdateTeam;
