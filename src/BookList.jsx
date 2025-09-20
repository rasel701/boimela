import React from "react";
import BookRow from "./BookRow";
import ItemNotAvailable from "./ItemNotAvailable";

const BookList = ({ searchTerm, BOOKS }) => {
  const rows = BOOKS.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  ).map((book) => <BookRow book={book} key={book.id}></BookRow>);
  console.log(rows);
  return (
    <div className="border-2 rounded-md border-black p-4">
      {rows.length > 0 ? (
        rows
      ) : (
        <ItemNotAvailable searchTerm={searchTerm}></ItemNotAvailable>
      )}
    </div>
  );
};

export default BookList;
