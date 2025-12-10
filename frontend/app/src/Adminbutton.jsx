import React from "react";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const AdminButton = () => {
  const token = localStorage.getItem("token");
  let userRole = "user";
  const navigate = useNavigate();

  if (token) {
    try {
      const decoded = jwtDecode(token);
      userRole = decoded.role;
    } catch (error) {
      console.error("Invalid token");
    }
  }

  const handleAdminClick = () => {
    if (userRole !== "admin") {
      toast.error("You are not Admin!");
      return;
    }
    navigate("/admin/dashboard");
  };

  return (
    <div className="flex justify-center items-center mb-6">
      <button
        onClick={handleAdminClick}
        className="px-8 py-3 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-700 hover:shadow-lg transition-all duration-300 font-semibold"
      >
        Go to Admin Panel
      </button>
    </div>
  );
};

export default AdminButton;
