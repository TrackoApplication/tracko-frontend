
// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import ReplyService from '../../Services/ReplyService';
// import SuccessfulAction from "../CommonComponents/SuccessfulAction";

// const UpdateReply = () => {
//   const [showSuccess, setShowSuccess] = useState(false);
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [reply, setReply] = useState({
//     id: id,
//     reply: "",
//   });

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setReply({ ...reply, [e.target.name]: value });
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await ReplyService.getReplyById(reply.id);
//         setReply(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const updateReply = (e) => {
//     e.preventDefault();
//     const confirmation = window.confirm('Are you sure you want to update this client?');
//     if (!confirmation) {
//       return;
//     }

//     ReplyService.updateReply(reply, id)
//       .then((response) => {
//         navigate("/replyList");
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//     setShowSuccess(true);
//   };

//   return (
//     <div>
//       <div className="flex max-w-2xl mx-auto shadow border-b">
//         <div className="px-8 py-8">
//           <div className=" text-2xl tracking-wider fw-bold">
//             <h1>Edit Reply</h1>
//           </div>
//           <div className="items-center justify-center h-10 w-full"></div>
//           <label className='block text-gray-600 text-sm font-normal'>
//            Reply
//           </label>
//           <input
//             type="text"
//             name='reply'
//             value={reply.reply}
//             onChange={(e) => handleChange(e)}
//             className='h-10 w-96 border mt-2 px-2 '></input>

          

          

          

//           <div className="items-center justify-center h-10 w-full my-4 space-x-4 pt-4">
//             <button
//               onClick={updateReply}
//               className="rounded text-white font-semibold bg-[#231651]  hover:bg-red-700 py-2 px-6">
//               Update
//             </button>
//             <button
//               onClick={() => navigate("/replyList")}
//               className="rounded text-white font-semibold bg-[#231651] hover:bg-blue-700 py-2 px-6">
//               Cancel
//             </button>
//           </div>

//         </div>
//       </div>
//       <SuccessfulAction
//         onHide={() => setShowSuccess(false)}
//         show={showSuccess}
//         message="Client Updated Successfully"
//       />
//     </div>

//   );
// };

// export default UpdateReply;

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReplyService from '../../Services/ReplyService';
import SuccessfulAction from "../CommonComponents/SuccessfulAction";

const UpdateReply = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { replyId } = useParams();
  const navigate = useNavigate();
  const [reply, setReply] = useState({
    id: replyId,
    reply: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReply((prevReply) => ({ ...prevReply, [name]: value }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ReplyService.getReplyById(replyId);
        setReply(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [replyId]);

  const updateReply = (e) => {
    e.preventDefault();
    const confirmation = window.confirm('Are you sure you want to update this reply?');
    if (!confirmation) {
      return;
    }

    ReplyService.updateReply(reply)
      .then((response) => {
        navigate("/replyList");
      })
      .catch((error) => {
        console.log(error);
      });

    setShowSuccess(true);
  };

  return (
    <div>
      <div className="flex max-w-2xl mx-auto shadow border-b">
        <div className="px-8 py-8">
          <div className="text-2xl tracking-wider fw-bold">
            <h1>Edit Reply</h1>
          </div>
          <div className="items-center justify-center h-10 w-full"></div>
          <label className='block text-gray-600 text-sm font-normal'>
            Reply
          </label>
          <input
            type="text"
            name='reply'
            value={reply.reply}
            onChange={handleChange}
            className='h-10 w-96 border mt-2 px-2 '></input>

          <div className="items-center justify-center h-10 w-full my-4 space-x-4 pt-4">
            <button
              onClick={updateReply}
              className="rounded text-white font-semibold bg-[#231651]  hover:bg-red-700 py-2 px-6">
              Update
            </button>
            <button
              onClick={() => navigate("/replyList")}
              className="rounded text-white font-semibold bg-[#231651] hover:bg-blue-700 py-2 px-6">
              Cancel
            </button>
          </div>
        </div>
      </div>
      <SuccessfulAction
        onHide={() => setShowSuccess(false)}
        show={showSuccess}
        message="Reply Updated Successfully"
      />
    </div>
  );
};

export default UpdateReply;
