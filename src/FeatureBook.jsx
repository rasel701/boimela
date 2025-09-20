import React from "react";
import { Star } from "lucide-react";

const FeatureBook = ({ book, ontoggleFeatured }) => {
  return (
    <div>
      <button onClick={() => ontoggleFeatured(book.id)}>
        <Star color={book.featured ? "green" : "black"} />
      </button>
    </div>
  );
};

export default FeatureBook;
