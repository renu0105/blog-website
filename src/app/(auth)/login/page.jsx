import LoginForm from "@/components/loginForm";
import { handleGithubLogin } from "@/lib/action";

const LoginPage = () => {
  return (
    <>
      <div
        className="bg-gray-100 sm:w-[80%] 
      h-[70%] w-[35%] flex items-center flex-col m-auto text-black"
      >
        <h1 className="font-bold text-3xl  py-5 underline text-red-700 mx-12 font-sans">
          LOGIN
        </h1>

        <form
          action={handleGithubLogin}
          className="flex flex-col w-[75%] item-center  py-2"
        >
          <button className="bg-white border-2 border-gray-500 rounded-md text-lg font-medium text-gray-700 py-2 ">
            Login With GitHub
          </button>
        </form>
        <p className=" text-gray-500 text-base p-2 font-semibold mt-4">
          or with Username and password?
        </p>
        <LoginForm />
      </div>
    </>
  );
};
export default LoginPage;
