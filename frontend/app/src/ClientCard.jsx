import React from "react";

export default function ClientCard({ data }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
      <img
        src={data.image}
        alt={data.name}
        className="w-16 h-16 rounded-full object-cover mb-4"
      />

      <p className="text-gray-600 text-sm mb-4">{data.description}</p>

      <h3 className="text-blue-600 font-semibold text-lg">{data.name}</h3>
      <span className="text-gray-500 text-sm">{data.designation}</span>
    </div>
  );
}
