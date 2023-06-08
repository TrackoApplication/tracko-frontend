import React, { useState } from "react";
// import NavBar from '../NavBar/Navbar';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import SystemUserService from "../../Services/SystemUserService";
import { useNavigate } from "react-router-dom";
import SuccessfulAction from "../CommonComponents/SuccessfulAction";

const AddUser = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [validated, setValidated] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  // password show& hide function
  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  // setting state for form fields
  const [systemUsers, setsystemUsers] = React.useState({
    firstName: "",
    lastName: "",
    // userName: '',
    password: "",
    confirmPassword: "",
    emailId: "",
  });

  // setting state for form fields on change
  const handleChange = (field, value) => {
    setsystemUsers({
      ...systemUsers,
      [field]: value,
    });
  };

  // save system user to the data base usign the service post api
  const saveSystemUser = (e) => {
    e.preventDefault();
    SystemUserService.saveSystemUser(systemUsers)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    handleClose();
    setLoading(true);
  };

  //Handlng form submit. Validating the form and if valid then saving the data to the database
  const handleSubmit = async (e) => {
    const emailId = systemUsers.emailId;
    const name = systemUsers.firstName;
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // try {
      //   await axios.post("/api/register", { name, emailId });

      //   // Send email
      //   try {
      //     await axios.post("/api/send-email", { name, emailId, type: "verification" });
      //     console.log(`Verification email sent to ${emailId}`);
      //   } catch (error) {
      //     console.error(error);
      //   }
      // } catch (error) {
      //   console.error(error);
      // }
      saveSystemUser(e);
      setShowSuccess(true);
    } else {
      setErrors(formErrors);
    }
  };

  // validating the form fields
  const validateForm = () => {
    const { firstName, lastName, password, confirmPassword, emailId } =
      systemUsers;
    const regexPass =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const checkEmailExists = async () => {
      try {
        const response = await fetch(
          `https://fake-api.com/check-email?email=${emailId}`
        );
        const data = await response.json();
        if (data.exists) {
          console.log("Email exists");
        } else {
          console.log("Email does not exist");
        }
      } catch (error) {
        console.error(error);
      }
    };

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
      <Button
        variant="primary"
        className="rounded bg-[#231651] text-white border-none font-semibold transition duration-700 hover:scale-105 hover:bg-[#231651] ease-in-out"
        onClick={handleShow}
      >
        Add User
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {" "}
          <Modal.Title>Add user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated}>
            <MDBRow>
              <MDBCol>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    name="firstName"
                    type="Name"
                    placeholder="Jhon"
                    autoFocus
                    value={systemUsers.firstName}
                    // onChange={(e)=>handleChange(e)}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    required
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
              </MDBCol>
              <MDBCol>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    name="lastName"
                    type="Name"
                    placeholder="Dee"
                    autoFocus
                    required
                    value={systemUsers.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
              </MDBCol>
            </MDBRow>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <div className="input-group">
                <Form.Control
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
                  type={passwordType}
                  id="password"
                  placeholder="********"
                  autoFocus
                  required
                  value={systemUsers.password}
                  name="password"
                  onChange={(e) => handleChange("password", e.target.value)}
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

              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" c>
              <Form.Label>Confirm Password</Form.Label>
              <div className="input-group">
                <Form.Control
                  name="confirmPassword"
                  type={passwordType}
                  placeholder="********"
                  autoFocus
                  value={systemUsers.confirmPassword}
                  required
                  onChange={(e) =>
                    handleChange("confirmPassword", e.target.value)
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
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="emailId"
                type="email"
                placeholder="name@example.com"
                autoFocus
                required
                value={systemUsers.emailId}
                onChange={(e) => handleChange("emailId", e.target.value)}
                isInvalid={!!errors.emailId}
              />
              <Form.Control.Feedback type="invalid">
                {errors.emailId}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="">
              <Button
                variant="secondary"
                className="rounded bg-none text-black border-none font-semibold hover:underline hover:bg-white "
                onClick={handleClose}
              >
                Close
              </Button>
            </Form.Group>

            <Button
              variant="primary"
              className="rounded bg-[#231651] text-white border-none  font-semibold hover:bg-[#2a1670] "
              type="submit"
              // onClick={saveSystemUser}>
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* On Successfully saving the data, I want to show a success message. created a seperate compoment for that. and send the props. */}

      <SuccessfulAction
        onHide={() => setShowSuccess(false)}
        show={showSuccess}
        message="New User Added Successfully"
      />
    </>
  );
};

export default AddUser;
