import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import logo from "../images/T.png";
import NavLink from "react-bootstrap/esm/NavLink";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../slices/auth";
import { clearMessage } from "../../slices/message";
import { AuthService } from "../../Services/auth.service";
import { AdminPages } from "./AdminPages";

const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [systemUsers, setSystemUsers] = useState();
  const [emailId, setEmail] = useState("");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrors("");
    setError("");
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrors("");
    setError("");
  };

  const getUserRole = async () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(validateForm());

      if (Object.keys(validateForm()).length === 0) {
      try {
        console.log("Sending authentication request...");
        const response = await fetch("http://localhost:8080/api/v1/auth/authenticate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password, emailId }),
        });

        if (!response.ok) {
          console.log("Error response received:");
          const data = await response.json();
          console.log(data.message);
          setError("Username or password is incorrect");
          throw new Error(data.message);
        }

        console.log("Success response received:");
        const data = await response.json();
        console.log(data);

        const accessToken = data.access_token;
        localStorage.setItem("accessToken", accessToken);

        console.log("Access token:" + accessToken);
        console.log(data.access_token);

        setError("");
      } catch (error) {
        console.log("Error occurred:");
        console.log(error);
        setError("Username or password is incorrect");

      }

      try {
        // Make a request to the backend with the access token
        const response = await axios.get("http://localhost:8080/api/v1/auth/role", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        const role = response.data; // Assuming the response contains the user's role
        console.log('User Role:', role);

        if (role === "USER") {
          navigate("/ProjectList");
        } else if (role === "ADMIN") {
          navigate("/userList");
        }

        // Use the user role in your application logic

      } catch (error) {
        console.log('Error while fetching role:', error);
        // Handle error when retrieving user role
      }

    }
    else
    {
      console.log("Error occurred:");
      console.log(errors.password);
      console.log(errors.emailId);

    }
  };

  // validating the form fields
  const validateForm = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;

    //defining the errors object
    const errors = {};
    if (!password || password === "") {
      errors.password = "Password is required";
    } else if (!regexPassword.test(password)) {
      errors.password = "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number";
    }

    if (!emailId || emailId === "") {
      errors.emailId = "Email Id is required";
    } else if (!regexEmail.test(emailId)) {
      errors.emailId = "Email Id is not valid";
    }
    setErrors(errors);
    return errors;
  };

  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div className="">
      <MDBContainer fluid className="mdbcontainer first-letter:first-line:">
        <MDBRow className="g-0 align-items-center">
          <MDBCol col="6">
            <img src={logo} className="w-90 rounded-4 shadow-4 " alt="" fluid />
          </MDBCol>

          <MDBCol col="6 ">
            <MDBCard
              className="my-5 cascading-left"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
              }}
            >
              <MDBCardBody className="p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-4">Sign in </h2>
                <form className="mb-">

                <label className="flex m-2 text-gray-600 text-right">Email</label>
                <div className="flex bg-[#E7F0FE] rounded">
                  <input
                    wrapperClass=""
                    id="form3"
                    type="email"
                    className="w-[500px] space-between bg-[#E7F0FE] p-2 rounded"
                    required
                    value={emailId}
                    onChange={(e) => handleEmailChange(e)}
                    // isInvalid={!!errors.email}
                  />
                  </div>
                  <div className="flex text-red-500 text-xs">{errors.emailId}</div>

                  <label className="flex m-2 text-gray-600 text-right">Password</label>
                  <div className="flex bg-[#E7F0FE] rounded">
                      <input
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
                        type={passwordType}
                        id="password"
                        placeholder="********"
                        autoFocus
                        required
                        className="w-[500px] space-between bg-[#E7F0FE] p-2 rounded"
                        value={password}
                        name="password"
                        onChange={(e) => handlePasswordChange(e)}
                        isInvalid={!!errors.password}
                      />
                      
                      <button onClick={(e) => togglePassword(e)}>
                        {passwordType === "password" ? (
                          <i className="bi bi-eye-slash"></i>
                        ) : (
                          <i className="bi bi-eye"></i>
                        )}
                      </button>
                      </div>
                      <div className="flex text-red-500 mb-4 p-0 text-xs ">{errors.password}</div>
                  
                  

                  <button
                    className="w-100  mt-3 bg-[#FF8484] p-2 rounded hover:bg-[#fa7676] cursor-pointer"
                    size="md"
                    type="submit"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    sign in
                  </button>
                  {error && <p className="text-red-500">{error}</p>}
                </form>

                <div className="text-center">
                  <p
                    onClick={() => navigate("/Register")}
                    className="cursor-pointer my-2  hover:underline "
                  >
                    Create a new Account
                  </p>

                  <p
                    className="cursor-pointer my-2  hover:underline "
                    onClick={() => navigate("/ResetPass")}
                  >
                    Forgot Password?
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Login;
