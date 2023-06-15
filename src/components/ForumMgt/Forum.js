// import React from 'react'
// import { useNavigate } from 'react-router-dom';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

// const Forum= ({forum , deleteForum}) => {
//     const navigate = useNavigate();
//     const editForum = (e, id) => {
//       e.preventDefault();
//       navigate(`/editForum/${id}`);
//     };
  
//     return (
//     <tr key={forum.id}> 
//                 <td className="text-left px-6 py-4 whitespace-nowrap">
//                 <div className="text-sm text-black-500 ">
//                 <strong>{forum.title}</strong>
//                     </div>
//                     </td>
                
//                 <td className="text-left px-6 py-4 whitespace-nowrap">
//                 <div className="text-sm text-black-500">
//                 {forum.description}
//                     </div>
//                     </td>
//                 <td className="text-left px-6 py-4 whitespace-nowrap">
//                 <div className="text-sm text-black-500">
//                 {forum.attachment}
//                     </div>
//                     </td>
                
//                 <td className="text-right px-6 py-4 whitespace-nowrap">
//                 <a 
//                  onClick={(e, id) => editForum(e, forum.id)}
//                  className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">Edit</a>
//                 <a 
//                 onClick={(e, id) => deleteForum(e, forum.id)}
//                  className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">Delete</a>
//                 </td>
//             </tr>
//   );
// };

// export default Forum;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Forum = ({ forum, deleteForum }) => {
//   const navigate = useNavigate();
//   const editForum = (e, id) => {
//     e.preventDefault();
//     navigate(`/editForum/${id}`);
//   };

//   return (
//     <tr key={forum.id}>
//       <td className="text-left px-6 py-4 whitespace-nowrap">
//         <div className="flex flex-col">
//           <div className="text-sm text-black-500">
//             <strong>{forum.title}</strong> {/* Render the title in bold */}
//           </div>
//           <div className="text-sm text-black-500">
//             {forum.description} {/* Render the description */}
//           </div>
//           <div className="text-sm text-black-500">
//             {forum.attachment} {/* Render the attachment */}
//           </div>
//         </div>
//       </td>

//       <td className="text-right px-6 py-4 whitespace-nowrap">
//         <div className="flex flex-col justify-end">
//           <a
//             onClick={(e, id) => editForum(e, forum.id)}
//             className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
//           >
//             Reply
//           </a>
//           <a
//             onClick={(e, id) => deleteForum(e, forum.id)}
//             className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
//           >
//             Delete
//           </a>
//         </div>
//       </td>
//     </tr>
//   );
// };

// export default Forum;


// const Forum = ({ forum, deleteForum }) => {
//     const navigate = useNavigate();
//     const editForum = (e, id) => {
//       e.preventDefault();
//       navigate(`/editForum/${id}`);
//     };

    
  
//     const [showReplyPopup, setShowReplyPopup] = useState(false);
  
//     const openReplyPopup = () => {
//       setShowReplyPopup(true);
//     };
  
//     const closeReplyPopup = () => {
//       setShowReplyPopup(false);
//     };
  
//     return (
//       <tr key={forum.id}>
//         {/* ...existing code... */}
//           <td className="text-left px-0 py-8 whitespace-nowrap">
//         <div className="flex flex-col">
//           <div className="text-sm text-black-500">
//             <strong>{forum.title}</strong> {/* Render the title in bold */}
//           </div>          
//           <div className="text-sm px-6 text-black-500">
//           {forum.description} {/* Render the description */}
//         </div>
//       <div className="text-sm text-black-500">
//        {forum.attachment} {/* Render the attachment */}
//        </div>
//      </div>
//     </td>

//         <td className="text-right px-6 py-4 whitespace-nowrap">
//          CreatedBy:johnsteven
//           <a 
        
//           onClick={() => navigate("/addReply")}
//             className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
//           >
//             Reply
//           </a>
//         </td>
  
       
        
//       </tr>
//     );
//   };
//  export default Forum; 

const Forum = ({ forum, deleteForum }) => {
  const navigate = useNavigate();
  const editForum = (e, id) => {
    e.preventDefault();
    navigate(`/editForum/${id}`);
  };

  const [showReplyPopup, setShowReplyPopup] = useState(false);

  const openReplyPopup = () => {
    setShowReplyPopup(true);
  };

  const closeReplyPopup = () => {
    setShowReplyPopup(false);
  };

  return (
    <tr key={forum.id}>
      {/* ...existing code... */}
      <td className="text-left px-0 py-8 whitespace-nowrap">
        <div className="flex flex-col">
          <div className="text-sm text-black-500">
            <strong>{forum.title}</strong> {/* Render the title in bold */}
          </div>
          <div className="text-sm px-6 text-black-500">
            {forum.description} {/* Render the description */}
          </div>
          <div className="text-sm text-black-500">
            {forum.attachment} {/* Render the attachment */}
          </div>
        </div>
      </td>

      <td className="text-right px-6 py-4 whitespace-nowrap">
        <div className="flex flex-col h-10 justify-between">
          <div className="text-sm text-black-500">
            CreatedBy:johnsteven
            {/* CreatedBy: {forum.createdBy} */}
             {/* Render the createdBy details */}
          </div>
          <a
            onClick={() => navigate("/addReply")}
            className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
          >
            Reply
          </a>
        </div>
      </td>

      {/* ...existing code... */}
    </tr>
  );
};

export default Forum;
