"use client";
import { useState } from "react";
import NavLink from "@/components/NavLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";

const links = [
  { title: "HOME", path: "/" },
  { title: "ABOUT", path: "/about" },
  {
    title: "CONTACT",
    path: "/contact",
  },
  {
    title: "BLOG",
    path: "/blog",
  },
];
const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center gap-14 text-l sm:hidden">
        {links.map((link, i) => (
          <NavLink item={link} key={i} />
        ))}
        {session?.user ? (
          <>
            {session?.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className="rounded-none cursor-pointer font-bold">
                LogOut
              </button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "login", path: "/login" }} />
        )}
      </div>
      <div className="md:hidden">
        <button onClick={() => setOpen((prev) => !prev)}>
          <Image src="/menu.png" alt="" width={15} height={15} />
        </button>
        {open && (
          <div className="absolute top-[60px] right-0 w-[25%] flex flex-col items-center justify-center gap-[10px] h-[50%] bg-slate-950 font-bold ">
            {links.map((link) => (
              <NavLink item={link} key={link.title} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Links;
