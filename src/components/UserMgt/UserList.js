import React from 'react'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'


const UserList = () => {
    const navigate = useNavigate();


  return (
    <div>
        <Navbar/>
        <div className="container mx-auto my-8">
    <div className =" h-12">
        <button 
        onClick = {() => navigate("/addUser")}
        className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">Add User</button>
    </div>
    <div className="flex shadow border-b mt-6">
        <table className='min-w-full'>
            <thead className='bg-gray-50'>
                <tr>
                    <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>User Name</th>
                    <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Email </th>
                    <th className='text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Role</th>
                    <th className='text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>Actions</th>
                </tr>
            </thead>
    
            <tbody className='bg-white'>
              
            </tbody>
            
        </table>
    </div>
    </div>

    </div>
  )
}

export default UserList