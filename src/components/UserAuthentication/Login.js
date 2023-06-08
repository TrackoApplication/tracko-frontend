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
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [systemUsers, setSystemUsers] = useState();
  const [emailId, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("");

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const getUserRole = async (accessToken) => {
    try {
      
      // Make a request to the backend with the access token
      const response = await axios.get("http://localhost:8080/api/v1/auth/role", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      
      setRole(response.data);
      if (role === "USER") {
        navigate("/ProjectList");
      } else if (role === "ADMIN") {
        navigate("/userList");
      }
      
      // Use the user role in your application logic
      console.log('User Role:', role);

    } catch (error) {
      console.log('error while catching role');
      // Handle error when retrieving user role
    }
  };


  //Handlng form submit. Validating the form and if valid then saving the data to the database
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const formErrors = validateForm();
    // if (Object.keys(formErrors).length === 0) {
    try {
      console.log("Sending authentication request...");
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password, emailId }),
        }
      );

      if (!response.ok) {
        console.log("Error response received:");
        const data = await response.json();
        console.log(data.message);
        throw new Error(data.message);
      }

      console.log("Success response received:");
      const data = await response.json();
      console.log(data);

      // Get the access token from the API response
      const accessToken = data.access_token;
      // Save the access token to local storage
      localStorage.setItem("accessToken", accessToken);
      // Save the access token expiration date to local storage

      console.log("Access token:" + accessToken);
      console.log(data.access_token);
      getUserRole(accessToken);

      // Redirect to the home page
      

      setError(null);
    } catch (error) {
      console.log("Error occurred:");
      console.log(error);
      setError("username or password is incorrect");
    }
    //   } else {
    //     setErrors(formErrors);
    // }
  };

  // validating the form fields
  const validateForm = () => {
    const { firstName, lastName, password, confirmPassword, emailId } =
      systemUsers;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //defining the errors object
    const errors = {};
    if (!password || password === "") {
      errors.password = "Password is required";
    }

    if (!emailId || emailId === "") {
      errors.emailId = "Email Id is required";
    } else if (!regexEmail.test(emailId)) {
      errors.emailId = "Email Id is not valid";
    }

    return errors;
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
                <form>
                  <MDBInput
                    wrapperClass="mb-3"
                    label="Email"
                    id="form3"
                    type="email"
                    required
                    value={emailId}
                    onChange={handleEmailChange}
                    // isInvalid={!!errors.email}
                  />
                  <div>{errors.email}</div>

                  <MDBInput
                    wrapperClass="mb-3"
                    label="Password"
                    id="form4"
                    value={password}
                    onChange={handlePasswordChange}
                    type="password"
                  />

                  <button
                    className="w-100  bg-[#FF8484] p-2 rounded hover:bg-[#fa7676] cursor-pointer"
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
