import mongoose from "mongoose";

const connectDB = async () => mongoose.connect(process.env.MONGODB)


export default connectDB;