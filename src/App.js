import React, { useState } from "react";
import "./App.css";
import Register from "./components/UserAuthentication/Register";
import Login from "./components/UserAuthentication/Login";
import { BrowserRouter, Router, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import UserList from "./components/UserMgt/UserList";

import ProjectList from "./components/ProjectMgt/ProjectList";
import ClientList from "./components/ClientMgt/ClientList";

import Team from "./components/TeamMgt/Team";
import Backlog from "./components/BacklogMgt/Backlog";

import People from "./components/PeopleMgt/People";
import Forum from "./components/ForumMgt/Forum";

import AddUser from "./components/UserMgt/AddUser";
import Dashboard from "./components/Dashboard/Dashboard";
import Group from "./components/GroupMgt/Group";
import NavLayout from "./components/Layout/NavLayout";
import { SideLayout } from "./components/Layout/SideLayout";
import GroupDetail from "./components/GroupMgt/GroupDetail";
import BacklogView from "./components/BacklogMgt/BacklogView";
import SuccesfulAction from "./components/CommonComponents/SuccessfulAction";
import DashLayout from "./components/NewDashboard/DashLayout";
import Popup from "./Popup";
import Home from "./Home";
import { PageNotFound } from "./components/CommonComponents/PageNotFound";
import EmailSent from "./components/UserAuthentication/EmailSent";
import { AuthProvider } from "./components/UserAuthentication/AuthContext";
import ResetPassword from "./components/UserAuthentication/ResetPassword";
import ForgotPassword from "./components/UserAuthentication/ForgotPassword";

function App() {
  const UserListWithNavbar = withNavbar(UserList);
  const token = localStorage.getItem("token");

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* pages without sidebar & nav bar */}
            <Route path="/" element={<Home />} />

            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/AddUser" element={<AddUser />} />
            <Route path="/SuccesfulAction" element={<SuccesfulAction />} />
            <Route path="/Home" element={<Home />} />

            {/* pages with sidebar */}
            <Route path="/Team" element={<Team />} />
            <Route path="/Backlog" element={<Backlog />} />
            <Route path="/People" element={<People />} />
            <Route path="/Forum" element={<Forum />} />
            
            <Route path="/GroupDetail/:id" element={<GroupDetail />} />
            {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
            <Route path="/Group" element={<Group />} />
            <Route path="/Dashboard" element={<DashLayout />} />
            <Route path="/reset_password" element={<ResetPassword />} />

            {/* pages with sidebar */}
            <Route path="/Team" element={<Team />} />
            <Route path="/Backlog" element={<Backlog />} />
            <Route path="/BacklogView" element={<BacklogView />} />

            <Route path="/People" element={<People />} />
            <Route path="/Forum" element={<Forum />} />
            <Route path="/emailsent/:email" element={<EmailSent />} />

            {/* <Route path="/Dashboard" element ={<Dashboard/>}/> */}
            <Route path="/Group" element={<Group />} />
            <Route path="/Dashboard" element={<DashLayout />} />

            {/* pages with navbar */}

            <Route path="/UserList" element={<UserListWithNavbar />} />

            <Route path="/ProjectList" element={<ProjectList />} />
            <Route path="/ClientList" element={<ClientList />} />
            <Route path="/Popup" element={<Popup />} />

            <Route path="*" element={<PageNotFound />} />
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
