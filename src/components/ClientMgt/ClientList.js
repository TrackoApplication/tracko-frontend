import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientService from '../../Services/ClientService';
import Client from "./Client";
import SuccessfulAction from "../CommonComponents/SuccessfulAction";

const ClientList = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);


const [loading, setLoading] =useState(false);
const [clients, setClients] = useState([]);
  
useEffect(() => { //setting the "loading" state variable to "true",
                 //  making the API call to get the client data using the "ClientService.getClient()" method 
                 //  setting the "clients" state variable to the response data
                //  setting the "loading" state variable to "false" when the API call is complete.
    const fetchData = async () => {  //The "loading" variable is used to determine whether the data is currently being fetched from the API, while the "clients" variable is an array that will hold the list of clients returned from the API.
      setLoading(true);
      try {
        const response = await ClientService.getClient();
        setClients(response.data);

      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteClient = (e, id) => { // DELETE request to the API using the "ClientService.deleteClient(id)" method
    e.preventDefault();
    ClientService.deleteClient(id).then((res) => {
      if (clients) {
        setClients((prevElement) => {  //then updates the "clients" state variable by filtering out the deleted client from the previous state using the "setClients" function.
    
          setShowSuccess(true);
          
          return prevElement.filter((client) => client.id !== id);
        });
      }
    });
  };
  


  return (
    <div>
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addClient")}
          className="rounded bg-[#231651] text-white px-6 py-2 font-semibold">
          Add Client
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-blue-400">
            <tr>
              <th className="text-left font-medium text-black-500 fw-bold uppercase tracking-wider py-3 px-6">
               Client Name
              </th>
              <th className="text-left font-medium text-black-500 fw-bold uppercase tracking-wider py-3 px-6">
               Contact Person
              </th>
              <th className="text-left font-medium text-black-500 fw-bold uppercase tracking-wider py-3 px-6">
                Email ID
              </th>
              <th className="text-left font-medium text-black-500 fw-bold uppercase tracking-wider py-3 px-6">
                Description
              </th>
              <th className="text-right font-medium text-black-500 fw-bold uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
           {!loading && (
          <tbody className="bg-white">
            {clients.map((client) => (
            <Client
            client={client}
            deleteClient={deleteClient}
            key={client.id}></Client>
            ))}
          </tbody>
          )}


        </table>
      </div>
    </div>
    <SuccessfulAction
    onHide={() => setShowSuccess(false)}
    show={showSuccess}
    message="Client Deleted Successfully"
  />
    </div>
  );
};

export default ClientList;


    