import Image from "next/image";
import Link from "next/link";
import React from "react";
import userImg from "@/assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="flex justify-between container mx-auto gap-4 mt-6">
      <div></div>
      <ul className="flex justify-center items-center text-gray-700 gap-3">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about-us"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-2">
        <Image src={userImg} alt="User Avatar" width={60} height={60}></Image>
        <button className="btn bg-purple-500 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
