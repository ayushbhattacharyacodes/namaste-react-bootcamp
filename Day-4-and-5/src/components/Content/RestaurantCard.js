import { imageSrc } from "../../constants/constants";
import "./RestaurantCard.css";

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

  export default RestaurantCard;