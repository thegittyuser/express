import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/admin");
    console.log(mongoose.connection.name);
    console.log("Database Connected");
  } catch (error) {
    console.log("Database Connection Failed" + error);
  }
};

export default connectDB;
