import { connectToDb } from "@/lib/utils";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};
