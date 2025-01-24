import { connectToDb } from "@/lib/utils";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const slug = { params };
  try {
    connectToDb();
    const post = await Post.findOne();
    return NextResponse.json(post);
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

export const DELETE = async (request, { params }) => {
  const slug = { params };
  try {
    connectToDb();
    await Post.DeleteOne({ slug });
    return NextResponse.json("delete");
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};
