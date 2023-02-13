import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import  useRestaurant  from "../../hooks/useRestaurant";
import { DAPI_URL } from "../../constants/constants";
import { Link } from "react-router-dom";
import Shimmer from "../utils/Shimmer";
import { filterRestaurant } from "../../helpers/helper";
import "./Content.css";

const Content = () => {
  const [inputValue, setInputValue] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
   
  async function getRestaurantData() {
    const response = await fetch(DAPI_URL);
    const data = await response.json();
    console.log(data?.data?.cards[2]?.data?.data?.cards);
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
            <Link to={"/restaurants/"+restaurant.data.id} key={restaurant.data.id} style={{textDecoration:'none',color:'#000'}}>
              <RestaurantCard {...restaurant.data} />
            </Link>
          ))}
        {filteredRestaurants?.length === 0 && allRestaurants?.length > 0 && (
          <h2 className="error-class">Oops! Couldn't find any restaurants😣</h2>
        )}
      </div>
    </div>
  );
};

export default Content;
