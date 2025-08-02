import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const dummyUser = new User({
  name: "Prem Karn",
  referralCode: "prem2025",
  donationsRaised: 50000,
  rewards: [
  "🎓 Certificate",
  "🧢 Swags (T-shirt, Stickers)",
  "🏆 Top Leaderboard Badge"
]

});

try {
  await User.deleteMany();
  await dummyUser.save();
  console.log("✅ Dummy user inserted");
  process.exit();
} catch (err) {
  console.error("❌ Seed error:", err);
  process.exit(1);
}