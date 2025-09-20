import React from "react";
import BookDetails from "./BookDetails";
import FeatureBook from "./FeatureBook";

const BookRow = ({ book }) => {
  return (
    <div className=" bg-gray-200 m-4 rounded-2xl p-2 flex justify-between items-center shadow-blue-400 gap-3">
      <BookDetails title={book.title} author={book.author}></BookDetails>
      <FeatureBook></FeatureBook>
    </div>
  );
};

export default BookRow;
