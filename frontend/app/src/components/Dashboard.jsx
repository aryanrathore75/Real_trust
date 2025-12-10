import React, { useEffect, useState } from "react";
import axios from "axios";
import AllContact from "./AllContact";
import AllSubscriber from "./AllSubscriber";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      try {
        const resProjects = await axios.get(
          `${process.env.REACT_APP_API_URL}/projects`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const resClients = await axios.get(
          `${process.env.REACT_APP_API_URL}/clients`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setProjects(resProjects.data);
        setClients(resClients.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100 py-10 px-4">
      <h2 className="text-center text-2xl font-bold text-blue-600 mb-8">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        {projects.map((p) => (
          <div
            key={p._id}
            className="bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center p-4"
          >
            <div className="w-48 h-48 flex flex-col items-center justify-center">
              {p.image && (
                <img
                  src={p.image}
                  alt="project"
                  className="w-full h-24 object-cover rounded-md mb-2"
                />
              )}
              <h3 className="text-md font-semibold text-gray-800 text-center mb-1">
                {p.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {p.description || "No description available"}
              </p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-center text-2xl font-bold text-blue-600 mb-8">
        Clients
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {clients.map((c) => (
          <div
            key={c._id}
            className="bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center p-4"
          >
            <div className="w-48 h-48 flex flex-col items-center justify-center">
              {c.image && (
                <img
                  src={c.image}
                  alt="client"
                  className="w-20 h-20 rounded-full object-cover mb-2 border-2 border-blue-500"
                />
              )}
              <h3 className="text-md font-semibold text-gray-800 text-center mb-1">
                {c.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {c.designation}
              </p>
            </div>
          </div>
        ))}
      </div>
      <AllContact></AllContact>
      <AllSubscriber></AllSubscriber>
    </div>
  );
}
