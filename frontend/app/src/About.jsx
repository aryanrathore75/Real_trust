import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl font-bold text-blue-600 underline mb-6">
        About Us
      </h2>

      <p className="text-black text-lg mb-8">
        RealTrust is committed to delivering the highest quality projects to our
        clients. Our team of experts works tirelessly to ensure every project is
        executed with precision, innovation, and reliability. Whether it’s
        design, development, or consultation, we strive to exceed expectations
        and build lasting relationships.
      </p>

      <div className="flex flex-col items-center">
        <button className="text-black underline font-medium hover:text-blue-600 transition mb-2">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
