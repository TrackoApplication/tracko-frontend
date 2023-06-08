import React, { useState } from "react";
import './App.css';
import Register from './components/UserAuthentication/Register';
import Login from './components/UserAuthentication/Login';
import { BrowserRouter, Router, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import UserList from "./components/UserMgt/UserList";
import ResetPass from "./components/UserAuthentication/ResetPass";
import ProjectList from "./components/ProjectMgt/ProjectList";

import Team from "./components/TeamMgt/Team";
import Backlog from "./components/BacklogMgt/Backlog";
import ActiveSprint from "./components/ActiveSprintMgt/ActiveSprint";
import People from "./components/PeopleMgt/People";
import Forum from "./components/ForumMgt/Forum";
import Report from "./components/ReportMgt/Report";
import AddUser from "./components/UserMgt/AddUser";
import Dashboard from "./components/Dashboard/Dashboard";
import Group from "./components/GroupMgt/Group";
import NavLayout from "./components/Layout/NavLayout";
import { SideLayout } from "./components/Layout/SideLayout";
import GroupDetail from "./components/GroupMgt/GroupDetail";
import BacklogView from "./components/BacklogMgt/BacklogView";
import SuccesfulAction from "./components/CommonComponents/SuccessfulAction";
import DashLayout from "./components/NewDashboard/DashLayout";
import AddClient from "./components/ClientMgt/AddClient";
 import ClientList from "./components/ClientMgt/ClientList";
import UpdateClient from "./components/ClientMgt/UpdateClient";
import AddTeam from "./components/TeamMgt/AddTeam";
 import TeamList from "./components/TeamMgt/TeamList";
import UpdateTeam from "./components/TeamMgt/UpdateTeam";
import AddForum from "./components/ForumMgt/AddForum";
 import ForumList from "./components/ForumMgt/ForumList";
import UpdateForum from "./components/ForumMgt/UpdateForum";
import NewPost from "./components/ForumMgt/createpost";


function App() {

  const UserListWithNavbar = withNavbar(UserList);
  const ClientListWithNavbar = withNavbar(ClientList);
  
  return (
    <>
      <BrowserRouter>
        <Routes>

          {/* pages without sidebar & nav bar */}
          <Route path="/" element={<Login />} />
          <Route index element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/ResetPass" element={<ResetPass />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/SuccesfulAction" element={<SuccesfulAction />} />

          {/* pages with sidebar */}
          <Route path="/Team" element={<Team />} />
          <Route path="/Backlog" element={<Backlog />} />
          <Route path="/ActiveSprint" element={<ActiveSprint />} />
          <Route path="/People" element={<People />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/Report" element={<Report />} />
          <Route path="/GroupDetail" element={<GroupDetail />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Group" element={<Group />} />
        {/* pages with sidebar */}
          <Route path="/Team" element ={<Team/>}/>
          <Route path="/Backlog" element ={<Backlog/>}/>
          <Route path="/BacklogView" element ={<BacklogView/>}/>
          <Route path="/ActiveSprint" element ={<ActiveSprint/>}/>
          <Route path="/People" element ={<People/>}/>
         
          <Route path="/Report" element ={<Report/>}/>

          <Route path="/Dashboard" element ={<Dashboard/>}/>
          <Route path="/Group" element ={<Group/>}/>
          <Route path="/newdashboard" element ={<DashLayout/>}/>


          {/* pages with navbar */}
          <Route path="/UserList" element={<UserListWithNavbar/>} />
          <Route path="/ProjectList" element={<ProjectList />} />
          <Route path="/ClientList" element={<ClientListWithNavbar/>} />
          
          
          
          {/* <Route path="/ClientList" element={<ClientList />} /> */}
          <Route path="/addClient" element={<AddClient />} />
          <Route path="/editClient/:id" element={<UpdateClient />} />
          <Route path="/TeamList" element={<TeamList />} />
          <Route path="/addTeam" element={<AddTeam />} />
          <Route path="/editTeam/:id" element={<UpdateTeam />} />
          <Route path="/ForumList" element={<ForumList />} />
          <Route path="/addForum" element={<AddForum />} />
          {/* <Route path="/editForum/:id" element={<UpdateForum />} /> */}
          <Route path ="/NewPost" element={<createpost />} />
          {/* pages with navbar */}
          <Route path="/UserList" element ={<UserList/>}/>
          <Route path="/ProjectList" element ={<ProjectList/>}/>
          <Route path="/ClientList" element ={<ClientList/>}/>
    
    </Routes>

      </BrowserRouter>
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
  }
}

