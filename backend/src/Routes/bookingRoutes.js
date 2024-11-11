import express from "express";
import bookSeats from "../Controllers/bookingController.js";
import Auth from "../Middlewares/Auth.js";
const router = express.Router();

router.post("/book", Auth, bookSeats);

export default router;
