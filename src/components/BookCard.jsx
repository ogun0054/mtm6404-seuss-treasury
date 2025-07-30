import React from "react";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <Link to={`/books/${book.id}`} className="book-card">
      <div className="book-image">
        <img
          src={book.image}
          alt={book.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.parentNode.innerHTML =
              '<div className="book-placeholder">No Cover</div>';
          }}
        />
      </div>
      <h3>{book.title}</h3>
    </Link>
  );
}

export default BookCard;
