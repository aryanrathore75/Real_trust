import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AllContact() {
  const [allContact, setAllContact] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/contact");
        setAllContact(res.data);
      } catch (err) {
        console.error("Failed to fetch contacts", err);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-8 text-center text-blue-600">
        All Contacts
      </h2>

      {allContact.length === 0 ? (
        <p className="text-center">No contacts found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {allContact.map((c) => (
            <div
              key={c._id}
              className="bg-white shadow-md rounded-lg border border-gray-200 p-4 flex flex-col items-start justify-center hover:shadow-xl transition-all w-60"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {c.fullName}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Email:</span> {c.email}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Mobile:</span> {c.mobile}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">City:</span> {c.city}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
