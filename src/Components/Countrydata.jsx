import React, { useEffect, useState } from "react";
import Headar from "./Headar";
// import Countrydata from './Countrydata';

const Countrydata = () => {
  const [Countrydata, setcountryData] = useState({});

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then(([data]) => {
        console.log(data);
        setcountryData({
          name: data.name.common,
          population: data.population,
          region: data.region,
          languages: data.languages.fra,
          flags:data.flags.svg

        });
      });
  }, []);
  return Countrydata === null ? (
    'loading..'
  ) : (
    <div>
      <Headar/>
    <main>
      <div className="country-details-container">
        <span className="back-button">
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img style={{width:"20rem"}} src={Countrydata.flags} alt="" />
          <div className="details-text-container">
            <div className="details-text">
              <h1>{Countrydata.name}</h1>
              <p>
                <b>Native Name: </b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>Population</b>
                <span className="population">{Countrydata.population}</span>
              </p>
              <p>
                <b>Region:</b>
                <span className="region">{Countrydata.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital:</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies:</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages">{Countrydata.languages}</span>
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
};

export default Countrydata;
