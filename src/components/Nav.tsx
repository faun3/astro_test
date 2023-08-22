import logoIcon from "/favicon.svg";
import { motion } from "framer-motion";
import { useState } from "react";

const Nav = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <nav className="py-2 px-4 flex flex-row items-center gap-4 sticky top-0 w-full bg-purple-700 z-[2]">
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
