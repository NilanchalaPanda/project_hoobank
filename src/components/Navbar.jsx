import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { close, logo, menu, LOGO } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={LOGO} alt="ShodhSeva" className="w-[124px] h-[72px] text-white" />

      <NavLink to="/login" type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none`}>
        Login
      </NavLink>

    </nav>
  );
};

export default Navbar;
