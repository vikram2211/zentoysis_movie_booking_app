import React, { useState } from "react";
import { loginUser } from "../Services/api.js";
import { useNavigate } from "react-router-dom"; 
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await loginUser(email, password);
    if (result.token) {
      localStorage.setItem("token", result.token);
      setMessage("Login successful");
      navigate("/add-seats");
    } else {
      setMessage(result.error);
    }
  };

  const handleRegisterRedirect = () => {
    navigate("/register"); 
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email </label>
        <input
          type="email"
          placeholder="Enter email ..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password </label>

        <input
          type="password"
          placeholder="Enter password ..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <div>
          <span
            onClick={handleRegisterRedirect}
            style={{ color: "blue", cursor: "pointer" }}
          >
            Don't have an account? Register here.
          </span>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
