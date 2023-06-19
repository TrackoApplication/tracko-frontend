import React from "react";
import "./Home.css";
import logo from "./components/images/T.png";
import logo2 from "./components/images/Tp.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="rgba(35, 22, 81, 0.2)" className=" mt-0 ml-0 bg-[#231651]">
        <div className="flex mx-4 justify-content-between w-[100%] align-center">
          <div className="flex">
            <Navbar.Brand href="#" className="">
              <img
                alt=""
                src={logo2}
                width="30"
                height="30"
                className="d-inline-block align-top  mr-4 my-0 "
              />
              <h2 className="inline-block text-white mt-1">Tracko</h2>
            </Navbar.Brand>
          </div>
          <div className="flex ">
            <Nav className="">
              <Nav.Link
                onClick={() => navigate("/login")}
                href="#home"
                className="text-white"
              >
                Sign in
              </Nav.Link>
              <Nav.Link 
                 onClick={() => navigate("/Register")}
              href="#features" className="text-white">
                Sign up
              </Nav.Link>
            </Nav>
          </div>
        </div>
      </Navbar>

      <div className="home">
        <div className="home-container ">
          <div className="home-text m-2 ">
            <p className="text-white text-[90px] font-bold mx-2">We are</p>
            <p className="text-[#d76161] text-[90px] font-bold mx-2 ">
              Creative
            </p>
          </div>
          <div className="home-buttons justify-between">
            <div
              onClick={() => navigate("/Register")}
              className="font-bold py-2 px-4 rounded shadow mx-2 my-2 cursor-pointor h-10 bg-[#d76161] text-white"
            >
              Let's Get Started
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
