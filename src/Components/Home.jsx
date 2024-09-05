import React from "react";
import { useState } from "react";
import Searche from "./Searche";
import Dropdu from "./Dropdu";
// import "./App.css";
import Cardlist from "./Cardlist";

const Home = () => {
  const [query, setQuery] = useState("");
  return (
    <div>
      <main>
        <div className="search-filter-container">
          <Searche setQuery={setQuery} />
          <Dropdu />
        </div>
        <Cardlist query={query} />
      </main>
    </div>
  );
};

export default Home;
