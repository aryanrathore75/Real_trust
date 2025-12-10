import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [input, setInput] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleError = (msg) => toast.error(msg);
  const handleSuccess = (msg) => toast.success(msg);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://real-trust-37zv.onrender.com/auth/signup",
        { ...input },
        { withCredentials: true }
      );

      const { success, message } = data;

      if (success) {
        handleSuccess(message);
        setTimeout(() => navigate("/login"), 2000);
      } else {
        handleError(message);
      }
    } catch (err) {
      console.log(err);
      handleError("Signup failed. Please try again.");
    }

    setInput({ username: "", email: "", password: "" });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
        <input
          name="username"
          placeholder="Username"
          value={input.username}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          name="email"
          placeholder="Email"
          value={input.email}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={input.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Sign Up
        </button>
      </form>
    </div>
  );
}
