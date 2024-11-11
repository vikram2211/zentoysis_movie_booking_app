import express from "express";
import seatController from "../Controllers/seatController.js";
import Auth from "../Middlewares/Auth.js";

const router = express.Router();

router.post("/add", seatController.addSeats);
router.get("/seats", Auth, seatController.getSeats);

export default router;
