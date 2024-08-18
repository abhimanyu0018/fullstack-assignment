import React from "react";

function Hero() {
  return (
    <>
      <div className="py-16 px-20" style={{ backgroundColor: "#dadbf0" }}>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-8">How can we help?</h1>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-4 pr-12 rounded-md shadow-sm"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
