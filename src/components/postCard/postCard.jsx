import Image from "next/image";
import Link from "next/link";
const PostCard = ({ post }) => {
  return (
    <div className="flex flex-col gap-[20px] mb-20px">
      <div className="flex">
        <div className="w-full">
          {post.img && (
            <Image
              src={post.img}
              alt=""
              width={400}
              height={300}
              className="h-[400px]"
            />
          )}
        </div>
        <span className="text-sm m-auto rotate-90">
          {post.createdAt.toString().slice(4, 16)}
        </span>
      </div>
      <div className="bottom">
        <h1 className="text-2xl mb-5 font-bold">{post.title}</h1>
        <p className="text-gray-400 mb-5 font-light w-[90%]">{post.body}</p>
        <Link
          Link
          href={`/blog/${post.slug}`}
          className="underline text-blue-800"
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
