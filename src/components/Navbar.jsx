import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/books">Seuss Treasury</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/quotes">Quotes</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
