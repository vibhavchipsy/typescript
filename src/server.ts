import express, { Request, Response } from 'express';
import { readBookings, createBooking, updateBooking, deleteBooking } from './main';
import { create } from 'domain';

const app = express();
const port = 3000;

app.use(express.json());

// Route to get all bookings
app.get('/api/bookings', (req, res) => {
    res.json(readBookings());
});

// Route to get a booking by ID
app.get('/api/bookings/:id', (req: Request, res: Response) => {
    const bookingId = parseInt(req.params.id, 10);
    const bookings = readBookings();
    const booking = bookings.find((b) => b.id === bookingId);

    if (booking) {
        res.json(booking);
    } else {
        res.status(404).json({ message: 'Booking not found' });
    }
});

// Route to create a new booking
app.post('/api/bookings', (req: Request, res: Response) => {
    const newBooking = req.body;
    createBooking(newBooking);
    res.status(201).json(newBooking);
});

app.put('/api/bookings/:id', (req, res) => {
    const bookingId = parseInt(req.params.id, 10);
    const updatedInfo = req.body;
    updateBooking(bookingId, updatedInfo);
    res.status(200).json({ message: "booking updated successfully" });
});

app.delete('/api/bookings/:id', (req: Request, res: Response) => {
    const bookingId = parseInt(req.params.id, 10);
    deleteBooking(bookingId);
    res.status(200).json({ message: 'Booking deleted successfully' });
});



app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});