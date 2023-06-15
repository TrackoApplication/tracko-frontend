import React from 'react'

import { useNavigate } from 'react-router-dom';




const Client = ({client,deleteClient}) => {

    const navigate = useNavigate();

    const editClient = (e, id) => {

      e.preventDefault();

      navigate(`/editClient/${id}`);

    };

 

    return (

    <tr key={client.id}>

                <td className="text-left px-6 py-4 whitespace-nowrap">

                <div className="text-sm text-black-500">

                    {client.clientName}

                    </div>

                    </td>

               

                <td className="text-left px-6 py-4 whitespace-nowrap">

                <div className="text-sm text-black-500">

                {client.contactPerson}

                    </div>

                    </td>

                <td className="text-left px-6 py-4 whitespace-nowrap">

                <div className="text-sm text-black-500">

                {client.emailId}

                    </div>

                    </td>

                <td className="text-left px-6 py-4 whitespace-nowrap">

                <div className="text-sm text-black-500">

                {client.description}

                    </div>

                    </td>

                <td className="text-right px-6 py-4 whitespace-nowrap">

                <a

                 onClick={(e, id) => editClient(e, client.id)}

                 className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">Edit</a>

                {/* <a

                onClick={(e, id) => deleteClient(e, client.id)}

                 className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">Delete</a> */}

                </td>

            </tr>

  );

};




export default Client;