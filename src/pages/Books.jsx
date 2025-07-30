import React, { useState, useEffect } from "react";
import BookCard from "../components/BookCard";

function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://seussology.info/api/books");
        const data = await response.json();
        setBooks(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-circle"></div>
        <p>Loading Dr. Seuss books...</p>
      </div>
    );
  }

  return (
    <div className="books-container">
      <h2>Dr. Seuss Books Collection</h2>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BooksPage;
