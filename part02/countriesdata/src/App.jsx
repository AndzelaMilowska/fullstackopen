import { useState } from "react";
import requests from "./requests";

function App() {
  const [countries, setCountries] = useState(null);
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selected, setSelected] = useState({});

  const [weather, setWeather] = useState(null);

  requests.getAll().then((response) => {
    setCountries(response);
  });

  const handleChange = (event) => {
    setValue(event.target.value);
    search(event.target.value);
  };

  function search(name) {
    if (!countries) return;
    const result = countries.filter((country) => country.name.common.toLowerCase().includes(name.toLowerCase()));
    if (result.length <= 10 && result.length > 1) {
      setSearchResults(result);
      setSelected({});
    } else if (result.length === 1) {
      setSelected(result[0]);
      requests.getWeatherByName(name).then((response) => {
        setWeather(response);
      });
      setSearchResults([]);
    } else {
      setSearchResults([]);
    }
  }
  ///coś juz działa, pogoda pokazuje się na button show
  function showCountry(name) {
    requests.getByName(name).then((response) => {
      setSelected(response);
      requests.getWeatherByName(name).then((response) => {
        setWeather(response);
      });
    });
    setSearchResults([]);
  }

  return (
    <>
      find countries <input value={value} onChange={handleChange} />
      {!searchResults.length && !selected.name && <p>Too many matches, specify another filter</p>}
      {searchResults &&
        searchResults.map((result, id) => (
          <div key={id}>
            <p> {result.name.common}</p>
            <button
              onClick={() => {
                showCountry(result.name.common);
              }}>
              Show
            </button>
          </div>
        ))}
      {selected.name && (
        <div>
          <h1>{selected.name.common}</h1>
          <p>Capital: {selected.capital}</p>
          <p>Area: {selected.area}</p>
          <h3>Languages:</h3>
          <ul>
            {Object.values(selected.languages).map((lang, id) => (
              <li key={id}>{lang}</li>
            ))}
          </ul>

          <img src={selected.flags.png} alt="flag" />
          {weather && (
            <div>
              <h3>Water in {selected.capital}:</h3>
              <p>Temperature {(weather.main.temp - 273.15).toFixed(2)} Celsius</p>
              <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}></img>

              <p>Wind {weather.wind.speed} </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
