import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected Successfully!");
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}