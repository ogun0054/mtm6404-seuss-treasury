import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BooksPage from "./pages/Books";
import BookDetailsPage from "./pages/BookDetails";
import QuotesPage from "./pages/Quotes";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<BooksPage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/books/:id" element={<BookDetailsPage />} />
            <Route path="/quotes" element={<QuotesPage />} />
          </Routes>
        </main>
        <footer>
          <p>
            © 2025 Seuss Treasury | Created with the Seussology API By Ismail A.
            Ogundele
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
