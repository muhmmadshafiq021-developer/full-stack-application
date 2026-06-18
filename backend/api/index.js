import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import serverless from "serverless-http";
import ConnectDB from "../config/db.js";

dotenv.config();

const app = express();

// Database Connection
ConnectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Server Running with accurate data...");
});

// Export for Vercel
export default serverless(app);