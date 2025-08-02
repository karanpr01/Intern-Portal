import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./Routes/user.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB(); // ✅ Connect MongoDB

app.use("/api/users", userRoutes); // Route for users

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
