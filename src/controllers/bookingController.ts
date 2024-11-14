// Handles business logic
import { Request, Response } from "express";
import { Booking } from "../models/bookingModel";

export const getBookings = async (req: Request, res: Response) => {
    const bookings = await Booking.find();
    res.json(bookings);
};

export const createBooking = async (req: Request, res: Response) => {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json(newBooking);
};

export const updateBooking = async (req: Request, res: Response) => {
    const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBooking);
};

export const deleteBooking = async (req: Request, res: Response) => {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(204).send();
};