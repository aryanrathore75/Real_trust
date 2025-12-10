import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

export default function CardPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ✅ Vite style environment variable
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/projects`);
        setProjects(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">Our Projects</h2>

        <p className="text-gray-600 mb-8">
          We know what buyers are looking for and suggest projects that will
          bring clients top dollar for the sale of their homes.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((item) => (
            <Card data={item} key={item.id || item._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
