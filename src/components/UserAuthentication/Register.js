import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "./Register.css";
import logo from "../images/T.png";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SystemUserService from "../../Services/SystemUserService";
import SuccessfulAction from "../CommonComponents/SuccessfulAction";
import axios from "axios";

const Register = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState("null");
  const [validated, setValidated] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();

  // setting state for form fields
  const [systemUsers, setsystemUsers] = React.useState({
    firstName: "",
    lastName: "",
    password: "",
    emailId: "",
  });

  // setting state for form fields on change
  const handleChange = (field, value) => {
    setErrors({});
    setsystemUsers({
      ...systemUsers,
      [field]: value,
    });
  };

  //Handlng form submit. Validating the form and if valid then saving the data to the database
  const handleSubmit = async (e) => {
    const emailId = systemUsers.emailId;
    const firstName = systemUsers.firstName;
    const lastName = systemUsers.lastName;
    const password = systemUsers.password;

    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        console.log("Sending registration request...");
        const response = await fetch(
          "http://localhost:8080/api/v1/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ emailId, firstName, lastName, password }),
          }
        );

        if (!response.ok) {
          console.log("Error response received:");
          const data = await response.json();
          console.log(data.message);
          throw new Error(data.message);
        }

        // Registration successful
        console.log("Registration successful!");
        alert("Registration successful!");
        navigate("/login");
      } catch (error) {
        console.error("An error occurred during registration:");

        // Inside the catch block of the try-catch statement
        setErrors({ userExistsError: "User already exists" });

        // Handle the error here
      }
    } else {
      setErrors(formErrors);
    }
  };

  // password show& hide function
  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  // validating the form fields
  const validateForm = () => {
    const { firstName, lastName, password, confirmPassword, emailId } =
      systemUsers;
    const regexPass =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //defining the errors object
    const errors = {};
    if (!firstName || firstName === "") {
      errors.firstName = "First Name is required";
    }
    if (!lastName || lastName === "") {
      errors.lastName = "Last Name is required";
    }
    if (!password || password === "") {
      errors.password = "Password is required";
    } else if (!regexPass.test(password)) {
      errors.password =
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character";
    }
    if (!confirmPassword || confirmPassword === "") {
      errors.confirmPassword = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Password and confirm password must be same";
    }

    if (!emailId || emailId === "") {
      errors.emailId = "Email Id is required";
    } else if (!regexEmail.test(emailId)) {
      errors.emailId = "Email Id is not valid";
    }
    // }else if(checkEmailExists){
    //   errors.emailId = 'Email Id already not exists';
    // }

    return errors;
  };

  return (
    <>
      <MDBContainer fluid className="mdbcontainer">
        <MDBRow className="g-0 align-items-center">
          <MDBCol col="6 ">
            <MDBCard
              className="my-5 p-3 cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
              }}
            >
              <MDBCardBody className="p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-4">Sign up now</h2>
                <Form noValidate validated={validated}>
                  <MDBRow>
                    <MDBCol>
                      <Form.Group className="mb-3">
                        <Form.Label className="flex">First Name</Form.Label>
                        <div
                          className={`input-group ${
                            errors.password ? "is-invalid" : "is-valid"
                          }`}
                        >
                          <Form.Control
                            name="firstName"
                            type="Name"
                            placeholder="Jhon"
                            value={systemUsers.firstName}
                            // onChange={(e)=>handleChange(e)}
                            onChange={(e) =>
                              handleChange("firstName", e.target.value)
                            }
                            required
                            isInvalid={!!errors.firstName}
                          />
                        </div>
                        <Form.Control.Feedback
                          type="invalid"
                          className="d-block text-left"
                        >
                          {errors.firstName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </MDBCol>
                    <MDBCol>
                      <Form.Group className="mb-3">
                        <Form.Label className="flex">Last Name</Form.Label>
                        <div
                          className={`input-group ${
                            errors.password ? "is-invalid" : "is-valid"
                          }`}
                        >
                          <Form.Control
                            name="lastName"
                            type="Name"
                            placeholder="Dee"
                            autoFocus
                            required
                            value={systemUsers.lastName}
                            onChange={(e) =>
                              handleChange("lastName", e.target.value)
                            }
                            isInvalid={!!errors.lastName}
                          />
                        </div>
                        <Form.Control.Feedback
                          type="invalid"
                          className="d-block text-left"
                        >
                          {errors.lastName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </MDBCol>
                  </MDBRow>

                  <Form.Group className="mb-3">
                    <Form.Label className="flex">Password</Form.Label>
                    <div
                      className={`input-group ${
                        errors.password ? "is-invalid" : "is-valid"
                      }`}
                    >
                      <Form.Control
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
                        type={passwordType}
                        id="password"
                        placeholder="********"
                        autoFocus
                        className="border-0"
                        required
                        value={systemUsers.password}
                        name="password"
                        onChange={(e) =>
                          handleChange("password", e.target.value)
                        }
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

                    <Form.Control.Feedback
                      type="invalid"
                      className="d-block text-left"
                    >
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="flex">Confirm Password</Form.Label>
                    <div
                      className={`input-group ${
                        errors.password ? "is-invalid" : "is-valid"
                      }`}
                    >
                      <Form.Control
                        name="confirmPassword"
                        type={passwordType}
                        placeholder="********"
                        autoFocus
                        className="border-0"
                        value={systemUsers.confirmPassword}
                        required
                        onChange={(e) =>
                          handleChange("confirmPassword", e.target.value)
                        }
                        isInvalid={!!errors.confirmPassword}
                      />
                      <button onClick={(e) => togglePassword(e)}>
                        {passwordType === "password" ? (
                          <i className="bi bi-eye-slash"></i>
                        ) : (
                          <i className="bi bi-eye"></i>
                        )}
                      </button>
                    </div>
                    <Form.Control.Feedback
                      type="invalid"
                      className="d-block text-left"
                    >
                      {errors.confirmPassword}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="flex">Email address</Form.Label>
                    <div
                      className={`input-group ${
                        errors.password ? "is-invalid" : "is-valid"
                      }`}
                    >
                      <Form.Control
                        name="emailId"
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                        required
                        value={systemUsers.emailId}
                        onChange={(e) =>
                          handleChange("emailId", e.target.value)
                        }
                        isInvalid={!!errors.emailId}
                      />
                    </div>
                    <Form.Control.Feedback
                      type="invalid"
                      className="d-block text-left"
                    >
                      {errors.emailId}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <div className="inline-flex mt-4">
                    <Form.Group controlId="">
                      <Button
                        variant="secondary"
                        className="rounded w-40 bg-none text-black border-none font-semibold hover:underline hover:bg-white "
                        onClick={() => navigate("/Login")}
                      >
                        Close
                      </Button>
                    </Form.Group>

                    <Button
                      variant="primary"
                      className="rounded w-40 bg-[#231651] text-white border-none  font-semibold hover:bg-[#2a1670] "
                      type="submit"
                      // onClick={saveSystemUser}>
                      onClick={(e) => {
                        handleSubmit(e);
                      }}
                    >
                      Register
                    </Button>
                  </div>
                  {errors.userExistsError && (
                    <p className="text-red-500 pb-3">
                      {errors.userExistsError}
                    </p>
                  )}
                </Form>

                <div className="text-center">
                  <p
                    className="cursor-pointer  hover:underline  "
                    onClick={() => navigate("/Login")}
                  >
                    Already have an account
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol col="6">
            <img
              src={logo}
              className="w-90 h-85 m-0 p-0 rounded-4 shadow-4 "
              alt=""
              fluid
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <SuccessfulAction
        onHide={() => setShowSuccess(false)}
        show={showSuccess}
        message="New User Added Successfully"
      />
    </>
  );
};

export default Register;
