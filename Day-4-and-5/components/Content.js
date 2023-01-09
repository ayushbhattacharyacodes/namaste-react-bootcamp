import React from "react";
import { restaurantData } from "./data";
import "./Content.css";

const imageSrc =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="restaurant-card">
      <img
        src={`${imageSrc}/${cloudinaryImageId}`}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <p>{avgRating} out of 5</p>
    </div>
  );
};
const Content = () => {
  return (
    <div className="content">
      {restaurantData?.map((restaurant) => (
        <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
      ))}
    </div>
  );
};

export default Content;
