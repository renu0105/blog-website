"use client";
import { useFormState } from "react-dom";
import { addPost } from "@/lib/action";
const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <div className="text-black">
      <form action={formAction} className="flex flex-col">
        <h1 className="text-4xl text-amber-700 m-auto">Add Posts</h1>
        <input type="hidden" name="userId" value={userId} />
        <input type="text" placeholder="Title" name="title" class="m-2 p-2" />
        <textarea
          type="text"
          placeholder="desc"
          name="desc"
          rows={3}
          className="m-2 p-2"
        />
        <input type="text" placeholder="slug" name="slug" class="m-2 p-2" />
        <input type="text" placeholder="img" name="img" class="m-2 p-2" />
        <button className=" bg-red-700  text-lg p-2 m-2 rounded-md">
          Add Post
        </button>
        {state && state.error}
      </form>
    </div>
  );
};
export default AdminPostForm;
