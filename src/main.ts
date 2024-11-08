import fs from 'fs';
import path from 'path';

interface Booking {
    id: number,
    name: string,
    date: string,
    duration: number,
};

const filePath = path.resolve(__dirname, '../src/data.json');

function readBookings(): Booking[] {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

console.log("initial bookings: ", readBookings());