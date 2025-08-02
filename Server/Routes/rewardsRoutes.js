import express from "express";
import Reward from "../models/rewards.js";

const router = express.Router();

// GET /api/rewards
router.get("/", async (req, res) => {
  try {
    const rewards = await Reward.find();
    res.json(rewards);
  } catch (err) {
    console.error("❌ Error fetching rewards:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
