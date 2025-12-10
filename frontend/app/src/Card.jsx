import React from "react";

const Card = ({ data }) => {
  return (
    <div className="w-60 bg-white shadow-md rounded-md overflow-hidden">
      <img
        src={data.image}
        alt={data.name}
        className="w-full h-40 object-cover"
      />

      <div className="p-3 text-left">
        <h3 className="text-blue-600 font-semibold text-sm mb-1">
          {data.name}
        </h3>

        <p className="text-gray-500 text-xs mb-3">{data.description}</p>

        <button className="bg-orange-500 text-white px-3 py-1.5 text-sm rounded hover:bg-orange-600 transition">
          See More
        </button>
      </div>
    </div>
  );
};

export default Card;
