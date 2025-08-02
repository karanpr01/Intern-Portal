import express from "express";
import User from "../models/User.js";

const router = express.Router();

// GET /api/user - fetch dummy intern data
router.get("/", async (req, res) => {
  try {
    const user = await User.findOne(); // get first dummy user
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
