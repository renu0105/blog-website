import Links from "@/components/Links";
import Link from "next/link";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();
  // console.log(session);
  return (
    <div className="h-[100px] flex items-center w-full justify-between my-7">
      <Link href="/" className="font-bold text-4xl">
        logo
      </Link>
      <Links session={session} />
    </div>
  );
};

export default Navbar;
