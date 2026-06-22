import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//import the routes
import authRoutes from "./routes/auth.routes.js";

// DB configuration
import supabase from "./config/supabase.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const FRONT_URL = process.env.FRONT_URL;

app.use(express.json());
app.use(cors({
    origin: FRONT_URL,
    credentials: true, 
}));

app.use("/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});