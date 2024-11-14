import express, { Request, Response } from 'express';
import connectDB from './config/database';
import bookingRoutes from './routes/bookingRoutes';

connectDB();

const cors = require('cors');
const app = express();
const port = 3000;
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/api/bookings', bookingRoutes);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});