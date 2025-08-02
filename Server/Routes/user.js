import express from "express";
import User from "../models/User.js";

const router = express.Router();

// ✅ Route: Get all users for leaderboard
router.get("/", async (req, res) => {
  try {
    const users = await User.find();

    const sortedUsers = users.sort((a, b) => {
      const aAmount = Number(a.donationsRaised.replace(/[^0-9]/g, ""));
      const bAmount = Number(b.donationsRaised.replace(/[^0-9]/g, ""));
      return bAmount - aAmount;
    });

    res.json(sortedUsers);
  } catch (err) {
    console.error("❌ Error fetching leaderboard:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Route: Get a user by referralCode
router.get("/:referralCode", async (req, res) => {
  try {
    const user = await User.findOne({ referralCode: req.params.referralCode });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    console.error("❌ Error fetching user:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
