import express from "express";
import dotenv from "dotenv";

//import the routes
import authRoutes from "./routes/auth.routes.js";

// DB configuration
import supabase from "./config/supabase.js"

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use("/signup", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});