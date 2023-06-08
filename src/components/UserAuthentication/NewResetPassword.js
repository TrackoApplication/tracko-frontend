import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import SuccessfulAction from "../CommonComponents/SuccessfulAction";
import { useHistory } from "react-router-dom";
import logo from "../images/Tp.png";

const NewResetPassword = () => {
  const [showSuccess, setShowSuccess] = React.useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [password, setPassword] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [confirmPassword, setConfirmPassword] = React.useState({});
  const [token, setToken] = React.useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ password, confirmPassword });

    if (Object.keys(validate(password, confirmPassword)).length === 0) {
      const url = window.location.href;
      const token = url.substring(url.lastIndexOf("=") + 1);
      console.log(token);
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/resetpassword",
          {
            token: token,
            password: password,
          }
        );
        console.log(response);
        if (response.status === 200) {
          alert("Password Reset successfully");
          navigate("/Login");
        }
      } catch (error) {
        console.log(error);
      }

      // navigate("/Login");
    } else {
      console.log("Errors");
    }
  };

  const validate = (password, confirmPassword) => {
    const regexPass =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let errors = {};
    if (!password || password === "") {
      errors.password = "Password is required";
    } else if (password.length < 8 || !regexPass.test(password)) {
      errors.password =
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  return (
    <div>
      <div className="bg-[#231651] shadow h-14 p-1">
        <div className="flex justify-center p-0 m-0 ">
          <img src={logo} className="w-10  " alt="" fluid />
        </div>
      </div>
      <div className="flex justify-center align-middel flex-col items-center h-screen">
        <div className="flex flex-col  h-120 w-96   border rounded-2xl p-2">
          <div className="flex flex-col px-4 py-2">
            <p className="text-xl mx-auto font-bold text-gray pb-3 ">
              Reset Password
            </p>
            <p className="text-s  mx-auto  text-gray-500 pb-0 mb-o ">
              Your new password must be different to previously{" "}
            </p>
            <p className="text-s  mx-auto text-gray-500 p-0 ">
              used one
            </p>
          </div>

          <div className="px-4 pt-2">
            <label className="block  text-sm font-normal mb-1 ">
              New Password
            </label>
            <input
              type="text"
              name="password"
              className="rounded h-10 w-80  px-2 border "
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
            <div>
              <p className="text-red-500 text-xs italic"> {errors.password}</p>
            </div>
          </div>

          <div className="px-4 pt-2">
            <label className="block text-sm font-normal mb-1 ">
              ConfirmPassword
            </label>
            <input
              type="text"
              name="ConfirmPassword"
              className="rounded h-10 w-80 px-2 border"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
            <div>
              <p className="text-red-500 text-xs italic">
                {errors.confirmPassword}
              </p>
            </div>
          </div>

          <div className="items-center  mx-4 w-full ">
            <button
              onClick={handleSubmit}
              className="rounded text-white font-semibold bg-[#FF8484] w-80 hover:bg-[#fa7676] my-4 px-4 py-2 cursor-pointer "
            >
              reset password
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

export default NewResetPassword;
