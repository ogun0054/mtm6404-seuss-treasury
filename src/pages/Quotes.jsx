import { useEffect, useState } from "react";

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://seussology.info/api/quotes/random/10")
      .then((res) => res.json())
      .then((data) => setQuotes(data));
  }, []);

  return (
    <div>
      <h2>Quotes</h2>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>{quote.text}</li>
        ))}
      </ul>
    </div>
  );
}
