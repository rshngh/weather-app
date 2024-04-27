import home from "../../assets/home.svg";

const CurrentWeather = ({ weatherData }) => {
  console.log("weatherData from currentWeather", weatherData);

  return (
    <>
      {!weatherData ? (
        <div className="mt-20 min-h-screen bg-base-200">
          <div className="flex-col ">
            <div className="text-center">
              <h1 className="text-4xl font-bold">Welcome</h1>
              <p className="py-6 ">Please select city to see weather info</p>
            </div>
            <div className="card shrink-0 w-full m-auto max-w-md shadow-2xl bg-base-100">
              <figure className="card-body">
                <img src={home} />
              </figure>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col m-auto">
          <div className="m-auto indicator">
            <span className="indicator-item indicator-top indicator-start badge ">
              currently
            </span>
            <p className="badge badge-accent h-10 my-4 badge-lg min-w-32 font-bold">
              {weatherData.weather[0].description.toUpperCase()}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row md:flex-row m-auto">
            <div className="card w-96 text flex-1">
              <div className="card-body ">
                <h1 className="card-title text-3xl">
                  {weatherData.city} {weatherData.countryCode}
                  <figure>
                    <img
                      src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                      alt="weather"
                    />
                  </figure>
                </h1>
                <h2 className="card-title text-3xl">
                  {Math.round(weatherData.main.temp)}°C
                </h2>
                <p>Feels like: {Math.round(weatherData.main.feels_like)}°C</p>
              </div>
            </div>

            <div className="card w-96 text flex-1">
              <div className="card-body">
                <div className="stats shadow">
                  <div className="stat place-items-center">
                    <div className="stat-title">Min</div>
                    <div className="stat-value">
                      {Math.round(weatherData.main.temp_min)}°C
                    </div>
                  </div>

                  <div className="stat place-items-center">
                    <div className="stat-title">Max</div>
                    <div className="stat-value text-error">
                      {Math.round(weatherData.main.temp_max)}°C
                    </div>
                  </div>
                </div>
                <div className="stats shadow overflow-hidden">
                  <div className="stat">
                    <div className="stat-title">Wind</div>
                    <div className="stat-value">
                      {Math.round(weatherData.wind.speed)}
                    </div>
                    <div className="stat-desc">m/s</div>
                  </div>

                  <div className="stat">
                    <div className="stat-title">Humidity</div>
                    <div className="stat-value">
                      {weatherData.main.humidity}
                    </div>
                    <div className="stat-desc">%</div>
                  </div>

                  <div className="stat">
                    <div className="stat-title">Pressure</div>
                    <div className="stat-value">
                      {weatherData.main.pressure}
                    </div>
                    <div className="stat-desc">hPa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CurrentWeather;
