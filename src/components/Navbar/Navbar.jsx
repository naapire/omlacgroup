import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home Appliances", link: "/home-appliances" },
  { id: 2, name: "Electronics", link: "/electronics" },
  { id: 3, name: "Fashion & Wearables", link: "/fashion" },
  { id: 4, name: "Toys & Kids Items", link: "/kids" },
  { id: 5, name: "Health & Beauty", link: "/beauty" },
  { id: 6, name: "Customization and Branding", link: "/customerization" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center flex-wrap">
          {/* Logo & Tagline */}
          <div className="flex flex-col sm:flex-row sm:items-center">
            <Link
              to="/"
              className="font-bold text-2xl sm:text-3xl flex items-center gap-2"
            >
              <img src={Logo} alt="Logo" className="w-10" />
              Omlac
            </Link>
            <p className="text-base sm:text-lg font-semibold text-primary dark:text-white sm:ml-4">
              Importing Quality Goods from China to Ghana
            </p>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-xl ml-auto"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Order Button + Dark Mode */}
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            {/* Order Button */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Dark Mode Toggle */}
            <DarkMode />
          </div>
        </div>
      </div>

      {/* Lower Navbar (Desktop) */}
      <div
        data-aos="zoom-in"
        className="justify-center bg-white dark:bg-gray-900 py-2 hidden sm:flex"
      >
        <ul className="flex items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Lower Navbar (Mobile) */}
      {isOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-900 py-4 px-6">
          <ul className="flex flex-col gap-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <Link
                  to={data.link}
                  className="block text-lg hover:text-primary duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
