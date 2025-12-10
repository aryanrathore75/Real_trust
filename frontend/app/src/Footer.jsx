import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side Text */}
        <div className="mb-4 md:mb-0 text-sm">
          &copy; 2025 RealTrust. All rights reserved.
        </div>

        {/* Center Logo with Icon */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <i className="fas fa-house text-blue-500 text-xl"></i>
          <span className="font-bold text-white text-lg">RealTrust</span>
        </div>

        {/* Right Side Social Icons (non-clickable) */}
        <div className="flex space-x-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-800">
            <i className="fab fa-instagram"></i>
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-800">
            <i className="fab fa-twitter"></i>
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-800">
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-800">
            <i className="fab fa-linkedin-in"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
