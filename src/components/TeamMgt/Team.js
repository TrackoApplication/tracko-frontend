import React from "react";
import { useNavigate } from "react-router-dom";

const Team = ({ team, deleteTeam }) => {
  const navigate = useNavigate();
  const editTeam = (e, id) => {
    e.preventDefault();
    navigate(`/editTeam/${id}`);
  };

  return (

    <tr key={team.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-black-500">{team.teamName}</div>
      </td>

      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-black-500">{team.teamSize}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-black-500">{team.scrumMasterName}</div>
      </td>

      <td className="text-right px-5 py-4 whitespace-nowrap">
        {/* <a
          onClick={(e, id) => editTeam(e, team.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
        >
          Edit
        </a> */}
        <i
            class="bi bi-pen"
            onClick={(e, id) => editTeam(e, team.id)}
            />
        {/* <a
          onClick={(e, id) => deleteTeam(e, team.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
        >
          Delete
        </a> */}

        <i
              class="bi bi-trash"
              // onClick={() => deleteSystemUser(systemUser.systemUserId)}
              onClick={(e, id) => deleteTeam(e, team.id)}
              />
      </td>
    </tr>

  );
};

export default Team;
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Team = ({ team, deleteTeam, openUpdateTeam }) => {
//   const navigate = useNavigate();

//   const editTeam = (e, id) => {
//     e.preventDefault();
//     navigate(`/editTeam/${id}`);
//   };

//   return (
//     <tr key={team.id}>
//       <td className="text-left px-6 py-4 whitespace-nowrap">
//         <div className="text-sm text-gray-500">{team.teamName}</div>
//       </td>

//       <td className="text-left px-6 py-4 whitespace-nowrap">
//         <div className="text-sm text-gray-500">{team.users}</div>
//       </td>

//       <td className="text-right px-6 py-4 whitespace-nowrap">
//         <a
//           onClick={(e) => openUpdateTeam(e, team.id)}
//           className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
//         >
//           Edit
//         </a>
//         <a
//           onClick={(e) => deleteTeam(e, team.id)}
//           className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
//         >
//           Delete
//         </a>
//       </td>
//     </tr>
//   );
// };

// export default Team;
// import React from 'react';

// const Team = ({ team, deleteTeam, openUpdateTeam }) => {
//   const handleEditTeam = (e) => {
//     e.preventDefault();
//     openUpdateTeam(team.id);
//   };

//   const handleDeleteTeam = (e) => {
//     e.preventDefault();
//     deleteTeam(team.id);
//   };

//   return (
//     <tr key={team.id}>
//       <td className="text-left px-6 py-4 whitespace-nowrap">
//         <div className="text-sm text-gray-500">{team.teamName}</div>
//       </td>

//       <td className="text-left px-6 py-4 whitespace-nowrap">
//         <div className="text-sm text-gray-500">{team.users}</div>
//       </td>

//       <td className="text-right px-6 py-4 whitespace-nowrap">
//         <a
//           onClick={handleEditTeam}
//           className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
//         >
//           Edit
//         </a>
//         <a
//           onClick={handleDeleteTeam}
//           className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
//         >
//           Delete
//         </a>
//       </td>
//     </tr>
//   );
// };

// export default Team;
