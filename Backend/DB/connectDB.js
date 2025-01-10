import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

export const connectionToDatabase = async () => {
  try {
    const conection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to MongoDb Database: ${conection.connection.host}`);
  } catch (error) {
    console.log(" errro in connectDb", error.message);
    process.exit(1);
  }
};
