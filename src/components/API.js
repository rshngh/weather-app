export const CITYDATA_API_URL =
  "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=100000";

export const CITYDATA_API_OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_XRapidAPI_Key,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
