import Navbar from "@/components/shared/Navbar";
import React from "react";
import { montserrat } from "../layout";

const AuthLayOut = ({ children }) => {
  return (
    <div className={`${montserrat.className}`}>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default AuthLayOut;
