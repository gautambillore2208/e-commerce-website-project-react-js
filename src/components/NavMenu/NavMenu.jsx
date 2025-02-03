import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-shop.svg";
import Button from "../Button";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-dark relative">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
        <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              ShoppyGlobe
            </a>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins] z-20">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={`z-30 bg-slate-900 md:hidden  fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0 text-white"  : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-3 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-2">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
