import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB connected`);
  } catch (error) {
    console.error('❌ DB connection failed:', error);
    process.exit(1); // Stop the server
  }
};

export default connectDB;
