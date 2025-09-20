import React from "react";

const BookDetails = ({ title, author }) => {
  return (
    <div>
      <h2 className="lg:text-2xl text-lg font-bold text-gray-700">{title}</h2>
      <p className="text-gray-600">{author}</p>
    </div>
  );
};

export default BookDetails;
