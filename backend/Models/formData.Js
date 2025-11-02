import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
  age: Number,
  gender: String,
  terms: Boolean,
});

const FormData = mongoose.model("FormData", formSchema);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/formValidationDB");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
export { FormData };
