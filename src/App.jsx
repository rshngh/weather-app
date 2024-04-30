import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import { WeatherContext } from "./components/WeatherContext";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  return (
    <div className="bg-base-200 ">
      {/* Added ContextAPI for easy data flow.  */}
      <WeatherContext.Provider value={{ currentWeather, setCurrentWeather }}>
        <Search />
      </WeatherContext.Provider>

      {/* Passing data directly without context will also work here: 
      <Search currentWeather={currentWeather} setCurrentWeather={setCurrentWeather} />
      */}
      <CurrentWeather weatherData={currentWeather} />
    </div>
  );
}

export default App;
