import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    avatarId: { type: String, required: true },
    password: {
      type: String,
      required: true,
    },
    messages: [
      {
        message: String,
        sender: String,
        reciver: String,
        time: Date,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
