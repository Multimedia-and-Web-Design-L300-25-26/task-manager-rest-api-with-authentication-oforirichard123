import mongoose from "mongoose";

export default async function connectDB() {
  if (!process.env.MONGO_URI) throw new Error("MONGO_URI missing in env");
  if (mongoose.connection.readyState === 1) return;

  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected");
}