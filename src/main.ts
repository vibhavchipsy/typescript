import fs, { read } from 'fs';
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

function createBooking(newBooking: Booking): void {
    const bookings = readBookings();
    bookings.push(newBooking);
    fs.writeFileSync(filePath, JSON.stringify(bookings, null, 2));
}

function updateBooking(id: number, updatedInfo: Partial<Booking>): void {
    const bookings = readBookings();
    const bookingIndex = bookings.findIndex((booking) => booking.id === id);

    if (bookingIndex > -1) {
        bookings[bookingIndex] = { ...bookings[bookingIndex], ...updatedInfo };
        fs.writeFileSync(filePath, JSON.stringify(bookings, null, 2));
    } else {
        console.log(`booking with ID ${id} not found.`);
    }
}

console.log("initial bookings: ", readBookings());
createBooking({ id: 3, name: "Charlie Brown", date: "2024-11-20", duration: 2 });
console.log("After Adding Booking:", readBookings());
updateBooking(2, { duration: 4 });
console.log("After Updating Booking ID 2:", readBookings());