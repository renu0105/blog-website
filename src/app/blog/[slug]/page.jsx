import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};
const SinglePost = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return (
    <div className="flex flex-col gap-[100px] sm:gap-[50px]">
      {post ? (
        <div className=" flex gap-9">
          {post.img && (
            <Image
              src={post.img}
              alt=""
              width={500}
              height={500}
              className="w-[40%] sm:h-[500px] sm:w-[300px] h-[80%] object-cover "
            />
          )}
          <div className="flex-2 flex flex-col gap-[50px] sm:gap-[20px]">
            <h1 className="text-6xl sm:text-4xl">{post.title}</h1>
            <div className="flex gap-[20px]">
              <Image
                src={post.img}
                alt=""
                width={50}
                height={50}
                className="object-cover border rounded-[50%]"
              />
              <PostUser userId={post?.userId} />
              <div className="flex flex-col gap-[10px]">
                <span className="text-gray-600 font-bold">Published</span>
                <span className="text-lg">
                  {post.createdAt.toString().slice(4, 16)}
                </span>
              </div>
            </div>
            <div className="text-[20px] sm:text-[18px]">{post.desc}</div>
          </div>
        </div>
      ) : (
        <div>{slug} not found</div>
      )}
    </div>
  );
};

export default SinglePost;
