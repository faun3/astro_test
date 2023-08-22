import logoIcon from "/favicon.svg";
import { motion } from "framer-motion";
import { useState } from "react";

const Nav = () => {
  return (
    <nav className="py-2 px-4 flex flex-row items-center gap-4">
      <div className="w-10 h-10">
        <img src={logoIcon} alt="" />
      </div>
      <span className="text-white tracking-wider font-bold text-xl">
        AmazingNav
      </span>
    </nav>
  );
};
export default Nav;
