import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import data from "../db.json"; // Import the data from the db.json file

const Service = () => {
  const [tours, setTours] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTours, setFilteredTours] = useState([]);

  useEffect(() => {
    // You can optionally set the data directly here
    setTours(data.tours);
    setFilteredTours(data.tours);
  }, []);

  // Function to handle the search query
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredResults = tours.filter((tour) =>
      tour.name.toLowerCase().includes(query)
    );
    setFilteredTours(filteredResults);
  };

  return (
    <div>
      <Navbar />
      {/* Add the search bar */}
      <div className="w-full mx-auto text-center mt-10 mb-10">
        <input
          type="text"
          placeholder="Search Tours"
          value={searchQuery}
          onChange={handleSearch}
          className="w-1/2 p-2 border border-gray-400 rounded"
        />
      </div>

      {/* Rest of your JSX */}
      {/* ... */}

      {/* Use the filteredTours for mapping */}
      <ul className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 self-center px-20">
        {filteredTours.map((tour) => (
          <div key={tour.id}>
            <li className="flex items-center flex-col relative m-4">
              <img
                className="rounded-md shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 cursor-pointer"
                src={tour.image}
                alt={tour.name}
                loading="lazy"
              />
              <h3 className="absolute font-semibold text-xl top-6 z-20 tracking-wider font-signature text-white">
                {tour.name}
              </h3>
            </li>
          </div>
        ))}
      </ul>

      <Footer />
    </div>
  );
};

export default Service;
