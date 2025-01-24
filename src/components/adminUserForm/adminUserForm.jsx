"use client";
import { useFormState } from "react-dom";
import { addUser } from "@/lib/action";
const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <div>
      <form action={formAction} className="flex flex-col text-black">
        <h1 className="text-4xl m-auto text-yellow-500">Add New user</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="m-2 p-2"
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          className="m-2 p-2"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="m-2 p-2"
        />
        <input type="text" name="img" placeholder="img" className="p-2 m-2" />
        <select name="isAdmin" className="m-2 p-2 text-gray-400">
          <option value="false">Is Admin</option>
          <option value="false">User</option>
          <option value="true">Admin</option>
        </select>
        <button className="bg-yellow-500 m-2 p-2 rounded-md">Add</button>
        {state && state.error}
      </form>
    </div>
  );
};
export default AdminUserForm;
