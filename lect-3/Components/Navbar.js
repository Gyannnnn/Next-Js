import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-blue-400 w-full h-10 text-white flex items-center justify-center">
      <ul className="flex gap-9 ">
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Contact">Contact</Link>
      </ul>
    </div>
  );
};

export default Navbar;
