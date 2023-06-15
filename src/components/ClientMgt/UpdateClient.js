import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import ClientService from '../../Services/ClientService';

import SuccessfulAction from "../CommonComponents/SuccessfulAction";




const UpdateClient = () => {

  const [showSuccess, setShowSuccess] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  const [client, setClient] = useState({

    id: id,

    clientName: "",

    contactPerson: "",

    emailId: "",

    description: "",

  });




  const handleChange = (e) => {

    const value = e.target.value;

    setClient({ ...client, [e.target.name]: value });

  };




  useEffect(() => {

    const fetchData = async () => {

      try {

        const response = await ClientService.getClientById(client.id);

        setClient(response.data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchData();

  }, []);




  const updateClient = (e) => {

    e.preventDefault();

    const confirmation = window.confirm('Are you sure you want to update this client?');

    if (!confirmation) {

      return;

    }




    ClientService.updateClient(client, id)

      .then((response) => {

        navigate("/clientList");

      })

      .catch((error) => {

        console.log(error);

      });




    setShowSuccess(true);

  };




  return (

    <div>

      <div className="flex max-w-2xl mx-auto shadow border-b">

        <div className="px-8 py-8">

          <div className=" text-2xl tracking-wider fw-bold">

            <h1>Update Client</h1>

          </div>

          <div className="items-center justify-center h-10 w-full"></div>

          <label className='block text-gray-600 text-sm font-normal'>

            ClientName

          </label>

          <input

            type="text"

            name='clientName'

            value={client.clientName}

            onChange={(e) => handleChange(e)}

            className='h-10 w-96 border mt-2 px-2 '></input>




          <div className="items-center justify-center h-10 w-full"></div>

          <label className='block text-gray-600 text-sm font-normal'>

            ContactPerson

          </label>

          <input

            type="text"

            name='contactPerson'

            value={client.contactPerson}

            onChange={(e) => handleChange(e)}

            className='h-10 w-96 border mt-2 px-2 '></input>




          <div className="items-center justify-center h-10 w-full"></div>

          <label className='block text-gray-600 text-sm font-normal'>

            EmailId

          </label>

          <input

            type="text"

            name='emailId'

            value={client.emailId}

            onChange={(e) => handleChange(e)}

            className='h-10 w-96 border mt-2 px-2 '></input>




          <div className="items-center justify-center h-10 w-full"></div>

          <label className='block text-gray-600 text-sm font-normal'>

            Description

          </label>

          <input

            type="text"

            name='description'

            value={client.description}

            onChange={(e) => handleChange(e)}

            className='h-10 w-96 border mt-2 px-2 '></input>




          <div className="items-center justify-center h-10 w-full my-4 space-x-4 pt-4">

            <button

              onClick={updateClient}

              className="rounded text-white font-semibold bg-[#231651]  hover:bg-red-700 py-2 px-6">

              Update

            </button>

            <button

              onClick={() => navigate("/clientList")}

              className="rounded text-white font-semibold bg-[#231651] hover:bg-blue-700 py-2 px-6">

              Cancel

            </button>

          </div>




        </div>

      </div>

      <SuccessfulAction

        onHide={() => setShowSuccess(false)}

        show={showSuccess}

        message="Client Updated Successfully"

      />

    </div>




  );

};




export default UpdateClient;