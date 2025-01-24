import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: "string",
      required: true,
    },
    desc: {
      required: true,
      type: "string",
    },
    img: {
      type: "string",
    },
    userId: {
      type: "string",
      required: true,
    },
    slug: {
      type: "string",
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Post || mongoose.model("Post", PostSchema);
