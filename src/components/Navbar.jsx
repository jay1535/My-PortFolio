import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center sm:px-0 px-8 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0">
      <NavLink
        to="/"
        className="w-12 h-12 rounded-lg bg-[#1A1A2E] items-center justify-center flex font-extrabold shadow-lg border border-[#2E2E3A]"
      >
        <p className="bg-gradient-to-r from-[#007CF0] to-[#00DFD8] bg-clip-text text-transparent text-xl font-bold">
          JH
        </p>
      </NavLink>
      <nav className="flex text-lg gap-10 font-semibold">
      <NavLink
  to="/about"
  className={({ isActive }) =>
    `px-4 py-2 rounded-md transition-all duration-300 ${
      isActive
        ? "text-[#00DFD8] bg-[#1A1A2E] shadow-md shadow-[#00DFD8]/50"
        : "text-[#EAEAEA] hover:bg-[#1A1A2E] hover:text-[#00DFD8] hover:shadow-[#00DFD8]/50 hover:shadow-md"
    }`
  }
>
  About
</NavLink>
<NavLink
  to="/projects"
  className={({ isActive }) =>
    `px-4 py-2 rounded-md transition-all duration-300 ${
      isActive
        ? "text-[#00DFD8] bg-[#1A1A2E] shadow-md shadow-[#00DFD8]/50"
        : "text-[#EAEAEA] hover:bg-[#1A1A2E] hover:text-[#00DFD8] hover:shadow-[#00DFD8]/50 hover:shadow-md"
    }`
  }
>
  Projects
</NavLink>

      </nav>
    </header>
  );
};

export default Navbar;