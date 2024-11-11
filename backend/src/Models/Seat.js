import mongoose from "mongoose";

const seatSchema = new mongoose.Schema({
  seatNumber: { type: String, unique: true, required: true },
  isBooked: { type: Boolean, default: false },
  bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null }
});

const Seat = mongoose.model("Seat", seatSchema);
export default Seat;
