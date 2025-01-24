import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: "string",
      required: true,
      unique: true,
      min: 3,
      max: 100,
    },
    email: {
      required: true,
      type: "string",
      unique: true,
      max: 50,
    },
    password: {
      type: "string",
      min: 6,
    },
    img: {
      type: "string",
    },
    isAdmin: {
      default: false,
      type: "boolean",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
