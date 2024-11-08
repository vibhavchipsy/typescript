import express, { Request, Response } from 'express';
import { readBookings, createBooking, updateBooking, deleteBooking } from './main';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/bookings', (req, res) => {
    res.json(readBookings());
});

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

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
});