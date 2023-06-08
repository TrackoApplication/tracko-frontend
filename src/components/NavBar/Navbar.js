import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./navStyle.css";
import { useEffect } from "react";
import axios from "axios";

const NavBar = () => {
  const [accessGroup, setAccessGroup] = useState("");
    const [loading, setLoading] = useState(false);
      const [accessToken, setAccessToken] = useState( localStorage.getItem("accessToken") || null);
  const [role, setRole] = useState("");


  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
 
      // Make a request to the backend with the access token
      const response = await axios.get("http://localhost:8080/api/v1/auth/role", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const response2 = await axios.get("http://localhost:8080/api/v1/systemusersDto", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setRole(response.data);
      console.log(response2.data.accessGroup);
      setAccessGroup(response2.data.accessGroup);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Navbar bg="#231651" className=" mt-0 mb-3 bg-[#231651]">
      <Container fluid>
        <Navbar.Brand href="#" className="">
          <img
            alt=""
            src={require("../images/Tp.png")}
            width="30"
            height="30"
            className="d-inline-block align-top mx-2 mr-4 my-0 "
          />
          <h2 className="inline-block text-white mt-1">Tracko</h2>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Offcanvas placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Tracko</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-start flex-grow-1 ps-5">
              <Nav.Link
                onClick={() => navigate("/ProjectList")}
                className="mx-2 text-white transition duration-700 hover:scale-125 ease-in-out"
              >
                Project
              </Nav.Link>

              <Nav.Link
                onClick={() => navigate("/ClientList")}
                className="mx-2  text-white transition duration-700 hover:scale-125 ease-in-out"
              >
                Clients
              </Nav.Link>
              
              { role === "ADMIN" && (
              <Nav.Link
                onClick={() => navigate("/UserList")}
                className="mx-2 text-white transition duration-700 hover:scale-125 ease-in-out"
              >
                Users
              </Nav.Link>
)}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
export default NavBar;
