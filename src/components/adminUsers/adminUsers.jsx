import { getUsers } from "@/lib/data";
import { deleteUser } from "@/lib/action";
import Image from "next/image";
const AdminUsers = async () => {
  const users = await getUsers();
  return (
    <div>
      <h1 className="text-4xl my-4 text-yellow-300  "> Users</h1>
      {users.map((user, i) => (
        <div key={i}>
          <div>
            <Image
              src={user.png || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className="bg-blue-500 p-2 my-2 ">Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};
export default AdminUsers;
