import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Subscriber = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubscribe = async () => {
    if (!email) {
      toast.error("Enter email!", { autoClose: 2000, closeOnClick: true });
      return;
    }

    try {
      await axios.post("https://real-trust-37zv.onrender.com/subscribe", {
        email,
      });
      toast.success("Thanks for subscribing!", {
        autoClose: 2000,
        closeOnClick: true,
      });

      setEmail("");
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      toast.error("Something went wrong!", {
        autoClose: 2000,
        closeOnClick: true,
      });
    }
  };

  return (
    <div className="bg-blue-600 py-4">
      <ToastContainer position="top-center" />
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <div className="flex flex-wrap gap-6 text-white font-medium">
          <span>Home</span>
          <span>Services</span>
          <span>About</span>
          <span>Projects</span>
          <span>Testimonial</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <span className="text-white font-bold">Subscribe Us</span>
          <div className="relative w-80">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-4 border border-gray-300 rounded-l-md"
            />
            <button
              onClick={handleSubscribe}
              className="absolute right-0 top-0 h-full bg-white text-blue-600 px-4 rounded-r-md"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriber;
