// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ForumService from '../../Services/ForumService';
// import Forum from "./Forum";
// import SuccessfulAction from "../CommonComponents/SuccessfulAction";
// import CreateForum from "./CreateForum";
// import UpdateForum from "./UpdateForum";

// const ForumList = () => {
//   const navigate = useNavigate();

//   const [showCreateForum, setShowCreateForum] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [forums, setForums] = useState([]);
//   const [showSuccess, setShowSuccess] = useState(false);
//   // const [showUpdateTeam, setShowUpdateTeam] = useState(false);
//   // const [updateTeamId, setUpdateTeamId] = useState(null);
//   const [searchQuery, setSearchQuery] = useState(''); //Add a new state variable to store the search query

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await ForumService.getForum();
//         setForums(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   const deleteForum = (e, id) => {
//     e.preventDefault();
//     const confirmation = window.confirm('Are you sure you want to delete this team?');
//     if (confirmation) {
//       ForumService.deleteForum(id)
//         .then((res) => {
//           if (forums) {
//             setForums((prevElement) => {
//               setShowSuccess(true);
//               return prevElement.filter((forum) => forum.id !== id);
//             });
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   };
  
//   const openCreateForum = () => {
//     setShowCreateForum(true);
//   };

//   const closeCreateForum = () => {
//     setShowCreateForum(false);
//   };

// //   const openUpdateTeam = (e, id) => {
// //     e.preventDefault();
// //     setUpdateTeamId(id);
// //     setShowUpdateTeam(true);
// //   };

// //   const closeUpdateTeam = () => {
// //     setShowUpdateTeam(false);
// //     setUpdateTeamId(null);
// //   };

// //   const handleSearchChange = (e) => { //Create a new function to handle the search query change
// //     setSearchQuery(e.target.value);
// //   };

//   // const filteredForums = forums.filter((forum) =>   //Filter the teams array based on the search query
//   //   forum.forumName.toLowerCase().includes(searchQuery.toLowerCase())
//   // );

//   return (
//     //Add a search input field
//     <div> 
//       <div className="container mx-auto my-8"> 
//         <div className="h-12 mb-4">
//           <input
//             type="text"
//             placeholder="Search forum..."
//             value={searchQuery}
//             // onChange={handleSearchChange}
//             className="rounded border-gray-300 px-2 py-1 w-64"
//           />
//         </div>
//         <div className="h-12">
//           <button
//             onClick={openCreateForum}
//             className="rounded bg-[#231651]  text-white px-6 py-2 font-semibold"
//           >
//             New Forum
//           </button>
//         </div>
//         <div className="flex shadow border-b">
//           <table className="min-w-full">
//             <thead className="bg-[#153a5f]">
//               <tr>
//                 {/* <th className="text-left font-medium text-white fw-bold uppercase tracking-wider py-3 px-6">
//                   Title
//                 </th>
//                 <th className="text-left font-medium text-white fw-bold uppercase tracking-wider py-3 px-6">
//                   Description
//                 </th>
//                 <th className="text-right font-medium text-white fw-bold uppercase tracking-wider py-3 px-6">
//                   Attachment
//                 </th> */}
               
//               </tr>
//             </thead>
//             {!loading && (
//               <tbody className="bg-white">
//                {forums.map((forum) => (
//                 <Forum
//                 forum={forum}
//                 deleteForum={deleteForum}
//                 key={forum.id}></Forum>
//                 ))}
            
//               </tbody>
              
//             )}
//           </table>
//         </div>
//       </div>

//       {/* Add Team Popup */}
//       {showCreateForum && (
//         <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
//           <div className="bg-white p-4 rounded shadow">
//             <CreateForum
//               onCancel={closeCreateForum}
//               onSuccess={() => setShowSuccess(true)}
//             />
//           </div>
//         </div>
//       )}

//       {/* Update Team Popup */}
//       {/* {showUpdateTeam && (
//         <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
//           <div className="bg-white p-4 rounded shadow">
//             <UpdateTeam
//               id={updateTeamId}
//               onCancel={closeUpdateTeam}
//               onSuccess={() => setShowSuccess(true)}
//             />
//           </div>
//         </div>
//       )} */}

//       {/* <SuccessfulAction
//         onHide={() => setShowSuccess(false)}
//         show={showSuccess}
//         message="Team Deleted Successfully"
//       /> */}
//     </div>
//   );
// };

// export default ForumList;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ForumService from '../../Services/ForumService';
// import Forum from "./Forum";
// import SuccessfulAction from "../CommonComponents/SuccessfulAction";
// import CreateForum from "./CreateForum";
// import UpdateForum from "./UpdateForum";
// import ReplyPopup from "./ReplyPopup"; // Import the ReplyPopup component

// const ForumList = () => {
//   const navigate = useNavigate();

//   const [showCreateForum, setShowCreateForum] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [forums, setForums] = useState([]);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [showReplyPopup, setShowReplyPopup] = useState(false); // State to control the ReplyPopup visibility
//   const [selectedForum, setSelectedForum] = useState(null); // State to store the selected forum for replying

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await ForumService.getForum();
//         setForums(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   const deleteForum = (e, id) => {
//     e.preventDefault();
//     const confirmation = window.confirm('Are you sure you want to delete this team?');
//     if (confirmation) {
//       ForumService.deleteForum(id)
//         .then((res) => {
//           if (forums) {
//             setForums((prevElement) => {
//               setShowSuccess(true);
//               return prevElement.filter((forum) => forum.id !== id);
//             });
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   };
  
//   const openCreateForum = () => {
//     setShowCreateForum(true);
//   };

//   const closeCreateForum = () => {
//     setShowCreateForum(false);
//   };

//   const openReplyPopup = (forum) => {
//     setSelectedForum(forum);
//     setShowReplyPopup(true);
//   };

//   const closeReplyPopup = () => {
//     setSelectedForum(null);
//     setShowReplyPopup(false);
//   };

//   return (
//     <div>
//       <div className="container mx-auto my-8">
//         {/* Rest of the code... */}
//         <div className="flex shadow border-b">
//           <table className="min-w-full">
//             <thead className="bg-[#153a5f]">
//               <tr>
//                 {/* Rest of the code... */}
//               </tr>
//             </thead>
//             {!loading && (
//               <tbody className="bg-white">
//                 {forums.map((forum) => (
//                   <Forum
//                     forum={forum}
//                     deleteForum={deleteForum}
//                     openReplyPopup={openReplyPopup} // Pass the openReplyPopup function to the Forum component
//                     key={forum.id}
//                   />
//                 ))}
//               </tbody>
//             )}
//           </table>
//         </div>
//       </div>

//       {/* Rest of the code... */}

//       {/* Reply Popup */}
//       {showReplyPopup && selectedForum && (
//         <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
//           <div className="bg-white p-4 rounded shadow">
//             <ReplyPopup
//               forum={selectedForum}
//               onCancel={closeReplyPopup}
//               onSuccess={() => setShowSuccess(true)}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ForumList;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ForumService from '../../Services/ForumService';
import Forum from "./Forum";
import SuccessfulAction from "../CommonComponents/SuccessfulAction";
import CreateForum from "./CreateForum";
import UpdateForum from "./UpdateForum";


const ForumList = () => {
  const navigate = useNavigate();

  const [showCreateForum, setShowCreateForum] = useState(false);
  const [loading, setLoading] = useState(false);
  const [forums, setForums] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const [selectedForum, setSelectedForum] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); 
  
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ForumService.getForum();
        setForums(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteForum = (e, id) => {
    // ...
  };
  
  const openCreateForum = () => {
    setShowCreateForum(true);
  };

  const closeCreateForum = () => {
    setShowCreateForum(false);
  };


  const selectForum = (forum) => {
    setSelectedForum(forum);
  };
  
  

  

  return (
    <div> 
      <div className="w-3/4 mx-auto my-8"> 
        <div className="h-12 mb-4">
          <input
            type="text"
            placeholder="Search forum..."
            value={searchQuery}
            // onChange={handleSearchChange}
            className="rounded border-gray-300 px-2 py-1 w-64"
          />
        </div>
        <div className="h-12">
          <button
            onClick={openCreateForum}
            className="rounded bg-[#231651]  text-white px-6 py-2 font-semibold"
          >
            New Forum
          </button>
        </div>

        <div className="flex shadow border-b">
          <table className="min-w-full">
            <thead className="bg-[#153a5f]">
              <tr>
                {/* Rest of the code... */}
              </tr>
            </thead>
            {!loading && (
              <tbody className="bg-white">
                {forums.map((forum) => (
                  <Forum
                    forum={forum}
                    deleteForum={deleteForum}
                    selectForum={selectForum}
                   
                    key={forum.id}
                  />
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
      {/* Add Team Popup */}
      {showCreateForum && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow">
            <CreateForum
              onCancel={closeCreateForum}
              onSuccess={() => setShowSuccess(true)}
            />
          </div>
        </div>
      )}

      {/* {showReplyPopup && selectedForum && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow">
            <ReplyPopup
              forum={selectedForum}
              onCancel={closeReplyPopup}
              onSuccess={() => setShowSuccess(true)}
            />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ForumList;
