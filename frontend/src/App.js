// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import AddSeats from "./components/AddSeats.js";
import Seats from "./components/Seats.js";
import Booking from "./components/Booking.js";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Routes for Register, Login, Seats, Booking */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-seats" element={<AddSeats />} />
          <Route path="/seats" element={<Seats />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
