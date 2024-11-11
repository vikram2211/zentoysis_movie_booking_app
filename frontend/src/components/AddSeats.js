import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddSeats() {
    const [seats, setSeats] = useState([]);
    const navigate = useNavigate();
  
    const handleAddSeat = () => {
      const seatCount = prompt("Enter the number of seats you want to add:");
      const numSeats = parseInt(seatCount, 10);
  
      if (!isNaN(numSeats) && numSeats > 0) {
        const newSeats = Array.from({ length: numSeats }, (_, i) => `Seat ${i + 1}`);
        setSeats(newSeats);
      } else {
        alert("Please enter a valid number.");
      }
    };
  
    const handleGoToSeatsPage = () => {
      navigate("/seats");
    };
  
    return (
      <div>
        <h2>Add Seats Here</h2>
        <button onClick={handleAddSeat}>Add Seat</button>
        <div>
          {seats.map((seat, index) => (
            <div key={index}>{seat}</div>
          ))}
        </div>
        {seats.length > 0 && (
          <button onClick={handleGoToSeatsPage}>Continue to Seats Page</button>
        )}
      </div>
    );
  }

export default AddSeats;