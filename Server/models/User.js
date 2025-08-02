import mongoose from "mongoose";

const rewardSchema = new mongoose.Schema({
  title: String,
  description: String,
  emoji: String,
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  referralCode: { type: String, required: true },
  donationsRaised: { type: String, required: true },
  rewards: [rewardSchema], // ✅ Accept array of reward objects
});

const User = mongoose.model("User", userSchema);
export default User;
