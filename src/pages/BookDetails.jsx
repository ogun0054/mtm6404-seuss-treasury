import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://seussology.info/api/books/${id}`);
        const data = await response.json();
        setBook(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching book details:", error);
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-circle"></div>
        <p>Loading book details...</p>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="error-container">
        <h2>Book Not Found</h2>
        <p>We couldn't find the book you're looking for.</p>
        <Link to="/books" className="button">
          Back to Books
        </Link>
      </div>
    );
  }

  return (
    <div className="book-details">
      <div className="book-header">
        <div className="book-cover">
          <img
            src={book.image}
            alt={book.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.parentNode.innerHTML =
                '<div className="book-placeholder large">No Cover</div>';
            }}
          />
        </div>
        <div className="book-info">
          <h2>{book.title}</h2>
          <p className="book-year">Published: {book.year_published}</p>
          <div className="book-description">
            <h3>Description</h3>
            <p>{book.description}</p>
          </div>
          <Link to="/books" className="button">
            Back to Books
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookDetailsPage;
