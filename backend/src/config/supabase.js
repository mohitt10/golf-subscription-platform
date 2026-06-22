import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import WebSocket from "ws";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_KEY;

const supabase = createClient(
    supabaseUrl, 
    supabaseKey,
    {
        realtime: {
            transport: WebSocket,
        }
    }
);

export default supabase;
