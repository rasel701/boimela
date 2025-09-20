import React from "react";
import { Aperture } from "lucide-react";

const ItemNotAvailable = ({ searchTerm }) => {
  return (
    <div className="bg-teal-200 p-3 rounded-2xl text-center flex justify-center items-center flex-col gap-4">
      <Aperture className="animate-spin text-blue-500" size={100} />
      <h2 className=" text-3xl ">
        No books found for{" "}
        <sapn className="text-red-600">' {searchTerm} '</sapn>
      </h2>
      <Aperture className="animate-spin text-amber-500" size={100} />
    </div>
  );
};

export default ItemNotAvailable;
