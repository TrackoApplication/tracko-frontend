import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TeamService from "../../Services/TeamService";
import Team from "./Team";
import SuccessfulAction from "../CommonComponents/SuccessfulAction";
import AddTeam from "./AddTeam";
import UpdateTeam from "./UpdateTeam";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";



const TeamList = () => {
  const navigate = useNavigate();
  const [inactive, setInactive] = React.useState(false);

  const [showAddTeam, setShowAddTeam] = useState(false);
  const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showUpdateTeam, setShowUpdateTeam] = useState(false);
  const [updateTeamId, setUpdateTeamId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriteria, setSortCriteria] = useState("teamName");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const projectId = localStorage.getItem("projectId");
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await TeamService.getTeam(accessToken,projectId);
        setTeams(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteTeam = (e, id) => {
    e.preventDefault();
    const confirmation = window.confirm(
      "Are you sure you want to delete this team?"
    );
    if (confirmation) {
      TeamService.deleteTeam(id)
        .then((res) => {
          if (teams) {
            setTeams((prevElement) => {
              setShowSuccess(true);
              return prevElement.filter((team) => team.id !== id);
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const openAddTeam = () => {
    setShowAddTeam(true);
  };

  const closeAddTeam = () => {
    setShowAddTeam(false);
  };

  const openUpdateTeam = (e, id) => {
    e.preventDefault();
    setUpdateTeamId(id);
    setShowUpdateTeam(true);
  };

  const closeUpdateTeam = () => {
    setShowUpdateTeam(false);
    setUpdateTeamId(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = (criteria) => {
    if (sortCriteria === criteria) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCriteria(criteria);
      setSortOrder("asc");
    }
  };

  const filteredTeams = teams.filter((team) =>
    team.teamName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedTeams = [...filteredTeams].sort((a, b) => {
    if (a[sortCriteria] < b[sortCriteria]) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (a[sortCriteria] < b[sortCriteria]) {
      return sortOrder === "asc" ? 1 : -1;
    }
    return 0;
  });

  return (
      <>
        <div className="d-flex justify-content-between">
          <div className=" h-12 m-4">
            <AddTeam />
          </div>

          <Form className="m-4 p-2">
            <div className="flex">
              <InputGroup size-sm className="my-2 mx-2">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="rounded"
                  value={searchQuery}
                  aria-label="Search"
                  onChange={handleSearchChange}
                />
              </InputGroup>
            </div>

            {/* <Button variant="outline-success " className='text-white  outline-slate-100 bg-[rgb(194, 194, 194)]'>Search</Button> */}
          </Form>
        </div>

        <div className="table-container-user mx-3  o">
        <MDBTable className="m-4 group-table center border">
          <MDBTableHead className="bg-gray-100 group-table-head rounded ">
            <tr>
              <th scope="col">Team name</th>
              <th scope="col">Members</th>
              <th scope="col">Scrum Master</th>
              <th scope="col" className="text-right px-5">Actions</th>
            </tr>
          </MDBTableHead>
          {!loading && (
            <tbody className="bg-white team-body w-full">
              {sortedTeams.map((team) => (
                <Team
                  team={team}
                  deleteTeam={deleteTeam}
                  openUpdateTeam={openUpdateTeam}
                  key={team.id}
                ></Team>
              ))}
            </tbody>
          )}

        </MDBTable>
        </div>
              {/* Add Team Popup */}
      {showAddTeam && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow">
            <AddTeam
              onCancel={closeAddTeam}
              onSuccess={() => setShowSuccess(true)}
            />
          </div>
        </div>
      )}

      {/* Update Team Popup */}
      {showUpdateTeam && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow">
            <UpdateTeam
              id={updateTeamId}
              onCancel={closeUpdateTeam}
              onSuccess={() => setShowSuccess(true)}
            />
          </div>
        </div>
      )}

      <SuccessfulAction
        onHide={() => setShowSuccess(false)}
        show={showSuccess}
        message="Team Deleted Successfully"
      />
      </>



  );
};

export default TeamList;
