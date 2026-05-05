"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import userImg from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user, isPending);

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
      {isPending ? (
        "Loading..."
      ) : user ? (
        <div className="flex items-center gap-2">
          <h2>Hello, {user.name}</h2>
          <Image
            src={user.image || userImg}
            alt="User Avatar"
            width={60}
            height={60}
          ></Image>
          <button
            className="btn bg-red-500 text-white"
            onClick={async () => {
              await authClient.signOut();
            }}
          >
            Log Out
          </button>
        </div>
      ) : (
        <button className="btn bg-purple-500 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      )}
    </div>
  );
};

export default Navbar;
