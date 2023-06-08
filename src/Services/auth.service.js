import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (email, password) => {
  return axios.post(API_URL + "register", {
    email,
    password,
  }
  );
};

const login = (email, password) => {
  return axios
    .post(API_URL + "authenticate", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
