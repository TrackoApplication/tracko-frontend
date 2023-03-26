import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const AddClient=() =>{
  
return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
            <h1>Add New Client</h1>
        </div>
        <div className="items-center justify-center h-14 w-full"></div>
        <label className='block text-gray-600 text-sm font-normal'>
            clientName
            </label>
        <input 
        type="text" 
       className='h-10 w-96 border mt-2 px-2 '></input>
        
        <div className="items-center justify-center h-14 w-full"></div>
        <label className='block text-gray-600 text-sm font-normal'>
            contactPerson
            </label>
        <input type="text" 
        
        className='h-10 w-96 border mt-2 px-2 '></input>
        
        <div className="items-center justify-center h-14 w-full"></div>
        <label className='block text-gray-600 text-sm font-normal'>
            emailId
        </label>
        <input type="text" 
        
        className='h-10 w-96 border mt-2 px-2 '></input>

       <div className="items-center justify-center h-14 w-full"></div>
        <label className='block text-gray-600 text-sm font-normal'>
           description
        </label>
        <input type="text" 
        
        className='h-10 w-96 border mt-2 px-2 '></input>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button  
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
              Save
            </button>
            <button 
            
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
              Clear
              </button>
        </div>
        
        
        </div>
       
</div>
    
  );
};

export default AddClient;
