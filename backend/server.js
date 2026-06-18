import express from "express";
// require("dotenv").config();0.0.0.0/0
import cors from "cors";
import dotenv from "dotenv";
import ConnectDB from "./config/db.js";

dotenv.config();

// dns.setDefaultResultOrder("ipv4first");
const app = express();

ConnectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Server Running with accurate data...");
});

const PORT = process.env.PORT ;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});