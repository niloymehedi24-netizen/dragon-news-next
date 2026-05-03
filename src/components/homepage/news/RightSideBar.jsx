import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBar = () => {
  return (
    <div>
      <h2 className="font-bold py-3">Login with</h2>
      <div className="flex flex-col gap-3">
        <button className="btn border-blue-500 text-blue-500">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="btn">
          <FaGithub></FaGithub>Login with Github
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
