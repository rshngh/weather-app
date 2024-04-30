import { WEATHER_API_URL } from "./API";
import axios from "axios";

export const fetchWeatherData = async (searchData) => {
  let { city } = searchData.value;

  const lat = city.latitude;
  const lon = city.longitude;

  //fetching weather data
  if (lat && lon) {
    let response = await axios.get(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`
    );
    const { data } = response;

    //merging API response and prop to return single data object
    const weatherDataObject = {
      city: city.name,
      countryCode: city.countryCode,
      ...data,
    };

    return weatherDataObject;
  }
};
