"use client";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { handleRegister } from "@/lib/action";
import Link from "next/link";
const RegisterForm = () => {
  const [state, formAction] = useFormState(handleRegister, undefined);
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <div>
      <form action={formAction} className="flex flex-col ">
        <h1 className="text-4xl my-3 font-bold text-green-500">Register</h1>
        <p className="mb-5">Please fill in this form to create an account</p>
        <label for="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          className="p-3 my-3 text-gray-700 "
        />
        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder=" Enter Email"
          name="email"
          className="p-3 my-3 text-gray-700"
        />
        <label for="password">
          <b>Password</b>
        </label>
        <input
          type="text"
          placeholder="Enter Password"
          name="password"
          className="p-3 my-3 text-gray-700"
        />
        <label for="passwordRepeat">
          <b> Repeat Password</b>
        </label>
        <input
          type="text"
          placeholder="Repeat Password"
          name="passwordRepeat"
          className="p-3 my-3 text-gray-700"
        />
        <button className="bg-green-400 rounded-xl p-3 my-3 font-bold">
          Register
        </button>
        <div className="m-auto">{state?.error}</div>
        <Link href="/login" className="m-auto">
          Have an account? <b>login</b>
        </Link>
      </form>
    </div>
  );
};
export default RegisterForm;
