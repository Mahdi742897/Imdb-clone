"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavbarItem = ({ title, param }) => {
  const searchGenre = useSearchParams();
  const selectedGenre = searchGenre.get("genre");

  return (
    
      <Link
        className={`hover:text-amber-600 font-semibold ${
          selectedGenre === param
            ? "underline decoration-amber-600 underline-offset-8 decoration-4 rounded-lg"
            : ""
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
  
  );
};

export default NavbarItem;
