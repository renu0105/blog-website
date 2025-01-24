import Post from "@/models/Post";
import { connectToDb } from "./utils";
import User from "@/models/User";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log("error", err);
    throw new Error("failed to get posts");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    console.log(post);
    return post;
  } catch (err) {
    console.log("What is the", err);
    throw new Error("failed to get post");
  }
};
export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("failed to get users");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("failed to get users");
  }
};
