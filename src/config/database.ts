// MongoDB connection setup
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUri = process.env.MONGODB_URI as string;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoUri);
        console.log('connected to mongodb atlas!!');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;