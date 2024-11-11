import Seat from "../Models/Seat.js";
import Booking from "../Models/Booking.js";
import User from "../Models/User.js";



const bookSeats = async (req, res) => {
  const { seatIds } = req.body;
  // console.log(seatIds,"seatIds");
  try {
    let userId = req.user;
    // console.log("userId", userId);

    const availableSeats = await Seat.find({
      _id: { $in: seatIds },
      isBooked: false,
    });


    if (availableSeats.length !== seatIds.length) {
      return res.status(400).json({ error: "Some seats are already booked" });
    }

    await Seat.updateMany({ _id: { $in: seatIds } }, { isBooked: true });
    const booking = await Booking.create({ user: userId, seats: seatIds });

    await User.findByIdAndUpdate(userId, { $push: { bookings: booking._id } });

    res.status(200).json({ message: "Booking successful", booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default bookSeats;
