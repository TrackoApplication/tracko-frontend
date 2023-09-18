import React from "react";
import "./Group.css";
import { useState } from "react";
import NavBar from "../NavBar/Navbar";
import { useNavigate } from "react-router-dom";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import EditGroup from "./EditGroup";
import Sidebar from "../SideBar/Sidebar";
import "./Group.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { get, set } from "lodash";


const GroupDetail = () => {
  const { id, name } = useParams();

  const [inactive, setInactive] = React.useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [po, setPo] = useState([]);
  const [accesses, setAccesses] = useState([]);
  const [members, setMembers] = useState([]);
  const [group, setGroup] = useState([]);
  const [role, setRole] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const projectId= localStorage.getItem("projectId");
    console.log(projectId);
    setRole(localStorage.getItem("userRole"));
    setGroup(localStorage.getItem("userGroup"));

    const getGroup = async () => {
      setLoading(true);
      try {
        console.log(id);
        const response = await axios.get(
          `http://localhost:8080/api/v1/accessgroups/?id=${id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setAccesses(response.data);
        console.log(accesses);
      } catch (err) {
        console.error(err.message);
      }
      setLoading(false);
    };

    const getMembers = async () => {
      setLoading(true);
      try {
        const response2 = await axios.get(
          `http://localhost:8080/api/v1/accessgroups/membersPerProjectGroup?id1=${projectId}&id2=${id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        console.log(response2.data);
        setMembers(response2.data);
        console.log(members);
      } catch (err) {
        console.error(err.message);
      }
      setLoading(false);
    };

    const getPo = async () => {
      setLoading(true);
      try {
        const response3 = await axios.get(
          `http://localhost:8080/api/v1/accessgroups/poName/${id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setPo(response3.data);
        console.log( po);
      } catch (err) {
        console.error(err.message);
      }
      setLoading(false);
    };

    getPo();
    getMembers();
    getGroup();
  }, []);

  return (

<>
          <div className="h-12 m-4">
            {role == "ADMIN" &&
              name !== "Product Owner" &&
              <EditGroup id={id} groupName={name} />}
          </div>

          <div className="container-box">
            <div className="member">
              <MDBTable className="group-details-table border">
                <MDBTableHead className="bg-gray-100 rounded ">
                  <tr>
                    <th scope="col-5" className="w-[90">
                      Members
                    </th>
                    <th scope="col-6">Action</th>
                  </tr>
                </MDBTableHead>

                <MDBTableBody>
                  {!loading &&
                    members.map((member) => (
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            {name === "Product Owner" ? (
                              <div>
                                <p className="mb-1">{po}</p>
                              </div>
                            ) : (
                              <div>
                                <p className="mb-1">{member.firstName}</p>
                              </div>
                            )}
                          </div>
                        </td>

                        <td>
                          <div className="d-flex align-items-center">
                            <div>
                              {role === "ADMIN" && (
                                <i className="bi bi-trash"></i>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                </MDBTableBody>
              </MDBTable>
            </div>
            {/* <div className="access">
              <MDBTable className="group-details-table border">
                <MDBTableHead className="bg-gray-100 rounded ">
                  <tr>
                    <th scope="col-5">Access</th>
                    <th scope="col-6">Action</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {!loading && (
                    <>
                      {accesses.map((access) => (
                        <tr key={access.accessId} className="bg-green-300">
                          <td>
                            <div className="d-flex align-items-center">
                              <div>
                                <p className="mb-1">{access.accessName}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex">
                              <div className="align-items-center">
                             
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </>
                  )}
                </MDBTableBody>
              </MDBTable>
            </div> */}
          </div>
</>

  );
};

export default GroupDetail;
