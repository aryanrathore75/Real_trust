import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <i className="fas fa-house text-black-600 text-xl"></i>
            <h1 className="text-2xl font-bold text-black">RealTrust</h1>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Projects
            </Link>

            <Link to="/login" className="text-gray-700 hover:text-blue-600">
              Login
            </Link>

            <Link to="/signup" className="text-gray-700 hover:text-blue-600">
              SignUp
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
