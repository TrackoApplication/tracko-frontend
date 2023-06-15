// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ClientService from '../../Services/ClientService';
// import Client from "./Client";
// import SuccessfulAction from "../CommonComponents/SuccessfulAction";

// const ClientList = () => {
//   const navigate = useNavigate();
//   const [showSuccess, setShowSuccess] = useState(false);


// const [loading, setLoading] =useState(false);
// const [clients, setClients] = useState([]);
  
// useEffect(() => { //setting the "loading" state variable to "true",
//                  //  making the API call to get the client data using the "ClientService.getClient()" method 
//                  //  setting the "clients" state variable to the response data
//                 //  setting the "loading" state variable to "false" when the API call is complete.
//     const fetchData = async () => {  //The "loading" variable is used to determine whether the data is currently being fetched from the API, while the "clients" variable is an array that will hold the list of clients returned from the API.
//       setLoading(true);
//       try {
//         const response = await ClientService.getClient();
//         setClients(response.data);

//       } catch (error) {
//         console.log(error);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   const deleteClient = (e, id) => { // DELETE request to the API using the "ClientService.deleteClient(id)" method
//     e.preventDefault();
//     ClientService.deleteClient(id).then((res) => {
//       if (clients) {
//         setClients((prevElement) => {  //then updates the "clients" state variable by filtering out the deleted client from the previous state using the "setClients" function.
    
//           setShowSuccess(true);
          
//           return prevElement.filter((client) => client.id !== id);
//         });
//       }
//     });
    
//   };
  


//   return (
//     <div>
//     <div className="container mx-auto my-8">
//       <div className="h-12">
//         <button
//           onClick={() => navigate("/addClient")}
//           className="rounded bg-[#231651] text-white px-6 py-2 font-semibold">
//           Add Client
//         </button>
//       </div>
//       <div className="flex shadow border-b">
//         <table className="min-w-full">
//           <thead className="bg-blue-400">
//             <tr>
//               <th className="text-left font-medium text-black-500 fw-bold uppercase tracking-wider py-3 px-6">
//                Client Name
//               </th>
//               <th className="text-left font-medium text-black-500 fw-bold uppercase tracking-wider py-3 px-6">
//                Contact Person
//               </th>
//               <th className="text-left font-medium text-black-500 fw-bold uppercase tracking-wider py-3 px-6">
//                 Email ID
//               </th>
//               <th className="text-left font-medium text-black-500 fw-bold uppercase tracking-wider py-3 px-6">
//                 Description
//               </th>
//               <th className="text-right font-medium text-black-500 fw-bold uppercase tracking-wider py-3 px-6">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//            {!loading && (
//           <tbody className="bg-white">
//             {clients.map((client) => (
//             <Client
//             client={client}
//             deleteClient={deleteClient}
//             key={client.id}></Client>
//             ))}
//           </tbody>
//           )}


//         </table>
//       </div>
//     </div>
//     <SuccessfulAction
//     onHide={() => setShowSuccess(false)}
//     show={showSuccess}
//     message="Client Deleted Successfully"
//   />
//     </div>
//   );
// };

// export default ClientList;


// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ClientService from '../../Services/ClientService';
// import Client from "./Client";
// import SuccessfulAction from "../CommonComponents/SuccessfulAction";

// const ClientList = () => {
//   const navigate = useNavigate();
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [clients, setClients] = useState([]);
//   const [sortCriteria, setSortCriteria] = useState("clientName");
//   const [sortOrder, setSortOrder] = useState("asc");

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await ClientService.getClient();
//         setClients(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   const deleteClient = (e, id) => {
//     e.preventDefault();
//     ClientService.deleteClient(id).then((res) => {
//       if (clients) {
//         setClients((prevElement) => {
//           setShowSuccess(true);
//           return prevElement.filter((client) => client.id !== id);
//         });
//       }
//     });
//   };

//   const handleSort = (criteria) => {
//     if (sortCriteria === criteria) {
//       setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//     } else {
//       setSortCriteria(criteria);
//       setSortOrder("asc");
//     }
//   };

//   const sortedClients = [...clients].sort((a, b) => {
//     if (a[sortCriteria] < b[sortCriteria]) {
//       return sortOrder === "asc" ? -1 : 1;
//     }
//     if (a[sortCriteria] > b[sortCriteria]) {
//       return sortOrder === "asc" ? 1 : -1;
//     }
//     return 0;
//   });

//   return (
//     <div>
//       <div className="container mx-auto my-8">
//         <div className="h-12">
//           <button
//             onClick={() => navigate("/addClient")}
//             className="rounded bg-[#231651] text-white px-6 py-2 font-semibold"
//           >
//             Add Client
//           </button>
//         </div>
//         <div className="flex shadow border-b">
//           <table className="min-w-full">
//             <thead className="bg-blue-400">
//               <tr>
//                 <th
//                   className="text-left font-medium text-black-500 fw-bold uppercase tracking-wider py-3 px-6 cursor-pointer"
//                   onClick={() => handleSort("clientName")}
//                 >
//                   Client Name
//                 </th>
//                 <th
//                   className="text-left font-medium text-black-500 fw-bold uppercase tracking-wider py-3 px-6 cursor-pointer"
//                   onClick={() => handleSort("contactPerson")}
//                 >
//                   Contact Person
//                 </th>
//                 <th
//                   className="text-left font-medium text-black-500 fw-bold uppercase tracking-wider py-3 px-6 cursor-pointer"
//                   onClick={() => handleSort("emailId")}
//                 >
//                   Email ID
//                 </th>
//                 <th
//                   className="text-left font-medium text-black-500 fw-bold uppercase tracking-wider py-3 px-6 cursor-pointer"
//                   onClick={() => handleSort("description")}
//                 >
//                   Description
//                 </th>
//                 <th className="text-right font-medium text-black-500 fw-bold uppercase tracking-wider py-3 px-6">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             {!loading && (
//               <tbody className="bg-white">
//                 {sortedClients.map((client) => (
//                   <Client
//                     client={client}
//                     deleteClient={deleteClient}
//                     key={client.id}
//                   ></Client>
//                 ))}
//               </tbody>
//             )}
//           </table>
//         </div>
//       </div>
//       <SuccessfulAction
//         onHide={() => setShowSuccess(false)}
//         show={showSuccess}
//         message="Client Deleted Successfully"
//       />
//     </div>
//   );
// };

// export default ClientList;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientService from '../../Services/ClientService';
import Client from "./Client";
import SuccessfulAction from "../CommonComponents/SuccessfulAction";
import AddClient from "./AddClient";

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
      <div className="container mx-auto my-8">
        <div className="h-12">
          <button
            onClick={openAddClient}
            className="rounded bg-[#231651]  text-white px-6 py-2 font-semibold"
          >
            Add Client
          </button>
        </div>
        <div className="flex shadow border-b">
          <div className="w-half px-4 py-2">
            <input
              type="text"
              placeholder="Search client..."
              value={search}
              onChange={handleSearch}
              className="w-full h-10 px-2 border"
            />
          </div>
        </div>
        <div className="flex shadow border-b">
          <table className="min-w-full">
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
