import React, { useState } from 'react'
import { navigate, useNavigate } from 'react-router-dom';
import ReplyService from '../../Services/ReplyService';
import SuccessfulAction from "../CommonComponents/SuccessfulAction";


const AddReply=() =>{
  const [showSuccess, setShowSuccess] = useState(false);

  const[reply,setReply]= useState({  // use state use to create a state object -client
    id:"",
    reply:"",
  });

  const navigate = useNavigate();

  const handleChange= (e) =>{ // update state object when user input values
    const value = e.target.value;
    setReply({ ...reply, [e.target.name]:value});
    };

    const saveReply =(e) =>{  //when user click the save button use clientservice and save data in the server
      e.preventDefault();       

      ReplyService.saveReply(reply) //pass client state as a parameter to save client method
      
      .then((response) => {
       navigate("/replyList"); // after saving go to clientlist page
       })
       .catch((error) => {
        console.log(error);
       });
       setShowSuccess(true)
  
      };
      
      const reset =(e) => {  //when user click clear button it goes to the initial state
        e.preventDefault();
        setReply({
          id:"",
          reply:"",
         
        });
      };
       

         
    //   function FormValidation(){
    //   const[values, setValues]= useState({
    //     clientName:'',
    //     contactPerson:'',
    //     description:'',
    //     emailId:'',
    //   })

    // }
  
return (
  
<div>
    
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-4 py-4">
        <div className="text-2xl tracking-wider fw-bold">
            <h1>Post a reply</h1>
        </div>
        <tr >
      {/* ...existing code... */}
      <td className="text-left px-0 py-8 whitespace-nowrap">
        <div className="flex flex-col">
          <div className="text-sm text-black-500">
            <strong>How to handle deeplink with branch.io sdk for flutter?</strong> 
          </div>
          <div className="text-sm px-6 text-black-500">
          I am trying to handle deeplink with branch sdk in flutter app. 
I have used routemaster library for navigation 
          </div>
          
        </div>
      </td>

      

      
    </tr>
        <div className="items-center justify-center h-10 w-full"></div>
        <label className='block text-gray-600 text-sm font-normal'>
            Reply
            </label>
        <input 
        type="text" 
        name='reply'
        // placeholder="Creative Software"
        value={reply.reply}
        onChange={(e) => handleChange(e)}
        className='h-10 w-96 border mt-2 px-2 ' ></input>
        <div className="items-center justify-center h-14 w-full my-2 space-x-6 pt-4">
            <button onClick={saveReply}
            className="rounded bg-[#231651] text-white font-semibold  hover:bg-blue-700 py-2 px-6">
              Save
            </button>
            
            <button 
            onClick={reset}
            className="rounded text-white font-semibold bg-[#231651] hover:bg-blue-700 py-2 px-6">
              Clear
              </button>
        </div>
        
        </div>
        
       
</div>
<SuccessfulAction
    onHide={() => setShowSuccess(false)}
    show={showSuccess}
    message="Reply posted Successfully"
  />

</div>


    
  );
  
};



export default AddReply;