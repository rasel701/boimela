import React from "react";
import BookRow from "./BookRow";

const BookList = () => {
  const BOOKS = [
    {
      id: 1,
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      featured: true,
    },
    {
      id: 2,
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      featured: false,
    },
    {
      id: 3,
      title: "You Don’t Know JS Yet",
      author: "Kyle Simpson",
      featured: true,
    },
    {
      id: 4,
      title: "Clean Code",
      author: "Robert C. Martin",
      featured: false,
    },
    {
      id: 5,
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt & David Thomas",
      featured: true,
    },
    {
      id: 6,
      title: "Design Patterns",
      author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
      featured: false,
    },
    {
      id: 7,
      title: "Refactoring",
      author: "Martin Fowler",
      featured: true,
    },
    {
      id: 8,
      title: "Effective Java",
      author: "Joshua Bloch",
      featured: false,
    },
    {
      id: 9,
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      featured: false,
    },
    {
      id: 10,
      title: "The Art of Computer Programming",
      author: "Donald E. Knuth",
      featured: true,
    },
  ];

  return (
    <div className="border-2 rounded-md border-black">
      {BOOKS.map((book) => (
        <BookRow book={book} key={book.id}></BookRow>
      ))}
    </div>
  );
};

export default BookList;
