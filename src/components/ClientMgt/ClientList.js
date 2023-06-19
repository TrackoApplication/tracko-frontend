import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import ClientService from '../../Services/ClientService';

import Client from "./Client";

import SuccessfulAction from "../CommonComponents/SuccessfulAction";

import AddClient from "./AddClient";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";




const ClientList = () => {

  const navigate = useNavigate();

  const [showSuccess, setShowSuccess] = useState(false);

  const [loading, setLoading] = useState(false);

  const [clients, setClients] = useState([]);

  const [sortCriteria, setSortCriteria] = useState("clientName");

  const [sortOrder, setSortOrder] = useState("asc");

  const [search, setSearch] = useState("");

  const [showAddClient, setShowAddClient] = useState(false);




  useEffect(() => {

    const fetchData = async () => {

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




  const deleteClient = (e, id) => {

    e.preventDefault();

    ClientService.deleteClient(id).then((res) => {

      if (clients) {

        setClients((prevElement) => {

          setShowSuccess(true);

          return prevElement.filter((client) => client.id !== id);

        });

      }

    });

  };




  const handleSort = (criteria) => {

    if (sortCriteria === criteria) {

      setSortOrder(sortOrder === "asc" ? "desc" : "asc");

    } else {

      setSortCriteria(criteria);

      setSortOrder("asc");

    }

  };




  const handleSearch = (e) => {

    setSearch(e.target.value);

  };




  const filteredClients = clients.filter((client) =>

    client.clientName.toLowerCase().includes(search.toLowerCase())

  );




  const sortedClients = [...filteredClients].sort((a, b) => {

    if (a[sortCriteria] < b[sortCriteria]) {

      return sortOrder === "asc" ? -1 : 1;

    }

    if (a[sortCriteria] > b[sortCriteria]) {

      return sortOrder === "asc" ? 1 : -1;

    }

    return 0;

  });

  const openAddClient = () => {

    setShowAddClient(true);

  };




  const closeAddClient = () => {

    setShowAddClient(false);

  };




  return (

    <div>
      <div className="d-flex justify-content-between">


        <div className="h-12 m-4">

         <AddClient/>

        </div>

     

        <Form className="m-4 p-2">
  <div className="flex">

    <InputGroup size-sm className="my-2 mx-2">
      <Form.Control
        type="search"
        placeholder="Search"
        className="rounded"
        value={search}

        onChange={handleSearch}
        aria-label="Search"

      />
    </InputGroup>
  </div>

  {/* <Button variant="outline-success " className='text-white  outline-slate-100 bg-[rgb(194, 194, 194)]'>Search</Button> */}
</Form>

        </div>


        <div className="flex  border-b mx-2">

          <table className="min-w-full border ">

            <thead className="bg-[#153a5f]">

              <tr>

                <th

                  className="text-left font-medium text-white fw-bold uppercase tracking-wider py-3 px-6"

                  onClick={() => handleSort("clientName")}

                >

                  Client Name

                </th>

                <th

                  className="text-left font-medium text-white fw-bold uppercase tracking-wider py-3 px-6"

                  onClick={() => handleSort("contactPerson")}

                >

                  Contact Person

                </th>

                <th

                  className="text-left font-medium text-white fw-bold uppercase tracking-wider py-3 px-6"

                  onClick={() => handleSort("emailId")}

                >

                  Email ID

                </th>

                <th

                  className="text-left font-medium text-white fw-bold uppercase tracking-wider py-3 px-6"

                  onClick={() => handleSort("description")}

                >

                  Description

                </th>

                <th className="text-left font-medium text-white fw-bold uppercase tracking-wider py-3 px-6">

                  Actions

                </th>

              </tr>

            </thead>

            {!loading && (

              <tbody className="bg-white">

                {sortedClients.map((client) => (

                  <Client

                    client={client}

                    deleteClient={deleteClient}

                    key={client.id}

                  ></Client>

                ))}

              </tbody>

            )}

          </table>

        </div>



      {showAddClient && (

        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">

          <div className="bg-white p-4 rounded shadow">

            <AddClient

              onCancel={closeAddClient}

              onSuccess={() => setShowSuccess(true)}

            />

          </div>

        </div>

      )}

      <SuccessfulAction

        onHide={() => setShowSuccess(false)}

        show={showSuccess}

        message="Client Deleted Successfully"

      />

    </div>

  );

};




export default ClientList;