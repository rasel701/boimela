import React from "react";

const Header = ({ header }) => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold m-2">{header}</h2>
    </div>
  );
};

export default Header;
