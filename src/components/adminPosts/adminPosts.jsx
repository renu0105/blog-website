import Image from "next/image";
import { getPosts } from "@/lib/data";
import { deletePost } from "@/lib/action";

const adminPosts = async () => {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-5xl mb-4 text-red-700">Posts</h1>
      <div className="flex gap-10">
        {posts.map((post) => (
          <div key={post.id}>
            <div>
              <Image
                src={post.img || "/noAvatar.png"}
                alt=""
                width={50}
                height={50}
              />
              <span>{post.title}</span>
              <form action={deletePost}>
                <input type="hidden" name="id" value={post.id} />
                <button className="bg-blue-500 my-2 p-2">Delete</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default adminPosts;
