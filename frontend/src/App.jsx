import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCards = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/cards", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setCards(data.card);
    } catch (error) {
      console.error("Error fetching cards:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header fetch={fetchCards} cards={cards} />
      <main className="flex-grow">
        <Hero />

        <div className="container mx-auto py-16 px-60">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div className="text-red-500">Error: {error}</div>
            ) : (
              cards.map((card, index) => <Card key={index} {...card} />)
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
