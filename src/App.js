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
import Sidebar, { menuItems } from "./components/SideBar/Sidebar";
import AddUser from "./components/UserMgt/AddUser";
import Dashboard from "./components/Dashboard/Dashboard";
import Group from "./components/GroupMgt/Group";

function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* pages without sidebar & nav bar */}
        <Route path="/" element ={<Login/>}></Route>
        <Route index element ={<Login/>}></Route>
        <Route path="/Register" element ={<Register/>}></Route>
        <Route path="/Login" element ={<Login/>}></Route>
        <Route path="/ResetPass" element ={<ResetPass/>}></Route>
        <Route path="/AddUser" element ={<AddUser/>}></Route>

        {/* pages without sidebar */}
        <Route path="/UserList" element ={<UserList/>}></Route>
        <Route path="/ProjectList" element ={<ProjectList/>}></Route>
        <Route path="/ClientList" element ={<ClientList/>}></Route>
        
        {/* pages with sidebar */}
        
       
     
          <Route path="/Team" element ={<Team/>}></Route>
          <Route path="/Backlog" element ={<Backlog/>}></Route>
          <Route path="/ActiveSprint" element ={<ActiveSprint/>}></Route>
          <Route path="/People" element ={<People/>}></Route>
          <Route path="/Forum" element ={<Forum/>}></Route>
          <Route path="/Report" element ={<Report/>}></Route>
          <Route path="/Dashboard" element ={<Dashboard/>}></Route>
          <Route path="/Group" element ={<Group/>}></Route>

      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

