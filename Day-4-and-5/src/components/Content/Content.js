import React, { useState } from "react";
import { restaurantData } from "../../constants/data";
import RestaurantCard from "./RestaurantCard";
import "./Content.css";

const Content = () => {
  const [inputValue, setInputValue] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantData);
  const [isEmpty, setIsEmpty] = useState(false);

  const findRestaurant = () => {
    if (inputValue === "") {
      setIsEmpty(false)
      setRestaurants(restaurantData);
    } else {
      const data = restaurants.filter((restaurant) =>
        restaurant.data.name.includes(inputValue)
      );
      console.log(data);
      if (data.length === 0) {
        setIsEmpty(true);
        setRestaurants((prev) => [...prev, ...data]);
      } else {
        setIsEmpty(false);
        setRestaurants(data);
      }
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
        {!isEmpty &&
          restaurants?.map((restaurant) => (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          ))}
        {isEmpty && (
          <h2 className="error-class">Oops! Couldn't find any restaurants😣</h2>
        )}
      </div>
    </div>
  );
};

export default Content;
