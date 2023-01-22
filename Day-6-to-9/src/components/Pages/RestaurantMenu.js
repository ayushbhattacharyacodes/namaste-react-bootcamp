import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageSrc, RES_ID } from "../../constants/constants";
import Shimmer from "../utils/Shimmer";
import "./RestaurantMenu.css";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const params = useParams();
  const { id } = params;

  async function getRestaurantsMenu() {
    const response = await fetch(`${RES_ID}${id}`);
    const data = await response.json();
    setRestaurantMenu(Object.values(data?.data?.menu?.items));
    console.log(restaurantMenu);
  }

  useEffect(() => {
    getRestaurantsMenu();
  }, []);
  return (
    <div className="menu">
      <h2 className="menu-title"> Menu </h2>
      <ul className="menu-ul">
        {restaurantMenu?.map((item) => (
          <li key={item.id}>
            <div>
              {item.cloudinaryImageId.length === 0 ? (
                <div>{""}</div>
              ) : (
                <img
                  className="menu-image"
                  src={`${imageSrc}${item.cloudinaryImageId}`}
                  alt={item.name}
                />
              )}
            </div>
            <div>
              <h4>{item.name}</h4>
              {item.isVeg === 0 ? (
                <span className="non-veg">Non-Veg</span>
              ) : (
                <span className="veg">Veg</span>
              )}
              <p>{item.price.toString().split(".")}</p>
            </div>
            <div>
              <button>Add</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
