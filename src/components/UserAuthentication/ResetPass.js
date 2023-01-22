import React from 'react'

const ResetPass = () => {
  return (
    <div>
        <div className="bg-[#231651] shadow h-12 p-2">
            <p className='text-center text-white text-2xl font-bold'>TRACKO</p>
        </div>
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col  h-120 w-96  shadow-xl border-b bg-[#c8c8ca] rounded-2xl p-2">

                <div className='px-4 py-2'>
                    <p className="text-xl font-bold text-gray pb-2 " >Reset Password</p>
                    <p className='text-s text-gray-600 '>Enter the email we will send a link to reset the password</p>
                </div>

                <div className="px-4 pt-2">
                    <label className="block text-gray-700 text-sm font-normal ">Email</label>
                    <input 
                        type="text" 
                        name="userName"
                        className="rounded h-10 w-80 shadow border-b " >
                    </input>
                </div>

                <div className="items-center  mx-4 w-full ">
                    <button
                    className = "rounded text-white font-semibold bg-[#FF8484] w-80 hover:bg-[#794141] shadow px-4 py-2">
                            Send Email
                    </button>

                <div className="flex   items-center content-center mt-1">
                    <div className='ml-12 pl-12'>
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-left" class="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"></path>
                    </svg>
                    </div>
                    <p
                    className = " text-gray-800 text-sm font-semibold w-80  px-2 py-2">
                            Back to login
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResetPass