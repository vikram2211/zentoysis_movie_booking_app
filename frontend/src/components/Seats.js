import React, { useEffect, useState } from "react";
import { getSeats, bookSeats } from "../Services/api.js";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "./Seats.css";
import Logout from "./Logout.js";

function Seats() {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const fetchSeats = async () => {
    const result = await getSeats(token);
    setSeats(result.seats);
  };

  useEffect(() => {
    fetchSeats();
  }, [token]);

  const toggleSeatSelection = (seatId, isBooked) => {
    if (isBooked) return; // Prevent selecting a booked seat
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
  };

  const handleBooking = async () => {
    if (selectedSeats.length === 0) {
      return;
    }
    const result = await bookSeats(selectedSeats, token);
    alert("Seats Booked Successfully.");
    if (result.error) {
      // Show error message about seat conflict
      alert(result.error);
    } else if (result.message) {
      setSelectedSeats([]);
      await fetchSeats(); // Refresh seat data to reflect current availability
      navigate("/seats");
    }
  };

  return (
    <div className="container">
      <h2>Available Seats</h2>
      <div className="seats-container">
        {seats.map((seat) => (
          <div
            key={seat._id}
            onClick={() => toggleSeatSelection(seat._id, seat.isBooked)}
            className={`seat ${seat.isBooked ? "booked" : "available"} ${
              selectedSeats.includes(seat._id) ? "selected" : ""
            }`}
          >
            Seat {seat.seatNumber}
          </div>
        ))}
      </div>
      <button onClick={handleBooking} disabled={selectedSeats.length === 0}>
        Book Selected Seats
      </button>

      <nav>
        <Logout />
      </nav>
    </div>
  );
}

export default Seats;
