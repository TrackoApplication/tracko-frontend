import React from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate();

    const successLogin = () => {
        navigate('/userlist');
    }

    
  return (
    <div className='grid grid-cols-2 gap-4 '>
        <div className='flex bg-[#231651]'>
            <img src={require('../images/T.png')} className ="w-47 h-47 shadow "/>
        </div>
        <div className = " flex mt-12 h-[400px] mx-auto shadow border-b bg-gray-100 rounded ">
            <div className = " mt-10 mb-10  ">
                <div className = " font-thin text-2xl tracking-wider">
                    <h1 className="px-4 font-medium">Login</h1>
                </div>

            <div className="items-center justify-center h-14 my-4">
                <label className="block text-gray-600 text-sm font-normal ">User Name</label>
                <input 
                    type="text" 
                    name="userName"
                    className="rounded h-10 w-96 shadow border-b mt-2  py-2" >
                </input>
            </div>


            <div className="items-center justify-center h-14  my-4 ">
                <label className="block text-gray-600 text-sm font-normal">Password</label>
                <input 
                    type="password" 
                    name="password"
                    className=" rounded h-10 w-96 shadow border-b mt-2 py-2" >
                </input>
            </div>

            <div className="items-center h-14 py-4 space-x-5">
                <button
                onClick={successLogin}
                className = "rounded w-96 text-white font-semibold bg-[#FF8484]  py-2 hover:bg-[#794141] shadow">
                        Login
                </button>
                <button className= "w-96  pt-1  hover:text-[#FF8484] text-sm" onClick={() => navigate('/ResetPass')}>Forgotten your Username or Password!
                </button>
            </div>

            <div >
                <button 
                onClick={() => navigate('/Register')}
                className="w-96 my-4 py-4  hover:text-[#FF8484]" >
                        Don't Have an Account? Register
                </button>

            </div> 

        </div>

        </div>

    </div>
  )
}

export default Login