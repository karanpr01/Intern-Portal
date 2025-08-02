import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  referralCode: String,
  donationsRaised: Number,
  rewards: [String] 
});

const User = mongoose.model("User", userSchema);
export default User;
