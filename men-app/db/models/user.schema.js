import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    surName: { type: String, required: [true, "surName is required"] },
    email: { type: String, required: [true, "email is required"] },
    pass: { type: String, required: [true, "pass is required"] },
  },
  {
    timestamps: true,
  }
);

const userModel = model("User", userSchema);
export default userModel;
