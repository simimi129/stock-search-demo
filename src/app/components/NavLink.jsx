"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`text-md text-nowrap rounded-md p-1 hover:bg-gray-100 sm:p-2 sm:text-lg ${pathname === href ? "text-black" : "text-gray-500"}`}
    >
      {children}
    </Link>
  );
}
