import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

// Connect to MongoDB
await mongoose.connect(process.env.MONGO_URI);

// Define multiple users
const users = [
  {
    name: "Prem Karn",
    referralCode: "prem2025",
    donationsRaised: 50000,
    rewards: [
      {
        title: "Silver Donor",
        description: "Raised over ₹25,000",
        emoji: "🥈",
      },
      {
        title: "Top Referrer",
        description: "Invited 10+ interns",
        emoji: "🚀",
      },
    ],
  },
  {
    name: "Suraj Singh",
    referralCode: "suraj2025",
    donationsRaised: 75000,
    rewards: [
      {
        title: "Gold Donor",
        description: "Raised over ₹50,000",
        emoji: "🥇",
      },
      {
        title: "Influencer",
        description: "Shared on socials",
        emoji: "📣",
      },
    ],
  },
  {
    name: "Riya Shah",
    referralCode: "riya2025",
    donationsRaised: 60000,
    rewards: [
      {
        title: "Gold Donor",
        description: "Raised over ₹50,000",
        emoji: "🥇",
      },
      {
        title: "Social Star",
        description: "Got 100 likes",
        emoji: "🌟",
      },
    ],
  },
  {
    name: "Aditya Verma",
    referralCode: "aditya2025",
    donationsRaised: 40000,
    rewards: [
      {
        title: "Silver Donor",
        description: "Raised over ₹25,000",
        emoji: "🥈",
      },
    ],
  },
  {
    name: "Neha Mehta",
    referralCode: "neha2025",
    donationsRaised: 90000,
    rewards: [
      {
        title: "Platinum Donor",
        description: "Raised ₹90,000+",
        emoji: "💎",
      },
      {
        title: "Top Referrer",
        description: "Invited 15 interns",
        emoji: "🔥",
      },
    ],
  },
  {
    name: "Aman Roy",
    referralCode: "aman2025",
    donationsRaised: 30000,
    rewards: [
      {
        title: "Bronze Donor",
        description: "Raised over ₹10,000",
        emoji: "🥉",
      },
    ],
  },
];

try {
  await User.deleteMany(); 
  await User.insertMany(users); 
  console.log("✅ Dummy users inserted");
  process.exit();
} catch (err) {
  console.error("❌ Seed error:", err);
  process.exit(1);
}
