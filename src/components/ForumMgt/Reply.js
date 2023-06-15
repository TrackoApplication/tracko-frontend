// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// const Reply = ({reply,deleteReply}) => {
//     const navigate = useNavigate();
//     const editReply = (e, id) => {
//       e.preventDefault();
//       navigate(`/editReply/${id}`);
//     };

//     return (
//     <tr key={reply.id}>
//                 <td className="text-left px-6 py-4 whitespace-nowrap">
//                 <div className="text-sm text-gray-500">
//                     {reply.reply}
//                     </div>
//                     </td>

//                 <td className="text-right px-6 py-4 whitespace-nowrap">
//                 <a
//                  onClick={(e, id) => editReply(e, reply.id)}
//                  className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">Edit</a>
//                 <a
//                 onClick={(e, id) => deleteReply(e, reply.id)}
//                  className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">Delete</a>
//                 </td>
//             </tr>
//   );
// };

// export default Reply;

import React from "react";
import { useNavigate } from "react-router-dom";

const Reply = ({ reply, deleteReply }) => {
  const navigate = useNavigate();

  const editReply = (e) => {
    e.preventDefault();

    navigate(`/editReply/${reply.replyId}`);
  };

  return (
    <tr key={reply.id}>
      <td className="text-left px-0 py-8 whitespace-nowrap">
        <div className="flex flex-col"></div>
      </td>
      <td className="text-left-middle px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{reply.reply}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap">
        <a
          onClick={(e) => editReply(e)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
        >
          Edit
        </a>
        <a
          onClick={(e) => deleteReply(e, reply.replyId)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Reply;
