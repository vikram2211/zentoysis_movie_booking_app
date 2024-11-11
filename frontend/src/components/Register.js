import React, { useState } from "react";
import { registerUser } from "../Services/api.js";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../App.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await registerUser(name, email, password);
    setMessage(result.message || result.error);
    if (result.message) {
      navigate("/login"); // Redirect to login page on successful registration
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Name </label>

        <input
          type="text"
          placeholder="Enter name ..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Register;
