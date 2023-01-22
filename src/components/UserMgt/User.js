import React from 'react'

const User = () => {
  return (
        <tr>
                    <td className='text-left px-6 py-2 whitespace-nowrap'>
                        <div className='text-sm text-gray-500 '>User Name</div>
                    </td>
                    <td className='text-left px-6 py-2 whitespace-nowrap'>
                        <div className='text-sm text-gray-500 '>Email</div>
                    </td>
                    <td className='text-left px-6 py-2 whitespace-nowrap'>
                        <div className='text-sm text-gray-500 '>Role</div>
                    </td>
                    <td className='text-right font-medium text-sm  px-6 py-2 whitespace-nowrap'>
                        <a href="#" className='text-indigo-600 hover:text-indigo-800 px-4'>Edit</a>
                        <a href="#" className='text-indigo-600 hover:text-indigo-800 ' >Delete</a>
                    </td>
                    
                </tr>

  )
}


export default User