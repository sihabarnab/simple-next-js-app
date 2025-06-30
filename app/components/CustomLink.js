"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const CustomLink = ({ path, children }) => {
  const pathname = usePathname();
  console.log(pathname);
  const active = pathname === path;

  return (
    <Link className={active ? "text-blue-500" : ""} href={path}>
      {children}
    </Link>
  );
};

export default CustomLink;
