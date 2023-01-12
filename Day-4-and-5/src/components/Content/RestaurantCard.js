import { imageSrc } from "../../constants/constants";
import "./RestaurantCard.css";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  console.log(typeof parseInt(avgRating));
  return (
    <div className="restaurant-card">
      <img src={`${imageSrc}/${cloudinaryImageId}`} alt={name} />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      {parseInt(avgRating) > 3.9 ? (
        <p className="rating-green">
          {avgRating} <span>&#9734;</span>
        </p>
      ) : (
        <p className="rating-red">
          {avgRating} <span>&#9734;</span>
        </p>
      )}
    </div>
  );
};

export default RestaurantCard;
