"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
  const url = usePathname();

  const router = useRouter();
  function onSubmitHandler(e) {
    e.preventDefault();
    router.push(`/search/${searchValue}`);
  }
  useEffect(() => {
    if (url !== `/search/${searchValue}`) {
      setSearchValue("");
    }
  }, [url]);

  return (
    <form
      action=""
      className="flex pr-5 max-w-7xl mx-auto"
      onSubmit={(e) => onSubmitHandler(e)}
    >
      <input
        type="text"
        placeholder="Search Keywords..."
        className="w-full h-14 flex-1 placeholder-gray-500 bg-transparent outline-none dark:text-gray-300 px-5"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        type="submit"
        disabled={searchValue === ""}
        className="text-amber-600 font-bold disabled:text-gray-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
