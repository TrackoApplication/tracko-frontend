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

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await SystemUserService.getSystemUser();
        setSystemUsers(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData(); 
  }, []);

  const deleteSystemUser = (id) => {
    SystemUserService.deleteSystemUser(id).then((res) => {
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
