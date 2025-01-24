"use client";
import { useFormState } from "react-dom";
import Link from "next/link";
import { login } from "@/lib/action";
const LoginForm = () => {
  const [state, formAction] = useFormState(login);

  return (
    <form action={formAction} className="flex flex-col py-4 w-[100%] h-[90%]">
      <input
        type="text"
        placeholder="Username"
        className="border-2 border-gray-900 rounded-md text-lg mx-12 p-2 "
        name="username"
      />
      <input
        type="password"
        placeholder="Password"
        className="border-2 border-gray-900 rounded-md text-lg mx-12 py-2 my-7 px-2 "
        name="password"
      />
      <button className="bg-blue-600 mx-12 p-2 rounded-lg text-lg">
        Login
      </button>
      <div className="m-auto">{state?.error}</div>
      <Link href="/register" className="m-auto">
        {"Don't have account?"} <b>register</b>
      </Link>
    </form>
  );
};
export default LoginForm;
