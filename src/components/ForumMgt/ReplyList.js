import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReplyService from '../../Services/ReplyService';
import Reply from "./Reply";
import SuccessfulAction from "../CommonComponents/SuccessfulAction";

const ReplyList = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
 
  
  const [searchQuery, setSearchQuery] = useState('');

const [loading, setLoading] =useState(false);
const [replies, setReplies] = useState([]);
  
useEffect(() => { //setting the "loading" state variable to "true",
                 //  making the API call to get the client data using the "ClientService.getClient()" method 
                 //  setting the "clients" state variable to the response data
                //  setting the "loading" state variable to "false" when the API call is complete.
    const fetchData = async () => {  //The "loading" variable is used to determine whether the data is currently being fetched from the API, while the "clients" variable is an array that will hold the list of clients returned from the API.
      setLoading(true);
      try {
        const response = await ReplyService.getReply();
        setReplies(response.data);

      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteReply = (e, id) => { // DELETE request to the API using the "ClientService.deleteClient(id)" method
    e.preventDefault();
    const confirmation = window.confirm('Are you sure you want to delete this team?');
    if (confirmation) {
    ReplyService.deleteReply(id).then((res) => {
      if (replies) {
        setReplies((prevElement) => {  //then updates the "clients" state variable by filtering out the deleted client from the previous state using the "setClients" function.
        setShowSuccess(true);
          return prevElement.filter((reply) => reply.id !== id);
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
    }
  };

  const handleSearchChange = (e) => { //Create a new function to handle the search query change
    setSearchQuery(e.target.value);
  };

  const filteredReplies = replies.filter((reply) =>   //Filter the teams array based on the search query
    reply.reply.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div>
    <div className="container mx-auto my-8">
      <div className="h-16">
      <input
            type="text"
            placeholder="Search reply..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="rounded border-gray-300 px-2 py-1 w-64"
          />
</div>
</div>
<div className="container mx-auto my-8">
      <div className="h-16">
          <table className="min-w-full">
          <thead className="bg-blue-400">
            <tr className="text-left font-medium text-black-500 fw-bold uppercase tracking-wider py-3 px-6">
              
            How to handle deeplink with branch.io sdk for flutter?
              </tr>
              <tr className="text-left font-medium text-black-500 fw-bold  tracking-wider py-3 px-6">
              
              I am trying to handle deeplink with branch sdk in flutter app. 
                I have used routemaster library for navigation 
              </tr>
            <tr className="text-right font-medium text-black-500 fw-bold uppercase tracking-wider py-3 px-6">
              CreatedBy:johnsteven
              </tr>
          </thead>
           </table>
        
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-blue-400">
            <tr>
              
            </tr>
          </thead>
          {!loading && (
              <tbody className="bg-white">
                {filteredReplies.map((reply) => (  //Update the rendering of the Team components to use the filteredTeams array instead of teams
                  <Reply
                    reply={reply}
                    deleteReply={deleteReply}
                    // openUpdateTeam={openUpdateTeam}
                    key={reply.id}
                  ></Reply>
                ))}
              </tbody>
            )}

        </table>
      </div>
    </div>
    <SuccessfulAction
    onHide={() => setShowSuccess(false)}
    show={showSuccess}
    message="Reply Deleted Successfully"
  />
    </div>
  );
};

export default ReplyList;


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ReplyService from '../../Services/ReplyService';
// import Reply from "./Reply";
// import SuccessfulAction from "../CommonComponents/SuccessfulAction";

// const ReplyList = ({ forumId }) => {
//   const navigate = useNavigate();
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [replies, setReplies] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await ReplyService.getRepliesByForumId(forumId); // Fetch replies specific to the forumId
//         setReplies(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, [forumId]);

//   const deleteReply = (e, id) => {
//     e.preventDefault();
//     ReplyService.deleteReply(id).then((res) => {
//       if (replies) {
//         setReplies((prevReplies) =>
//           prevReplies.filter((reply) => reply.id !== id)
//         );
//         setShowSuccess(true);
//       }
//     });
//   };

//   return (
//     <div>
//       <div className="container mx-auto my-8">
//         <div className="h-12"></div>
//         <div className="flex shadow border-b">
//           <table className="min-w-full">
//             <thead className="bg-blue-400">
//               <tr></tr>
//             </thead>
//             {!loading && (
//               <tbody className="bg-white">
//                 {replies.map((reply) => (
//                   <Reply
//                     reply={reply}
//                     deleteReply={deleteReply}
//                     key={reply.id}
//                   />
//                 ))}

//               </tbody>
//             )}
//             <tbody className="bg-white">
//   {replies.map((reply) => (
//     <Reply
//       reply={reply}
//       deleteReply={deleteReply}
//       key={reply.id}
//     />
//   ))}
// </tbody>

//           </table>
//         </div>
//       </div>
//       <SuccessfulAction
//         onHide={() => setShowSuccess(false)}
//         show={showSuccess}
//         message="Reply Deleted Successfully"
//       />
//     </div>
//   );
// };

// export default ReplyList;


// import React, { useEffect, useState } from "react";
// import ReplyService from '../../Services/ReplyService';
// import Reply from "./Reply";

// const ReplyList = ({ forumId }) => {
//   const [replies, setReplies] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await ReplyService.getRepliesByForumId(forumId);
//         setReplies(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, [forumId]);

//   const deleteReply = (id) => {
//     // Implement the delete functionality here
//   };

//   return (
//     <div>
//       <table>
//         <tbody>
//           {replies.map((reply) => (
//             <Reply
//               reply={reply}
//               deleteReply={deleteReply}
//               key={reply.id}
//             />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ReplyList;
