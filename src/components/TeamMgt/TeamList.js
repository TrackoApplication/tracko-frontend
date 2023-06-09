// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import TeamService from '../../Services/TeamService';
// import Team from "./Team";
// import SuccessfulAction from "../CommonComponents/SuccessfulAction";
// import AddTeam from "./AddTeam";
// import UpdateTeam from "./UpdateTeam";

// const TeamList = () => {
//   const navigate = useNavigate();

//   const [showAddTeam, setShowAddTeam] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [teams, setTeams] = useState([]);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [showUpdateTeam, setShowUpdateTeam] = useState(false);
//   const [updateTeamId, setUpdateTeamId] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await TeamService.getTeam();
//         setTeams(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   // const deleteTeam = (e, id) => {
//   //   e.preventDefault();
//   //   TeamService.deleteTeam(id).then((res) => {
//   //     if (teams) {
//   //       setTeams((prevElement) => {
//   //         setShowSuccess(true);
//   //         return prevElement.filter((team) => team.id !== id);
//   //       });
//   //     }
//   //   });
//   // };
//   const deleteTeam = (e, id) => {
//     e.preventDefault();
//     const confirmation = window.confirm('Are you sure you want to delete this team?');
//     if (confirmation) {
//       TeamService.deleteTeam(id)
//         .then((res) => {
//           if (teams) {
//             setTeams((prevElement) => {
//               setShowSuccess(true);
//               return prevElement.filter((team) => team.id !== id);
//             });
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   };
  
//   const openAddTeam = () => {
//     setShowAddTeam(true);
//   };

//   const closeAddTeam = () => {
//     setShowAddTeam(false);
//   };

//   const openUpdateTeam = (e, id) => {
//     e.preventDefault();
//     setUpdateTeamId(id);
//     setShowUpdateTeam(true);
//   };

//   const closeUpdateTeam = () => {
//     setShowUpdateTeam(false);
//     setUpdateTeamId(null);
//   };

//   return (
//     <div>
//       <div className="container mx-auto my-8">
//         <div className="h-12">
//           <button
//             onClick={openAddTeam}
//             className="rounded bg-[#231651]  text-white px-6 py-2 font-semibold"
//           >
//             Add Team
//           </button>
//         </div>
//         <div className="flex shadow border-b">
//           <table className="min-w-full">
//             <thead className="bg-[#153a5f]">
//               <tr>
//                 <th className="text-left font-medium text-white fw-bold uppercase tracking-wider py-3 px-6">
//                   Team Name
//                 </th>
//                 <th className="text-left font-medium text-white fw-bold uppercase tracking-wider py-3 px-6">
//                   Users
//                 </th>
//                 <th className="text-right font-medium text-white fw-bold uppercase tracking-wider py-3 px-6">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             {!loading && (
//               <tbody className="bg-white">
//                 {teams.map((team) => (
//                   <Team
//                     team={team}
//                     deleteTeam={deleteTeam}
//                     openUpdateTeam={openUpdateTeam}
//                     key={team.id}
//                   ></Team>
//                 ))}
//               </tbody>
//             )}
//           </table>
//         </div>
//       </div>

//       {/* Add Team Popup */}
//       {showAddTeam && (
//         <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
//           <div className="bg-white p-4 rounded shadow">
//             <AddTeam
//               onCancel={closeAddTeam}
//               onSuccess={() => setShowSuccess(true)}
//             />
//           </div>
//         </div>
//       )}

//       {/* Update Team Popup */}
//       {showUpdateTeam && (
//         <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
//           <div className="bg-white p-4 rounded shadow">
//             <UpdateTeam
//               id={updateTeamId}
//               onCancel={closeUpdateTeam}
//               onSuccess={() => setShowSuccess(true)}
//             />
//           </div>
//         </div>
//       )}

//       <SuccessfulAction
//         onHide={() => setShowSuccess(false)}
//         show={showSuccess}
//         message="Team Deleted Successfully"
//       />
//     </div>
//   );
// };

// export default TeamList;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TeamService from '../../Services/TeamService';
import Team from "./Team";
import SuccessfulAction from "../CommonComponents/SuccessfulAction";
import AddTeam from "./AddTeam";
import UpdateTeam from "./UpdateTeam";

const TeamList = () => {
  const navigate = useNavigate();

  const [showAddTeam, setShowAddTeam] = useState(false);
  const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showUpdateTeam, setShowUpdateTeam] = useState(false);
  const [updateTeamId, setUpdateTeamId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await TeamService.getTeam();
        setTeams(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteTeam = (e, id) => {
    e.preventDefault();
    const confirmation = window.confirm('Are you sure you want to delete this team?');
    if (confirmation) {
      TeamService.deleteTeam(id)
        .then((res) => {
          if (teams) {
            setTeams((prevElement) => {
              setShowSuccess(true);
              return prevElement.filter((team) => team.id !== id);
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  
  const openAddTeam = () => {
    setShowAddTeam(true);
  };

  const closeAddTeam = () => {
    setShowAddTeam(false);
  };

  const openUpdateTeam = (e, id) => {
    e.preventDefault();
    setUpdateTeamId(id);
    setShowUpdateTeam(true);
  };

  const closeUpdateTeam = () => {
    setShowUpdateTeam(false);
    setUpdateTeamId(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTeams = teams.filter((team) =>
    team.teamName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="container mx-auto my-8">
        <div className="h-12 mb-4">
          <input
            type="text"
            placeholder="Search team..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="rounded border-gray-300 px-2 py-1 w-64"
          />
        </div>
        <div className="h-12">
          <button
            onClick={openAddTeam}
            className="rounded bg-[#231651]  text-white px-6 py-2 font-semibold"
          >
            Add Team
          </button>
        </div>
        <div className="flex shadow border-b">
          <table className="min-w-full">
            <thead className="bg-[#153a5f]">
              <tr>
                <th className="text-left font-medium text-white fw-bold uppercase tracking-wider py-3 px-6">
                  Team Name
                </th>
                <th className="text-left font-medium text-white fw-bold uppercase tracking-wider py-3 px-6">
                  Users
                </th>
                <th className="text-right font-medium text-white fw-bold uppercase tracking-wider py-3 px-6">
                  Actions
                </th>
              </tr>
            </thead>
            {!loading && (
              <tbody className="bg-white">
                {filteredTeams.map((team) => (
                  <Team
                    team={team}
                    deleteTeam={deleteTeam}
                    openUpdateTeam={openUpdateTeam}
                    key={team.id}
                  ></Team>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>

      {/* Add Team Popup */}
      {showAddTeam && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow">
            <AddTeam
              onCancel={closeAddTeam}
              onSuccess={() => setShowSuccess(true)}
            />
          </div>
        </div>
      )}

      {/* Update Team Popup */}
      {showUpdateTeam && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow">
            <UpdateTeam
              id={updateTeamId}
              onCancel={closeUpdateTeam}
              onSuccess={() => setShowSuccess(true)}
            />
          </div>
        </div>
      )}

      <SuccessfulAction
        onHide={() => setShowSuccess(false)}
        show={showSuccess}
        message="Team Deleted Successfully"
      />
    </div>
  );
};

export default TeamList;


