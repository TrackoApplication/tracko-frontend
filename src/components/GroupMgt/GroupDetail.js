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
        console.log(id);
        const response2 = await axios.get(
          `http://localhost:8080/api/v1/accessgroups/membersPerGroup?id=${id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

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
    <div className="App">
      <div className="AppGlass">
        <Sidebar
          onCollapse={(inactive) => {
            setInactive(inactive);
          }}
        />

        <div className="mainGroup">
          <div className="title">
            <h1 className="text-xl font-normal ">Return0/Group/{name} </h1>
          </div>

          <div className="h-12 m-4">
            {role == "ADMIN" &&
              name !== "Product Owner" &&
              name !== "Team Member" && <EditGroup id={id} groupName={name} />}
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
            <div className="access">
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
                                {/* Add your content here */}
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </>
                  )}
                </MDBTableBody>
              </MDBTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetail;
