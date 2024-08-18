import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardGrid = ({ props }) => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/cards", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // console.log(data);

        setCards(data.card);
      } catch (error) {
        console.error("Error fetching cards:", error);
        setError(error.message);
      } finally {
        console.log(cards);
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="container mx-auto py-16 px-60">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {!loading ? (
          error ? (
            <div className="text-red-500">Error: {error}</div>
          ) : (
            cards.map((card, index) => <Card key={index} {...card} />)
          )
        ) : (
          <div>loading...</div>
        )}
      </div>
    </div>
  );
};

export default CardGrid;
