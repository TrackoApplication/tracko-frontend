import React from 'react'
import notFound from '../images/404.png'

export const PageNotFound = () => {
  return (
    <div className='flex align-middle items-center flex-col mt-20 mb-5'>
        <div className='-center w-100%   text-xl'>
        <img src={notFound} className="w-80 rounded-4 shadow-4 " alt="" fluid />
        </div>
        <div className=' w-100%  h-90 text-xl'>
            <h1 className='text-[100px] mt-0 mb-0'>404</h1>
        </div>
        <div className=' w-100%  mt-0 '>
            <h1 className='text-[50px] mt-0 '>oops!page not found</h1>
        </div>
        <div className=' w-100%  mt-0 '>
            <div 
            onClick={() => window.location.replace("/Home")}
            className='btn-pink  rounded p-2 text-[20px] mt-0 '>Back to home</div>
        </div>
    </div>
  )
}
