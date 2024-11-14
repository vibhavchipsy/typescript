// Define API endpoints
import express from "express";
import { getBookings as getAllBookings, createBooking, updateBooking, deleteBooking } from "../controllers/bookingController";

const router = express.Router();

router.get('/', getAllBookings);
router.post('/', createBooking);
router.put('/:id', updateBooking);
router.delete('/:id', deleteBooking);

export default router;