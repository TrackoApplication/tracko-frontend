import React, { useState } from 'react'
import { navigate, useNavigate } from 'react-router-dom';
import ClientService from '../../Services/ClientService';
import SuccessfulAction from "../CommonComponents/SuccessfulAction";

const AddClient=() =>{
  const [showSuccess, setShowSuccess] = useState(false);

  const[client,setClient]= useState({  // use state use to create a state object -client
    id:"",
    clientName:"",
    contactPerson:"",
    emailId:"",
    description:"",
  });

  const navigate = useNavigate();

  const handleChange= (e) =>{ // update state object when user input values
    const value = e.target.value;
    setClient({ ...client, [e.target.name]:value});
    };

    const saveClient =(e) =>{  //when user click the save button use clientservice and save data in the server
      e.preventDefault();       

      
    if (!emailId || emailId === '') {
      alert('Email Id is required'); return;
    } else if (!regexEmail.test(emailId)) {
      alert('Email Id is not valid'); return;
    }


      ClientService.saveClient(client) //pass client state as a parameter to save client method
      
      .then((response) => {
       navigate("/clientList"); // after saving go to clientlist page
       })
       .catch((error) => {
        console.log(error);
       });
       setShowSuccess(true)
  
      };
      
      const reset =(e) => {  //when user click clear button it goes to the initial state
        e.preventDefault();
        setClient({
          id:"",
          clientName:"",
          contactPerson:"",
          emailId:"",
          description:"",
         
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
            <h1>Add New Client</h1>
        </div>
        <div className="items-center justify-center h-10 w-full"></div>
        <label className='block text-gray-600 text-sm font-normal'>
            ClientName
            </label>
        <input 
        type="text" 
        name='clientName'
        placeholder="Creative Software"
        value={client.clientName}
        onChange={(e) => handleChange(e)}
        

       className='h-10 w-96 border mt-2 px-2 ' ></input>
        
        <div className="items-center justify-center h-10 w-full"></div>
        <label className='block text-gray-600 text-sm font-normal'>
            ContactPerson
            </label>
        <input type="text" 
        name='contactPerson'
        placeholder="John Steven"
        value={client.contactPerson}
        onChange={(e) => handleChange(e)}
        className='h-10 w-96 border mt-2 px-2 '></input>
        
        <div className="items-center justify-center h-10 w-full"></div>
        <label className='block text-gray-600 text-sm font-normal'>
            EmailId
        </label>
        <input type="text" 
        placeholder='johnsteven@gmail.com'
        name='emailId'
        value={client.emailId}
        onChange={(e) => handleChange(e)}
        
        className='h-10 w-96 border mt-2 px-2 '></input>

       <div className="items-center justify-center h-10 w-full"></div>
        <label className='block text-gray-600 text-sm font-normal'>
           Description
        </label>
        <input type="text"
        placeholder='Employee performace measuring system'
        name='description'
        value={client.description}
        onChange={(e) => handleChange(e)} 
        
        className='h-10 w-96 border mt-2 px-2 '></input>

        <div className="items-center justify-center h-14 w-full my-2 space-x-6 pt-4">
            <button onClick={saveClient}
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
    message="Client Saved Successfully"
  />

</div>


    
  );
  
};



export default AddClient;
