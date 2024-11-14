// Define API endpoints
import express from "express";
import { getBookings, createBooking, updateBooking, deleteBooking } from "../controllers/bookingController";

const router = express.Router();

router.get('/', getBookings);
router.post('/', createBooking);
router.put('/:id', updateBooking);
router.delete(':id', deleteBooking);

export default router;