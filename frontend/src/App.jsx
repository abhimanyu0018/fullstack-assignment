import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchResult, setSearchResult] = useState(null);

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

  //to fetch specific card.
  const handleSearch = async (searchTerm) => {
    try {
      setLoading(true);
      // console.log(searchTerm);

      const response = await fetch(
        `http://localhost:8000/api/cards/${searchTerm}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      setSearchResult(data);
    } catch (error) {
      console.error("Error searching for card:", error);
      setError(error.message);
    } finally {
      setLoading(false);
      console.log(searchResult);
    }
  };

  const closePopup = () => {
    setSearchResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header fetch={fetchCards} cards={cards} />
      <main className="flex-grow">
        <Hero onSearch={handleSearch} />

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

        {searchResult && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
              <h2 className="text-2xl font-bold mb-4">
                Title:{"    "}
                {searchResult.card.title}
              </h2>

              <p>
                Description:{"    "}
                {searchResult.card.description}
              </p>
              <button
                onClick={closePopup}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
