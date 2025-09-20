import React from "react";
import Header from "./Header";
import Search from "./Search";
import BookList from "./BookList";

const Boimela = () => {
  return (
    <div>
      <Header header="Boimela"></Header>
      <Search></Search>
      <BookList></BookList>
    </div>
  );
};

export default Boimela;
