import mongoose from "mongoose";
import dotenv from "dotenv";
import Reward from "./models/rewards.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const rewards = [
  {
    title: "Gold Donor",
    description: "Raised over ₹50,000",
    emoji: "🥇"
  },
  {
    title: "Top Referrer",
    description: "Invited 10+ interns",
    emoji: "🚀"
  },
  {
    title: "Social Media Champ",
    description: "Shared 10+ posts",
    emoji: "📱"
  },
  {
    title: "Silver Donor",
    description: "Raised over ₹25,000",
    emoji: "🥈"
  }
];

try {
  await Reward.deleteMany();
  await Reward.insertMany(rewards);
  console.log("✅ Rewards seeded");
  process.exit();
} catch (err) {
  console.error("❌ Seed error:", err);
  process.exit(1);
}
