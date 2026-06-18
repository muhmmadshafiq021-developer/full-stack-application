import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import serverless from "serverless-http";
import ConnectDB from "../config/db.js";
import blogRoutes from "../routes/blogRoutes.js";
import categoryRoutes from "../routes/categoryRoutes.js";
import dashboardRoutes from "../routes/dashboardRoutes.js";
import { errorHandler, notFound } from "../middleware/errorHandler.js";

dotenv.config();

const app = express();

// Database Connection
ConnectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Server Running with accurate data...");
});

app.use("/api/blogs", blogRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.use(notFound);
app.use(errorHandler);

// Export for Vercel
export default serverless(app);