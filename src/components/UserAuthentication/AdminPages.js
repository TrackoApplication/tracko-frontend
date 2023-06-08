import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";


export const AdminPages = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        // retrieve the access token from local storage
        const token = props.token;
    
        // make a request to the backend to validate the token and get user information
        axios
          .get("/api/v1/systemusers", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => {
            // check if the user has the admin role
            const userRole = response.data.role;
            setIsAuthenticated(userRole === "USER");
          })
          .catch((error) => {
            console.error(error);
            setIsAuthenticated(false);
          });
      }, []);
    
      if (!isAuthenticated) {
        // redirect the user to the login page if not authenticated or not an admin
        Navigate("/userList");
        
      }
    
  return (
    <div>AdminPages</div>
  )
}



