import mongoose from "mongoose";

const rewardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  emoji: { type: String, required: true }
});

const Reward = mongoose.model("Reward", rewardSchema);

export default Reward;
