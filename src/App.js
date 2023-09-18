import React, { useState } from "react";
import "./App.css";
import Register from "./components/UserAuthentication/Register";
import Login from "./components/UserAuthentication/Login";
import { BrowserRouter, Router, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import UserList from "./components/UserMgt/UserList";
import ProjectList from "./components/ProjectMgt/ProjectList";
import AddClient from "./components/ClientMgt/AddClient";
import ClientList from "./components/ClientMgt/ClientList";
import UpdateClient from "./components/ClientMgt/UpdateClient";
import Sidebar from "./components/SideBar/Sidebar";

import Team from "./components/TeamMgt/Team";

import People from "./components/PeopleMgt/People";
import Forum from "./components/ForumMgt/Forum";
import AddUser from "./components/UserMgt/AddUser";
import Group from "./components/GroupMgt/Group";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
// import 'mdbreact/dist/css/mdb.css';
import Childissue from "./components/ActiveSprintMgt/childissue";
import GroupDetail from "./components/GroupMgt/GroupDetail";
import BacklogView from "./components/BacklogMgt/BacklogControl/BacklogView";
import SprintList from "./components/BacklogMgt/Sprint/SprintList";
import { SET_ISSUES } from "./reducers/issuesReducer";
import { useDispatch } from "react-redux";
import SuccesfulAction from "./components/CommonComponents/SuccessfulAction";
import DashLayout from "./components/NewDashboard/DashLayout";

import ResetPassword from "./components/UserAuthentication/ResetPassword";
import EmailSent from "./components/UserAuthentication/EmailSent";
import ForgotPassword from "./components/UserAuthentication/ForgotPassword";
// import ActiveSprint from "./components/ActiveSprintMgt/ActiveSprint";

import { PageNotFound } from "./components/CommonComponents/PageNotFound";
import Home from "./Home";
import { AuthProvider } from "./components/UserAuthentication/AuthContext";
import { AdminPages } from "./components/UserAuthentication/AdminPages";
import ActiveSprint from "./components/ActiveSprintMgt/ActiveSprint";
import Report from "./components/ReportMgt/Report";
import { useEffect } from "react";
import { RefreshToken } from "./components/UserAuthentication/RefreshToken";
import { set } from "lodash";
import axios from "axios";
import ForumView from "./components/ForumMgt/ForumView";
import TeamView from "./components/TeamMgt/TeamView";
import IssueService from "./Services/IssueService";
import { GroupList } from "./components/GroupMgt/GroupList";
import TeamList from "./components/TeamMgt/TeamList";
import Dashboard from "./components/NewDashboard/Dashboard";
import ForumList from "./components/ForumMgt/ForumList";
import Backlog from "./components/BacklogMgt/BacklogControl/Backlog";

function App() {
  const UserListWithNavbar = withNavbar(UserList);
  const dispatch = useDispatch();
  const ProjectListWithNavbar = withNavbar(ProjectList);
  const ClientListWithNavbar = withNavbar(ClientList);
  const GroupListX = withSidebar(GroupList, "Group");
  const TeamListX = withSidebar(TeamList, "Team");
  const DashboardX = withSidebar(Dashboard, "Dashboard");
  const ReportX = withSidebar(Report, "Report");
  const ForumListX = withSidebar(ForumList, "Forum");
  const GroupDetailX = withSidebar(GroupDetail, "Group");
  const ActiveSprintX = withSidebar(ActiveSprint, "Active Sprint");
  const BacklogX = withSidebar(Backlog, "Backlog");
  const [project, setProject] = useState([]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [userGroup, setUserGroup] = useState("");
  // fetching the data from the backend
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const userRole = localStorage.getItem("userRole");
    const id = localStorage.getItem("userId");
    const userGroup = localStorage.getItem("userGroup");
    const projectId = localStorage.getItem("projectId");

    const getProject = async () => {
      try {
        const response = await axios.get(
          "localhost:8080/api/v1/project/getAProject/" + projectId,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProject(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProject();

    setUserRole(userRole);
    setUserGroup(userGroup);

    const response = axios.get(
      "http://localhost:8080/api/v1/auth/authenticate",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (token) {
      setIsAuthenticated(true);
    }

    (async () => {
      try {
        const response = await IssueService.getIssues();
        dispatch({
          type: SET_ISSUES,
          payload: response.data,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/Group/:id" element={<GroupListX />} />
            <Route path="/Group" element={<GroupListX />} />
            <Route path="/TeamView" element={<TeamListX />} />
            <Route path="/Dashboard" element={<DashboardX />} />
            <Route path="/Report" element={<ReportX />} />
            <Route path="/ForumView" element={<ForumListX />} />
            <Route path="/GroupDetail/:id/:name" element={<GroupDetailX />} />
            <Route path="/ActiveSprint" element={<ActiveSprintX />} />
            <Route path="/BacklogView" element={<BacklogX />} />

            {/* pages without sidebar & nav bar */}
            <Route path="/Home" element={<Home />} />
            <Route path="" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/AddUser" element={<AddUser />} />
            <Route path="/SprintList" element={<SprintList />} />
            {/* <Route path="/IssueList" element={<IssueList />} /> */}

            <Route
              path="/navbar"
              element={<Navbar role={userRole} accessGroup={userGroup} />}
            />

            <Route path="/reset_password" element={<ResetPassword />} />
            <Route path="/addClient" element={<AddClient />} />
            <Route path="/editClient/:id" element={<UpdateClient />} />

            <Route path="/emailsent/:email" element={<EmailSent />} />

            <Route
              path="/Group/:id"
              element={<Group role={userRole} accessGroup={userGroup} />}
            />

            {/* pages with navbar */}
            {userRole === "ADMIN" && (
              <>
                <Route path="/UserList" element={<UserListWithNavbar />} />
                <Route path="/AddUser" element={<AddUser />} />
              </>
            )}

            <Route path="/ProjectList" element={<ProjectListWithNavbar />} />
            <Route path="/ClientList" element={<ClientListWithNavbar />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;

function withNavbar(Component) {
  return function WrappedComponent(props) {
    return (
      <>
        <Navbar />
        <div className="page-body">
          <Component {...props} />
        </div>
      </>
    );
  };
}

function withSidebar(Component, title) {
  return function WrappedComponent(props) {
    const [inactive, setInactive] = React.useState(false);

    const [project, setProject] = useState([]);

    useEffect(() => {
      const token = localStorage.getItem("accessToken");
      const projectId = localStorage.getItem("projectId");

      const getProject = async () => {
        try {
          const response = await axios.get(
            "localhost:8080/api/v1/project/getAProject/" + projectId,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setProject(response.data);
          console.log("project details");
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      getProject();
    }, []);

    return (
      <div className="App">
        <div className="AppGlass">
          <Sidebar
            onCollapse={(inactive) => {
              setInactive(inactive);
            }}
            pname={project.projectName}
            pid={project.projectId}
          />

          <div className="mainGroup">
            <div className="title">
              <h1>{title} </h1>
            </div>

            <Component {...props} />
          </div>
        </div>
      </div>
    );
  };
}
