import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import AddUser from "./AddUser";
import SystemUserService from "../../Services/SystemUserService";
import "./userMgt.css";
import Avatar from "react-avatar";
import User from "./User";
import ConfirmPopup from "./ConfirmPopup";
import SuccessfulAction from "../CommonComponents/SuccessfulAction";
import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from "axios";



const UserList = () => {

  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const [systemUsers, setSystemUsers] = useState([]);
  const [newchange, setNewchange] = useState(false);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");

  

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    const fetchData = async () => {
      setLoading(true);
      try {
        // const response = await SystemUserService.getSystemUser();
        const response = await axios.get("http://localhost:8080/api/v1/systemusersDto", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

        setSystemUsers(response.data);
        console.log(systemUsers);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Handle 401 Unauthorized error
          console.log('Unauthorized: Access token expired or invalid');
          // Perform token refresh or redirect to login
        } else if (error.message === 'Network Error') {
          // Handle network error
          console.log('Network Error: Please check your internet connection');
        } else {
          // Handle other errors
          console.log('An error occurred:', error.message);
        }}
      setLoading(false);
    };

    fetchData();
  }, []);


  const deleteSystemUser = (id) => {
    const accessToken = localStorage.getItem('accessToken');
    console.log(systemUsers.systemUserId);
    SystemUserService.deleteSystemUser(id,accessToken)
    .then((res) => {
      if (systemUsers) {
        setSystemUsers((prevElement) => {
          setShowSuccess(true);
          return prevElement.filter((systemUser) => systemUser.id !== id);
        });
      }
    });
  };

  return (
    <>
    <div className="d-flex justify-content-between">
    <div className=" h-12 m-4">
        <AddUser />
      </div>
      <Form className="m-4 p-2"  >

              <InputGroup size-sm >
                <button
                  className='search-btn text-gray-400 rounded '>
                  <i class="bi bi-search "></i>
                </button>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="rounded"
                  value={search}
                  aria-label="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </InputGroup>

              {/* <Button variant="outline-success " className='text-white  outline-slate-100 bg-[rgb(194, 194, 194)]'>Search</Button> */}
      </Form>

    </div>
      

      <div className="mx-4">
        <MDBTable className="common-table rounded shadow ">
          <MDBTableHead className="common-table-head rounded ">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Role</th>
              <th scope="col">Group</th>
              <th scope="col">Actions</th>
            </tr>
          </MDBTableHead>

          {!loading && (
            <MDBTableBody>
              {systemUsers
                .filter((systemUser) => {
                  return search.toLowerCase() === ""
                    ? systemUser
                    : systemUser.firstName
                        .toLowerCase()
                        .includes(search.toLocaleLowerCase());
                })
                .map((systemUser) => (
                  <User
                    systemUser={systemUser}
                    deleteSystemUser={deleteSystemUser}
                    key={systemUser.SystemUserId}
                  ></User>
                ))}
            </MDBTableBody>
          )}
        </MDBTable>
      </div>

      <SuccessfulAction
        onHide={() => setShowSuccess(false)}
        show={showSuccess}
        message="User Deleted Successfully"
      />
    </>
  );
};

export default UserList;
