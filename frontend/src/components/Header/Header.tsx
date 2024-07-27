import { IoSearchOutline } from "react-icons/io5";
import { BiUser, BiHeart, BiCart } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="bg-white px-6 py-8 border-b ">
      <div className="container flex mx-auto items-center justify-between">
        {/* Logo and name */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <h1 className="text-lg font-bold">Logo</h1>
        </div>
        {/* Search Bar (hidden on mobile) */}
        <div className="hidden md:flex flex-1 mx-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-10 pr-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <IoSearchOutline
              className="absolute top-2 left-3 text-gray-400"
              size={25}
            />
          </div>
        </div>

        {/* Search Bar (visible on mobile, hidden on larger screens) */}
        <div className="flex md:hidden mt-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-10 pr-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <IoSearchOutline className="absolute top-3 left-3 text-gray-500" />
          </div>
        </div>
        <div className="flex space-x-2">
          <NavLink to="/profile" className="flex space-x-1 group">
            <BiUser
              size={25}
              className="group-hover:text-red-400 transition duration-200"
            />
            <span className="hidden md:block group-hover:text-red-400 transition duration-200">
              Profile
            </span>
          </NavLink>
          <NavLink to="/favorite" className="flex space-x-1 group">
            <BiHeart
              size={25}
              className="group-hover:text-red-400 transition duration-200"
            />
            <span className="hidden md:block group-hover:text-red-400 transition duration-200">
              Favorites
            </span>
          </NavLink>
          <NavLink to="/chart" className="flex space-x-1 group">
            <BiCart
              size={25}
              className="group-hover:text-red-400 transition duration-200"
            />
            <span className="hidden md:block group-hover:text-red-400 transition duration-200">
              Chart
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
