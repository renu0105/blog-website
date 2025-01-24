import PostCard from "@/components/postCard/postCard";
import { BiLoaderCircle } from "react-icons/bi";
import { getPosts } from "@/lib/data";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog");
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  return res.json();
};
const BlogPage = async () => {
  const posts = await getData();
  return (
    <div className="flex flex-wrap gap-[20px] min-h-screen">
      {!posts ? (
        <BiLoaderCircle className="animate-spin mx-auto my-[20%] text-7xl duration-100" />
      ) : (
        posts.map((post) => (
          <div className="w-[30%] sm:w-[45%]" key={post.id}>
            <PostCard post={post} />
          </div>
        ))
      )}
    </div>
  );
};
export default BlogPage;
