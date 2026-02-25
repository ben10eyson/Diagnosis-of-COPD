// src/Header.js
import { Link } from "react-router-dom";
import logo from "./assests/logo.png"; // <-- your logo image (we’ll add next)
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center bg-white shadow p-4">
      {/* Logo - Click to go Home */}
      <Link to="/home">
        <img
          src={logo}
          alt="PulmoCare Logo"
          className="h-10 cursor-pointer"
        />
      </Link>

      {/* Profile Icon with Dropdown */}
      <div className="relative">
        <FaUserCircle
          size={32}
          className="cursor-pointer text-gray-700 hover:text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg text-gray-800 z-50">
            <Link
              to="/profile"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Profile
            </Link>
            <Link
              to="/history"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              History
            </Link>
            <Link
              to="/Settings"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Settings
            </Link>
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-gray-100 text-red-600"
              onClick={() => setMenuOpen(false)}
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
