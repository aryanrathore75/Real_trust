import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddClient() {
  const [client, setClient] = useState({
    image: "",
    name: "",
    designation: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleSuccess = (msg) => {
    toast.success(msg, { position: "top-center", autoClose: 2000 });
  };

  const handleError = (msg) => {
    toast.error(msg, { position: "top-center", autoClose: 3000 });
  };

  const handleChange = (e) =>
    setClient({ ...client, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/clients`,
        client,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      handleSuccess(res.data.message);
      setTimeout(() => navigate("/admin/dashboard"), 2000);
    } catch (err) {
      handleError(err.response?.data?.message || "Error adding client");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ToastContainer />

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96 flex flex-col gap-3"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Add Client</h2>

        <input
          name="image"
          placeholder="Image URL"
          value={client.image}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />

        <input
          name="name"
          placeholder="Client Name"
          value={client.name}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />

        <input
          name="designation"
          placeholder="Designation"
          value={client.designation}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Client Description"
          value={client.description}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        />

        <button className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
          Add Client
        </button>
      </form>
    </div>
  );
}
