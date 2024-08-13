import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex gap-6 dark:bg-gray-500  bg-amber-100 h-14 items-center justify-center">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default Navbar;
