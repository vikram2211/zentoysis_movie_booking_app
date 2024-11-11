import React from "react";
import { useNavigate } from "react-router-dom";  // Updated import
import { logout } from "../Services/api.js";  // Assuming you have a logout function in the api


function Logout() {
    const navigate = useNavigate();  // useNavigate for navigating programmatically
  
    const handleLogout = () => {
      // Call the logout service
      const result = logout();  // This will remove the token from localStorage
  
      // Optionally show a message if you want
    //   alert(result.message);
  
      // Redirect to the login page after logout
      navigate("/login");
    };
  
    return <button onClick={handleLogout}>Logout</button>;
  }
  
  export default Logout;
