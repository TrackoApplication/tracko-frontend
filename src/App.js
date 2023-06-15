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

import Team from "./components/TeamMgt/Team";


import People from "./components/PeopleMgt/People";
import Forum from "./components/ForumMgt/Forum";
import AddUser from "./components/UserMgt/AddUser";
import Group from "./components/GroupMgt/Group";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '@fortawesome/fontawesome-free/css/all.min.css';  
import 'bootstrap-css-only/css/bootstrap.min.css';  
// import 'mdbreact/dist/css/mdb.css';
import Childissue from "./components/ActiveSprintMgt/childissue";
import GroupDetail from "./components/GroupMgt/GroupDetail";
import BacklogView from "./components/BacklogMgt/BacklogControl/BacklogView";
import SprintList from "./components/BacklogMgt/Sprint/SprintList";
import {SET_ISSUES} from "./reducers/issuesReducer";
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
import { RefreshToken } from './components/UserAuthentication/RefreshToken';
import { set } from "lodash";
import axios from "axios";
import ForumView from "./components/ForumMgt/ForumView";
import TeamView from "./components/TeamMgt/TeamView";
import IssueService from "./Services/IssueService";

function App() {

  const UserListWithNavbar = withNavbar(UserList);
  const dispatch = useDispatch()

  const ProjectListWithNavbar = withNavbar(ProjectList);
  const ClientListWithNavbar = withNavbar(ClientList);

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
    setUserRole(userRole);
    setUserGroup(userGroup);

    const response = axios.get("http://localhost:8080/api/v1/auth/authenticate", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });


    if (token) {
      setIsAuthenticated(true);
    }


    (async () => {
      try {
        debugger;
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

          {/* pages without sidebar & nav bar */}
          <Route path="/" element={<Login />} />
          <Route index element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/SprintList" element={<SprintList />} />
          {/* <Route path="/IssueList" element={<IssueList />} /> */}

            {/* pages with sidebar */}
            <Route path="/TeamView" element={<TeamView/>} />
            <Route path="/ActiveSprint" element={<ActiveSprint />} />
            <Route path="/Report" element={<Report />} />
       
            <Route path="/People" element={<People />} />
            <Route path="/Forum" element={<Forum />} />
            
            <Route path="/GroupDetail/:id/:name" element={<GroupDetail />} />
            {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
            <Route path="/Group" element={<Group />} />
            <Route path="/navbar" element={ <Navbar role={userRole} accessGroup={userGroup} />} />
            <Route path="/Dashboard/:id" element={<DashLayout />} />
            <Route path="/reset_password" element={<ResetPassword />} />
            <Route path="/addClient" element={<AddClient />} />
            <Route path="/editClient/:id" element={<UpdateClient />} />

            {/* pages with sidebar */}
            <Route path="/Team" element={<Team />} />

            <Route path="/ForumView"  element={<ForumView/>} />

            <Route path="/BacklogView" element={<BacklogView />} />
          <Route path="/ActiveSprint" element={<ActiveSprint />} />

            <Route path="/People" element={<People />} />
            <Route path="/Forum" element={<Forum />} />
            <Route path="/emailsent/:email" element={<EmailSent />} />

            {/* <Route path="/Dashboard" element ={<Dashboard/>}/> */}
            <Route path="/Group" element={<Group role={userRole} accessGroup={userGroup}/>} />
            <Route path="/Dashboard" element={<DashLayout />} />

            {/* pages with navbar */}
            { userRole === "ADMIN" && 
            <>
            <Route path="/UserList" element={<UserListWithNavbar />} />
            <Route path="/AddUser" element={<AddUser />} />
            </>
            }


          {/* pages with navbar */}
          <Route path="/UserList" element={<UserListWithNavbar/>} />
          <Route path="/ProjectList" element={<ProjectList />} />
          <Route path="/ClientList" element={<ClientList />} />
          {/* <Route path="/Popup" element={<Popup />} /> */}
    
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
        <Navbar  />
        <div className="page-body">
          <Component {...props} />
        </div>
      </>
    );
  };
}