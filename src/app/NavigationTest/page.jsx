"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const NavigationPage = () => {
  //client side component or navigation
  const route = useRouter();
  const path = usePathname();
  const query = useSearchParams();
  const q = query.get("q");
  //console.log(q);
  return (
    <div>
      <Link href="/">click me</Link>
      <button
        onClick={() => {
          console.log("clicked me");
          {
            route.forward();
          }
        }}
      >
        write and redirect
      </button>
    </div>
  );
};

export default NavigationPage;
