// Database schemas and models
import mongoose, { Schema, Document } from "mongoose";

// Define the Booking interface
export interface IBooking extends Document {
    name: string;
    date: string;
}

// Create the Booking schema
const bookingSchema = new Schema<IBooking>({
    name: { type: String, required: true },
    date: { type: String, required: true },
});

export const BookingModel = mongoose.model<IBooking>('Booking', bookingSchema);