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
import Backlog from "./components/BacklogMgt/BacklogControl/Backlog";
import ActiveSprint from "./components/ActiveSprintMgt/ActiveSprint";
import People from "./components/PeopleMgt/People";
import Forum from "./components/ForumMgt/Forum";
import Report from "./components/ReportMgt/Report";
import AddUser from "./components/UserMgt/AddUser";
import Dashboard from "./components/Dashboard/Dashboard";
import Group from "./components/GroupMgt/Group";
import GroupDetail from "./components/GroupMgt/GroupDetail";
import BacklogView from "./components/BacklogMgt/BacklogControl/BacklogView";
import SuccesfulAction from "./components/CommonComponents/SuccessfulAction";
import DashLayout from "./components/NewDashboard/DashLayout";
import AddClient from "./components/ClientMgt/AddClient";
 import ClientList from "./components/ClientMgt/ClientList";
import UpdateClient from "./components/ClientMgt/UpdateClient";
import AddTeam from "./components/TeamMgt/AddTeam";
 import TeamList from "./components/TeamMgt/TeamList";
import UpdateTeam from "./components/TeamMgt/UpdateTeam";
import CreateForum from "./components/ForumMgt/CreateForum";
import ForumList from "./components/ForumMgt/ForumList";
import ReplyList from "./components/ForumMgt/ReplyList";
import AddReply from "./components/ForumMgt/AddReply";
import Reply from "./components/ForumMgt/Reply";
import SprintList from "./components/BacklogMgt/Sprint/SprintList";
import IssueList from "./components/BacklogMgt/Issue/IssueList";
import TeamView from "./components/TeamMgt/TeamView";
import ForumView from "./components/ForumMgt/ForumView";
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
          <Route path="/SprintList" element={<SprintList />} />
          <Route path="/IssueList" element={<IssueList />} />

          {/* pages with sidebar */}
          <Route path="/TeamList" element={<TeamList />} />
          <Route path="/Backlog" element={<Backlog />} />
          <Route path="/ActiveSprint" element={<ActiveSprint />} />
          <Route path="/People" element={<People />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/Report" element={<Report />} />
          <Route path="/GroupDetail" element={<GroupDetail />} />
          {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
          <Route path="/Group" element={<Group />} />
          {/* <Route path="/Dashboard" element ={<DashLayout/>}/> */}


        {/* pages with sidebar */}
          <Route path="/TeamList" element ={<TeamList/>}/>
          <Route path="/Backlog" element ={<Backlog/>}/>
          <Route path="/Team" element ={<Team/>}/>
          <Route path="/Backlog" element ={<Backlog/>}/>
          <Route path="/BacklogView" element ={<BacklogView/>}/>
          <Route path="/TeamView" element ={<TeamView/>}/>
          <Route path="/ForumView" element ={<ForumView/>}/>
          <Route path="/ActiveSprint" element ={<ActiveSprint/>}/>
          <Route path="/People" element ={<People/>}/>
         
          <Route path="/Report" element ={<Report/>}/>

          {/* <Route path="/Dashboard" element ={<Dashboard/>}/> */}
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
          <Route path="/CreateForum" element={<CreateForum />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/ReplyList" element={<ReplyList />} />
          <Route path="/AddReply" element={<AddReply />} />
          <Route path="/Reply" element={<Reply/>} />
          {/* <Route path="/editForum/:id" element={<UpdateForum />} /> */}
          
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

