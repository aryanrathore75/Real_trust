import React from "react";
import { Link } from "react-router-dom";

export default function AdminNavbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center gap-6 shadow-md">
      <Link
        to="/admin/dashboard"
        className="hover:text-yellow-400 transition-colors"
      >
        Dashboard
      </Link>

      <Link
        to="/admin/add-project"
        className="hover:text-yellow-400 transition-colors"
      >
        Add Project
      </Link>

      <Link
        to="/admin/add-client"
        className="hover:text-yellow-400 transition-colors"
      >
        Add Client
      </Link>
    </nav>
  );
}
