// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ForumService from '../../Services/ForumService';
// import SuccessfulAction from "../CommonComponents/SuccessfulAction"
// // const CreateForum = () => {
// //   const [showForm, setShowForm] = useState(false);
// //   const [title, setTitle] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [attachment, setAttachment] = useState('');

//   const CreateForum= () => {
//     const [showSuccess, setShowSuccess] = useState(false);
//     const [forum, setForum] = useState
//     // const [attachment, setAttachment] = useState('');
//     ({
//       id: "",
//       title:"",
//       description:"",
//       attachment:"",
//     });
  
//     const navigate = useNavigate();
  
//     const handleChange = (e) => {
//       const value = e.target.value;
//       setForum({ ...forum, [e.target.name]: value });
//     };

    
  
//     const reset = (e) => {
//         e.preventDefault();
//         setForum({
//           id: "",
//           title:"",
//           description:"",
//           attachment:"",
//         });
//       };

//       const saveForum =(e) =>{  
//         e.preventDefault();       
//   ForumService.saveForum(forum) 
        
//         .then((response) => {
//          navigate("/forumList"); 
//          })
//          .catch((error) => {
//           console.log(error);
//          });
//          setShowSuccess(true)
    
//         }
     


// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Perform the necessary action with the form data (e.g., submit to a server)
// //     console.log({ title, description, attachment });
// //     // Reset the form fields
// //     setTitle('');
// //     setDescription('');
// //     setAttachment('');
// //     // Close the popup form
// //     setShowForm(false);
// //   };

//   return (
   
//         <div>
//           <div className="flex max-w-2xl mx-auto shadow border-b ">
//             <div className="px-8 py-5">
//               <div className="text-2xl tracking-wider fw-bold">
//                 <h1>Add New Discussion</h1>
//               </div>
//               <div className="items-center justify-center h-1 w-full"></div>
//               <label className="block text-gray-600 text-sm font-normal">
//                 Title
//               </label>
//               <input
//                 type="text"
//                 placeholder="PsiClass to Java class"
//                 name="title"
//                 value={forum.title}
//                 onChange={handleChange}
//                 className="h-8 w-96 border mt-2 px-2"
//               ></input>
    
//             <div className="items-center justify-center h-5 w-full"></div>
//               <label className="block text-gray-600 text-sm font-normal">
//                 Description
//               </label>
//               <input
//                 type="text"
//                 placeholder="I am writing an intelliJ plugin where I need to get java class 
//                 ......."
//                 name="description"
//                 value={forum.description}
//                 onChange={handleChange}
//                 className="h-20 w-96 border mt-2 px-2"
//               ></input>
                    
//                     <div className="items-center justify-center h-5 w-full"></div>
//              <label className="block text-gray-600 text-sm font-normal">
//               Attachment
//               <input
//                 className="form-input"
//                 type="file"
//                 // onChange={(e) => setAttachment(e.target.files[0])}
//               />
//             </label>
    
//               <div className="items-center justify-center h-10 w-full my-4 space-x-8 pt-4">
//                 <button
//                   onClick={saveForum}
//                   className="rounded text-white font-semibold bg-[#231651] hover:bg-blue-700 py-2 px-6">
//                   Send
//                 </button>
//                 <button
//                   onClick={reset}
//                   className="rounded text-white font-semibold bg-[#231651] hover:bg-blue-700 py-2 px-6"
//                 >
//                   Clear
//                 </button>
//               </div>
//             </div>
//           </div>
//           <SuccessfulAction
//             onHide={() => setShowSuccess(false)}
//             show={showSuccess}
//             message="Post Forum Successfully"
//           />
//         </div>
//       );
//     };
    
    
    

// export default CreateForum;

// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import ForumService from '../../Services/ForumService';
// import SuccessfulAction from "../CommonComponents/SuccessfulAction";

// const CreateForum = () => {
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [forum, setForum] = useState({
//     id: "",
//     title: "",
//     description: "",
//     attachment: "",
//   });

//   const history = useHistory();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForum((prevForum) => ({ ...prevForum, [name]: value }));
//   };

//   const reset = (e) => {
//     e.preventDefault();
//     setForum({
//       id: "",
//       title: "",
//       description: "",
//       attachment: "",
//     });
//   };

//   const saveForum = (e) => {
//     e.preventDefault();
//     ForumService.saveForum(forum)
//       .then((response) => {
//         history.push("/forumList");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     setShowSuccess(true);
//   };

//   const handleCancel = () => {
//     history.push("/forumList");
//   };

//   return (
//     <div>
//       <div className="flex max-w-2xl mx-auto shadow border-b ">
//         <div className="px-8 py-5">
//           <div className="text-2xl tracking-wider fw-bold">
//             <h1>Add New Discussion</h1>
//           </div>
//           <div className="items-center justify-center h-1 w-full"></div>
//           <label className="block text-gray-600 text-sm font-normal">
//             Title
//           </label>
//           <input
//             type="text"
//             placeholder="PsiClass to Java class"
//             name="title"
//             value={forum.title}
//             onChange={handleChange}
//             className="h-8 w-96 border mt-2 px-2"
//           />

//           <div className="items-center justify-center h-5 w-full"></div>
//           <label className="block text-gray-600 text-sm font-normal">
//             Description
//           </label>
//           <input
//             type="text"
//             placeholder="I am writing an intelliJ plugin where I need to get java class..."
//             name="description"
//             value={forum.description}
//             onChange={handleChange}
//             className="h-20 w-96 border mt-2 px-2"
//           />

//           <div className="items-center justify-center h-5 w-full"></div>
//           <label className="block text-gray-600 text-sm font-normal">
//             Attachment
//             <input
//               className="form-input"
//               type="file"
//               // onChange={(e) => setAttachment(e.target.files[0])}
//             />
//           </label>

//           <div className="items-center justify-center h-10 w-full my-4 space-x-8 pt-4">
//             <button
//               onClick={saveForum}
//               className="rounded text-white font-semibold bg-[#231651] hover:bg-blue-700 py-2 px-6"
//             >
//               Send
//             </button>
//             <button
//               onClick={reset}
//               className="rounded text-white font-semibold bg-[#231651] hover:bg-blue-700 py-2 px-6"
//             >
//               Clear
//             </button>
//             <button
//               onClick={handleCancel}
//               className="rounded text-white font-semibold bg-red-500 hover:bg-red-700 py-2 px-6"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//       <SuccessfulAction
//         onHide={() => setShowSuccess(false)}
//         show={showSuccess}
//         message="Post Forum Successfully"
//       />
//     </div>
//   );
// };

// export default CreateForum;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ForumService from '../../Services/ForumService';
import SuccessfulAction from "../CommonComponents/SuccessfulAction";

const CreateForum = () => {
  const [showSuccess,onCancel, setShowSuccess] = useState(false);
  const [forum, setForum] = useState({
    id: "",
    title: "",
    description: "",
    attachment: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForum((prevForum) => ({ ...prevForum, [name]: value }));
  };

  const reset = (e) => {
    e.preventDefault();
    setForum({
      id: "",
      title: "",
      description: "",
      attachment: "",
    });
  };

  const saveForum = (e) => {
    e.preventDefault();
    ForumService.saveForum(forum)
      .then((response) => {
        navigate("/forumList");
      })
      .catch((error) => {
        console.log(error);
      });
    setShowSuccess(true);
  };

  // const handleCancel = (e) => {
  //   e.preventDefault();
  //   navigate("/forumList");
  // };

  return (
    <div>
      <div className="flex max-w-2xl mx-auto shadow border-b ">
        <div className="px-8 py-5">
          <div className="text-2xl tracking-wider fw-bold">
            <h1>Add New Discussion</h1>
          </div>
          <div className="items-center justify-center h-1 w-full"></div>
          <label className="block text-gray-600 text-sm font-normal">
            Title
          </label>
          <input
            type="text"
            placeholder="PsiClass to Java class"
            name="title"
            value={forum.title}
            onChange={handleChange}
            className="h-8 w-96 border mt-2 px-2"
          />

          <div className="items-center justify-center h-5 w-full"></div>
          <label className="block text-gray-600 text-sm font-normal">
            Description
          </label>
          <input
            type="text"
            placeholder="I am writing an intelliJ plugin where I need to get java class..."
            name="description"
            value={forum.description}
            onChange={handleChange}
            className="h-20 w-96 border mt-2 px-2"
          />

          <div className="items-center justify-center h-5 w-full"></div>
          <label className="block text-gray-600 text-sm font-normal">
            Attachment
            <input
              className="form-input"
              type="file"
              // onChange={(e) => setAttachment(e.target.files[0])}
            />
          </label>

          <div className="items-center justify-center h-10 w-full my-4 space-x-8 pt-4">
            <button
              onClick={saveForum}
              className="rounded text-white font-semibold bg-[#231651] hover:bg-blue-700 py-2 px-6"
            >
              Send
            </button>
            <button
              onClick={reset}
              className="rounded text-white font-semibold bg-[#231651] hover:bg-blue-700 py-2 px-6"
            >
              Clear
            </button>
            <button
              onClick={onCancel}
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
        // message="Post Forum Successfully"
      />
    </div>
  );
};

export default CreateForum;

