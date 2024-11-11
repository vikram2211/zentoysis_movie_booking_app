import express from "express";
import cors from "cors";
import connectDB from "./Db/db.js";
import dotenv from "dotenv";

import bookingRoutes from "./Routes/bookingRoutes.js";
import seatRoutes from "./Routes/seatRoutes.js";
import userRoutes from './Routes/userRoutes.js'

dotenv.config();

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", bookingRoutes);
app.use("/api", seatRoutes);
app.use("/", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
