import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/Tp.png";
import "./Register.css";

const ResetPass = () => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false); // Added loading state


  const handleChange = (e) => {
    setEmail(e.target.value);
    setErrors({});
  };

  // setting state for form fields on change

  // validating form fields
  const validate = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = {};
    let isValid = true;

    if (email === "") {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    } else if (!emailPattern.test(email)) {
      isValid = false;
      errors["email"] = "Please enter a valid email Address.";
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true); // Start loading

      axios
        .post(
          "http://localhost:8080/api/v1/auth/forgotpassword",
          { email },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          console.log(res);
          console.log(res.data);
          alert("Password reset link sent to your email");
          navigate("/emailsent/" + email);
        })
        .catch((err) => {
          setErrors(err.response.data);
          errors["email"] = "Please enter a valid email Address.";
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false); // Stop loading
        });

      console.log(email);
    }
  };

  return (
    <div>
      <div className="bg-[#231651] shadow h-14 p-1">
        <div className="flex justify-center p-0 m-0 ">
          <img src={logo} className="w-10  " alt="" fluid />
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col  h-120 w-96   border rounded-2xl p-2">
          <div className="flex flex-col px-4 py-2">
            <p className="text-xl mx-auto font-bold text-gray pb-3 ">
              Forgot Password?
            </p>
            <p className="text-s  mx-auto  text-gray-500 pb-0 mb-o ">
              Enter the email we will send a link to{" "}
            </p>
            <p className="text-s  mx-auto text-gray-500 p-0 ">
              reset the password
            </p>
          </div>

          <div className="px-4 pt-2">
            <label className="block  text-sm font-normal mb-1 ">Email</label>
            <input
              type="email"
              name="email"
              required
              className="rounded h-10 w-80  px-2 border"
              onChange={(e) => handleChange(e)}
            ></input>
            <div>
              <p className="text-red-500 text-xs italic"> {errors.email}</p>
            </div>
          </div>

          <div className="items-center  mx-4 w-full ">
          <button
          id="send-button"
          onClick={handleSubmit}
          className="rounded text-white font-semibold bg-[#FF8484] w-80 hover:bg-[#fa7676]  my-4 px-4 py-2 cursor-pointer "
          disabled={isLoading} // Disable the button while loading
        >
          {isLoading ? (
            <span className="flex items-center mx-auto">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25 mx-auto"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75 mx-auto "
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 004 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm10-2.647A7.962 7.962 0 0020 12h-4c0-3.042-1.135-5.824-3-7.938l-3 2.647z"
                ></path>
              </svg>
              {/* Sending... */}
            </span>
          ) : (
            "Send Email"
          )}
        </button>

            <div className="flex   items-center content-center mt-1">
              <div className="ml-12 pl-12">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="arrow-alt-circle-left"
                  class="w-4 h-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"
                  ></path>
                </svg>
              </div>
              <p
                onClick={() => navigate("/login")}
                className=" cursor-pointer text-gray-800 text-sm font-semibold w-80  px-2 py-2"
              >
                Back to login
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
