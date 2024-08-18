import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="bg-gray-100 rounded-lg border-2 shadow-sm overflow-hidden">
      <h2 className="text-xl font-bold py-2 px-6  border-b">{title}</h2>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="#" className="text-blue-600 hover:underline font-medium">
          Learn More →
        </a>
      </div>
    </div>
  );
};

export default Card;
