import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./Routes/user.js";
import rewardRoutes from "./Routes/rewardsRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB(); 

app.use("/api/users", userRoutes); 
app.use("/api/rewards", rewardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
