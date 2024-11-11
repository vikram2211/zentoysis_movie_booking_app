import React from "react";
import { useNavigate } from "react-router-dom";  
import { logout } from "../Services/api.js"; 


function Logout() {
    const navigate = useNavigate();  

    const handleLogout = () => {
      const result = logout(); 
      navigate("/login");
    };
  
    return <button onClick={handleLogout}>Logout</button>;
  }
  
  export default Logout;
