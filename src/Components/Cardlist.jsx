import React, { useState } from "react";

import CountryCard from "./Card";

export default function Cardlist({ query }) {
  const [countryData, setcountryData] = useState([]);
  const [count, setCout] = useState(0);

  

  useState(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setcountryData(data);
      });
  }, [count]);

  if (countryData.length === 0) {
    <p>no data</p>
  }

  return (
    <>
      <div className="countries-container">
        {countryData
          .filter((countryData) =>
            countryData.name.common.toLowerCase().includes(query)
          )
          .map((countryData) => {
            return (
              <CountryCard
                key={countryData.name.common}
                name={countryData.name.common}
                flag={countryData.flags.png}
                population={countryData.population}
                region={countryData.region}
                capital={countryData.capital?.[0]}
              />
            );
          })}
      </div>
    </>
  );
}
