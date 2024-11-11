import Seat from "../Models/Seat.js";

//Just an API to add the seats for data -

const addSeats = async (req, res) => {
  try {
    // console.log("Inside seats");
    const { numberOfSeats } = req.body;
    // console.log("numberOfSeats", numberOfSeats);

    const seats = Array.from({ length: numberOfSeats }, (_, index) => ({
      seatNumber: `S${index + 1}`,
    }));
    await Seat.insertMany(seats);
    res.status(201).send("Seats added");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getSeats = async (req, res) => {
  try {
    const seats = await Seat.find().sort( { seatNumber: 1 } );
    // console.log(seats,"seats");
    let count = seats.length;
    res.json({ count, seats });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export default { addSeats, getSeats };
