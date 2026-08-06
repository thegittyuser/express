import mongoose from "mongoose";

const usersModel = mongoose.model(usersModel, {
  userid: Int16Array,
  username: String,
  email: String,
  password: String,
  date: Date,
});

export default usersModel;
