// Database schemas and models
import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
});

export const Booking = mongoose.model('Booking', BookingSchema);