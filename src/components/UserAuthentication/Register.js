import React from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate();
    
  return (
    <div className='grid grid-cols-2 gap-4 '>
        <div className='flex bg-[#231651] '>
        <img src={require('../images/T.png')} className ="w-47 h-47 shadow "/>
        </div>
        <div className = "flex mt-10 mb-10 mx-auto shadow border-b bg-gray-100 rounded">
        <div className = "mx-auto mt-10 mb-10 px=8 py=8 ">
            <div className = " font-thin text-2xl tracking-wider">
                <h1 className="px-4 font-medium">Sign In</h1>
            </div>

            <div className="items-center justify-center h-14 mx-4 my-4 w-full ">
                <label className="block text-gray-600 text-sm font-normal ">User Name</label>
                <input 
                    type="text" 
                    name="userName"
                    className="rounded h-10 w-96 shadow border-b mt-2 px-2 py-2" >
                </input>
            </div>

            <div className="items-center justify-center h-14 mx-4 my-4 w-full  px=4">
                <label className="block text-gray-600 text-sm font-normal">Email</label>
                <input 
                    type="email" 
                    name="email"
                    className="rounded h-10 w-96 shadow border-b mt-2 px-2 py-2" >
                </input>
            </div>

            <div className="items-center justify-center h-14 mx-4 my-4 w-full  px=4">
                <label className="block text-gray-600 text-sm font-normal">Password</label>
                <input 
                    type="password" 
                    name="password"
                    className=" rounded h-10 w-96 shadow border-b mt-2 px-2 py-2" >
                </input>
            </div>

            <div className="items-center justify-center h-14 mx-4 my-4 w-full  px=4">
                <label className="block text-gray-600 text-sm font-normal">Confirm Password</label>
                <input 
                    type="password" 
                    name="conpassword"
                    className=" rounded h-10 w-96 shadow border-b mt-2 px-2 py-2" >
                </input>
            </div>

            <div className="items-center justify-center h-14 pt-4 mx-4 my-4 w-full space-x-5">
                <button
                    onClick={() => navigate('/Login')}
                    className = "rounded text-white font-semibold bg-[#FF8484] py-2 px-2 hover:bg-[#9c4747] shadow">
                        Register
                </button>
            </div>
            <div>
                <button 
                onClick={() => navigate('/Login')}
                className="py-2 px-4 hover:text-[#FF8484]" >
                    
                    Already Have an Account? Login
                </button>
            </div> 

        </div>

        </div>

    </div>
  )
}

export default Register