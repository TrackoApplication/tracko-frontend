import React, { useState } from "react";
import './App.css';
import Register from './components/UserAuthentication/Register';
import Login from './components/UserAuthentication/Login';
import { BrowserRouter, Router, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import UserList from "./components/UserMgt/UserList";
import ResetPass from "./components/UserAuthentication/ResetPass";
import ProjectList from "./components/ProjectMgt/ProjectList";
import ClientList from "./components/ClientMgt/ClientList";
import Team from "./components/TeamMgt/Team";
// import Backlog from "./components/BacklogMgt/BacklogControl/Backlog";
import ActiveSprint from "./components/ActiveSprintMgt/ActiveSprint";
import Test from "./components/ActiveSprintMgt/Test";
import People from "./components/PeopleMgt/People";
import Forum from "./components/ForumMgt/Forum";
import Report from "./components/ReportMgt/Report";
import AddUser from "./components/UserMgt/AddUser";
import Dashboard from "./components/Dashboard/Dashboard";
import Group from "./components/GroupMgt/Group";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import '@fortawesome/fontawesome-free/css/all.min.css';  
import 'bootstrap-css-only/css/bootstrap.min.css';  
import 'mdbreact/dist/css/mdb.css';
import Childissue from "./components/ActiveSprintMgt/childissue";
import GroupDetail from "./components/GroupMgt/GroupDetail";
import BacklogView from "./components/BacklogMgt/BacklogControl/BacklogView";
import CreateChildIssue from "./components/ChildIssue/CreateChildIssue";
import SprintList from "./components/BacklogMgt/Sprint/SprintList";
// import IssueList from "./components/BacklogMgt/Issue/IssueList";

function App() {

  const UserListWithNavbar = withNavbar(UserList);
  
  return (
    <>
      <BrowserRouter>
        <Routes>

        {/* pages without sidebar */}
        <Route path="/UserList" element ={<UserList/>}></Route>
        <Route path="/ProjectList" element ={<ProjectList/>}></Route>
        <Route path="/ClientList" element ={<ClientList/>}></Route>
        
        {/* pages with sidebar */}
        
       
     
          <Route path="/Team" element ={<Team/>}></Route>
          {/* <Route path="/Backlog" element ={<Backlog/>}></Route> */}
          <Route path="/ActiveSprint" element ={<ActiveSprint/>}></Route> {/*Dulani*/}
          <Route path="/People" element ={<People/>}></Route>
          <Route path="/Forum" element ={<Forum/>}></Route>
          <Route path="/Report" element ={<Report/>}></Route> {/*Dulani*/}
          
        <Route path="/Childissue" element ={<Childissue/>}></Route> {/*Dulani*/}
        <Route path="/CreateChildIssue" element ={<CreateChildIssue/>}></Route> {/*Dulani*/}
          <Route path="/Dashboard" element ={<Dashboard/>}></Route>
          <Route path="/Group" element ={<Group/>}></Route>

          {/* pages with sidebar */}
          <Route path="/Team" element={<Team />} />
          {/* <Route path="/Backlog" element={<Backlog />} /> */}
          <Route path="/ActiveSprint" element={<ActiveSprint />} />
          <Route path="/People" element={<People />} />
          <Route path="/Forum" element={<Forum />} />
          <Route path="/Report" element={<Report />} />
          <Route path="/GroupDetail" element={<GroupDetail />} />
          {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
          <Route path="/Group" element={<Group />} />
          {/* <Route path="/Dashboard" element ={<DashLayout/>}/> */}


        {/* pages with sidebar */}
          <Route path="/Team" element ={<Team/>}/>
          {/* <Route path="/Backlog" element ={<Backlog/>}/> */}
          <Route path="/BacklogView" element ={<BacklogView/>}/>
          <Route path="/ActiveSprint" element ={<ActiveSprint/>}/>
          <Route path="/People" element ={<People/>}/>
          <Route path="/Forum" element ={<Forum/>}/>
          <Route path="/Report" element ={<Report/>}/>

          {/* <Route path="/Dashboard" element ={<Dashboard/>}/> */}
          <Route path="/Group" element ={<Group/>}/>
          {/* <Route path="/Dashboard" element ={<DashLayout/>}/> */}


          {/* pages with navbar */}
          <Route path="/UserList" element={<UserListWithNavbar/>} />
          <Route path="/ProjectList" element={<ProjectList />} />
          <Route path="/ClientList" element={<ClientList />} />
          {/* <Route path="/Popup" element={<Popup />} /> */}

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

