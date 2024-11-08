interface Booking {
    id: number;
    name: string;
    date: string;
    duration: number;
}

const sampleBooking: Booking = {
    id: 1,
    name: "John Doe",
    date: "2024-11-10",
    duration: 2,
};

console.log("Sample Booking: ", sampleBooking);
















const greeting: string = "Hello";
const year: number = 2024;
const isTypescriptFun: boolean = true;

console.log(greeting, year, isTypescriptFun);

function add(a: number, b: number): number {
    return a + b;
}

console.log("Sum of 3 and 7 is " + add(3, 7));