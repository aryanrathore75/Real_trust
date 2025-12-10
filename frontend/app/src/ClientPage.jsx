import React, { useState, useEffect } from "react";
import ClientCard from "./ClientCard";
import axios from "axios";

export default function ClientPage() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://realtrust-ug3p.onrender.com/clients"
        );
        setClients(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full py-20 bg-white px-6 sm:px-12 lg:px-24">
      <h2 className="text-center text-3xl font-bold text-blue-600 mb-12">
        Happy Clients
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {clients.map((item, index) => (
          <ClientCard data={item} key={index} />
        ))}
      </div>
    </div>
  );
}
