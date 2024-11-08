import express, { Request, Response } from 'express';
import { readBookings, createBooking, updateBooking, deleteBooking } from './main';

const app = express();
const port = 3000;

app.use(express.json());