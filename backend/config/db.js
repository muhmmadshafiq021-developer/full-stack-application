import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const dbconnection = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${dbconnection.connection.host}`);
    } catch (error) {
        console.log("DB error:", error);
        process.exit(1);
    }
};

export default connectDB;