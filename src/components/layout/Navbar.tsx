import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { ModeToggle } from "@/components/darkMode/mode-toggle";
import { Link } from "react-router";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          E-Shop
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex gap-8 font-semibold text-gray-700 dark:text-gray-200">
          <Link to={"/"}>
            <li className="hover:text-blue-500 cursor-pointer transition">
              Home
            </li>
          </Link>

          <Link to={"/shop"}>
            <li className="hover:text-blue-500 cursor-pointer transition">
              Shop
            </li>
          </Link>

          <Link to={"/fashion"}>
            <li className="hover:text-blue-500 cursor-pointer transition">
              Fashion
            </li>
          </Link>

          <Link to={"/about"}>
            <li className="hover:text-blue-500 cursor-pointer transition">
              About
            </li>
          </Link>
        </ul>

        {/* Desktop Search + Right Section */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Search */}
          <form className="relative">
            <input
              className="w-[300px] rounded-md border border-gray-300 bg-white dark:bg-gray-800 px-4 py-2 pl-3 pr-10 text-gray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              type="text"
              placeholder="Search..."
            />
            <IoSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 text-xl cursor-pointer" />
          </form>

          {/* Cart */}
          <button className="relative">
            <FaCartArrowDown className="text-2xl text-gray-700 dark:text-gray-200" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
              2
            </span>
          </button>

          {/* Login/Register */}
          <span className="font-semibold text-gray-700 dark:text-gray-200 cursor-pointer hover:text-blue-500 transition">
            Login | Register
          </span>

          {/* Dark Mode Toggle */}
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-gray-700 dark:text-gray-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 pb-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 animate-slideDown">
          {/* Links */}
          <ul className="flex flex-col gap-3 font-semibold text-gray-700 dark:text-gray-200">
            <Link to={"/"}>
              <li className="hover:text-blue-500 cursor-pointer transition">
                Home
              </li>
            </Link>

            <Link to={"/shop"}>
              <li className="hover:text-blue-500 cursor-pointer transition">
                Shop
              </li>
            </Link>

            <Link to={"/shop"}>
              <li className="hover:text-blue-500 cursor-pointer transition">
                Contact
              </li>
            </Link>

            <Link to={"/about"}>
              <li className="hover:text-blue-500 cursor-pointer transition">
                About
              </li>
            </Link>
          </ul>

          {/* Search */}
          <form className="relative w-[90%]">
            <input
              className="w-full rounded-md border border-gray-300 bg-white dark:bg-gray-800 px-4 py-2 pl-3 pr-10 text-gray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              type="text"
              placeholder="Search..."
            />
            <IoSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 text-xl cursor-pointer" />
          </form>

          {/* Bottom Buttons */}
          <div className="flex items-center gap-6">
            <FaCartArrowDown className="text-2xl text-gray-700 dark:text-gray-200" />
            <span className="font-semibold text-gray-700 dark:text-gray-200 cursor-pointer hover:text-blue-500 transition">
              Login | Register
            </span>
            <ModeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};
