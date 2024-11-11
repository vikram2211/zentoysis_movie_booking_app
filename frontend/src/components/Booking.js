// src/components/Booking.js
import React, { useState } from "react";
import { bookSeats } from "../Services/api.js";

function Booking() {
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats")) || [];

  const handleBooking = async () => {
    const result = await bookSeats(selectedSeats, token);
    setMessage(result.message || result.error);
  };

  return (
    <div>
      <h2>Booking Confirmation</h2>
      <button onClick={handleBooking}>Confirm Booking</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Booking;
