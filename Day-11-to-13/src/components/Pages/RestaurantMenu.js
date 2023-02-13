import { useParams } from "react-router-dom";
import { imageSrc } from "../../constants/constants";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import Shimmer from "../utils/Shimmer";
import "./RestaurantMenu.css";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const data = useRestaurantMenu(id)

  return (
    <div className="menu">
      <h2 className="menu-title"> Menu </h2>
      <ul className="menu-ul">
        {data?.map((item) => (
          <li key={item.id}>
            <div>
              {item?.cloudinaryImageId?.length === 0 ? (
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
