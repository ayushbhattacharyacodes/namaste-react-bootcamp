// if (data.length === 0) {
//   setIsLoading(false)
//   setFilteredRestaurants(data)
//   // setFilteredRestaurants((prev) => [...prev, ...data]);
// } else {
//   setFilteredRestaurants(data);
// }

import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { DAPI_URL } from "../../constants/constants";
import "./Content.css";
import Shimmer from "../utils/Shimmer";

const filterRestaurant = (restaurants, inputValue) => {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  return filterData;
};

const Content = () => {
  const [inputValue, setInputValue] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getRestaurantData() {
    const response = await fetch(DAPI_URL);
    const data = await response.json();
    setAllRestaurants(data?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(data?.data?.cards[2]?.data?.data?.cards);
  }

  useEffect(() => {
    getRestaurantData();
  }, []);

  const findRestaurant = () => {
    if (inputValue === "") {
      setFilteredRestaurants(allRestaurants);
    } else {
      const data = filterRestaurant(allRestaurants, inputValue);
      setFilteredRestaurants(data);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <div className="content">
      <div className="content-searchbox">
        <input
          className="search-input"
          type="search"
          id="search"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search for restaurants..."
        />
        <button className="search-button" onClick={findRestaurant}>
          Search
        </button>
      </div>
      <div className="content-restaurant_list">
        {allRestaurants?.length === 0 && filteredRestaurants?.length === 0 && (
          <Shimmer />
        )}
        {filteredRestaurants?.length > 0 &&
          filteredRestaurants?.map((restaurant) => (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          ))}
        {filteredRestaurants?.length === 0 && allRestaurants?.length > 0 && (
          <h2 className="error-class">Oops! Couldn't find any restaurants😣</h2>
        )}
      </div>
    </div>
  );
};

export default Content;
