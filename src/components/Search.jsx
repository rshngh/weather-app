import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { CITYDATA_API_OPTIONS, CITYDATA_API_URL } from "./API";

const Search = ({ handleSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (searchValue) => {
    try {
      const response = await fetch(
        `${CITYDATA_API_URL}&namePrefix=${searchValue}`,
        CITYDATA_API_OPTIONS
      );
      const result = await response.json();

      return {
        options: result?.data?.map((city) => {
          return {
            value: { city },
            label: `${city.name} ${city.countryCode}`,
          };
        }),
      };
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (searchData) => {
    setSearch(searchData);
    handleSearchChange(searchData);
  };

  return (
    <div className="w-1/2 my-10 mx-auto rounded-md">
      <AsyncPaginate
        placeholder="search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleChange}
        loadOptions={loadOptions}
        theme={(theme) => ({
          ...theme,
          borderRadius: 5,
          colors: {
            ...theme.colors,
            primary25: "#f43f5e",
            primary: "#f43f5e",
          },
        })}
      />
    </div>
  );
};

export default Search;
