//import { useState, useEffect } from "react";
import { getUsers } from "@/lib/data";
const PostUser = async ({ userId }) => {
  // const [nameUser, setNameUser] = useState([]);
  // useEffect(() => {
  //   async function author() {
  //     const res = await fetch(
  //       `https://jsonplaceholder.typicode.com/users/${userId}/`
  //     );
  //     const user = await res.json();
  //     console.log("this is data", user);

  //     setNameUser(user);
  //   }
  //   author();
  // }, [userId]);
  const user = await getUsers(userId);
  return (
    <div>
      <div className="flex flex-col gap-[10px]">
        <span className="text-gray-600 font-bold">Author</span>
        <span className="text-lg">{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
