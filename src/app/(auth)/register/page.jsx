import { handleRegister } from "@/lib/action";
import RegisterForm from "@/components/register/register";
const register = () => {
  return (
    <div className="w-[50%] m-auto text-white sm:w-[70%] box-border">
      <RegisterForm />
    </div>
  );
};

export default register;
