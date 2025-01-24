"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={
        pathName === item.path && "text-black bg-white rounded-3xl px-4 py-2"
      }
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
