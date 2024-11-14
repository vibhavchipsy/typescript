// Handles business logic
import { Request, Response } from "express";
import { BookingModel } from "../models/bookingModel";

// Controller to get all bookings
export const getBookings = async (req: Request, res: Response) => {
    try {
        const bookings = await BookingModel.find(); // Fetch all bookings from MongoDB
        res.status(200).json(bookings); // Send the bookings in response
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookings', error });
    }
};

// Controller to create a new booking
export const createBooking = async (req: Request, res: Response) => {
    try {
        const newBooking = new BookingModel(req.body); // Create a new booking from request body
        const savedBooking = await newBooking.save(); // Save to MongoDB
        res.status(201).json(savedBooking); // Send the saved booking in response
    } catch (error) {
        res.status(400).json({ message: 'Error creating booking', error });
    }
};

export const updateBooking = async (req: Request, res: Response) => {
    const updatedBooking = await BookingModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBooking);
};

export const deleteBooking = async (req: Request, res: Response) => {
    await BookingModel.findByIdAndDelete(req.params.id);
    res.status(204).send();
};