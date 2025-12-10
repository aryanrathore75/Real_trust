import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AllSubscriber() {
  const [allSubscriber, setAllSubscriber] = useState([]);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/subscribe`
        );
        setAllSubscriber(res.data);
      } catch (err) {
        console.error("Failed to fetch subscribers", err);
      }
    };

    fetchSubscribers();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center text-blue-600">
        Our Subscribers
      </h2>

      {allSubscriber.length === 0 ? (
        <p className="text-center">No subscribers found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {allSubscriber.map((s) => (
            <div
              key={s._id}
              className="bg-white shadow-md rounded-lg border border-gray-200 p-4 flex items-center justify-center hover:shadow-xl transition-all w-60"
            >
              <p className="text-gray-800 font-medium">{s.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
