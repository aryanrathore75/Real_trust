import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleOnChange = (e) =>
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });

  const handleError = (msg) => toast.error(msg);
  const handleSuccess = (msg) => toast.success(msg);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://realtrust-ug3p.onrender.com/auth/login",
        { ...inputValue },
        { withCredentials: true }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      const { success, message } = res.data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => navigate("/"), 1500);
      } else {
        handleError(message);
      }
    } catch (err) {
      console.log(err);
      handleError("Login failed. Please try again.");
    }

    setInputValue({ email: "", password: "" });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ToastContainer />
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          name="email"
          placeholder="Email"
          value={inputValue.email}
          onChange={handleOnChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={inputValue.password}
          onChange={handleOnChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
          Login
        </button>
      </form>
    </div>
  );
}
