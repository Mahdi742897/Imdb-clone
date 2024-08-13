import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { IoIosInformationCircle } from "react-icons/io";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

const Header = () => {
  return (
    <section className="flex justify-between items-center p-3 max-w-7xl mx-auto">
      <div className="flex gap-3">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem
          title="about"
          address="/about"
          Icon={IoIosInformationCircle}
        />
      </div>
      <div className="flex gap-3 items-center">
        <DarkModeSwitch />

        <Link href="/" className="flex items-center gap-1">
          <span className="uppercase bg-amber-500 py-1 px-2 rounded-md text-2xl">
            imdb
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </section>
  );
};

export default Header;
