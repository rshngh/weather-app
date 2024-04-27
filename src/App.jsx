import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import { WEATHER_API_URL } from "./components/API";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleSearchChange = (searchData) => {
    const { city } = searchData.value;
    // console.log(city);
    const lat = city.latitude;
    const lon = city.longitude;

    // console.log(lat, lon);

    if (lat && lon) {
      fetch(
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      )
        .then(async (response) => {
          const weatherResponse = await response.json();
          setCurrentWeather(weatherResponse);
          setCurrentWeather({
            city: city.name,
            countryCode: city.countryCode,
            ...weatherResponse,
          });
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="bg-base-200 ">
      <Search handleSearchChange={handleSearchChange} />
      <CurrentWeather weatherData={currentWeather} />
    </div>
  );
}

export default App;
