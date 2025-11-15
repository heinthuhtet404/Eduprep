import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

// 1️⃣ Connect to MongoDB
connectDB();

const app = express();

// 2️⃣ Middleware
app.use(cors());           // Allow cross-origin requests
app.use(express.json());   // Parse JSON bodies

// 3️⃣ Routes
app.use("/api/auth", authRoutes);

// 4️⃣ Test route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// 5️⃣ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
