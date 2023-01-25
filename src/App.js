import React,{ useState} from "react";
import './App.css';
import Register from './components/UserAuthentication/Register';
import Login from './components/UserAuthentication/Login';
import { BrowserRouter, Router, Link, Route ,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import UserList from "./components/UserMgt/UserList";
import ResetPass from "./components/UserAuthentication/ResetPass";
import ProjectList from "./components/ProjectList";
import ClientList from "./components/ClientMgt/ClientList";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Register/>}></Route>
        <Route index element ={<Register/>}></Route>
        <Route path="/Register" element ={<Register/>}></Route>
        <Route path="/Login" element ={<Login/>}></Route>
        <Route path="/UserList" element ={<UserList/>}></Route>
        <Route path="/ResetPass" element ={<ResetPass/>}></Route>
        <Route path="/ProjectList" element ={<ProjectList/>}></Route>
        <Route path="/ClientList" element ={<ClientList/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

