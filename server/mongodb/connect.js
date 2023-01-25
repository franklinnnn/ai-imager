import mongoose from "mongoose";

// Connect to MongoDB
const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  // Connect database
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

export default connectDB;
