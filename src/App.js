import React,{ useState} from "react";
import './App.css';
import Register from './components/UserAuthentication/Register';
import Login from './components/UserAuthentication/Login';
import { BrowserRouter, Router, Link, Route ,Routes} from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import UserList from "./components/UserMgt/UserList";
import ResetPass from "./components/UserAuthentication/ResetPass";
import ProjectList from "./components/ProjectMgt/ProjectList";
import ClientList from "./components/ClientMgt/ClientList";
import Team from "./components/TeamMgt/Team";
import Backlog from "./components/BacklogMgt/Backlog";
import ActiveSprint from "./components/ActiveSprintMgt/ActiveSprint";
import People from "./components/PeopleMgt/People";
import Forum from "./components/ForumMgt/Forum";
import Report from "./components/ReportMgt/Report";
// import Sidebar, { menuItems } from "./components/SideBar/Sidebar";
import AddUser from "./components/UserMgt/AddUser";
import Dashboard from "./components/Dashboard/Dashboard";
import Group from "./components/GroupMgt/Group";
import NavLayout from "./components/Layout/NavLayout";
import { SideLayout } from "./components/Layout/SideLayout";
import BacklogView from "./components/BacklogMgt/BacklogView";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      
        {/* pages without sidebar & nav bar */}
        <Route path="/" element ={<Login/>}/>
        <Route index element ={<Login/>}/>
        <Route path="/Register" element ={<Register/>}/>
        <Route path="/Login" element ={<Login/>}></Route>
        <Route path="/ResetPass" element ={<ResetPass/>}/>
        <Route path="/AddUser" element ={<AddUser/>}/>

        {/* pages with sidebar */}
          <Route path="/Team" element ={<Team/>}/>
          <Route path="/Backlog" element ={<Backlog/>}/>
          <Route path="/BacklogView" element ={<BacklogView/>}/>
          <Route path="/ActiveSprint" element ={<ActiveSprint/>}/>
          <Route path="/People" element ={<People/>}/>
          <Route path="/Forum" element ={<Forum/>}/>
          <Route path="/Report" element ={<Report/>}/>

            <Route path="/Dashboard" element ={<Dashboard/>}/>
            <Route path="/Group" element ={<Group/>}/>


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

